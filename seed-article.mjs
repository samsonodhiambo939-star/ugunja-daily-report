import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "ay6ucds6",
  dataset: "production",
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function seedArticle() {
  const [cat] = await client.fetch(`*[_type == "category" && title == "Politics"]`);
  const [loc] = await client.fetch(`*[_type == "location" && name == "Ugunja Town"]`);
  const [author] = await client.fetch(`*[_type == "author" && name == "James Ochieng"]`);

  if (!cat || !loc || !author) {
    console.log("Missing references. Run seed.mjs first.");
    return;
  }

  const existing = await client.fetch(`*[_type == "article" && title == "Ugunja MP Launches New Healthcare Initiative"][0]`);
  if (existing) { console.log("Article already exists"); return; }

  await client.create({
    _type: "article",
    title: "Ugunja MP Launches New Healthcare Initiative for Rural Communities",
    slug: { _type: "slug", current: "ugunja-mp-healthcare-initiative" },
    excerpt: "The initiative aims to bring affordable medical services to over 50,000 residents across Ugunja constituency, with mobile clinics and community health workers.",
    category: { _type: "reference", _ref: cat._id },
    location: { _type: "reference", _ref: loc._id },
    author: { _type: "reference", _ref: author._id },
    publishDate: "2026-07-05T00:00:00Z",
    featured: true,
    story: [
      { _type: "block", style: "normal", children: [{ _type: "span", text: "In a major boost to rural healthcare, the Ugunja Member of Parliament has launched a comprehensive health initiative targeting underserved communities across the constituency. The program, which began this week, will deploy mobile clinics and train community health workers to provide basic medical services to remote areas." }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Speaking at the launch event in Ugunja Town, the MP emphasized that the initiative is part of a broader effort to ensure that every resident has access to quality healthcare regardless of their location." }] },
    ],
  });

  console.log("Sample article created!");
}

seedArticle().catch(console.error);
