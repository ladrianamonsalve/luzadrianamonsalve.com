import type { Metadata } from "next";
import { PricingPage } from "@/components/pages/PricingPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Precios y Planes — Notaría, G702/G703 y Bookkeeping",
  description:
    "Precios claros para notarización, aplicaciones AIA G702/G703 y bookkeeping mensual. Pagos seguros vía Stripe. 3DK Multi Services en Gainesville, Georgia.",
  alternates: {
    canonical: `${site.url}/precios`,
    languages: {
      es: `${site.url}/precios`,
      en: `${site.url}/en/pricing`,
      "x-default": `${site.url}/precios`,
    },
  },
};

export default function Page() {
  return <PricingPage locale="es" />;
}
