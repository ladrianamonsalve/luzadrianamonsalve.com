import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPage } from "@/components/pages/BlogPostPage";
import { getPost, listPostSlugs } from "@/lib/blog";
import { site } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return listPostSlugs("es").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost("es", slug);
  if (!post) return { title: "Artículo no encontrado" };

  const canonical = `${site.url}/blog/${slug}`;
  const enSlug = post.frontmatter.translationSlug;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: {
      canonical,
      languages: enSlug
        ? {
            es: canonical,
            en: `${site.url}/en/blog/${enSlug}`,
            "x-default": canonical,
          }
        : { es: canonical, "x-default": canonical },
    },
    openGraph: {
      type: "article",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: canonical,
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getPost("es", slug);
  if (!post) notFound();
  return <BlogPostPage post={post} locale="es" />;
}
