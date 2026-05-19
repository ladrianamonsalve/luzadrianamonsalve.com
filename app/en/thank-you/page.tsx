import type { Metadata } from "next";
import { ThankYouPage } from "@/components/pages/ThankYouPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you for your payment — 3DK Multi Services",
  description:
    "Payment received successfully. Luz Adriana will reach out shortly to coordinate next steps.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: `${site.url}/en/thank-you`,
  },
};

export default function Page() {
  return <ThankYouPage locale="en" />;
}
