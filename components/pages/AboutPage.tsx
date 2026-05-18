import Image from "next/image";
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

      <PageHeader title={t.title} lead={t.lead} />

      <section className="section-pad bg-white">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
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
            <aside className="space-y-6">
              <div className="relative">
                <div
                  className="absolute -inset-2 -z-10 rounded-[1.75rem] bg-gradient-to-br from-brand-500/15 via-brand-200/40 to-transparent blur-xl"
                  aria-hidden
                />
                <div className="overflow-hidden rounded-[1.75rem] border border-ink-200/70 bg-white shadow-xl shadow-brand-900/10">
                  <Image
                    src="/luz-portrait.jpg"
                    alt={`${site.name} — ${site.business}`}
                    width={1066}
                    height={1600}
                    sizes="(max-width: 1024px) 360px, 420px"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-ink-200/70 bg-ink-50 p-6 sm:p-7">
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
                  label={locale === "es" ? "Establecida en" : "Based in"}
                  value={`${site.location.locality}, ${site.location.region}`}
                />
                <Row
                  label={locale === "es" ? "Atiende en" : "Serving"}
                  value={locale === "es" ? "Todos los EE. UU." : "All 50 states"}
                />
                <Row label="PTIN" value={locale === "es" ? "Activo" : "Active"} />
              </dl>
              </div>
            </aside>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-white">
        <div className="absolute inset-0 grad-soft" aria-hidden />
        <div className="container-page relative grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-14">
          <FadeUp>
            <div className="relative mx-auto max-w-xs lg:mx-0">
              <div
                className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-gradient-to-br from-brand-500/20 via-brand-200/40 to-transparent blur-2xl"
                aria-hidden
              />
              <div className="overflow-hidden rounded-2xl border border-ink-200/60 bg-white shadow-2xl shadow-brand-900/15">
                <Image
                  src="/book-creci-sin-permiso.jpg"
                  alt='Portada del libro "Crecí Sin Permiso" por Luz Adriana Monsalve'
                  width={968}
                  height={1489}
                  sizes="(max-width: 1024px) 280px, 360px"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                {locale === "es" ? "Autora publicada" : "Published author"}
              </p>
              <h2 className="mt-3 h-display text-3xl sm:text-4xl">
                Crecí Sin Permiso
              </h2>
              <p className="mt-2 text-base italic leading-7 text-ink-500">
                {locale === "es"
                  ? "Habla de una niña obligada a madurar, sobrevivir y avanzar sola."
                  : "The story of a girl forced to mature, survive and move forward alone."}
              </p>
              <p className="mt-6 text-base leading-7 text-ink-700">
                {locale === "es"
                  ? "Mi historia personal de superación, publicada con Legacy. La misma resiliencia con la que escribí este libro es la que llevo a cada cliente que me confía sus números."
                  : "My personal story of overcoming, published by Legacy. The same resilience with which I wrote this book is what I bring to every client who trusts me with their numbers."}
              </p>
              <p className="mt-4 text-sm text-ink-500">
                {locale === "es" ? "Publicado por " : "Published by "}
                <span className="font-semibold text-ink-900">Legacy</span>
                {locale === "es" ? " · En español" : " · In Spanish"}
                {site.book.amazonUrl ? (
                  <>
                    {" · "}
                    {locale === "es" ? "Disponible en " : "Available on "}
                    <span className="font-semibold text-ink-900">Amazon</span>
                  </>
                ) : null}
              </p>
              {site.book.amazonUrl ? (
                <a
                  href={site.book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
                >
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-[#FF9900]"
                  >
                    <path d="M14.46 14.21c-1.55 1.14-3.78 1.75-5.7 1.75-2.7 0-5.13-1-6.97-2.66-.14-.13-.02-.31.16-.21 1.99 1.16 4.45 1.85 6.99 1.85 1.72 0 3.6-.36 5.34-1.1.27-.11.49.18.18.37zm.65-.74c-.2-.25-1.3-.12-1.8-.06-.15.02-.17-.11-.04-.21.88-.62 2.32-.44 2.49-.23.17.21-.05 1.64-.87 2.32-.13.11-.25.05-.19-.09.18-.45.6-1.46.41-1.73z" />
                    <path d="M14.51 11.05V9.83c0-.18.14-.31.31-.31h5.43c.18 0 .32.13.32.31v1.05c0 .17-.15.4-.42.76l-2.82 4.02c1.05-.02 2.15.13 3.1.67.21.12.27.3.29.47v1.31c0 .18-.2.39-.4.28-1.68-.88-3.9-.97-5.76 0-.19.1-.39-.1-.39-.28v-1.24c0-.2 0-.55.21-.86l3.26-4.68h-2.84c-.17 0-.31-.13-.31-.31z" />
                  </svg>
                  {locale === "es"
                    ? "Comprar en Amazon"
                    : "Buy on Amazon"}
                  <span aria-hidden>→</span>
                </a>
              ) : null}
            </div>
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
