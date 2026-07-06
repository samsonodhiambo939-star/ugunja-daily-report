import Link from "next/link";
import type { Article } from "@/lib/data";

export default function BreakingTicker({ articles }: { articles: Article[] }) {
  const breaking = articles.filter((a) => a.category === "Breaking");

  if (breaking.length === 0) return null;

  return (
    <div className="bg-red-600 text-white overflow-hidden">
      <div className="flex items-center max-w-7xl mx-auto">
        <span className="bg-white text-red-600 font-bold text-xs uppercase px-3 py-2 shrink-0">
          Breaking
        </span>
        <div className="overflow-hidden relative h-10 flex-1">
          <div className="animate-marquee whitespace-nowrap absolute leading-10 px-4">
            {breaking.map((item) => (
              <Link key={item.id} href={"/article/" + item.slug} className="mx-8 text-sm hover:underline">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
