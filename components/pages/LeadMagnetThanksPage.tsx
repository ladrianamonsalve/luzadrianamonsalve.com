import Link from "next/link";
import { FadeUp } from "@/components/site/FadeUp";
import { leadMagnets, site, type Locale } from "@/lib/site";

export function LeadMagnetThanksPage({
  magnetSlug,
  locale,
}: {
  magnetSlug: keyof typeof leadMagnets;
  locale: Locale;
}) {
  const magnet = leadMagnets[magnetSlug];

  const t =
    locale === "es"
      ? {
          title: "¡Tu guía está lista!",
          subtitle:
            magnet.ready
              ? "Descarga tu PDF aquí abajo, o también te lo mandamos por email."
              : "Tu PDF se está finalizando. Te mandé un email — apenas esté listo recibirás el link de descarga.",
          download: "📥 Descargar PDF",
          emailHint: "Si no ves el email en 5 minutos, revisa tu carpeta de spam.",
          nextStepsTitle: "¿Qué sigue?",
          nextStepsBody:
            "Lee la guía con calma — son 10 páginas que toman 20 minutos. Cuando termines, si quieres que veamos TU situación específica (tu cuenta, tus números, tu plan), agenda una consulta:",
          consultCta: "Agendar consulta de 30 min — $49.99",
          consultNote:
            "Acreditable 100% si después contratas cualquier plan mensual.",
          whatsappCta: "O escríbeme directo por WhatsApp",
          back: "← Volver al sitio",
        }
      : {
          title: "Your guide is ready!",
          subtitle:
            magnet.ready
              ? "Download your PDF below — we also emailed you a copy."
              : "Your PDF is being finalized. I emailed you — as soon as it's ready, you'll get the download link.",
          download: "📥 Download PDF",
          emailHint: "If you don't see the email in 5 minutes, check your spam folder.",
          nextStepsTitle: "What's next?",
          nextStepsBody:
            "Read the guide carefully — it's 10 pages that take 20 minutes. Once done, if you want me to look at YOUR specific situation (your accounts, numbers, plan), book a consultation:",
          consultCta: "Book 30-min consultation — $49.99",
          consultNote:
            "100% credited if you sign up for any monthly plan later.",
          whatsappCta: "Or message me directly on WhatsApp",
          back: "← Back to site",
        };

  const homeUrl = locale === "es" ? "/" : "/en";
  const pricingUrl = locale === "es" ? "/precios" : "/en/pricing";
  const wa = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 grad-soft" aria-hidden />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success-500/10">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-10 w-10 text-success-500"
                aria-hidden
              >
                <path d="M9 16.2l-3.5-3.5a1 1 0 10-1.42 1.42l4.21 4.21a1 1 0 001.42 0L20.7 7.64a1 1 0 10-1.42-1.42L9 16.2z" />
              </svg>
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-ink-700 sm:text-lg">
              {t.subtitle}
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            {magnet.ready && (
              <a
                href={magnet.pdfPath}
                download
                className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-600 px-8 text-base font-semibold text-white shadow-lg transition hover:bg-brand-700"
              >
                {t.download}
              </a>
            )}
            <p className="mt-4 text-sm text-ink-500">{t.emailHint}</p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-12 rounded-2xl border border-ink-200/70 bg-ink-50 p-6 sm:p-8 text-left">
              <h2 className="text-xl font-semibold text-ink-900">
                🎯 {t.nextStepsTitle}
              </h2>
              <p className="mt-3 text-base leading-7 text-ink-700">
                {t.nextStepsBody}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={pricingUrl}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
                >
                  {t.consultCta}
                </Link>
                <span className="text-xs text-ink-500">{t.consultNote}</span>
              </div>
              <div className="mt-4">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1FAE54] hover:underline"
                >
                  💬 {t.whatsappCta}
                </a>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <Link
              href={homeUrl}
              className="mt-8 inline-block text-sm font-semibold text-brand-700 hover:underline"
            >
              {t.back}
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
