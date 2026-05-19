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
                {site.whatsapp && (
                  <div>
                    <dt className="text-ink-500">WhatsApp</dt>
                    <dd className="mt-2">
                      <a
                        href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                          locale === "es"
                            ? `Hola Luz, vi tu sitio ${site.domain} y me gustaría más información.`
                            : `Hi Luz, I saw your site ${site.domain} and I'd like more information.`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1FAE54]"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                          aria-hidden
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        {site.whatsapp}
                      </a>
                    </dd>
                  </div>
                )}
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
