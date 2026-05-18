import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/pages/ServiceDetailPage";
import { servicesContent } from "@/lib/services-content";
import { site } from "@/lib/site";

const detail = servicesContent.en.notaria;

export const metadata: Metadata = {
  title: `${detail.title} | Bilingual Notary Public`,
  description: detail.lead,
  alternates: {
    canonical: `${site.url}/en/services/notary`,
    languages: {
      es: `${site.url}/servicios/notaria`,
      en: `${site.url}/en/services/notary`,
    },
  },
};

export default function Page() {
  return (
    <ServiceDetailPage locale="en" detail={detail} pathSegment="notary" />
  );
}
