import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Bookkeeping, Notary and Taxes for Construction`,
  description:
    "Bilingual specialist in personal and business tax preparation, bookkeeping, notary, ITIN and G702/G703 for small construction businesses. IRS AFSP and QuickBooks certified. 15+ years of experience. Based in Gainesville, Georgia. Serving all of the United States.",
  alternates: {
    canonical: `${site.url}/en`,
    languages: {
      es: site.url,
      en: `${site.url}/en`,
      "x-default": site.url,
    },
  },
};

export default function Page() {
  return <HomePage locale="en" />;
}
