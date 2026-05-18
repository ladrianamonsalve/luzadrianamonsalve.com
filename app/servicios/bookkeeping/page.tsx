import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages/ServiceDetailPage";
import { servicesContent } from "@/lib/services-content";
import { site } from "@/lib/site";

const detail = servicesContent.es.bookkeeping;

export const metadata: Metadata = {
  title: `${detail.title} | Bookkeeping para Construcción`,
  description: detail.lead,
  alternates: {
    canonical: `${site.url}/servicios/bookkeeping`,
    languages: {
      es: `${site.url}/servicios/bookkeeping`,
      en: `${site.url}/en/services/bookkeeping`,
    },
  },
};

export default function Page() {
  return (
    <ServiceDetailPage
      locale="es"
      detail={detail}
      pathSegment="bookkeeping"
    />
  );
}
