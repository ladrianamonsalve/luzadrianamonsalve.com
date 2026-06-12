import type { Metadata } from "next";
import { LeadMagnetPage } from "@/components/pages/LeadMagnetPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Free Guide: How to Separate Your Personal and Business Finances | 3DK Multi Services",
  description:
    "Download the free bilingual guide to separate your personal and business accounts in 30 minutes. By Luz Adriana Monsalve, IRS AFSP Certified and QuickBooks Certified.",
  alternates: {
    canonical: `${site.url}/en/finance-guide`,
    languages: {
      es: `${site.url}/guia-finanzas`,
      en: `${site.url}/en/finance-guide`,
      "x-default": `${site.url}/guia-finanzas`,
    },
  },
  openGraph: {
    type: "website",
    title: "Free Guide: How to Separate Your Personal and Business Finances",
    description:
      "Download the free bilingual guide. By Luz Adriana Monsalve, IRS AFSP Certified.",
    url: `${site.url}/en/finance-guide`,
  },
};

export default function Page() {
  return <LeadMagnetPage magnetSlug="separarFinanzas" locale="en" />;
}
