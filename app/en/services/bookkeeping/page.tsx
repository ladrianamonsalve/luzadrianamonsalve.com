import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages/ServiceDetailPage";
import { servicesContent } from "@/lib/services-content";
import { site } from "@/lib/site";

const detail = servicesContent.en.bookkeeping;

export const metadata: Metadata = {
  title: `${detail.title} | Construction Bookkeeping`,
  description: detail.lead,
  alternates: {
    canonical: `${site.url}/en/services/bookkeeping`,
    languages: {
      es: `${site.url}/servicios/bookkeeping`,
      en: `${site.url}/en/services/bookkeeping`,
    },
  },
};

export default function Page() {
  return (
    <ServiceDetailPage
      locale="en"
      detail={detail}
      pathSegment="bookkeeping"
    />
  );
}
