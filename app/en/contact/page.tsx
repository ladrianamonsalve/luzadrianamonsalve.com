import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Free Consultation | 3DK Multi Services",
  description:
    "Get in touch and I'll respond within 24 hours. Free initial consultation for bookkeeping, G702/G703, notary or taxes. Bilingual EN/ES.",
  alternates: {
    canonical: `${site.url}/en/contact`,
    languages: {
      es: `${site.url}/contacto`,
      en: `${site.url}/en/contact`,
      "x-default": `${site.url}/contacto`,
    },
  },
};

export default function Page() {
  return <ContactPage locale="en" />;
}
