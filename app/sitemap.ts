import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

type Pair = { es: string; en: string; priority: number };

const pairs: Pair[] = [
  { es: "/", en: "/en", priority: 1.0 },
  { es: "/sobre-mi", en: "/en/about", priority: 0.9 },
  { es: "/servicios", en: "/en/services", priority: 0.9 },
  {
    es: "/servicios/bookkeeping",
    en: "/en/services/bookkeeping",
    priority: 0.85,
  },
  {
    es: "/servicios/g702-g703",
    en: "/en/services/g702-g703",
    priority: 0.85,
  },
  { es: "/servicios/notaria", en: "/en/services/notary", priority: 0.8 },
  {
    es: "/servicios/impuestos",
    en: "/en/services/tax-preparation",
    priority: 0.85,
  },
  { es: "/testimonios", en: "/en/testimonials", priority: 0.6 },
  { es: "/blog", en: "/en/blog", priority: 0.5 },
  { es: "/contacto", en: "/en/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const out: MetadataRoute.Sitemap = [];

  for (const p of pairs) {
    const alternates = {
      languages: {
        es: `${site.url}${p.es}`,
        en: `${site.url}${p.en}`,
        "x-default": `${site.url}${p.es}`,
      },
    };
    out.push({
      url: `${site.url}${p.es}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: p.priority,
      alternates,
    });
    out.push({
      url: `${site.url}${p.en}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: p.priority,
      alternates,
    });
  }

  return out;
}
