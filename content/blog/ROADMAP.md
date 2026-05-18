# Blog content roadmap

Cornerstone articles published (ES + EN):

1. ✅ Cómo llenar AIA G702 y G703 paso a paso / How to fill AIA G702 and G703 step by step
2. ✅ 10 deducciones de impuestos que los contratistas olvidan / 10 tax deductions contractors forget
3. ✅ LLC vs S-Corp para tu empresa de construcción / LLC vs S-Corp for your construction business

Next 12 to write (ordered by SEO opportunity + audience need). Each should be 800-1500 words, both languages, with a closing CTA to `/contacto` (or `/en/contact`).

## Service-driven (high commercial intent)

4. **Job costing en QuickBooks Online para contratistas** / *Job costing in QuickBooks Online for contractors*
   Step-by-step setup: customer:job hierarchy, item codes, class tracking, COGS reports.

5. **Retainage: cómo manejarlo en tus libros sin perder dinero** / *Retainage: how to track it in your books without losing money*
   Where it lives in QuickBooks, when to recognize it as income, lien risk.

6. **Estimated quarterly taxes para contratistas (1040-ES)** / *Quarterly estimated taxes for contractors (1040-ES)*
   How to calculate, safe harbor rule, what happens if you skip.

7. **1099-NEC: cuándo emitirlo y cómo evitar multas del IRS** / *1099-NEC: when to issue it and how to avoid IRS penalties*
   January deadline, due to subs, vendor W-9 requirements, automated tools.

## Education-driven (build authority + topical SEO)

8. **Schedule C: 5 errores que el IRS audita primero** / *Schedule C: the 5 errors the IRS audits first*
   Vehicle deduction inflation, home office misuse, hobby loss, cash deposits, mileage gaps.

9. **ITIN vs SSN: cómo declarar impuestos sin SSN** / *ITIN vs SSN: how to file taxes without an SSN*
   Who needs ITIN, how to apply, what credits you keep, what you lose.

10. **Sales tax en construcción: cuándo cobrarlo y cuándo no** / *Sales tax in construction: when to charge it and when not to*
    State-by-state nuance (VA, MD, DC), real property vs tangible personal property.

## Decision support (high conversion when prospects compare)

11. **Schedule C, Sole Proprietor, LLC: cuál te conviene en tu primer año** / *Schedule C, Sole Proprietor, LLC: which one fits your first year*
    Liability, taxes, complexity. Spectrum from W-2 + side gig to full-time.

12. **Bookkeeper vs CPA vs Tax preparer: en qué se diferencian** / *Bookkeeper vs CPA vs Tax preparer: what's the difference*
    Roles, when you need which, costs, how they overlap.

13. **Cuándo conviene contratar a tu primer empleado vs subcontratistas 1099** / *When to hire your first employee vs 1099 subs*
    Worker classification rules, payroll cost, control test, IRS reclassification risk.

## Year-end / seasonal

14. **Cierre fiscal de fin de año para contratistas: checklist completo** / *Year-end tax close for contractors: complete checklist*
    Publish each November. Bank recs, 1099 prep, accruals, equipment purchases for Section 179.

15. **Cómo prepararte para una auditoría del IRS (calmadamente)** / *How to prepare for an IRS audit (calmly)*
    Document organization, what the IRS actually looks at, when to bring a tax pro.

## Adding a new post

1. Drop a markdown file in `content/blog/es/<slug>.md` and `content/blog/en/<slug>.md`.
2. Frontmatter required:
   ```yaml
   ---
   title: "..."
   description: "..." # 150-160 chars for SEO
   date: "YYYY-MM-DD"
   author: "Luz Adriana Monsalve"
   tags: ["Tag1", "Tag2"]
   translationSlug: "<the-slug-in-the-other-locale>"
   ---
   ```
3. Sitemap and blog index pick it up automatically — no other code changes needed.

## Style notes

- Conversational, written like Luz speaks to a contractor at her kitchen table.
- Numbers are concrete ($, %, mileage rates) — use IRS-current figures for the year.
- Always include a closing soft CTA. The CTAs in the cornerstone articles link to `/contacto` (ES) or `/en/contact` (EN).
- Tables for comparisons (LLC vs S-Corp, brackets, etc.) — they render well via remark-gfm.
- Headings: `##` for main sections, `###` for sub-sections. The post title comes from frontmatter (no `#` in the body).
