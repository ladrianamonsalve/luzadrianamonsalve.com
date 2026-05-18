import Link from "next/link";
import { JsonLd } from "@/components/site/JsonLd";
import { ContactCTA } from "@/components/site/ContactCTA";
import { FadeUp } from "@/components/site/FadeUp";
import { breadcrumbSchema } from "@/lib/schemas";
import { type Post, formatPostDate } from "@/lib/blog";
import { site, type Locale } from "@/lib/site";

export function BlogPostPage({
  post,
  locale,
}: {
  post: Post;
  locale: Locale;
}) {
  const blogUrl = locale === "es" ? "/blog" : "/en/blog";
  const postUrl = `${blogUrl}/${post.slug}`;
  const absoluteUrl = `${site.url}${postUrl}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": absoluteUrl,
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    inLanguage: locale === "es" ? "es" : "en",
    author: { "@id": `${site.url}#person` },
    publisher: { "@id": `${site.url}#org` },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl },
    image: post.frontmatter.cover
      ? `${site.url}${post.frontmatter.cover}`
      : `${site.url}/luz-portrait.jpg`,
    keywords: (post.frontmatter.tags ?? []).join(", "),
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            {
              name: locale === "es" ? "Inicio" : "Home",
              url: locale === "es" ? "/" : "/en",
            },
            { name: locale === "es" ? "Blog" : "Blog", url: blogUrl },
            { name: post.frontmatter.title, url: postUrl },
          ]),
          article,
        ]}
      />

      <article>
        <header className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 grad-soft" aria-hidden />
          <div className="container-page relative max-w-3xl py-16 sm:py-20">
            <FadeUp>
              <Link
                href={blogUrl}
                className="text-sm font-semibold text-brand-700 hover:underline"
              >
                ← {locale === "es" ? "Todos los artículos" : "All articles"}
              </Link>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                {(post.frontmatter.tags ?? []).slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-50 px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
                {post.frontmatter.title}
              </h1>
              <p className="mt-5 text-lg leading-7 text-ink-500">
                {post.frontmatter.description}
              </p>
              <div className="mt-7 flex items-center gap-3 text-sm text-ink-500">
                <span className="font-semibold text-ink-900">
                  {post.frontmatter.author}
                </span>
                <span aria-hidden>·</span>
                <time dateTime={post.frontmatter.date}>
                  {formatPostDate(post.frontmatter.date, locale)}
                </time>
                <span aria-hidden>·</span>
                <span>
                  {post.readingMinutes}{" "}
                  {locale === "es" ? "min de lectura" : "min read"}
                </span>
              </div>
            </FadeUp>
          </div>
        </header>

        <section className="bg-white pb-20">
          <div className="container-page max-w-3xl">
            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </section>
      </article>

      <ContactCTA locale={locale} />
    </>
  );
}
