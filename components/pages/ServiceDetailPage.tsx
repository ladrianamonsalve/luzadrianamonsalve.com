import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactCTA } from "@/components/site/ContactCTA";
import { JsonLd } from "@/components/site/JsonLd";
import { FadeUp } from "@/components/site/FadeUp";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schemas";
import { site, type Locale } from "@/lib/site";

export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  lead: string;
  intro: string[];
  included: { title: string; items: string[] };
  process: { step: string; description: string }[];
  forWho: string[];
  faq: { question: string; answer: string }[];
  cta: string;
};

export function ServiceDetailPage({
  locale,
  detail,
  pathSegment,
}: {
  locale: Locale;
  detail: ServiceDetail;
  pathSegment: string;
}) {
  const servicesUrl = locale === "es" ? "/servicios" : "/en/services";
  const selfUrl = `${servicesUrl}/${pathSegment}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            {
              name: locale === "es" ? "Inicio" : "Home",
              url: locale === "es" ? "/" : "/en",
            },
            {
              name: locale === "es" ? "Servicios" : "Services",
              url: servicesUrl,
            },
            { name: detail.title, url: selfUrl },
          ]),
          serviceSchema({
            name: detail.title,
            description: detail.lead,
            url: `${site.url}${selfUrl}`,
            locale,
          }),
          faqSchema(detail.faq),
        ]}
      />

      <PageHeader
        eyebrow={detail.eyebrow}
        title={detail.title}
        lead={detail.lead}
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <FadeUp>
            <div className="space-y-5 text-base leading-7 text-ink-700">
              {detail.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-2xl border border-ink-200/70 bg-ink-50 p-6 sm:p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                {detail.included.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-700">
                {detail.included.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
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
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad bg-ink-50">
        <div className="container-page">
          <FadeUp>
            <h2 className="h-display text-2xl sm:text-3xl">
              {locale === "es" ? "Cómo trabajamos" : "How we work"}
            </h2>
          </FadeUp>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {detail.process.map((p, i) => (
              <FadeUp key={p.step} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-ink-200/70 bg-white p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {locale === "es" ? "Paso" : "Step"} {i + 1}
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-ink-900">
                    {p.step}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-500">
                    {p.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <FadeUp>
            <div>
              <h2 className="h-display text-2xl sm:text-3xl">
                {locale === "es" ? "¿Es para ti?" : "Is this for you?"}
              </h2>
              <ul className="mt-6 space-y-3 text-base text-ink-700">
                {detail.forWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div>
              <h2 className="h-display text-2xl sm:text-3xl">
                {locale === "es"
                  ? "Preguntas frecuentes"
                  : "Frequently asked questions"}
              </h2>
              <dl className="mt-6 divide-y divide-ink-200/70 border-y border-ink-200/70">
                {detail.faq.map((q) => (
                  <div key={q.question} className="py-5">
                    <dt className="text-base font-semibold text-ink-900">
                      {q.question}
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-ink-500">
                      {q.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad bg-ink-50">
        <div className="container-page flex flex-col items-start gap-4">
          <Link
            href={servicesUrl}
            className="text-sm font-semibold text-brand-700 hover:underline"
          >
            ← {locale === "es" ? "Ver todos los servicios" : "All services"}
          </Link>
        </div>
      </section>

      <ContactCTA locale={locale} />
    </>
  );
}
