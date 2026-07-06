"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchArticleBySlug } from "@/lib/sanity";
import { articles as fallbackArticles } from "@/lib/data";

interface ArticleDetail {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  location: string;
  date: string;
  imageUrl: string;
  storyBody: unknown;
}

const fallbackBySlug = (slug: string): ArticleDetail | null => {
  const a = fallbackArticles.find((fa) => fa.slug === slug);
  if (!a) return null;
  return { ...a, location: "", storyBody: null };
};

export default function ArticleContent() {
  const params = useParams();
  const slug = params.slug as string;
  const [article, setArticle] = useState<ArticleDetail | null>(null);

  useEffect(() => {
    fetchArticleBySlug(slug).then((data) => {
      if (data) {
        setArticle(data);
      } else {
        setArticle(fallbackBySlug(slug));
      }
    });
  }, [slug]);

  const art = article;

  if (!art) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white flex items-center justify-center">
          <p className="text-gray-500">Article not found.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Home</Link>

          {art.imageUrl && (
            <img
              src={art.imageUrl}
              alt={art.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
            />
          )}

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
            {art.category && (
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                {art.category}
              </span>
            )}
            {art.location && <span>{art.location}</span>}
            <span>{art.date}</span>
            <span>By {art.author}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {art.title}
          </h1>

          {art.excerpt && (
            <p className="text-lg text-gray-600 italic mb-6 border-l-4 border-blue-600 pl-4">
              {art.excerpt}
            </p>
          )}

          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            {art.storyBody ? (
              <PortableText value={art.storyBody as never} />
            ) : (
              <p className="text-gray-400 italic">Full story content not available.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
