import { PageHeader } from "@/components/site/PageHeader";
import { ContactCTA } from "@/components/site/ContactCTA";
import { JsonLd } from "@/components/site/JsonLd";
import { FadeUp } from "@/components/site/FadeUp";
import { breadcrumbSchema } from "@/lib/schemas";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";

export function BlogPage({ locale }: { locale: Locale }) {
  const t = content[locale].pages.blog;
  const url = locale === "es" ? "/blog" : "/en/blog";

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

      <section className="section-pad bg-white">
        <div className="container-page">
          <FadeUp>
            <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-ink-200 bg-ink-50 p-10 text-center">
              <div className="text-3xl">📝</div>
              <h2 className="mt-3 text-xl font-semibold text-ink-900">
                {t.soon}
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                {locale === "es"
                  ? "Mientras tanto, ¿tienes una duda sobre bookkeeping, G702 o impuestos? Escríbeme."
                  : "In the meantime, do you have a question about bookkeeping, G702 or taxes? Reach out."}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <ContactCTA locale={locale} />
    </>
  );
}
