import Link from "next/link";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";
import { FadeUp } from "./FadeUp";

export function ServicesGrid({
  locale,
  showHeading = true,
}: {
  locale: Locale;
  showHeading?: boolean;
}) {
  const t = content[locale].services;

  return (
    <section className="section-pad bg-ink-50">
      <div className="container-page">
        {showHeading && (
          <FadeUp>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                {t.eyebrow}
              </p>
              <h2 className="mt-3 h-display text-3xl sm:text-4xl">{t.title}</h2>
              <p className="mt-4 text-base leading-7 text-ink-500">
                {t.subtitle}
              </p>
            </div>
          </FadeUp>
        )}

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {t.items.map((item, i) => (
            <FadeUp key={item.slug} delay={i * 0.05}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-ink-200/70 bg-white p-6 transition hover:border-brand-400 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-ink-900">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                    {item.slug.replace("-", " · ")}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-ink-500">
                  {item.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-ink-700">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <svg
                        className="mt-0.5 h-4 w-4 flex-none text-brand-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.09l6.79-6.8a1 1 0 011.414 0z"
                        />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2 transition-all">
                  {locale === "es" ? "Más detalles" : "More details"}
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
