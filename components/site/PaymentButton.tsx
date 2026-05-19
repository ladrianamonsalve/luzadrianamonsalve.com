import { stripeLinks, type StripeLinkKey, type Locale } from "@/lib/site";

type Variant = "primary" | "secondary";

export function PaymentButton({
  linkKey,
  label,
  locale = "es",
  variant = "primary",
  amount,
  recurring = false,
  className,
}: {
  linkKey: StripeLinkKey;
  label?: string;
  locale?: Locale;
  variant?: Variant;
  amount?: string;
  recurring?: boolean;
  className?: string;
}) {
  const url = stripeLinks[linkKey];
  const isActive = url.length > 0;

  const defaultLabel =
    locale === "es"
      ? recurring
        ? "Suscribirme"
        : "Pagar ahora"
      : recurring
        ? "Subscribe"
        : "Pay now";

  const finalLabel = label ?? defaultLabel;

  const baseClasses =
    "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold shadow-sm transition disabled:cursor-not-allowed disabled:opacity-60";
  const variantClasses =
    variant === "primary"
      ? "bg-brand-600 text-white hover:bg-brand-700"
      : "border border-ink-200 bg-white text-ink-900 hover:border-brand-600 hover:text-brand-700";

  if (!isActive) {
    return (
      <button
        type="button"
        disabled
        title={
          locale === "es"
            ? "Próximamente — todavía no configurado"
            : "Coming soon — not yet configured"
        }
        className={`${baseClasses} ${variantClasses} ${className ?? ""}`}
      >
        {finalLabel}
        {amount ? <span className="opacity-80">· {amount}</span> : null}
        <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
          {locale === "es" ? "Próximamente" : "Soon"}
        </span>
      </button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses} ${className ?? ""}`}
    >
      {finalLabel}
      {amount ? <span className="opacity-90">· {amount}</span> : null}
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden
        className="ml-1 h-4 w-4"
      >
        <path d="M7.5 4a.5.5 0 010-1H16a1 1 0 011 1v8.5a.5.5 0 11-1 0V4.7L4.85 15.85a.5.5 0 11-.7-.7L15.3 4H7.5z" />
      </svg>
    </a>
  );
}
