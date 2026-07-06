export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Ugunja MP Launches New Healthcare Initiative for Rural Communities",
    excerpt: "The initiative aims to bring affordable medical services to over 50,000 residents across Ugunja constituency, with mobile clinics and community health workers.",
    category: "Politics",
    author: "James Ochieng",
    date: "July 5, 2026",
    imageUrl: "/api/placeholder/800/400",
    featured: true,
  },
  {
    id: "2",
    title: "Ugenya Youth Win Regional Football Tournament",
    excerpt: "The Ugenya United junior team clinched the Nyanza Regional Cup after a thrilling penalty shootout at the Kisumu Stadium.",
    category: "Sports",
    author: "Peter Odhiambo",
    date: "July 4, 2026",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: "3",
    title: "Local Artisans Showcase Talent at Ugunja Cultural Festival",
    excerpt: "The annual festival attracted hundreds of visitors, featuring traditional music, dance, and handcrafted goods from local artisans.",
    category: "Entertainment",
    author: "Mary Akinyi",
    date: "July 3, 2026",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: "4",
    title: "Community Clean-Up Drive Mobilizes Hundreds in Siaya",
    excerpt: "Residents came together for a massive clean-up exercise, collecting over 2 tons of waste and planting trees along the main roads.",
    category: "Community",
    author: "David Owino",
    date: "July 5, 2026",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: "5",
    title: "Breaking: County Allocates KSh 200M for Road Repairs",
    excerpt: "Siaya County government has approved emergency funds for road repairs following the recent heavy rains that damaged key transport routes.",
    category: "Breaking",
    author: "James Ochieng",
    date: "July 6, 2026",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: "6",
    title: "New School Built in Sidindi to Boost Education Access",
    excerpt: "The newly constructed Sidindi Primary School will accommodate over 800 students, reducing the distance children travel to school.",
    category: "Community",
    author: "Sarah Atieno",
    date: "July 2, 2026",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: "7",
    title: "Ugunja Farmers Adopt Climate-Smart Agriculture Techniques",
    excerpt: "Local farmers are embracing drought-resistant crops and improved irrigation methods to combat the effects of climate change.",
    category: "Community",
    author: "Peter Odhiambo",
    date: "July 1, 2026",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: "8",
    title: "Entertainment: Upcoming Artist from Ugenya Drops Hit Single",
    excerpt: "Emerging musician Otiende Amollo releases 'Dala Yawe', a song celebrating Luo heritage that is quickly climbing local charts.",
    category: "Entertainment",
    author: "Mary Akinyi",
    date: "June 30, 2026",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: "9",
    title: "Sports: Ugunja Marathon Attracts Runners from Across Kenya",
    excerpt: "Over 1,500 runners participated in the 5th annual Ugunja Peace Marathon, promoting unity and healthy living in the region.",
    category: "Sports",
    author: "David Owino",
    date: "June 29, 2026",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: "10",
    title: "County Government Launches Digital Literacy Program",
    excerpt: "The program will equip 10,000 residents with basic digital skills, targeting youth and small business owners in rural areas.",
    category: "Politics",
    author: "James Ochieng",
    date: "June 28, 2026",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: "11",
    title: "Traditional Luo Wedding Ceremony Draws Large Crowd in Ugunja",
    excerpt: "The colorful ceremony featuring traditional attire, music, and dowry negotiations showcased the rich cultural heritage of the Luo community.",
    category: "Entertainment",
    author: "Sarah Atieno",
    date: "June 27, 2026",
    imageUrl: "/api/placeholder/400/300",
  },
  {
    id: "12",
    title: "Ugenya MP Pledges to Upgrade Rural Health Centers",
    excerpt: "The Member of Parliament has promised to equip all health centers in Ugenya with essential medical supplies and qualified staff.",
    category: "Politics",
    author: "Peter Odhiambo",
    date: "June 26, 2026",
    imageUrl: "/api/placeholder/400/300",
  },
];
