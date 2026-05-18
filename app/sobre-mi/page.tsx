import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quién es Luz Adriana Monsalve — Fundadora de 3DK Multi Services",
  description:
    "Quién es Luz Adriana Monsalve: fundadora de 3DK Multi Services, IRS AFSP certificada, QuickBooks Certified, Notary Public, autora de Crecí Sin Permiso. 15+ años en construcción. Establecida en Gainesville, Georgia.",
  alternates: {
    canonical: `${site.url}/sobre-mi`,
    languages: {
      es: `${site.url}/sobre-mi`,
      en: `${site.url}/en/about`,
      "x-default": `${site.url}/sobre-mi`,
    },
  },
};

export default function Page() {
  return <AboutPage locale="es" />;
}
