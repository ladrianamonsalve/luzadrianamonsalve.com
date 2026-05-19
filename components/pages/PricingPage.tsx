import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { PaymentButton } from "@/components/site/PaymentButton";
import { ContactCTA } from "@/components/site/ContactCTA";
import { JsonLd } from "@/components/site/JsonLd";
import { FadeUp } from "@/components/site/FadeUp";
import { breadcrumbSchema } from "@/lib/schemas";
import { site, type Locale, type StripeLinkKey } from "@/lib/site";

type Plan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  linkKey: StripeLinkKey;
  recurring?: boolean;
  highlighted?: boolean;
  href?: string; // optional internal link to service detail page
};

type ServiceBlock = {
  title: string;
  eyebrow: string;
  lead: string;
  plans: Plan[];
  whatsappFallback: string;
};

export function PricingPage({ locale }: { locale: Locale }) {
  const url = locale === "es" ? "/precios" : "/en/pricing";

  const t =
    locale === "es"
      ? {
          title: "Precios y planes",
          lead: "Servicios con precios claros. Sin sorpresas, sin paquetes confusos. Si tu caso es complejo, escríbeme y armamos algo a la medida.",
          customQuoteTitle: "¿Necesitas algo a la medida?",
          customQuoteBody:
            "Algunos casos requieren cotización personalizada — por ejemplo, declaraciones de impuestos complejas, bookkeeping con muchos proyectos, o servicios combinados. Escríbeme y vemos.",
          customQuoteCta: "Solicitar cotización",
          processingNote:
            "Pagos procesados de forma segura por Stripe. Aceptamos tarjeta de crédito, débito y transferencia bancaria (ACH).",
          refundsNote:
            "Al realizar un pago aceptas nuestra política de reembolsos: los servicios únicos no son reembolsables una vez iniciado el trabajo; las suscripciones se pueden cancelar en cualquier momento (sin reembolso parcial del mes actual).",
          refundsLink: "Ver política completa",
          whatsappLabel: "Hablar por WhatsApp",
        }
      : {
          title: "Pricing & plans",
          lead: "Services with clear pricing. No surprises, no confusing bundles. If your case is complex, send me a message and we build something custom.",
          customQuoteTitle: "Need something custom?",
          customQuoteBody:
            "Some cases need a custom quote — for example, complex tax returns, bookkeeping with many active projects, or combined services. Send me a message.",
          customQuoteCta: "Request a quote",
          processingNote:
            "Payments processed securely by Stripe. We accept credit card, debit card and bank transfer (ACH).",
          refundsNote:
            "By making a payment you accept our refund policy: one-time services are non-refundable once work has started; subscriptions can be cancelled anytime (no partial refund for the current month).",
          refundsLink: "Read full policy",
          whatsappLabel: "Chat on WhatsApp",
        };

  const services: ServiceBlock[] =
    locale === "es"
      ? [
          {
            title: "Bookkeeping Mensual",
            eyebrow: "Suscripción · Servicio recurrente",
            lead: "Tus libros al día todos los meses. Categorización por proyecto, reconciliación bancaria, reportes claros. Certificada en QuickBooks.",
            whatsappFallback:
              "¿Tienes más de 300 transacciones/mes o varias entidades?",
            plans: [
              {
                name: "Plan Básico",
                price: "$275",
                cadence: "/ mes",
                description:
                  "Hasta 50 transacciones mensuales. Una sola cuenta bancaria.",
                features: [
                  "Categorización mensual",
                  "Reconciliación bancaria",
                  "P&L y Balance Sheet",
                  "Soporte por email",
                ],
                linkKey: "bookkeepingBasic",
                recurring: true,
              },
              {
                name: "Plan Estándar",
                price: "$425",
                cadence: "/ mes",
                description:
                  "Hasta 150 transacciones. Múltiples cuentas. Job costing para 5 proyectos.",
                features: [
                  "Todo lo del Plan Básico",
                  "Hasta 5 proyectos / job costing",
                  "Cuentas por pagar y cobrar",
                  "Soporte por WhatsApp",
                ],
                linkKey: "bookkeepingStandard",
                recurring: true,
                highlighted: true,
              },
              {
                name: "Plan Premium",
                price: "$695",
                cadence: "/ mes",
                description:
                  "Hasta 300 transacciones. Hasta 15 proyectos. Reportes ejecutivos.",
                features: [
                  "Todo lo del Plan Estándar",
                  "Hasta 15 proyectos",
                  "Cash flow proyectado",
                  "Reunión mensual de revisión",
                ],
                linkKey: "bookkeepingPremium",
                recurring: true,
              },
            ],
          },
          {
            title: "G702, G703 y Lien Waivers",
            eyebrow: "Construcción · AIA",
            lead: "Aplicaciones de pago AIA preparadas profesionalmente con notarización incluida. Cobra a tiempo sin pelearte con el general contractor.",
            whatsappFallback:
              "¿Tienes varios proyectos o un schedule of values complejo?",
            plans: [
              {
                name: "Por Aplicación",
                price: "$35",
                cadence: "una sola vez",
                description:
                  "Una G702 + G703 lista para firmar y enviar al GC. Notarización incluida en el precio.",
                features: [
                  "G702 y G703 completos",
                  "Retainage y change orders",
                  "Notarización del documento",
                  "Entrega en PDF firmado",
                ],
                linkKey: "g702Single",
              },
              {
                name: "Mensual por Proyecto",
                price: "$99",
                cadence: "/ mes / proyecto",
                description:
                  "Una aplicación cada mes durante toda la duración de la obra. Ahorras vs aplicación individual.",
                features: [
                  "1 aplicación mensual",
                  "Notarización incluida",
                  "Change orders integrados",
                  "Coordinación por WhatsApp",
                ],
                linkKey: "g702Monthly",
                recurring: true,
                highlighted: true,
              },
              {
                name: "Lien Waiver",
                price: "$20",
                cadence: "por documento",
                description:
                  "Lien waiver (parcial o final, condicional o incondicional) preparado y notarizado.",
                features: [
                  "Revisión del documento",
                  "Notarización incluida",
                  "Parcial o final",
                  "PDF firmado y sellado",
                ],
                linkKey: "lienWaiver",
              },
            ],
          },
          {
            title: "Notaría Especializada",
            eyebrow: "Especialidad bilingüe",
            lead: "Documentos legales notarizados en español o inglés. Servicio único para la comunidad hispana — pocos notarios pueden manejar documentos bilingües profesionalmente.",
            whatsappFallback:
              "¿Necesitas notarización fuera de horario, móvil, u otro documento legal?",
            plans: [
              {
                name: "Poder Notarial Bilingüe",
                price: "$135",
                cadence: "una sola vez",
                description:
                  "Notarización profesional de Power of Attorney (POA) en español + inglés. Servicio especializado raro de encontrar.",
                features: [
                  "Documento bilingüe ES/EN",
                  "Asistencia para entender el documento",
                  "Verificación de identidad de partes",
                  "Sello y journal registrado",
                ],
                linkKey: "poaBilingual",
                highlighted: true,
              },
            ],
          },
        ]
      : [
          // Spanish-only for now — we'll mirror in EN once prices are finalized
        ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          {
            name: locale === "es" ? "Inicio" : "Home",
            url: locale === "es" ? "/" : "/en",
          },
          { name: t.title, url },
        ])}
      />

      <PageHeader title={t.title} lead={t.lead} />

      {services.map((service) => (
        <section
          key={service.title}
          className="section-pad odd:bg-white even:bg-ink-50"
        >
          <div className="container-page">
            <FadeUp>
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  {service.eyebrow}
                </p>
                <h2 className="mt-3 h-display text-3xl sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-ink-500">
                  {service.lead}
                </p>
              </div>
            </FadeUp>

            <div
              className={`mt-10 grid gap-5 ${
                service.plans.length === 2
                  ? "sm:grid-cols-2"
                  : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {service.plans.map((plan, i) => (
                <FadeUp key={plan.name} delay={i * 0.05}>
                  <div
                    className={`flex h-full flex-col rounded-2xl border p-6 transition ${
                      plan.highlighted
                        ? "border-brand-400 bg-white shadow-xl shadow-brand-900/10 ring-1 ring-brand-100"
                        : "border-ink-200/70 bg-white"
                    }`}
                  >
                    {plan.highlighted && (
                      <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                        ★ {locale === "es" ? "Más popular" : "Most popular"}
                      </span>
                    )}
                    <h3 className="text-lg font-semibold text-ink-900">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-500">
                      {plan.description}
                    </p>

                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="text-3xl font-semibold text-ink-900">
                        {plan.price}
                      </span>
                      <span className="text-sm text-ink-500">
                        {plan.cadence}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2 text-sm text-ink-700">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <svg
                            className="mt-0.5 h-4 w-4 flex-none text-brand-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.09l6.79-6.8a1 1 0 011.414 0z"
                            />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7">
                      <PaymentButton
                        linkKey={plan.linkKey}
                        locale={locale}
                        recurring={plan.recurring}
                        variant={plan.highlighted ? "primary" : "secondary"}
                        className="w-full"
                      />
                      <p className="mt-2 text-center text-[10px] leading-4 text-ink-500">
                        {locale === "es"
                          ? "Al pagar aceptas la política de no reembolso."
                          : "By paying you accept the no-refund policy."}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {service.whatsappFallback && site.whatsapp && (
              <FadeUp delay={0.2}>
                <p className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink-500">
                  <span>{service.whatsappFallback}</span>
                  <a
                    href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                      locale === "es"
                        ? `Hola Luz, me interesa ${service.title} pero tengo un caso especial.`
                        : `Hi Luz, I'm interested in ${service.title} but I have a special case.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-[#1FAE54] hover:underline"
                  >
                    {t.whatsappLabel}
                    <span aria-hidden>→</span>
                  </a>
                </p>
              </FadeUp>
            )}
          </div>
        </section>
      ))}

      <section className="section-pad bg-white">
        <div className="container-page">
          <FadeUp>
            <div className="rounded-3xl border-l-4 border-brand-600 bg-brand-50/50 p-6 sm:p-8">
              <h3 className="h-display text-2xl">{t.customQuoteTitle}</h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-ink-700">
                {t.customQuoteBody}
              </p>
              <Link
                href={locale === "es" ? "/contacto" : "/en/contact"}
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                {t.customQuoteCta}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-ink-50 py-8">
        <div className="container-page space-y-3">
          <p className="text-xs leading-5 text-ink-500">{t.processingNote}</p>
          <p className="text-xs leading-5 text-ink-500">
            {t.refundsNote}{" "}
            <Link
              href={locale === "es" ? "/terminos#reembolsos" : "/en/terms#refunds"}
              className="font-semibold text-brand-700 underline-offset-2 hover:underline"
            >
              {t.refundsLink} →
            </Link>
          </p>
        </div>
      </section>

      <ContactCTA locale={locale} />
    </>
  );
}
