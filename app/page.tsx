"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import BreakingTicker from "@/components/BreakingTicker";
import HeroSection from "@/components/HeroSection";
import ArticleGrid from "@/components/ArticleGrid";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import { articles as fallbackArticles } from "@/lib/data";
import { fetchArticles } from "@/lib/sanity";
import type { Article } from "@/lib/data";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [featured, setFeatured] = useState<Article | null>(null);

  useEffect(() => {
    fetchArticles().then((data) => {
      if (data.length > 0) {
        setArticles(data.filter((a) => !a.featured).slice(0, 6));
        setFeatured(data.find((a) => a.featured) || data[0]);
      }
    });
  }, []);

  const displayArticles = articles.length > 0 ? articles : fallbackArticles.filter((a) => !a.featured).slice(0, 6);
  const displayFeatured = featured || fallbackArticles.find((a) => a.featured) || null;

  return (
    <>
      <Header />
      <BreakingTicker articles={displayArticles} />
      <HeroSection hero={displayFeatured} />
      <ArticleGrid articles={displayArticles} />
      <CategorySection articles={displayArticles} />
      <Footer />
    </>
  );
}
