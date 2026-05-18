import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/pages/BlogIndexPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Bookkeeping and tax guides for construction",
  description:
    "Practical guides on bookkeeping, AIA G702/G703 and taxes for contractors and subcontractors.",
  alternates: {
    canonical: `${site.url}/en/blog`,
    languages: {
      es: `${site.url}/blog`,
      en: `${site.url}/en/blog`,
    },
  },
};

export default function Page() {
  return <BlogIndexPage locale="en" />;
}
