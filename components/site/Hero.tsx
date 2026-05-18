import Link from "next/link";
import { content } from "@/lib/content";
import { localePath, type Locale } from "@/lib/site";
import { FadeUp } from "./FadeUp";

export function Hero({ locale }: { locale: Locale }) {
  const t = content[locale].hero;
  const services = locale === "es" ? "/servicios" : "/en/services";
  const contact = locale === "es" ? "/contacto" : "/en/contact";

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 grad-soft" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative pb-20 pt-20 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-28">
        <FadeUp>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            {t.eyebrow}
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {t.title}
            <span className="block text-brand-600">{t.titleHighlight}</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-ink-500">
            {t.subtitle}
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={contact}
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              {t.primaryCta}
            </Link>
            <Link
              href={services}
              className="inline-flex h-12 items-center justify-center rounded-full border border-ink-200 bg-white px-6 text-sm font-semibold text-ink-900 transition hover:border-brand-600 hover:text-brand-700"
            >
              {t.secondaryCta}
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {t.badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-xs font-medium text-ink-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                {b}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
