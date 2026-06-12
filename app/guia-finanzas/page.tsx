import type { Metadata } from "next";
import { LeadMagnetPage } from "@/components/pages/LeadMagnetPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Guía Gratis: Cómo Separar tus Finanzas Personales del Negocio | 3DK Multi Services",
  description:
    "Descarga gratis la guía bilingüe paso a paso para separar tu cuenta personal de la del negocio en 30 minutos. Por Luz Adriana Monsalve, IRS AFSP Certificada y QuickBooks Certified.",
  alternates: {
    canonical: `${site.url}/guia-finanzas`,
    languages: {
      es: `${site.url}/guia-finanzas`,
      en: `${site.url}/en/finance-guide`,
      "x-default": `${site.url}/guia-finanzas`,
    },
  },
  openGraph: {
    type: "website",
    title: "Guía Gratis: Cómo Separar tus Finanzas Personales del Negocio",
    description:
      "Descarga gratis la guía bilingüe paso a paso. Por Luz Adriana Monsalve, IRS AFSP Certificada.",
    url: `${site.url}/guia-finanzas`,
  },
};

export default function Page() {
  return <LeadMagnetPage magnetSlug="separarFinanzas" locale="es" />;
}
