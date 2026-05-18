import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";
import { type Locale } from "@/lib/site";
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
      <div className="container-page relative pb-16 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                {t.eyebrow}
              </div>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
                {t.title}
                <span className="block text-brand-600">{t.titleHighlight}</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-7 text-ink-500">
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

          <FadeUp delay={0.1}>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/15 via-brand-200/40 to-transparent blur-2xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-brand-900/10 ring-1 ring-ink-200/60">
                <Image
                  src="/luz-portrait.jpg"
                  alt="Luz Adriana Monsalve — Fundadora de 3DK Multi Services"
                  width={1066}
                  height={1600}
                  priority
                  sizes="(max-width: 1024px) 360px, 440px"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-ink-200/70 bg-white px-4 py-2 text-xs font-semibold text-ink-900 shadow-md sm:inline-flex">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M10 1l2.39 5.59L18.5 7.5l-4.5 4 1.06 6.1L10 14.77 4.94 17.6 6 11.5l-4.5-4 6.11-.91L10 1z" />
                  </svg>
                </span>
                <span>IRS AFSP · PTIN · Notary</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
