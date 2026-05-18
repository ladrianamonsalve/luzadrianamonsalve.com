import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  locale?: "es" | "en";
};

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(body: Required<Payload>) {
  const labels = body.locale === "en"
    ? { name: "Name", email: "Email", phone: "Phone", company: "Company", service: "Service", message: "Message" }
    : { name: "Nombre", email: "Email", phone: "Teléfono", company: "Empresa", service: "Servicio", message: "Mensaje" };

  return `<!doctype html>
<html><body style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #0f172a;">
  <div style="border-left: 4px solid #1e5fbe; padding-left: 16px; margin-bottom: 24px;">
    <div style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #1849a1; font-weight: 600;">3DK Multi Services</div>
    <h1 style="font-size: 20px; margin: 6px 0 0;">${body.locale === "en" ? "New contact request" : "Nuevo mensaje de contacto"}</h1>
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <tr><td style="padding: 8px 0; color: #64748b; width: 120px;">${labels.name}</td><td style="padding: 8px 0; font-weight: 600;">${esc(body.name)}</td></tr>
    <tr><td style="padding: 8px 0; color: #64748b;">${labels.email}</td><td style="padding: 8px 0;"><a href="mailto:${esc(body.email)}" style="color: #1e5fbe;">${esc(body.email)}</a></td></tr>
    <tr><td style="padding: 8px 0; color: #64748b;">${labels.phone}</td><td style="padding: 8px 0;">${esc(body.phone) || "—"}</td></tr>
    <tr><td style="padding: 8px 0; color: #64748b;">${labels.company}</td><td style="padding: 8px 0;">${esc(body.company) || "—"}</td></tr>
    <tr><td style="padding: 8px 0; color: #64748b;">${labels.service}</td><td style="padding: 8px 0; font-weight: 600;">${esc(body.service) || "—"}</td></tr>
  </table>
  <div style="margin-top: 24px; padding: 16px; background: #f8fafc; border-radius: 8px;">
    <div style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">${labels.message}</div>
    <div style="margin-top: 8px; white-space: pre-wrap; line-height: 1.6;">${esc(body.message)}</div>
  </div>
  <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">Sent from luzadrianamonsalve.com · ${new Date().toISOString()}</p>
</body></html>`;
}

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const required: (keyof Payload)[] = ["name", "email", "service", "message"];
  for (const k of required) {
    if (!data[k] || String(data[k]).trim().length === 0) {
      return NextResponse.json(
        { error: `Missing field: ${k}` },
        { status: 400 },
      );
    }
  }

  const payload = {
    name: data.name ?? "",
    email: data.email ?? "",
    phone: data.phone ?? "",
    company: data.company ?? "",
    service: data.service ?? "",
    message: data.message ?? "",
    locale: data.locale ?? "es",
  } satisfies Required<Payload>;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey) {
    console.log("[contact] RESEND_API_KEY missing — logging payload only", payload);
    return NextResponse.json({ ok: true, mode: "dev-log" });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `3DK Multi Services <${from}>`,
        to: [to],
        reply_to: payload.email,
        subject: `[3DK] ${payload.service} — ${payload.name}`,
        html: buildHtml(payload),
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[contact] Resend error:", res.status, errText);
      return NextResponse.json(
        { error: "Email service failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send error", err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
