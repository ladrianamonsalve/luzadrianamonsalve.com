import { site, type Locale } from "./site";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}#person`,
    name: site.name,
    givenName: "Luz Adriana",
    familyName: "Monsalve",
    url: site.url,
    image: `${site.url}/logo-3dk.png`,
    jobTitle: "Bookkeeper, Tax Preparer & Notary Public",
    worksFor: { "@id": `${site.url}#org` },
    knowsLanguage: ["es", "en"],
    knowsAbout: [
      "Bookkeeping",
      "QuickBooks",
      "AIA G702",
      "AIA G703",
      "Construction accounting",
      "Tax preparation",
      "IRS AFSP",
      "Notary services",
      "Small business finance",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "IRS Annual Filing Season Program (AFSP)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Notary Public",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "registration",
        name: "IRS Preparer Tax Identification Number (PTIN)",
      },
    ],
    email: `mailto:${site.email}`,
    mainEntityOfPage: site.url,
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AccountingService", "ProfessionalService"],
    "@id": `${site.url}#org`,
    name: site.business,
    legalName: "3DK Multi Services",
    url: site.url,
    logo: `${site.url}/logo-3dk.png`,
    image: `${site.url}/logo-3dk.png`,
    description:
      "Bookkeeping, notary and tax preparation services for small construction businesses. Bilingual English / Spanish.",
    founder: { "@id": `${site.url}#person` },
    foundingDate: `${site.founded}-01-01`,
    address: {
      "@type": "PostalAddress",
      addressRegion: site.location.region,
      addressCountry: site.location.countryCode,
    },
    areaServed: [
      { "@type": "State", name: "Virginia" },
      { "@type": "State", name: "Maryland" },
      { "@type": "Country", name: "United States" },
    ],
    email: site.email,
    priceRange: "$$",
    knowsLanguage: ["es", "en"],
    serviceType: [
      "Bookkeeping",
      "AIA G702/G703 Preparation",
      "Notary Public",
      "Tax Preparation",
    ],
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    url: site.url,
    name: `${site.business} — ${site.name}`,
    inLanguage: locale === "es" ? "es" : "en",
    publisher: { "@id": `${site.url}#org` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/${locale === "es" ? "" : "en/"}contacto`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${site.url}${it.url}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: opts.locale === "es" ? "es" : "en",
    provider: { "@id": `${site.url}#org` },
    areaServed: { "@type": "Country", name: "United States" },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

export function jsonLdString(data: object | object[]): string {
  const payload = Array.isArray(data) ? data : [data];
  return JSON.stringify(payload);
}
