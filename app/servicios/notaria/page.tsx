import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages/ServiceDetailPage";
import { servicesContent } from "@/lib/services-content";
import { site } from "@/lib/site";

const detail = servicesContent.es.notaria;

export const metadata: Metadata = {
  title: `${detail.title} | Notary Public Bilingüe`,
  description: detail.lead,
  alternates: {
    canonical: `${site.url}/servicios/notaria`,
    languages: {
      es: `${site.url}/servicios/notaria`,
      en: `${site.url}/en/services/notary`,
    },
  },
};

export default function Page() {
  return (
    <ServiceDetailPage locale="es" detail={detail} pathSegment="notaria" />
  );
}
