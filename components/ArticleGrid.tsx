import type { Article } from "@/lib/data";

export default function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <span className="w-1 h-6 bg-brand-blue inline-block rounded" />
        Latest News
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <a
            key={article.id}
            href="#"
            className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  article.category === "Breaking"
                    ? "text-red-600"
                    : "text-brand-blue"
                }`}
              >
                {article.category}
              </span>
              <h3 className="font-bold text-gray-900 mt-1 group-hover:text-brand-blue transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {article.excerpt}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {article.author} &middot; {article.date}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
