import { PageHeader } from "@/components/site/PageHeader";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { ContactCTA } from "@/components/site/ContactCTA";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbSchema } from "@/lib/schemas";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";

export function ServicesIndexPage({ locale }: { locale: Locale }) {
  const t = content[locale].pages.servicesIndex;
  const url = locale === "es" ? "/servicios" : "/en/services";

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
      <PageHeader
        eyebrow={content[locale].services.eyebrow}
        title={t.title}
        lead={t.lead}
      />
      <ServicesGrid locale={locale} showHeading={false} />
      <ContactCTA locale={locale} />
    </>
  );
}
