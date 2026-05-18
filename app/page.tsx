import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Bookkeeping, Notaría e Impuestos para Construcción`,
  description:
    "Especialista bilingüe en preparación de impuestos personales y de negocio, bookkeeping, notaría, ITIN y G702/G703 para pequeñas empresas de construcción. Certificada IRS AFSP y QuickBooks. 15+ años de experiencia. Establecida en Gainesville, Georgia. Atendemos en todos los Estados Unidos.",
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
