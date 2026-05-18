import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { AboutSection } from "@/components/site/AboutSection";
import { AuthorBanner } from "@/components/site/AuthorBanner";
import { Philosophy } from "@/components/site/Philosophy";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { ContactCTA } from "@/components/site/ContactCTA";
import type { Locale } from "@/lib/site";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Hero locale={locale} />
      <Stats locale={locale} />
      <ServicesGrid locale={locale} />
      <AboutSection locale={locale} />
      <AuthorBanner locale={locale} />
      <Philosophy locale={locale} />
      <TestimonialsSection locale={locale} />
      <ContactCTA locale={locale} />
    </>
  );
}
