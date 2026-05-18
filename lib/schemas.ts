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
    image: `${site.url}/luz-portrait.jpg`,
    jobTitle: "Tax Preparer, Bookkeeper, Notary Public & Real Estate Agent",
    worksFor: { "@id": `${site.url}#org` },
    knowsLanguage: ["es", "en"],
    knowsAbout: [
      "Tax preparation",
      "Personal income tax (Form 1040)",
      "Business income tax (Form 1120, 1120S, 1065)",
      "Schedule C — Self-employed",
      "1099-NEC preparation",
      "ITIN application (Form W-7)",
      "Bookkeeping",
      "QuickBooks Online",
      "QuickBooks Desktop",
      "AIA G702",
      "AIA G703",
      "Lien waivers",
      "Construction accounting",
      "Job costing",
      "Retainage",
      "Change orders",
      "Bank reconciliation",
      "Accounts payable",
      "Accounts receivable",
      "IRS AFSP",
      "Notary services",
      "Real estate",
      "Small business finance",
      "Company setup",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "IRS Annual Filing Season Program (AFSP)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "QuickBooks Certified",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Notary Public",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Real Estate Agent",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "registration",
        name: "IRS Preparer Tax Identification Number (PTIN)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Bachelor in Science and Health Administration with a concentration in Management",
      },
    ],
    email: `mailto:${site.email}`,
    mainEntityOfPage: site.url,
  };
}

export function bookSchema() {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `${site.url}#book-creci-sin-permiso`,
    name: site.book.title,
    description: site.book.subtitle,
    author: { "@id": `${site.url}#person` },
    publisher: { "@type": "Organization", name: site.book.publisher },
    inLanguage: site.book.inLanguage,
    image: `${site.url}${site.book.cover}`,
    bookFormat: "https://schema.org/Paperback",
  };
  if (site.book.amazonUrl) {
    base.url = site.book.amazonUrl;
    base.offers = {
      "@type": "Offer",
      url: site.book.amazonUrl,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Amazon.com" },
    };
  }
  return base;
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
      addressLocality: site.location.locality,
      addressRegion: site.location.region,
      addressCountry: site.location.countryCode,
    },
    areaServed: { "@type": "Country", name: "United States" },
    email: site.email,
    priceRange: "$$",
    knowsLanguage: ["es", "en"],
    serviceType: [
      "Tax Preparation (Personal and Business)",
      "1099 Preparation",
      "ITIN Application",
      "Bookkeeping",
      "QuickBooks Setup",
      "Invoicing",
      "Accounts Payable",
      "Accounts Receivable",
      "Bank Reconciliation",
      "AIA G702/G703 Preparation",
      "Lien Waivers",
      "Notary Public",
      "Company Setup",
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
