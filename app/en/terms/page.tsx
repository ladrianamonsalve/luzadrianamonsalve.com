import type { Metadata } from "next";
import { TermsPage } from "@/components/pages/TermsPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms, Refunds and Privacy — 3DK Multi Services",
  description:
    "Refund policy, terms of service, and privacy policy for 3DK Multi Services. Clear information about how we work.",
  alternates: {
    canonical: `${site.url}/en/terms`,
    languages: {
      es: `${site.url}/terminos`,
      en: `${site.url}/en/terms`,
      "x-default": `${site.url}/terminos`,
    },
  },
};

export default function Page() {
  return <TermsPage locale="en" />;
}
