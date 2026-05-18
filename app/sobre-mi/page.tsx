import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre mí — Luz Adriana Monsalve",
  description:
    "Conoce a Luz Adriana Monsalve, fundadora de 3DK Multi Services. Especialista certificada IRS AFSP en bookkeeping, notaría e impuestos para pequeñas empresas de construcción.",
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
