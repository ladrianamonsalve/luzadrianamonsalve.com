import Link from "next/link";
import type { Locale } from "@/lib/site";
import { FadeUp } from "./FadeUp";

export function ContactCTA({ locale }: { locale: Locale }) {
  const href = locale === "es" ? "/contacto" : "/en/contact";
  const heading =
    locale === "es"
      ? "¿Listo para ordenar tu contabilidad?"
      : "Ready to clean up your books?";
  const sub =
    locale === "es"
      ? "Agenda una consulta gratis. Te explico qué necesita tu negocio."
      : "Book a free consultation. I'll tell you exactly what your business needs.";
  const cta =
    locale === "es" ? "Agendar consulta" : "Book consultation";

  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-brand-50/60 p-10 sm:p-14">
            <div
              className="absolute -top-12 right-0 h-48 w-48 rounded-full bg-brand-400/30 blur-3xl"
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <h2 className="h-display text-3xl sm:text-4xl">{heading}</h2>
              <p className="mt-4 text-base leading-7 text-ink-700">{sub}</p>
              <Link
                href={href}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                {cta}
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
