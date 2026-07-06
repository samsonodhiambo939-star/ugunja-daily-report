import { createClient } from "next-sanity";
import type { Article } from "@/lib/data";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const client = projectId
  ? createClient({ projectId, dataset, apiVersion: "2024-01-01", useCdn: true })
  : null;

const articleQuery = `*[_type == "article" && defined(publishDate)] | order(publishDate desc) {
  _id,
  title,
  excerpt,
  publishDate,
  featured,
  "imageUrl": image.asset->url,
  "category": category->title,
  "author": author->name,
}`;

export async function fetchArticles(): Promise<Article[]> {
  if (!client) return [];
  try {
    const articles = await client.fetch(articleQuery);
    return articles.map((a: Record<string, unknown>) => ({
      id: a._id as string,
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
