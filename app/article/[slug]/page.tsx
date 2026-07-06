import { articles as fallbackArticles } from "@/lib/data";
import ArticleContent from "./ArticleContent";

export function generateStaticParams() {
  return fallbackArticles.map((a) => ({ slug: a.slug }));
}

export default function Page() {
  return <ArticleContent />;
}
