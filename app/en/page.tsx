import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Bookkeeping, Notary and Taxes for Construction`,
  description:
    "Bilingual specialist in bookkeeping, notary services and tax preparation for small construction businesses. IRS AFSP certified. Serving Virginia, Maryland and all U.S.",
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
