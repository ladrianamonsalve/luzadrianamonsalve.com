import { PageHeader } from "@/components/site/PageHeader";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { ContactCTA } from "@/components/site/ContactCTA";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema, reviewsSchema } from "@/lib/schemas";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";

export function TestimonialsPage({ locale }: { locale: Locale }) {
  const t = content[locale].pages.testimonials;
  const items = content[locale].testimonials.items;
  const url = locale === "es" ? "/testimonios" : "/en/testimonials";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            {
              name: locale === "es" ? "Inicio" : "Home",
              url: locale === "es" ? "/" : "/en",
            },
            { name: t.title, url },
          ]),
          ...reviewsSchema(
            items.map((it) => ({
              author: it.author,
              body: it.quote,
            })),
          ),
        ]}
      />

      <PageHeader
        eyebrow={content[locale].testimonials.eyebrow}
        title={t.title}
        lead={t.lead}
      />

      <TestimonialsSection locale={locale} />
      <ContactCTA locale={locale} />
    </>
  );
}
