"use client";

import type { Locale } from "@/lib/site";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const otherLocale: Locale = locale === "es" ? "en" : "es";
  const otherHref = otherLocale === "en" ? "/en" : "/";
  const otherLabel = otherLocale === "en" ? "English" : "Español";
  const currentFlag = locale === "es" ? "🇨🇴" : "🇺🇸";
  const otherFlag = otherLocale === "es" ? "🇨🇴" : "🇺🇸";

  function switchLocale(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // Persist user's explicit choice for 1 year.
    document.cookie = `NEXT_LOCALE=${otherLocale}; path=/; max-age=31536000; samesite=lax`;
    // Use a full reload (not Next client-side nav) so the new locale is
    // re-resolved from scratch and any cached layout state is dropped.
    window.location.href = otherHref;
  }

  return (
    <button
      type="button"
      onClick={switchLocale}
      aria-label={`Switch language to ${otherLabel}`}
      className="group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-700 transition hover:border-brand-600 hover:text-brand-700"
    >
      <span aria-hidden className="text-base leading-none">{currentFlag}</span>
      <span className="hidden sm:inline">
        {locale === "es" ? "Español" : "English"}
      </span>
      <span aria-hidden className="text-ink-300">·</span>
      <span className="inline-flex items-center gap-1.5">
        <span aria-hidden className="text-base leading-none opacity-70 group-hover:opacity-100">
          {otherFlag}
        </span>
        <span className="text-ink-500 group-hover:text-brand-700">
          {otherLabel}
        </span>
      </span>
    </button>
  );
}
