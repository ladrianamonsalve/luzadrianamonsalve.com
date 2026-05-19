import Link from "next/link";
import { FadeUp } from "@/components/site/FadeUp";
import { site, type Locale } from "@/lib/site";

export function ThankYouPage({ locale }: { locale: Locale }) {
  const home = locale === "es" ? "/" : "/en";
  const services = locale === "es" ? "/servicios" : "/en/services";

  const t =
    locale === "es"
      ? {
          eyebrow: "¡Pago recibido!",
          title: "Gracias por confiar en 3DK Multi Services",
          lead: "Tu pago se procesó correctamente. Recibirás un recibo por email en los próximos minutos. Yo te contacto en menos de 24 horas hábiles para coordinar los siguientes pasos.",
          steps: [
            {
              title: "1. Recibo por email",
              body: "Stripe te envía automáticamente un recibo con el detalle de tu compra. Revísalo en tu inbox (incluido spam la primera vez).",
            },
            {
              title: "2. Te contacto pronto",
              body: "Te escribo personalmente en menos de 24 horas hábiles para coordinar fechas, recopilar documentos o agendar nuestra primera reunión.",
            },
            {
              title: "3. Manos a la obra",
              body: "Empezamos a trabajar en tu caso. Cualquier duda en el camino, escríbeme por WhatsApp.",
            },
          ],
          urgent: "¿Necesitas algo urgente o quieres mandarme documentos ya?",
          whatsappCta: "Escríbeme por WhatsApp",
          backHome: "Volver al inicio",
          servicesLink: "Ver más servicios",
        }
      : {
          eyebrow: "Payment received!",
          title: "Thank you for trusting 3DK Multi Services",
          lead: "Your payment was processed successfully. You'll receive a receipt by email in the next few minutes. I'll personally reach out within 24 business hours to coordinate next steps.",
          steps: [
            {
              title: "1. Email receipt",
              body: "Stripe automatically sends you a receipt with the purchase details. Check your inbox (including spam the first time).",
            },
            {
              title: "2. I'll contact you soon",
              body: "I'll personally reach out within 24 business hours to coordinate dates, gather documents, or schedule our first meeting.",
            },
            {
              title: "3. Let's get to work",
              body: "We'll start working on your case. Any questions along the way, message me on WhatsApp.",
            },
          ],
          urgent: "Need something urgent or want to send documents already?",
          whatsappCta: "Message me on WhatsApp",
          backHome: "Back to home",
          servicesLink: "See more services",
        };

  const whatsappUrl = site.whatsapp
    ? `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
        locale === "es"
          ? "Hola Luz, acabo de hacer un pago en tu sitio web y quería avisarte."
          : "Hi Luz, I just made a payment on your website and wanted to let you know.",
      )}`
    : null;

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 grad-soft" aria-hidden />
        <div className="container-page relative py-14 sm:py-20">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-success-500/15 text-success-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-9 w-9"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm4.768-13.512a1 1 0 10-1.536-1.282l-4.318 5.181-2.207-2.206a1 1 0 00-1.414 1.414l3 3a1 1 0 001.475-.066l5-6z"
                  />
                </svg>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-success-500">
                {t.eyebrow}
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                {t.title}
              </h1>
              <p className="mt-5 text-lg leading-7 text-ink-500">{t.lead}</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          <div className="grid gap-5 sm:grid-cols-3">
            {t.steps.map((step, i) => (
              <FadeUp key={step.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-ink-200/70 bg-ink-50 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-700">
                    {step.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {whatsappUrl && (
            <FadeUp delay={0.2}>
              <div className="mt-10 rounded-3xl border-l-4 border-[#25D366] bg-[#25D366]/5 p-6 sm:p-8">
                <p className="text-base text-ink-700">{t.urgent}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1FAE54]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.whatsappCta}
                </a>
              </div>
            </FadeUp>
          )}

          <FadeUp delay={0.25}>
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href={home}
                className="font-semibold text-brand-700 hover:underline"
              >
                ← {t.backHome}
              </Link>
              <span className="text-ink-300">·</span>
              <Link
                href={services}
                className="font-semibold text-brand-700 hover:underline"
              >
                {t.servicesLink} →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
