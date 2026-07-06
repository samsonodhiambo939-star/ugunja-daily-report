import Link from "next/link";
import type { Article } from "@/lib/data";

export default function HeroSection({ hero }: { hero: Article | null }) {
  if (!hero) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <Link
        href={"/article/" + hero.slug}
        className="group block relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-blue to-brand-green"
      >
        <img
          src={hero.imageUrl}
          alt={hero.title}
          className="w-full aspect-[16/9] sm:aspect-[21/9] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <span className="inline-block bg-brand-orange text-white text-xs font-bold uppercase px-3 py-1 rounded mb-3">
            {hero.category}
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-2 group-hover:underline">
            {hero.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl line-clamp-2">
            {hero.excerpt}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            {hero.author} &middot; {hero.date}
          </p>
        </div>
      </Link>
    </section>
  );
}
