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

// Lead Magnet — first guide is the "separating personal vs business finances"
// PDF. Flip `ready` to true once Luz uploads the actual PDF to the public folder
// at the path indicated by `pdfPath`. Until then, the page invites email
// capture but tells visitors the PDF is on the way and they'll get an email.
export const leadMagnets = {
  separarFinanzas: {
    slug: "guia-finanzas",          // ES route: /guia-finanzas
    slugEn: "finance-guide",        // EN route: /en/finance-guide
    titleEs: "Cómo Separar tus Finanzas Personales del Negocio en 30 Minutos",
    titleEn: "How to Separate Your Personal and Business Finances in 30 Minutes",
    pdfPath: "/guia-separar-finanzas.pdf",   // file Luz uploads to /public/
    coverImage: "/logo-3dk.png",             // until cover PNG is uploaded
    ready: false,                            // flip to true after PDF is uploaded
    hubspotTag: "Lead Magnet: Guía Finanzas",
  },
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
  bookkeepingBasic: "https://buy.stripe.com/5kQ6oJ5MxgjJgbq01Ff7i01",    // Plan Básico bookkeeping ($275/mes, suscripción)
  bookkeepingStandard: "https://buy.stripe.com/00w8wRfn79Vl7EU15Jf7i00", // Plan Estándar bookkeeping ($425/mes, suscripción)
  bookkeepingPremium: "https://buy.stripe.com/dRm6oJdeZ9Vl5wMg0Df7i02",  // Plan Premium bookkeeping ($695/mes, suscripción)
  g702Single: "https://buy.stripe.com/00wfZjfn78Rh6AQg0Df7i03",          // G702/G703 por aplicación con notaría ($35, único)
  g702Monthly: "https://buy.stripe.com/00wdRb1wh0kLcZe6q3f7i07",         // G702/G703 Plan 3 Proyectos ($99/mes, hasta 3 apps/mes)
  lienWaiver: "https://buy.stripe.com/7sY5kFej31oPaR67u7f7i04",          // Lien Waiver notarizado ($20, único)
  poaBilingual: "https://buy.stripe.com/dRm4gB1whd7xaR6dSvf7i0h",        // Notarización Bilingüe de Poder Notarial ($135, único)
  translation: "https://buy.stripe.com/7sY6oJ5Mxd7xcZeaGjf7i06",         // Traducción Notarizada de Documentos ($145, único)
  itinComplete: "https://buy.stripe.com/7sY00lfn79Vl1gweWzf7i0g",        // ITIN Solicitud Completa (W-7 propio + CAA coordinado de red) ($300, público)
  consult30: "https://buy.stripe.com/6oUcN71wh8Rh0cs5lZf7i0a",           // Consulta 30 min ($49.99, crédito 100% si contrata Básico/Estándar)
  consult60: "https://buy.stripe.com/4gM4gBgrb0kL6AQ5lZf7i09",           // Consulta 1 hora ($99.99, crédito 100% si contrata Premium)
  qbSetupStarter: "https://buy.stripe.com/4gM4gBb6R6J9f7mg0Df7i0d",      // QB Setup Starter ($375, GRATIS con cualquier Bookkeeping)
  qbSetupSmall: "https://buy.stripe.com/9B6bJ37UFffF0csg0Df7i0c",        // QB Setup Small Business ($725, GRATIS con Estándar/Premium)
  qbSetupFull: "https://buy.stripe.com/28EbJ3deZ5F5gbqdSvf7i0b",         // QB Setup Full Business ($1,395, GRATIS con Premium)
  form1099: "https://buy.stripe.com/dRm8wR0sd7Nd7EU9Cff7i0e",            // 1099-NEC por documento ($45, único)
  businessFormation: "https://buy.stripe.com/14A7sN4ItebBbVa8ybf7i0i",   // Registro de Empresa LLC/Corp ($1,800 base, varía por estado)
  // itinW7Only removed — IRS requires W-7 to be filed WITH a tax return,
  // so nobody buys just the W-7 prep standalone. ITIN clients always need
  // the accompanying tax-return prep, which Luz quotes separately based on
  // the client's situation (via Stripe Invoicing, not Payment Link).
  // itinCAAOnly removed — Luz is not CAA yet; works toward CAA cert.
  // Coordinates CAA through colleague network for the "Complete" service.
  // Re-enable when CAA approval comes through from IRS.
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
