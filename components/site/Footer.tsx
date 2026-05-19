import Image from "next/image";
import Link from "next/link";
import { CopyEmail } from "./CopyEmail";
import { content } from "@/lib/content";
import { site, type Locale } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const t = content[locale].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-3dk.svg"
                alt="3DK Multi Services"
                width={220}
                height={124}
                className="h-16 w-auto object-contain sm:h-20"
              />
              <div className="leading-tight">
                <div className="text-sm font-semibold text-ink-900">
                  Luz Adriana Monsalve
                </div>
                <div className="text-[11px] uppercase tracking-wider text-ink-500">
                  3DK Multi Services
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-ink-500">{t.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
              <span className="rounded-full bg-brand-100/60 px-2.5 py-1">
                IRS AFSP
              </span>
              <span className="rounded-full bg-brand-100/60 px-2.5 py-1">
                Notary Public
              </span>
              <span className="rounded-full bg-brand-100/60 px-2.5 py-1">
                PTIN
              </span>
            </div>
          </div>

          {t.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-900">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-500">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-brand-700">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-900">
              {locale === "es" ? "Contacto" : "Contact"}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-500">
              <li>
                <CopyEmail
                  email={site.email}
                  locale={locale}
                  className="text-ink-500 hover:text-brand-700"
                />
              </li>
              <li>{site.location.locality}, {site.location.region}</li>
              <li>{locale === "es" ? "Servicio en todo Estados Unidos" : "Service across all United States"}</li>
              <li>{locale === "es" ? "Atención bilingüe ES / EN" : "Bilingual EN / ES service"}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-200/70 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>
            © {year} {site.business}. {t.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link
              href={locale === "es" ? "/terminos" : "/en/terms"}
              className="hover:text-brand-700"
            >
              {locale === "es"
                ? "Términos, reembolsos y privacidad"
                : "Terms, refunds & privacy"}
            </Link>
            <span aria-hidden className="text-ink-300">·</span>
            <span>{site.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
