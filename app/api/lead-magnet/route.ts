import { NextResponse } from "next/server";
import { leadMagnets, site } from "@/lib/site";
import { pushContactToHubSpot } from "@/lib/hubspot";

type Payload = {
  email?: string;
  name?: string;
  magnet?: string;
  locale?: "es" | "en";
};

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(opts: {
  name: string;
  pdfUrl: string;
  pdfReady: boolean;
  locale: "es" | "en";
  title: string;
}) {
  const { name, pdfUrl, pdfReady, locale, title } = opts;

  const greeting =
    locale === "es"
      ? name
        ? `Hola ${esc(name)},`
        : "Hola,"
      : name
        ? `Hi ${esc(name)},`
        : "Hi,";

  const body =
    locale === "es"
      ? pdfReady
        ? `
        <p>¡Gracias por descargar mi guía <strong>"${esc(title)}"</strong>! Aquí está tu PDF:</p>
        <p style="margin: 28px 0;">
          <a href="${pdfUrl}" style="display: inline-block; background: #1e5fbe; color: #fff; padding: 14px 24px; border-radius: 999px; text-decoration: none; font-weight: 600;">📥 Descargar PDF</a>
        </p>
        <p>En estas 10 páginas vas a aprender los 5 pasos prácticos para separar tu cuenta personal de la del negocio — uno de los errores más caros que cometen los pequeños negocios y self-employed.</p>
        `
        : `
        <p>¡Gracias por tu interés en mi guía <strong>"${esc(title)}"</strong>!</p>
        <p>El PDF está en finalización. Apenas esté listo (en los próximos días), te llegará automáticamente a este mismo email.</p>
        `
      : pdfReady
        ? `
        <p>Thanks for downloading my guide <strong>"${esc(title)}"</strong>! Here's your PDF:</p>
        <p style="margin: 28px 0;">
          <a href="${pdfUrl}" style="display: inline-block; background: #1e5fbe; color: #fff; padding: 14px 24px; border-radius: 999px; text-decoration: none; font-weight: 600;">📥 Download PDF</a>
        </p>
        <p>In these 10 pages you'll learn the 5 practical steps to separate your personal and business accounts — one of the most expensive mistakes small businesses and self-employed make.</p>
        `
        : `
        <p>Thanks for your interest in my guide <strong>"${esc(title)}"</strong>!</p>
        <p>The PDF is being finalized. As soon as it's ready (in the next few days), it will arrive automatically in this email.</p>
        `;

  const tipAndCta =
    locale === "es"
      ? `
        <p style="margin-top: 24px;"><strong>Tip antes de leerla:</strong> ten a mano una pluma y un papel. Yo siempre recomiendo subrayar mientras lees.</p>
        <p>Si después de leerla tienes preguntas sobre TU situación específica, escríbeme directamente por WhatsApp al <a href="https://wa.me/16785990143" style="color: #1e5fbe;">+1 678-599-0143</a> o reserva una <a href="${site.url}/precios" style="color: #1e5fbe;">consulta de 30 minutos por $49.99</a> (acreditable 100% si decides contratar cualquier plan después).</p>
        <p>Estoy aquí para ayudarte.</p>
        `
      : `
        <p style="margin-top: 24px;"><strong>Tip before you read it:</strong> have a pen and paper handy. I always recommend underlining as you read.</p>
        <p>If after reading you have questions about YOUR specific situation, message me directly on WhatsApp at <a href="https://wa.me/16785990143" style="color: #1e5fbe;">+1 678-599-0143</a> or book a <a href="${site.url}/en/pricing" style="color: #1e5fbe;">30-minute consultation for $49.99</a> (100% credited if you sign up for any plan later).</p>
        <p>I'm here to help.</p>
        `;

  const signature =
    locale === "es"
      ? `
        <p style="margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
          <strong>Luz Adriana Monsalve</strong><br/>
          3DK Multi Services<br/>
          IRS AFSP Certificada · QuickBooks Certified · Notary Public<br/>
          <a href="${site.url}" style="color: #1e5fbe;">${site.domain}</a>
        </p>
        `
      : `
        <p style="margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
          <strong>Luz Adriana Monsalve</strong><br/>
          3DK Multi Services<br/>
          IRS AFSP Certified · QuickBooks Certified · Notary Public<br/>
          <a href="${site.url}" style="color: #1e5fbe;">${site.domain}</a>
        </p>
        `;

  return `<!doctype html>
<html><body style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #0f172a; line-height: 1.6;">
  <div style="border-left: 4px solid #1e5fbe; padding-left: 16px; margin-bottom: 24px;">
    <div style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #1849a1; font-weight: 600;">3DK Multi Services</div>
    <h1 style="font-size: 22px; margin: 6px 0 0;">${locale === "es" ? "Tu Guía Gratis" : "Your Free Guide"}</h1>
  </div>
  ${greeting === "Hola," || greeting === "Hi," ? "" : `<p>${greeting}</p>`}
  ${body}
  ${tipAndCta}
  ${signature}
</body></html>`;
}

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = (data.email ?? "").trim().toLowerCase();
  const name = (data.name ?? "").trim();
  const locale = data.locale === "en" ? "en" : "es";

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Email is required" },
      { status: 400 },
    );
  }

  // Look up the magnet by slug (default to the only one we have for now)
  const magnetEntry = Object.values(leadMagnets).find(
    (m) => m.slug === data.magnet,
  );
  if (!magnetEntry) {
    return NextResponse.json({ error: "Unknown magnet" }, { status: 400 });
  }

  const title = locale === "es" ? magnetEntry.titleEs : magnetEntry.titleEn;
  const pdfUrl = `${site.url}${magnetEntry.pdfPath}`;

  // Push to HubSpot (parallel with email send, errors swallowed)
  const messageTag =
    locale === "es"
      ? `[${magnetEntry.hubspotTag}] ${new Date().toISOString().split("T")[0]}`
      : `[${magnetEntry.hubspotTag}] ${new Date().toISOString().split("T")[0]}`;

  const hubspotPromise = pushContactToHubSpot({
    email,
    name,
    locale,
    service: magnetEntry.hubspotTag,
    message: messageTag,
  }).catch((err) => {
    console.error("[lead-magnet] HubSpot push threw:", err);
    return false;
  });

  // Send the email via Resend
  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
  const replyTo = process.env.CONTACT_TO_EMAIL || site.email;

  if (!resendKey) {
    console.log("[lead-magnet] RESEND_API_KEY missing — skipping email", { email, name });
    await hubspotPromise;
    return NextResponse.json({ ok: true, mode: "no-email" });
  }

  const subject =
    locale === "es"
      ? `📚 Tu Guía Gratis: ${title}`
      : `📚 Your Free Guide: ${title}`;

  try {
    const [emailRes, hubspotOk] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `3DK Multi Services <${from}>`,
          to: [email],
          reply_to: replyTo,
          subject,
          html: buildEmailHtml({
            name,
            pdfUrl,
            pdfReady: magnetEntry.ready,
            locale,
            title,
          }),
        }),
      }),
      hubspotPromise,
    ]);

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error("[lead-magnet] Resend error:", emailRes.status, errText.slice(0, 500));
      // Even if email failed, HubSpot may have captured the lead.
      // Return ok so the user still sees the thanks page — they have the contact.
      return NextResponse.json({
        ok: true,
        mode: hubspotOk ? "hubspot-only" : "captured-only",
      });
    }

    return NextResponse.json({ ok: true, hubspot: hubspotOk });
  } catch (err) {
    console.error("[lead-magnet] send error:", err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
