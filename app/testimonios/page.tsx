import type { Metadata } from "next";
import { TestimonialsPage } from "@/components/pages/TestimonialsPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonios — Lo que dicen los contratistas | 3DK Multi Services",
  description:
    "Historias reales de contratistas y subcontratistas que organizaron su contabilidad con 3DK Multi Services.",
  alternates: {
    canonical: `${site.url}/testimonios`,
    languages: {
      es: `${site.url}/testimonios`,
      en: `${site.url}/en/testimonials`,
    },
  },
};

export default function Page() {
  return <TestimonialsPage locale="es" />;
}
