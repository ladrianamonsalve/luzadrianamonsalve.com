import Image from "next/image";
import Link from "next/link";
import { site, type Locale } from "@/lib/site";
import { FadeUp } from "./FadeUp";

export function AuthorBanner({ locale }: { locale: Locale }) {
  const aboutHref = locale === "es" ? "/sobre-mi" : "/en/about";
  const t =
    locale === "es"
      ? {
          eyebrow: "Autora publicada",
          subtitle:
            "Habla de una niña obligada a madurar, sobrevivir y avanzar sola.",
          body:
            "Antes de poner orden en los números de mis clientes, puse orden en mi propia historia. La escribí, la publiqué y ahora la comparto. Esa misma fuerza es la que llevo a cada empresa que me confía sus libros y sus impuestos.",
          publisher: "Publicado por",
          inLanguage: "En español",
          available: "Disponible en Amazon",
          knowMore: "Conoce mi historia",
          buyAmazon: "Comprar en Amazon",
        }
      : {
          eyebrow: "Published author",
          subtitle:
            "The story of a girl forced to mature, survive and move forward alone.",
          body:
            "Before I brought order to my clients' numbers, I brought order to my own story. I wrote it, published it, and now I share it. The same strength is what I bring to every business that trusts me with their books and taxes.",
          publisher: "Published by",
          inLanguage: "In Spanish",
          available: "Available on Amazon",
          knowMore: "Read my story",
          buyAmazon: "Buy on Amazon",
        };

  return (
    <section className="section-pad relative overflow-hidden bg-white">
      <div className="absolute inset-0 grad-soft" aria-hidden />
      <div
        className="absolute -top-24 right-[-10%] -z-10 h-72 w-[28rem] rounded-full bg-brand-500/10 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:items-center lg:gap-16">
        <FadeUp>
          <div className="relative mx-auto max-w-[260px] lg:mx-0 lg:max-w-[320px]">
            <div
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/25 via-brand-300/40 to-transparent blur-2xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white shadow-2xl shadow-brand-900/20 ring-1 ring-ink-200/60">
              <Image
                src="/book-creci-sin-permiso.jpg"
                alt={`${site.book.title} — ${site.book.author}`}
                width={968}
                height={1489}
                sizes="(max-width: 1024px) 260px, 320px"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden rotate-3 rounded-2xl bg-ink-900 px-3 py-2 text-xs font-semibold text-white shadow-lg sm:block">
              <span className="text-amber-400">★</span> {t.eyebrow}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 h-display text-3xl sm:text-4xl lg:text-5xl">
              {site.book.title}
            </h2>
            <p className="mt-3 text-base italic leading-7 text-ink-500 sm:text-lg">
              {t.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-ink-700">
              {t.body}
            </p>
            <p className="mt-5 text-sm text-ink-500">
              {t.publisher}{" "}
              <span className="font-semibold text-ink-900">
                {site.book.publisher}
              </span>{" "}
              · {t.inLanguage} · {t.available}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {site.book.amazonUrl && (
                <a
                  href={site.book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
                >
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-[#FF9900]"
                  >
                    <path d="M14.46 14.21c-1.55 1.14-3.78 1.75-5.7 1.75-2.7 0-5.13-1-6.97-2.66-.14-.13-.02-.31.16-.21 1.99 1.16 4.45 1.85 6.99 1.85 1.72 0 3.6-.36 5.34-1.1.27-.11.49.18.18.37zm.65-.74c-.2-.25-1.3-.12-1.8-.06-.15.02-.17-.11-.04-.21.88-.62 2.32-.44 2.49-.23.17.21-.05 1.64-.87 2.32-.13.11-.25.05-.19-.09.18-.45.6-1.46.41-1.73z" />
                    <path d="M14.51 11.05V9.83c0-.18.14-.31.31-.31h5.43c.18 0 .32.13.32.31v1.05c0 .17-.15.4-.42.76l-2.82 4.02c1.05-.02 2.15.13 3.1.67.21.12.27.3.29.47v1.31c0 .18-.2.39-.4.28-1.68-.88-3.9-.97-5.76 0-.19.1-.39-.1-.39-.28v-1.24c0-.2 0-.55.21-.86l3.26-4.68h-2.84c-.17 0-.31-.13-.31-.31z" />
                  </svg>
                  {t.buyAmazon}
                  <span aria-hidden>→</span>
                </a>
              )}
              <Link
                href={aboutHref}
                className="inline-flex h-12 items-center justify-center rounded-full border border-ink-200 bg-white px-6 text-sm font-semibold text-ink-900 transition hover:border-brand-600 hover:text-brand-700"
              >
                {t.knowMore}
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
