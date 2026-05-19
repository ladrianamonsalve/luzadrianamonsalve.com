import type { Metadata } from "next";
import { TermsPage } from "@/components/pages/TermsPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos, Reembolsos y Privacidad — 3DK Multi Services",
  description:
    "Política de reembolsos, términos del servicio y política de privacidad de 3DK Multi Services. Información clara sobre cómo trabajamos.",
  alternates: {
    canonical: `${site.url}/terminos`,
    languages: {
      es: `${site.url}/terminos`,
      en: `${site.url}/en/terms`,
      "x-default": `${site.url}/terminos`,
    },
  },
};

export default function Page() {
  return <TermsPage locale="es" />;
}
