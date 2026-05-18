import type { Metadata } from "next";
import { ServicesIndexPage } from "@/components/pages/ServicesIndexPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Bookkeeping, G702/G703, Notary and Taxes",
  description:
    "Monthly bookkeeping, AIA G702/G703 payment applications, notary public and tax preparation for small construction businesses. Bilingual EN/ES.",
  alternates: {
    canonical: `${site.url}/en/services`,
    languages: {
      es: `${site.url}/servicios`,
      en: `${site.url}/en/services`,
      "x-default": `${site.url}/servicios`,
    },
  },
};

export default function Page() {
  return <ServicesIndexPage locale="en" />;
}
