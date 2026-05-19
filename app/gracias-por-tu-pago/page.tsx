import type { Metadata } from "next";
import { ThankYouPage } from "@/components/pages/ThankYouPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gracias por tu pago — 3DK Multi Services",
  description:
    "Pago recibido correctamente. Luz Adriana te contactará pronto para coordinar los siguientes pasos.",
  robots: { index: false, follow: false }, // don't index the thank-you page
  alternates: {
    canonical: `${site.url}/gracias-por-tu-pago`,
  },
};

export default function Page() {
  return <ThankYouPage locale="es" />;
}
