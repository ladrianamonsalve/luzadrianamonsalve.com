import type { Metadata } from "next";
import { LeadMagnetThanksPage } from "@/components/pages/LeadMagnetThanksPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thanks! Your guide is ready | 3DK Multi Services",
  description: "Your free guide has been sent to your email.",
  alternates: {
    canonical: `${site.url}/en/finance-guide/thanks`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <LeadMagnetThanksPage magnetSlug="separarFinanzas" locale="en" />;
}
