import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "ay6ucds6",
  dataset: "production",
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const categories = [
  { _type: "category", title: "Politics", slug: { _type: "slug", current: "politics" } },
  { _type: "category", title: "Sports", slug: { _type: "slug", current: "sports" } },
  { _type: "category", title: "Education", slug: { _type: "slug", current: "education" } },
  { _type: "category", title: "Health", slug: { _type: "slug", current: "health" } },
  { _type: "category", title: "Entertainment", slug: { _type: "slug", current: "entertainment" } },
  { _type: "category", title: "Community", slug: { _type: "slug", current: "community" } },
  { _type: "category", title: "Breaking", slug: { _type: "slug", current: "breaking" } },
];

const locations = [
  { _type: "location", name: "Ugunja Town", slug: { _type: "slug", current: "ugunja-town" } },
  { _type: "location", name: "Sidindi", slug: { _type: "slug", current: "sidindi" } },
  { _type: "location", name: "Ukwala", slug: { _type: "slug", current: "ukwala" } },
  { _type: "location", name: "Siaya Town", slug: { _type: "slug", current: "siaya-town" } },
  { _type: "location", name: "Nairobi", slug: { _type: "slug", current: "nairobi" } },
];

const authors = [
  { _type: "author", name: "James Ochieng", slug: { _type: "slug", current: "james-ochieng" }, bio: "Senior reporter covering politics and community affairs in Ugunja and Ugenya." },
  { _type: "author", name: "Mary Akinyi", slug: { _type: "slug", current: "mary-akinyi" }, bio: "Entertainment and culture correspondent with a passion for local arts." },
  { _type: "author", name: "Peter Odhiambo", slug: { _type: "slug", current: "peter-odhiambo" }, bio: "Sports journalist covering local and regional tournaments." },
];

async function seed() {
  const catIds = {};
  for (const cat of categories) {
    const existing = await client.fetch(`*[_type == "category" && title == $title][0]`, { title: cat.title });
    if (existing) { catIds[cat.title] = existing._id; continue; }
    const created = await client.create(cat);
    catIds[cat.title] = created._id;
    console.log(`Created category: ${cat.title}`);
  }

  const locIds = {};
  for (const loc of locations) {
    const existing = await client.fetch(`*[_type == "location" && name == $name][0]`, { name: loc.name });
    if (existing) { locIds[loc.name] = existing._id; continue; }
    const created = await client.create(loc);
    locIds[loc.name] = created._id;
    console.log(`Created location: ${loc.name}`);
  }

  for (const author of authors) {
    const existing = await client.fetch(`*[_type == "author" && name == $name][0]`, { name: author.name });
    if (existing) { console.log(`Author exists: ${author.name}`); continue; }
    await client.create(author);
    console.log(`Created author: ${author.name}`);
  }

  console.log("\nDone! Categories, locations, and authors seeded.");
}

seed().catch(console.error);
