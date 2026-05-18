import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import type { Locale } from "./site";

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string; // ISO date
  author: string;
  cover?: string;
  tags?: string[];
  // Slug of the matching post in the other locale, if any:
  translationSlug?: string;
};

export type Post = {
  slug: string;
  locale: Locale;
  frontmatter: PostFrontmatter;
  readingMinutes: number;
  html: string;
};

export type PostSummary = {
  slug: string;
  locale: Locale;
  frontmatter: PostFrontmatter;
  readingMinutes: number;
};

const ROOT = path.join(process.cwd(), "content", "blog");

function dirFor(locale: Locale) {
  return path.join(ROOT, locale);
}

export function listPostSlugs(locale: Locale): string[] {
  const dir = dirFor(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function readRaw(locale: Locale, slug: string) {
  const filePath = path.join(dirFor(locale), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

async function markdownToHtml(md: string): Promise<string> {
  const file = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "append",
      properties: { className: ["anchor"], "aria-hidden": "true", tabIndex: -1 },
      content: { type: "text", value: "" },
    })
    .use(rehypeStringify)
    .process(md);
  return String(file);
}

export async function getPost(
  locale: Locale,
  slug: string,
): Promise<Post | null> {
  const raw = readRaw(locale, slug);
  if (!raw) return null;
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  const html = await markdownToHtml(content);
  return {
    slug,
    locale,
    frontmatter: fm,
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    html,
  };
}

export function getPostSummary(
  locale: Locale,
  slug: string,
): PostSummary | null {
  const raw = readRaw(locale, slug);
  if (!raw) return null;
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  return {
    slug,
    locale,
    frontmatter: fm,
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
  };
}

export function listPosts(locale: Locale): PostSummary[] {
  const slugs = listPostSlugs(locale);
  const posts = slugs
    .map((s) => getPostSummary(locale, s))
    .filter((p): p is PostSummary => p !== null);
  return posts.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1,
  );
}

export function formatPostDate(iso: string, locale: Locale): string {
  const d = new Date(iso);
  return d.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
