import type { Metadata } from "next";
import { TestimonialsPage } from "@/components/pages/TestimonialsPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials — What contractors say | 3DK Multi Services",
  description:
    "Real stories from contractors and subcontractors who organized their accounting with 3DK Multi Services.",
  alternates: {
    canonical: `${site.url}/en/testimonials`,
    languages: {
      es: `${site.url}/testimonios`,
      en: `${site.url}/en/testimonials`,
    },
  },
};

export default function Page() {
  return <TestimonialsPage locale="en" />;
}
