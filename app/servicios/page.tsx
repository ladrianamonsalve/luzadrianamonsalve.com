import type { Metadata } from "next";
import { ServicesIndexPage } from "@/components/pages/ServicesIndexPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios — Bookkeeping, G702/G703, Notaría e Impuestos",
  description:
    "Bookkeeping mensual, aplicaciones de pago AIA G702/G703, notaría pública y preparación de impuestos para pequeñas empresas de construcción. Bilingüe ES/EN.",
  alternates: {
    canonical: `${site.url}/servicios`,
    languages: {
      es: `${site.url}/servicios`,
      en: `${site.url}/en/services`,
      "x-default": `${site.url}/servicios`,
    },
  },
};

export default function Page() {
  return <ServicesIndexPage locale="es" />;
}
