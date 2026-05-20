import { Fragment } from "react";
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
  priceSubtitle?: string; // optional sub-line under price (daily cost, "GRATIS con plan", etc.)
  description: string;
  features: string[];
  linkKey: StripeLinkKey;
  recurring?: boolean;
  highlighted?: boolean;
  href?: string;
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
          lead: "¿No sabes cuál plan te conviene? Empieza con una consulta de 30 min o 1 hora — el costo se acredita 100% si después contratas cualquier paquete mensual. Sin compromisos, sin sorpresas.",
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
            title: "🎯 Empieza Aquí — Consulta Inicial",
            eyebrow: "Primer paso · Crédito 100% si contratas un plan",
            lead: "Antes de elegir un paquete, hablemos. En la consulta entiendo tu situación, te explico qué te conviene, y respondo todas tus preguntas. Si después decides contratar un plan, el costo de la consulta se acredita 100% a tu primer pago.",
            whatsappFallback:
              "¿Prefieres una pregunta rápida por WhatsApp antes de agendar?",
            plans: [
              {
                name: "Consulta 30 minutos",
                price: "$49.99",
                cadence: "una sola vez",
                description:
                  "30 minutos de consulta personalizada por video o teléfono. Ideal si estás considerando Bookkeeping Plan Básico o Estándar.",
                features: [
                  "30 min por Zoom o llamada",
                  "Bilingüe ES/EN",
                  "Acredita $49.99 al Plan Básico o Estándar",
                  "Agenda confirmada por WhatsApp",
                ],
                linkKey: "consult30",
              },
              {
                name: "Consulta 1 hora",
                price: "$99.99",
                cadence: "una sola vez",
                description:
                  "Análisis profundo de tu situación financiera y fiscal. Recomendada si consideras el Plan Premium o tienes un negocio complejo.",
                features: [
                  "1 hora por Zoom o llamada",
                  "Análisis detallado de tu caso",
                  "Acredita $99.99 al Plan Premium",
                  "Bilingüe ES/EN",
                ],
                linkKey: "consult60",
                highlighted: true,
              },
            ],
          },
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
                priceSubtitle: "≈ $9 al día",
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
                priceSubtitle: "≈ $14 al día — menos que un almuerzo",
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
                priceSubtitle: "≈ $23 al día — todo incluido",
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
            title: "QuickBooks Setup",
            eyebrow: "Configuración profesional · GRATIS con plan mensual",
            lead: "Configuramos tu QuickBooks desde cero con Chart of Accounts customizado para tu nicho, cuentas conectadas, entrenamiento personalizado y soporte. Si contratas cualquier plan mensual de Bookkeeping, el QB Setup que te toque sale GRATIS.",
            whatsappFallback:
              "¿No sabes cuál tier de Setup te conviene? Hablemos por WhatsApp.",
            plans: [
              {
                name: "Setup Starter",
                price: "$375",
                cadence: "una sola vez",
                priceSubtitle: "🎁 GRATIS con cualquier plan de Bookkeeping",
                description:
                  "Para contractors solos sin experiencia previa con QB. GRATIS si contratas Bookkeeping Básico, Estándar o Premium.",
                features: [
                  "Chart of Accounts customizado",
                  "1 banco + 1 tarjeta conectada",
                  "1 hora de entrenamiento",
                  "Soporte por email 30 días",
                ],
                linkKey: "qbSetupStarter",
              },
              {
                name: "Setup Small Business",
                price: "$725",
                cadence: "una sola vez",
                priceSubtitle: "🎁 GRATIS con plan Estándar o Premium",
                description:
                  "Para empresas con 2-3 cuentas, 50-100 trans/mes. GRATIS si contratas Bookkeeping Estándar ($425) o Premium ($695).",
                features: [
                  "Hasta 3 bancos + 2 tarjetas",
                  "2 horas de entrenamiento (2 sesiones)",
                  "2 check-ins quincenales",
                  "Soporte por email 60 días",
                ],
                linkKey: "qbSetupSmall",
                highlighted: true,
              },
              {
                name: "Setup Full Business",
                price: "$1,395",
                cadence: "una sola vez",
                priceSubtitle: "🎁 GRATIS con plan Premium",
                description:
                  "Para empresas con 100+ trans/mes, múltiples cuentas, empleados. GRATIS si contratas Bookkeeping Premium ($695/mes).",
                features: [
                  "Cuentas bancarias ilimitadas",
                  "Job costing / class tracking",
                  "3 horas de entrenamiento",
                  "4 check-ins quincenales + 90 días soporte",
                ],
                linkKey: "qbSetupFull",
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
                name: "Plan 3 Proyectos",
                price: "$99",
                cadence: "/ mes",
                description:
                  "Hasta 3 aplicaciones G702/G703 al mes para contratistas con varios proyectos activos. Ahorras vs pagar por aplicación.",
                features: [
                  "Hasta 3 aplicaciones / mes",
                  "Notarización incluida",
                  "Change orders integrados",
                  "Apps adicionales: $35 c/u",
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
            title: "Servicios Bilingües Especializados",
            eyebrow: "Especialidad ES / EN",
            lead: "Documentos legales, traducciones certificadas y trámites de ITIN en español + inglés. Servicios únicos para la comunidad hispana — pocos profesionales bilingües pueden manejarlos.",
            whatsappFallback:
              "¿Necesitas otro tipo de documento bilingüe? (custodia, will, affidavit)",
            plans: [
              {
                name: "ITIN — Solicitud Completa",
                price: "$300",
                cadence: "una sola vez",
                description:
                  "Solicitud completa de ITIN para personas sin SSN. Yo preparo tu Form W-7 y coordino la verificación con un Certifying Acceptance Agent (CAA) de mi red profesional para que conserves tu pasaporte original.",
                features: [
                  "Preparación profesional del Form W-7",
                  "Coordinación con CAA del IRS de mi red",
                  "Conservas tu pasaporte original",
                  "Tax return acompañante se cotiza aparte",
                ],
                linkKey: "itinComplete",
                highlighted: true,
              },
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
              },
              {
                name: "Traducción Notarizada",
                price: "$145",
                cadence: "por documento",
                description:
                  "Traducción certificada de documentos del español al inglés (o viceversa) + notarización del affidavit en un solo servicio. Ideal para inmigración, corte, escuelas.",
                features: [
                  "Traducción profesional ES ↔ EN",
                  "Certificación + notarización incluidas",
                  "Birth/marriage cert, diplomas, transcripts",
                  "Lista para presentar en USCIS, corte, etc.",
                ],
                linkKey: "translation",
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

      {/* Motivational banner — soft pre-funnel nudge to the consult */}
      <section className="bg-white pb-6 pt-2 sm:pb-8">
        <div className="container-page">
          <FadeUp>
            <div className="relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-brand-50/40 p-6 sm:p-8">
              <div
                className="absolute -top-12 right-0 h-32 w-32 rounded-full bg-brand-300/20 blur-2xl"
                aria-hidden
              />
              <div className="relative grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                    💡 ¿Antes de decidir?
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-ink-900 sm:text-2xl">
                    Hablemos 30 minutos por $49.99 — acreditable 100%
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-ink-700">
                    Te ayudo a entender qué plan te conviene y por qué.
                    Si después contratas, el costo de la consulta se acredita
                    a tu primer pago. Sin presión, sin cargo si no contratas.
                  </p>
                </div>
                <a
                  href="#consulta"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 sm:self-center"
                >
                  Reservar consulta →
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {services.map((service, idx) => (
        <Fragment key={service.title}>
        <section
          id={idx === 0 ? "consulta" : undefined}
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

                    <div className="mt-5">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-semibold text-ink-900">
                          {plan.price}
                        </span>
                        <span className="text-sm text-ink-500">
                          {plan.cadence}
                        </span>
                      </div>
                      {plan.priceSubtitle && (
                        <p className="mt-1 text-xs font-medium text-brand-700">
                          {plan.priceSubtitle}
                        </p>
                      )}
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

        {/* ROI / Value section after Bookkeeping (idx 1) — reinforces why it's worth it */}
        {idx === 1 && (
          <section className="section-pad bg-ink-900 text-white">
            <div className="container-page">
              <FadeUp>
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">
                    ¿Por qué vale la pena invertir?
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Mis clientes recuperan mi tarifa en 2 a 4 meses
                  </h2>
                  <p className="mt-4 text-base leading-7 text-ink-300">
                    Un buen sistema contable no es un gasto — es un{" "}
                    <span className="font-semibold text-white">
                      multiplicador
                    </span>{" "}
                    de tu negocio. Mira los números reales.
                  </p>
                </div>
              </FadeUp>

              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <FadeUp delay={0.05}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="text-4xl">💰</div>
                    <p className="mt-4 text-3xl font-semibold text-brand-300">
                      $2,000 – $8,000
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-ink-300">
                      al año
                    </p>
                    <h3 className="mt-4 text-base font-semibold text-white">
                      Deducciones que recuperas
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-300">
                      Mileage, herramientas, materiales, home office,
                      seguros, software, comidas con clientes. La mayoría
                      de contratistas pierden esto al año por no llevar
                      bien los libros.
                    </p>
                  </div>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="text-4xl">⏰</div>
                    <p className="mt-4 text-3xl font-semibold text-brand-300">
                      10 – 15 horas
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-ink-300">
                      cada mes
                    </p>
                    <h3 className="mt-4 text-base font-semibold text-white">
                      Tiempo que recuperas
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-300">
                      Dejas de pelearte con recibos, Excel, QuickBooks
                      enredado. Ese tiempo lo inviertes en vender más
                      obra o estar con tu familia.
                    </p>
                  </div>
                </FadeUp>

                <FadeUp delay={0.15}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="text-4xl">🛡️</div>
                    <p className="mt-4 text-3xl font-semibold text-brand-300">
                      $500 – $5,000
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-ink-300">
                      multas evitadas
                    </p>
                    <h3 className="mt-4 text-base font-semibold text-white">
                      Riesgos que eliminas
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-300">
                      1099 mal emitidos, late filing, deducciones
                      cuestionables que el IRS rechaza con multas e
                      intereses. Un sistema bien llevado te blinda.
                    </p>
                  </div>
                </FadeUp>
              </div>

              <FadeUp delay={0.2}>
                <div className="mt-12 rounded-2xl border border-brand-500/30 bg-brand-600/10 p-6 text-center sm:p-8">
                  <p className="text-base leading-7 text-white">
                    Plan Estándar ={" "}
                    <span className="font-semibold text-brand-300">
                      $14 al día
                    </span>
                    . El ahorro promedio en impuestos por año ={" "}
                    <span className="font-semibold text-brand-300">
                      $2,000+
                    </span>
                    . El negocio se paga solo — y duermes tranquila.
                  </p>
                </div>
              </FadeUp>
            </div>
          </section>
        )}
        </Fragment>
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
