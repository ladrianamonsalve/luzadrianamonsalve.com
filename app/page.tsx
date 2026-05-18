import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Bookkeeping, Notaría e Impuestos para Construcción`,
  description:
    "Especialista bilingüe en bookkeeping, notaría y preparación de impuestos para pequeñas empresas de construcción. Certificada IRS AFSP. Atendemos en Virginia, Maryland y toda USA.",
  alternates: {
    canonical: site.url,
    languages: {
      es: site.url,
      en: `${site.url}/en`,
      "x-default": site.url,
    },
  },
};

export default function Page() {
  return <HomePage locale="es" />;
}
