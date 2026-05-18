import Link from "next/link";
import type { Locale } from "@/lib/site";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const otherLocale: Locale = locale === "es" ? "en" : "es";
  const otherHref = otherLocale === "en" ? "/en" : "/";
  const otherLabel = otherLocale === "en" ? "EN" : "ES";
  const currentLabel = locale === "en" ? "EN" : "ES";

  return (
    <div className="flex items-center gap-1 rounded-full border border-ink-200/70 bg-white p-0.5 text-xs font-semibold">
      <span className="rounded-full bg-brand-600 px-2.5 py-1 text-white">
        {currentLabel}
      </span>
      <Link
        href={otherHref}
        hrefLang={otherLocale}
        className="rounded-full px-2.5 py-1 text-ink-500 hover:text-brand-700"
        aria-label={`Switch to ${otherLabel}`}
      >
        {otherLabel}
      </Link>
    </div>
  );
}
