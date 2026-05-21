import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";
import { FadeUp } from "./FadeUp";

export function TestimonialsSection({ locale }: { locale: Locale }) {
  const t = content[locale].testimonials;
  const single = t.items.length === 1;

  return (
    <section className="section-pad bg-ink-50">
      <div className="container-page">
        <FadeUp>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 h-display text-3xl sm:text-4xl">{t.title}</h2>
          </div>
        </FadeUp>

        <div
          className={
            single
              ? "mt-12 mx-auto max-w-2xl"
              : "mt-12 grid gap-5 md:grid-cols-2"
          }
        >
          {t.items.map((it, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-ink-200/70 bg-white p-7 sm:p-8">
                <svg
                  className="h-8 w-8 text-brand-400"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M9.352 4C5.146 4 2 7.146 2 11.352c0 4.207 3.146 7.353 7.352 7.353h.74C9.352 22.353 6.94 24.18 4.46 24.353v3.293c5.92 0 11.84-4.207 11.84-12.293V11.353C16.298 7.146 13.558 4 9.352 4zm15.293 0c-4.206 0-7.352 3.146-7.352 7.352 0 4.207 3.146 7.353 7.352 7.353h.74c-.74 3.648-3.146 5.475-5.626 5.648v3.293c5.92 0 11.84-4.207 11.84-12.293v-4.001C30.6 7.146 27.85 4 24.645 4z" />
                </svg>
                <blockquote className="mt-4 text-base leading-7 text-ink-700 sm:text-lg sm:leading-8">
                  “{it.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-semibold text-ink-900">{it.author}</div>
                  <div className="text-ink-500">{it.role}</div>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>

        {single && (
          <FadeUp delay={0.15}>
            <p className="mt-8 text-center text-sm text-ink-500">
              {locale === "es"
                ? "Pronto más historias — los clientes están compartiendo sus experiencias."
                : "More stories coming soon — clients are sharing their experiences."}
            </p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
