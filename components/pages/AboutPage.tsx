import { PageHeader } from "@/components/site/PageHeader";
import { ContactCTA } from "@/components/site/ContactCTA";
import { JsonLd } from "@/components/site/JsonLd";
import { FadeUp } from "@/components/site/FadeUp";
import { breadcrumbSchema } from "@/lib/schemas";
import { content } from "@/lib/content";
import { site, type Locale } from "@/lib/site";

export function AboutPage({ locale }: { locale: Locale }) {
  const t = content[locale].pages.about;
  const aboutUrl = locale === "es" ? "/sobre-mi" : "/en/about";

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          {
            name: locale === "es" ? "Inicio" : "Home",
            url: locale === "es" ? "/" : "/en",
          },
          { name: t.title, url: aboutUrl },
        ])}
      />

      <PageHeader
        eyebrow={content[locale].about.eyebrow}
        title={t.title}
        lead={t.lead}
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <FadeUp>
            <div>
              <h2 className="h-display text-2xl sm:text-3xl">{t.bioTitle}</h2>
              <div className="mt-5 space-y-4 text-base leading-7 text-ink-700">
                {t.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border-l-4 border-brand-600 bg-brand-50/60 px-6 py-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                  {t.missionTitle}
                </h3>
                <p className="mt-2 text-base leading-7 text-ink-900">
                  {t.mission}
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <aside className="rounded-2xl border border-ink-200/70 bg-ink-50 p-6 sm:p-7">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-900">
                {locale === "es" ? "Datos rápidos" : "Quick facts"}
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                <Row
                  label={locale === "es" ? "Nombre" : "Name"}
                  value={site.name}
                />
                <Row
                  label={locale === "es" ? "Empresa" : "Business"}
                  value={site.business}
                />
                <Row
                  label={locale === "es" ? "Especialidad" : "Specialty"}
                  value={
                    locale === "es"
                      ? "Contabilidad para construcción"
                      : "Construction accounting"
                  }
                />
                <Row
                  label={locale === "es" ? "Idiomas" : "Languages"}
                  value="ES · EN"
                />
                <Row
                  label={locale === "es" ? "Atiende en" : "Serving"}
                  value="Virginia · Maryland · USA"
                />
                <Row label="PTIN" value={locale === "es" ? "Activo" : "Active"} />
              </dl>
            </aside>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad bg-ink-50">
        <div className="container-page">
          <FadeUp>
            <h2 className="h-display text-2xl sm:text-3xl">{t.whyTitle}</h2>
          </FadeUp>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {t.whyItems.map((it, i) => (
              <FadeUp key={it.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-ink-200/70 bg-white p-6">
                  <h3 className="text-base font-semibold text-ink-900">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-500">
                    {it.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA locale={locale} />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <dt className="text-ink-500">{label}</dt>
      <dd className="text-right font-medium text-ink-900">{value}</dd>
    </div>
  );
}
