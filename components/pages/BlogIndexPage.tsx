import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactCTA } from "@/components/site/ContactCTA";
import { JsonLd } from "@/components/site/JsonLd";
import { FadeUp } from "@/components/site/FadeUp";
import { breadcrumbSchema } from "@/lib/schemas";
import { content } from "@/lib/content";
import { listPosts, formatPostDate } from "@/lib/blog";
import type { Locale } from "@/lib/site";

export function BlogIndexPage({ locale }: { locale: Locale }) {
  const t = content[locale].pages.blog;
  const url = locale === "es" ? "/blog" : "/en/blog";
  const posts = listPosts(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          {
            name: locale === "es" ? "Inicio" : "Home",
            url: locale === "es" ? "/" : "/en",
          },
          { name: t.title, url },
        ])}
      />

      <PageHeader title={t.title} lead={t.lead} />

      <section className="section-pad bg-white">
        <div className="container-page">
          {posts.length === 0 ? (
            <FadeUp>
              <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-ink-200 bg-ink-50 p-10 text-center">
                <div className="text-3xl">📝</div>
                <h2 className="mt-3 text-xl font-semibold text-ink-900">
                  {t.soon}
                </h2>
              </div>
            </FadeUp>
          ) : (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <FadeUp key={p.slug} delay={i * 0.04}>
                  <li className="h-full">
                    <Link
                      href={`${url}/${p.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-ink-200/70 bg-white p-6 transition hover:border-brand-400 hover:shadow-md"
                    >
                      <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                        {(p.frontmatter.tags ?? []).slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-brand-50 px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="mt-3 text-lg font-semibold leading-snug text-ink-900 group-hover:text-brand-700">
                        {p.frontmatter.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-ink-500">
                        {p.frontmatter.description}
                      </p>
                      <div className="mt-6 flex items-center justify-between text-xs text-ink-500">
                        <time dateTime={p.frontmatter.date}>
                          {formatPostDate(p.frontmatter.date, locale)}
                        </time>
                        <span>
                          {p.readingMinutes}{" "}
                          {locale === "es" ? "min de lectura" : "min read"}
                        </span>
                      </div>
                    </Link>
                  </li>
                </FadeUp>
              ))}
            </ul>
          )}
        </div>
      </section>

      <ContactCTA locale={locale} />
    </>
  );
}
