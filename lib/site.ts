export const site = {
  name: "Luz Adriana Monsalve",
  business: "3DK Multi Services",
  domain: "luzadrianamonsalve.com",
  url: "https://luzadrianamonsalve.com",
  email: "ladrianamonsalve@gmail.com",
  phone: "",
  whatsapp: "",
  location: {
    region: "Virginia",
    country: "United States",
    countryCode: "US",
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
  },
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
