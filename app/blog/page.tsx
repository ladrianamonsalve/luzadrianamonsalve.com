import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/pages/BlogIndexPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Guías de bookkeeping e impuestos para construcción",
  description:
    "Guías prácticas sobre bookkeeping, AIA G702/G703 e impuestos para contratistas y subcontratistas.",
  alternates: {
    canonical: `${site.url}/blog`,
    languages: {
      es: `${site.url}/blog`,
      en: `${site.url}/en/blog`,
    },
  },
};

export default function Page() {
  return <BlogIndexPage locale="es" />;
}
