@AGENTS.md

# luzadrianamonsalve.com — Project rules

This file is the contract for any AI assistant (Claude Code, Cursor, etc.) working in this repo.
It implements the Digital Authority Blueprint v2.0 (DAB) deploy rules and project conventions.

## Project context

- **Site**: luzadrianamonsalve.com
- **Owner**: Luz Adriana Monsalve — 3DK Multi Services
- **Niche**: Bilingual bookkeeping, AIA G702/G703, notary and tax preparation for small US construction businesses
- **Audience**: General contractors, subcontractors, and small business owners (many Hispanic-owned) in Virginia, Maryland, DC and broader USA
- **Languages**: Spanish (default at root) + English (under `/en/`)

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 (via `@theme` tokens in `app/globals.css`)
- Framer Motion (for `<FadeUp>` only — keep animations subtle)
- Geist font
- Schema.org JSON-LD: `Person`, `LocalBusiness` (+ `AccountingService`, `ProfessionalService`), `WebSite`, `Service`, `BreadcrumbList`, `FAQPage`
- Light theme (intentional — financial services audience, NOT the dark "thought-leader" theme from the DAB PDF)
- Brand colors: blue `#1e5fbe` (logo), slate grays, white background

## Deploy rules — non-negotiable

These are the 4 rules from the DAB v2.0 deploy checklist. Burned in here so future
sessions don't relax them.

1. **NEVER push directly to `main`.** Always branch + PR + merge.
   ```bash
   git checkout -b feat/<short-name> origin/main
   # do work
   git push -u origin feat/<short-name>
   gh pr create --base main
   ```
2. **NEVER run `vercel --prod` or `vercel deploy --prod` manually.**
   GitHub Actions / Vercel auto-deploy on merge to `main`.
3. **Every env var added to Vercel must be verified non-empty.**
   ```bash
   vercel env pull /tmp/v.env
   # confirm KEY= has a value, not KEY=""
   ```
4. **If the production alias has ever been manually pinned, every merge
   requires `vercel alias set <new-deployment-url> luzadrianamonsalve.com`**
   with a pre-flight `curl` parity check between old and new deployments.

### Why

Without these rules, prior projects have had: cross-project leakage (a worktree's
code went live on the wrong domain), 401/500 errors from silently-empty env vars,
stale lambdas serving old env values, and 5-second-reversible alias misses that
cost hours to diagnose.

## Repository conventions

### File layout

```
app/
  layout.tsx              # Root layout — dynamic html lang via x-pathname header
  page.tsx                # ES home (locale="es")
  sobre-mi/page.tsx
  servicios/page.tsx
  servicios/bookkeeping/page.tsx
  servicios/g702-g703/page.tsx
  servicios/notaria/page.tsx
  servicios/impuestos/page.tsx
  testimonios/page.tsx
  blog/page.tsx
  contacto/page.tsx
  en/
    page.tsx              # EN home (locale="en")
    about/page.tsx
    services/page.tsx
    services/{bookkeeping,g702-g703,notary,tax-preparation}/page.tsx
    testimonials/page.tsx
    blog/page.tsx
    contact/page.tsx
  api/contact/route.ts    # Resend integration (no-op without RESEND_API_KEY)
  robots.ts               # 13+ AI crawlers allowed
  sitemap.ts              # Bilingual sitemap with hreflang alternates
  globals.css

components/
  pages/                  # One file per page type, locale-agnostic
  site/                   # Header, Footer, Hero, Stats, ServicesGrid, etc.

lib/
  site.ts                 # Constants (name, domain, email, location)
  content.ts              # Bilingual dictionary — DO NOT scatter strings in components
  services-content.ts     # Detail content for the 4 service sub-pages
  schemas.ts              # Schema.org generators (Person, LocalBusiness, etc.)
  locale.ts               # getLocale() reads x-pathname header set by middleware

middleware.ts             # Sets x-pathname; redirects "/" → "/en" when accept-language is English-only
```

### Page pattern

Every route file is a thin shell:

```tsx
// app/<route>/page.tsx
import type { Metadata } from "next";
import { SomePage } from "@/components/pages/SomePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "...",
  description: "...",
  alternates: {
    canonical: `${site.url}/<route>`,
    languages: {
      es: `${site.url}/<route-es>`,
      en: `${site.url}/<route-en>`,
    },
  },
};

export default function Page() {
  return <SomePage locale="es" />;
}
```

The page component lives in `components/pages/` and takes a `locale` prop.

### i18n

- Default Spanish at `/`. English under `/en/`.
- `middleware.ts` redirects `/` to `/en` only when `Accept-Language` is English
  and does **not** include Spanish. Spanish-speakers on English-locale browsers
  stay on `/`.
- `<html lang>` is set dynamically by reading the `x-pathname` header in
  `app/layout.tsx`. Root layout is per-request dynamic — accepted tradeoff for
  correct screen-reader / SEO `lang` attribute.
- Every page must export `alternates.languages` with both `es` and `en` URLs.

### Schema.org

- `Person` + `LocalBusiness` + `WebSite` are injected in `app/layout.tsx` site-wide.
- Page-level breadcrumbs use `breadcrumbSchema()`.
- Service pages emit `Service` + `FAQPage` schemas via `<JsonLd>`.

### Adding a new service page

1. Add the service detail block to both `es` and `en` in `lib/services-content.ts`.
2. Add a route file at `app/servicios/<slug>/page.tsx` and `app/en/services/<slug>/page.tsx`.
3. Add the URL pair to `app/sitemap.ts`.
4. Update the services index card in `lib/content.ts` (both locales).

### Adding a new top-level page

1. Decide canonical Spanish slug and English slug.
2. Add to `lib/content.ts` navigation + footer if user-visible.
3. Create `components/pages/<Name>Page.tsx` accepting `locale`.
4. Create both `app/<es-slug>/page.tsx` and `app/en/<en-slug>/page.tsx`.
5. Add to `app/sitemap.ts`.

## Environment variables

| Name | Required for | Notes |
|---|---|---|
| `RESEND_API_KEY` | `/api/contact` real email send | If missing, API logs payload and returns success (dev mode). |
| `CONTACT_TO_EMAIL` | Optional | Defaults to `site.email` in `lib/site.ts`. |
| `CONTACT_FROM_EMAIL` | Optional | Defaults to `onboarding@resend.dev`. After domain verification, switch to `hola@luzadrianamonsalve.com`. |

## Phase status (DAB v2.0)

- [x] Phase 1: Premium site (this repo)
- [ ] Phase 2: Contact form + WhatsApp integration (RESEND_API_KEY + WhatsApp number pending)
- [ ] Phase 3: SEO + IndexNow + Google Search Console
- [ ] Phase 4: Authority platforms (LinkedIn, Google Business Profile, Yelp; Wikidata if applicable)
- [ ] Phase 5: Digital PR — likely not applicable for this niche; revisit
- [ ] Phase 6: AI optimization checklist
- [ ] Phase 7: Maintenance cadence

## Local development

```bash
npm install
npm run dev      # http://localhost:3000  (Turbopack)
npm run build    # Production build
npm run start    # Run production build
```

## Gotchas

- The project lives inside a OneDrive folder. `node_modules` and `.next` may
  cause OneDrive sync churn. If sync gets noisy, exclude those folders from
  sync via OneDrive Settings → "Choose folders".
- The dynamic `<html lang>` makes `app/layout.tsx` per-request dynamic.
- The blog and testimonials pages render placeholders. They're wired with
  schema + routing so adding real content is a content-only change.
