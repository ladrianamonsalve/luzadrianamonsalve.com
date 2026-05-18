import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Luz Adriana Monsalve",
  description:
    "Meet Luz Adriana Monsalve, founder of 3DK Multi Services. IRS AFSP certified specialist in bookkeeping, notary and tax preparation for small construction businesses.",
  alternates: {
    canonical: `${site.url}/en/about`,
    languages: {
      es: `${site.url}/sobre-mi`,
      en: `${site.url}/en/about`,
      "x-default": `${site.url}/sobre-mi`,
    },
  },
};

export default function Page() {
  return <AboutPage locale="en" />;
}
