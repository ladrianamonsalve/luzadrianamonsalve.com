import Link from "next/link";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/site";
import { FadeUp } from "./FadeUp";

export function AboutSection({ locale }: { locale: Locale }) {
  const t = content[locale].about;
  const aboutHref = locale === "es" ? "/sobre-mi" : "/en/about";

  return (
    <section className="section-pad bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <FadeUp>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 h-display text-3xl sm:text-4xl">{t.title}</h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-ink-700">
              {t.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link
              href={aboutHref}
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:gap-2.5 transition-all"
            >
              {t.cta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="rounded-2xl border border-ink-200/70 bg-ink-50 p-6 sm:p-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-900">
              {t.credentialsTitle}
            </h3>
            <ul className="mt-5 space-y-5">
              {t.credentials.map((c) => (
                <li key={c.title} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-600 text-white">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink-900">
                      {c.title}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-ink-500">
                      {c.description}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
