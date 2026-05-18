import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto — Consulta gratis | 3DK Multi Services",
  description:
    "Escríbeme y respondo en menos de 24 horas. Consulta inicial gratis para bookkeeping, G702/G703, notaría o impuestos. Bilingüe ES/EN.",
  alternates: {
    canonical: `${site.url}/contacto`,
    languages: {
      es: `${site.url}/contacto`,
      en: `${site.url}/en/contact`,
      "x-default": `${site.url}/contacto`,
    },
  },
};

export default function Page() {
  return <ContactPage locale="es" />;
}
