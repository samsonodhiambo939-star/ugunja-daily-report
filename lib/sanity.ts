import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { Article } from "@/lib/data";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const client = projectId
  ? createClient({ projectId, dataset, apiVersion: "2024-01-01", useCdn: true })
  : null;

const builder = projectId
  ? imageUrlBuilder({ projectId, dataset })
  : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder ? builder.image(source) : null;
}

const listQuery = `*[_type == "article" && defined(publishDate)] | order(publishDate desc) {
  _id,
  title,
  excerpt,
  publishDate,
  featured,
  "slug": slug.current,
  "imageUrl": image.asset->url,
  "category": category->title,
  "author": author->name,
}`;

const detailQuery = `*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  excerpt,
  publishDate,
  featured,
  "slug": slug.current,
  "imageUrl": image.asset->url,
  "category": category->title,
  "author": author->name,
  "location": location->name,
  "storyBody": story,
}`;

export async function fetchArticles(): Promise<Article[]> {
  if (!client) return [];
  try {
    const articles = await client.fetch(listQuery);
    return articles.map((a: Record<string, unknown>) => ({
      id: a._id as string,
      slug: (a.slug as string) || "",
      title: a.title as string,
      excerpt: (a.excerpt as string) || "",
      category: (a.category as string) || "General",
      author: (a.author as string) || "Staff",
      date: new Date(a.publishDate as string).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      imageUrl: (a.imageUrl as string) || "/api/placeholder/800/400",
      featured: a.featured as boolean,
    }));
  } catch {
    return [];
  }
}

export async function fetchArticleBySlug(slug: string) {
  if (!client) return null;
  try {
    const a = await client.fetch(detailQuery, { slug });
    if (!a) return null;
    return {
      id: a._id as string,
      slug: a.slug as string,
      title: a.title as string,
      excerpt: (a.excerpt as string) || "",
      category: (a.category as string) || "General",
      author: (a.author as string) || "Staff",
      location: (a.location as string) || "",
      date: new Date(a.publishDate as string).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      imageUrl: (a.imageUrl as string) || "",
      storyBody: a.storyBody,
    };
  } catch {
    return null;
  }
}
