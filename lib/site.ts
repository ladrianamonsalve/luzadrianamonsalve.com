export const site = {
  name: "Luz Adriana Monsalve",
  business: "3DK Multi Services",
  domain: "luzadrianamonsalve.com",
  url: "https://luzadrianamonsalve.com",
  email: "info@3dkmultiservices.com",
  phone: "+1 678-599-0143",
  whatsapp: "+1 678-599-0143",
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

// Stripe Payment Links — leave empty strings until Stripe is verified and
// the user has generated each link from her Stripe dashboard. When a link
// is empty the matching button shows a "Soon" state or hides; when it has
// a real URL the button activates and points there.
//
// To add a new product:
// 1. Stripe dashboard → Products → "+ Add product" → set price + recurring (or one-time)
// 2. After saving the price, scroll down to "Payment links" → "Create payment link"
// 3. Copy the resulting buy.stripe.com URL and paste below.
export const stripeLinks = {
  bookkeepingBasic: "",    // Plan Básico bookkeeping ($275/mes, suscripción)
  bookkeepingStandard: "", // Plan Estándar bookkeeping ($425/mes, suscripción)
  bookkeepingPremium: "",  // Plan Premium bookkeeping ($695/mes, suscripción)
  g702Single: "",          // G702/G703 por aplicación con notaría ($35, único)
  g702Monthly: "",         // G702/G703 Plan 3 Proyectos ($99/mes, hasta 3 apps/mes)
  lienWaiver: "",          // Lien Waiver notarizado ($20, único)
  poaBilingual: "",        // Notarización Bilingüe de Poder Notarial ($135, único)
  translation: "",         // Traducción Notarizada de Documentos ($145, único)
} as const;

export type StripeLinkKey = keyof typeof stripeLinks;


export type Locale = "es" | "en";

export const LOCALES: Locale[] = ["es", "en"];
export const DEFAULT_LOCALE: Locale = "es";

export function localePath(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return `/en${clean === "/" ? "" : clean}`;
  return clean === "/" ? "/" : clean;
}
