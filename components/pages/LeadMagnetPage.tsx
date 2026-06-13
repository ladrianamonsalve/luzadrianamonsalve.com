import Image from "next/image";
import { JsonLd } from "@/components/site/JsonLd";
import { FadeUp } from "@/components/site/FadeUp";
import { LeadMagnetForm } from "@/components/site/LeadMagnetForm";
import { breadcrumbSchema } from "@/lib/schemas";
import { leadMagnets, site, type Locale } from "@/lib/site";

export function LeadMagnetPage({
  magnetSlug,
  locale,
}: {
  magnetSlug: keyof typeof leadMagnets;
  locale: Locale;
}) {
  const magnet = leadMagnets[magnetSlug];
  const url =
    locale === "es" ? `/${magnet.slug}` : `/en/${magnet.slugEn}`;

  const t =
    locale === "es"
      ? {
          eyebrow: "GUÍA GRATIS · DESCARGA INMEDIATA",
          title: magnet.titleEs,
          subtitle:
            "Si mezclas tu cuenta personal con la de tu negocio, estás cometiendo el error más caro que comete el 80% de los pequeños negocios — y el IRS lo audita primero. Esta guía te lleva paso a paso, en orden, sin tecnicismos.",
          benefits: [
            "Paso 1: Abre una cuenta bancaria exclusiva para tu negocio",
            "Paso 2: Utiliza una tarjeta exclusiva para el negocio",
            "Paso 3: Clasifica correctamente tus ingresos y gastos",
            "Paso 4: Guarda y organiza toda tu documentación",
            "Paso 5: Revisa tus números mensualmente",
          ],
          authorBlurb:
            "Escrito por Luz Adriana Monsalve — IRS AFSP Certificada, QuickBooks Certified, Notary Public bilingüe. 15+ años organizando finanzas de pequeñas empresas.",
          formHeading: "Ingresa tus datos y recibe el PDF",
          social:
            "Únete a otros pequeños negocios que ya recibieron la guía",
        }
      : {
          eyebrow: "FREE GUIDE · INSTANT DOWNLOAD",
          title: magnet.titleEn,
          subtitle:
            "If you mix your personal account with your business account, you're making the most expensive mistake 80% of small businesses make — and the IRS audits this first. This guide walks you through it step by step.",
          benefits: [
            "Step 1: Open a bank account exclusively for your business",
            "Step 2: Use a credit card exclusively for the business",
            "Step 3: Classify your income and expenses correctly",
            "Step 4: Save and organize all your documentation",
            "Step 5: Review your numbers monthly",
          ],
          authorBlurb:
            "Written by Luz Adriana Monsalve — IRS AFSP Certified, QuickBooks Certified, bilingual Notary Public. 15+ years organizing small business finances.",
          formHeading: "Enter your details and get the PDF",
          social:
            "Join other small businesses who already received the guide",
        };

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          {
            name: locale === "es" ? "Inicio" : "Home",
            url: locale === "es" ? "/" : "/en",
          },
          { name: locale === "es" ? "Guía Gratis" : "Free Guide", url },
        ])}
      />

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 grad-soft" aria-hidden />
        <div className="container-page relative pb-16 pt-12 sm:pb-20 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-14">
            <FadeUp>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  {t.eyebrow}
                </p>
                <h1 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
                  {t.title}
                </h1>
                <p className="mt-5 text-base leading-7 text-ink-700 sm:text-lg">
                  {t.subtitle}
                </p>

                <ul className="mt-7 space-y-3">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-600 text-white">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.09l6.79-6.8a1 1 0 011.414 0z"
                          />
                        </svg>
                      </span>
                      <span className="text-base text-ink-700">{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 rounded-2xl border-l-4 border-brand-600 bg-brand-50/60 px-4 py-3 text-sm leading-6 text-ink-700">
                  ✍️ {t.authorBlurb}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="mx-auto max-w-md lg:mx-0">
                <div className="relative">
                  <div
                    className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/25 via-brand-200/40 to-transparent blur-2xl"
                    aria-hidden
                  />
                  <div className="rounded-2xl border border-ink-200/70 bg-white p-6 shadow-2xl shadow-brand-900/15 sm:p-8">
                    <div className="mb-6 flex items-center justify-center">
                      <div className="relative">
                        <div className="aspect-[2/3] w-36 overflow-hidden rounded-lg border border-ink-200 bg-white shadow-md sm:w-44">
                          <Image
                            src={magnet.coverImage}
                            alt={`Portada de la guía: ${magnet.titleEs}`}
                            width={1024}
                            height={1536}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="absolute -right-2 -top-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-success-500 text-xs font-bold text-white shadow-md">
                          PDF
                        </span>
                      </div>
                    </div>
                    <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-brand-700">
                      {t.formHeading}
                    </h2>
                    <div className="mt-5">
                      <LeadMagnetForm
                        magnetSlug={magnet.slug}
                        locale={locale}
                      />
                    </div>
                    <p className="mt-4 text-center text-xs text-ink-500">
                      🔒 {t.social}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
