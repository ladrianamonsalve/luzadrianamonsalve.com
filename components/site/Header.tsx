import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";
import { localePath, type Locale } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale }: { locale: Locale }) {
  const t = content[locale].nav;
  const services = locale === "es" ? "/servicios" : "/en/services";
  const about = locale === "es" ? "/sobre-mi" : "/en/about";
  const testimonials = locale === "es" ? "/testimonios" : "/en/testimonials";
  const blog = locale === "es" ? "/blog" : "/en/blog";
  const contact = locale === "es" ? "/contacto" : "/en/contact";

  return (
    <div className="sticky top-0 z-40">
      <div className="h-1.5 grad-blue" aria-hidden />
      <header className="border-b border-ink-200 bg-white/95 shadow-sm shadow-brand-900/5 backdrop-blur">
        <div className="container-page flex h-20 items-center justify-between gap-4 sm:h-24">
        <Link href={localePath(locale, "/")} className="flex items-center gap-3">
          <Image
            src="/logo-3dk.svg"
            alt="3DK Multi Services"
            width={220}
            height={124}
            priority
            className="h-14 w-auto object-contain sm:h-16 lg:h-20"
          />
          <span className="hidden flex-col leading-tight md:flex">
            <span className="text-sm font-semibold text-ink-900">
              Luz Adriana Monsalve
            </span>
            <span className="text-[11px] uppercase tracking-wider text-ink-500">
              3DK Multi Services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-700 lg:flex">
          <Link href={about} className="hover:text-brand-600">
            {t.about}
          </Link>
          <Link href={services} className="hover:text-brand-600">
            {t.services}
          </Link>
          <Link href={testimonials} className="hover:text-brand-600">
            {t.testimonials}
          </Link>
          <Link href={blog} className="hover:text-brand-600">
            {t.blog}
          </Link>
          <Link href={contact} className="hover:text-brand-600">
            {t.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Link
            href={contact}
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 sm:inline-flex"
          >
            {t.cta}
          </Link>
        </div>
      </div>
      </header>
    </div>
  );
}
