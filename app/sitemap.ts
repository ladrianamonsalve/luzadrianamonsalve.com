import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { listPosts } from "@/lib/blog";

type Pair = { es: string; en: string; priority: number };

const corePairs: Pair[] = [
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
  { es: "/precios", en: "/en/pricing", priority: 0.9 },
  { es: "/testimonios", en: "/en/testimonials", priority: 0.6 },
  { es: "/blog", en: "/en/blog", priority: 0.7 },
  { es: "/contacto", en: "/en/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const out: MetadataRoute.Sitemap = [];

  for (const p of corePairs) {
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

  // Blog posts — link ES + EN via translationSlug frontmatter
  const esPosts = listPosts("es");
  const enPosts = listPosts("en");
  const enBySlug = new Map(enPosts.map((p) => [p.slug, p]));

  for (const p of esPosts) {
    const esUrl = `/blog/${p.slug}`;
    const enSlug = p.frontmatter.translationSlug;
    const enUrl = enSlug && enBySlug.has(enSlug) ? `/en/blog/${enSlug}` : null;

    const alternates = enUrl
      ? {
          languages: {
            es: `${site.url}${esUrl}`,
            en: `${site.url}${enUrl}`,
            "x-default": `${site.url}${esUrl}`,
          },
        }
      : undefined;

    out.push({
      url: `${site.url}${esUrl}`,
      lastModified: new Date(p.frontmatter.date),
      changeFrequency: "monthly",
      priority: 0.65,
      alternates,
    });

    if (enUrl) {
      out.push({
        url: `${site.url}${enUrl}`,
        lastModified: new Date(p.frontmatter.date),
        changeFrequency: "monthly",
        priority: 0.65,
        alternates,
      });
    }
  }

  // Any EN posts without an ES translation
  const esSlugsSet = new Set(esPosts.map((p) => p.slug));
  const esByTranslation = new Set(
    esPosts.map((p) => p.frontmatter.translationSlug).filter(Boolean),
  );
  for (const p of enPosts) {
    if (esByTranslation.has(p.slug)) continue;
    if (esSlugsSet.has(p.slug)) continue;
    out.push({
      url: `${site.url}/en/blog/${p.slug}`,
      lastModified: new Date(p.frontmatter.date),
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  return out;
}
