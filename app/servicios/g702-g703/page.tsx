import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages/ServiceDetailPage";
import { servicesContent } from "@/lib/services-content";
import { site } from "@/lib/site";

const detail = servicesContent.es["g702-g703"];

export const metadata: Metadata = {
  title: `${detail.title} | AIA Payment Applications`,
  description: detail.lead,
  alternates: {
    canonical: `${site.url}/servicios/g702-g703`,
    languages: {
      es: `${site.url}/servicios/g702-g703`,
      en: `${site.url}/en/services/g702-g703`,
    },
  },
};

export default function Page() {
  return (
    <ServiceDetailPage
      locale="es"
      detail={detail}
      pathSegment="g702-g703"
    />
  );
}
