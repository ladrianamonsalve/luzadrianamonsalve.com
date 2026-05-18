import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who is Luz Adriana Monsalve — Founder of 3DK Multi Services",
  description:
    "Who is Luz Adriana Monsalve: founder of 3DK Multi Services, IRS AFSP certified, QuickBooks Certified, Notary Public, author of Crecí Sin Permiso. 15+ years in construction. Based in Gainesville, Georgia.",
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
