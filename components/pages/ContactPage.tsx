import { PageHeader } from "@/components/site/PageHeader";
import { ContactForm } from "@/components/site/ContactForm";
import { CopyEmail } from "@/components/site/CopyEmail";
import { JsonLd } from "@/components/site/JsonLd";
import { FadeUp } from "@/components/site/FadeUp";
import { breadcrumbSchema } from "@/lib/schemas";
import { content } from "@/lib/content";
import { site, type Locale } from "@/lib/site";

export function ContactPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const url = locale === "es" ? "/contacto" : "/en/contact";

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          {
            name: locale === "es" ? "Inicio" : "Home",
            url: locale === "es" ? "/" : "/en",
          },
          { name: t.pages.contact.title, url },
        ])}
      />

      <PageHeader
        eyebrow={t.contact.eyebrow}
        title={t.pages.contact.title}
        lead={t.pages.contact.lead}
      />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <FadeUp>
            <ContactForm locale={locale} />
          </FadeUp>

          <FadeUp delay={0.1}>
            <aside className="rounded-2xl border border-ink-200/70 bg-ink-50 p-6 sm:p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                {t.contact.sidebar.title}
              </h3>
              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="text-ink-500">Email</dt>
                  <dd className="mt-1">
                    <CopyEmail
                      email={site.email}
                      locale={locale}
                      className="font-semibold text-ink-900 hover:text-brand-700"
                    />
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-500">
                    {locale === "es" ? "Establecida en" : "Based in"}
                  </dt>
                  <dd className="mt-1 font-medium text-ink-900">
                    {site.location.locality}, {site.location.region}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-500">
                    {locale === "es" ? "Atendemos en" : "Serving"}
                  </dt>
                  <dd className="mt-1 font-medium text-ink-900">
                    {locale === "es"
                      ? "Todos los Estados Unidos"
                      : "All United States"}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-500">{t.contact.sidebar.hours}</dt>
                  <dd className="mt-1 font-medium text-ink-900">
                    {t.contact.sidebar.hoursValue}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-500">
                    {t.contact.sidebar.response}
                  </dt>
                  <dd className="mt-1 font-medium text-ink-900">
                    {t.contact.sidebar.responseValue}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-500">
                    {locale === "es" ? "Idiomas" : "Languages"}
                  </dt>
                  <dd className="mt-1 font-medium text-ink-900">
                    {locale === "es"
                      ? "Español · Inglés"
                      : "English · Spanish"}
                  </dd>
                </div>
              </dl>
            </aside>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
