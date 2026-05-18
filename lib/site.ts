export const site = {
  name: "Luz Adriana Monsalve",
  business: "3DK Multi Services",
  domain: "luzadrianamonsalve.com",
  url: "https://luzadrianamonsalve.com",
  email: "ladrianamonsalve@gmail.com",
  phone: "",
  whatsapp: "",
  location: {
    locality: "Gainesville",
    region: "Georgia",
    country: "United States",
    countryCode: "US",
    serviceArea: "All United States",
  },
  social: {
    instagram: "",
    linkedin: "",
    facebook: "",
  },
  credentials: {
    afsp: "IRS Annual Filing Season Program (AFSP) — Annual Federal Tax Refresher",
    ptin: "PTIN — IRS Preparer Tax Identification Number",
    notary: "Notary Public",
    quickbooks: "QuickBooks Certified ProAdvisor",
    realEstate: "Licensed Real Estate Agent",
    degree:
      "Bachelor in Science and Health Administration with a concentration in Management",
  },
  book: {
    title: "Crecí Sin Permiso",
    subtitle:
      "Habla de una niña obligada a madurar, sobrevivir y avanzar sola.",
    publisher: "Legacy",
    cover: "/book-creci-sin-permiso.jpg",
    author: "Luz Adriana Monsalve",
    inLanguage: "es",
    amazonUrl: "https://www.amazon.com/dp/B0GGV7FRYG" as string,
    asin: "B0GGV7FRYG",
  },
  experienceYears: 15,
  founded: 2020,
} as const;

export type Locale = "es" | "en";

export const LOCALES: Locale[] = ["es", "en"];
export const DEFAULT_LOCALE: Locale = "es";

export function localePath(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return `/en${clean === "/" ? "" : clean}`;
  return clean === "/" ? "/" : clean;
}
