import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages/ServiceDetailPage";
import { servicesContent } from "@/lib/services-content";
import { site } from "@/lib/site";

const detail = servicesContent.es.impuestos;

export const metadata: Metadata = {
  title: `${detail.title} | IRS AFSP Certified Tax Preparer`,
  description: detail.lead,
  alternates: {
    canonical: `${site.url}/servicios/impuestos`,
    languages: {
      es: `${site.url}/servicios/impuestos`,
      en: `${site.url}/en/services/tax-preparation`,
    },
  },
};

export default function Page() {
  return (
    <ServiceDetailPage locale="es" detail={detail} pathSegment="impuestos" />
  );
}
