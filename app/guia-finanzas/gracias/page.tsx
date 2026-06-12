import type { Metadata } from "next";
import { LeadMagnetThanksPage } from "@/components/pages/LeadMagnetThanksPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "¡Gracias! Tu guía está lista | 3DK Multi Services",
  description: "Tu guía gratis ha sido enviada a tu email.",
  alternates: {
    canonical: `${site.url}/guia-finanzas/gracias`,
  },
  robots: {
    index: false, // thank-you pages shouldn't be indexed
    follow: true,
  },
};

export default function Page() {
  return <LeadMagnetThanksPage magnetSlug="separarFinanzas" locale="es" />;
}
