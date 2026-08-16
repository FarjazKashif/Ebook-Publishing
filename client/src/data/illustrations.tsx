// src/data/illustrations.ts
import type { IIncludedFeature, IProcessStep, IPricingPackage, IFAQ, IGenre } from '../types';

export const illustrationTypesData = [
  { tag: "Spot Illustration", title: "Chapter headers & decorative motifs", visual: 'spot' },
  { tag: "Half-Page", title: "Scene art alongside your text", visual: 'half' },
  { tag: "Full-Page Scene", title: "A single moment, fully realised", visual: 'full' },
  { tag: "Two-Page Spread", title: "Panoramic, immersive world-building", visual: 'spread' },
  { tag: "Fantasy Map", title: "Ground readers in your world's geography", visual: 'map' },
  { tag: "Character Design Sheet", title: "Consistent character reference art", visual: 'char' }
];

export const illustrationIncludedData: IIncludedFeature[] = [
  { 
    title: "Genre-Matched Illustrator", 
    desc: "We pair you with an illustrator whose style and experience fit your genre — fantasy, literary fiction, non-fiction or technical work.", 
    icon: (<><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Sketch Approval Stage", 
    desc: "Every illustration begins with a rough sketch for your review — composition, pose and framing confirmed before final rendering begins.", 
    icon: (<><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Full-Colour Final Art", 
    desc: "Finished illustrations rendered in your chosen style — black & white ink, full colour, or a signature style matched to your book.", 
    icon: (<><path d="M4 19.5V6a2 2 0 0 1 2-2h12a1 1 0 0 1 1 1v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 16.5H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6.5a2 2 0 0 1 0-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></>) 
  },
  { 
    title: "Character Consistency", 
    desc: "Character design sheets ensure every illustration featuring your characters stays visually consistent from first page to last.", 
    icon: (<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Print & Digital Files", 
    desc: "Every illustration delivered at 300 DPI print resolution plus a web-optimised version for eBooks, social media and marketing use.", 
    icon: (<><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3a9 9 0 1 1 0 18A9 9 0 0 1 12 3z" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "Layout Placement Guidance", 
    desc: "We advise on where each illustration should sit in your manuscript for maximum narrative impact and pacing.", 
    icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.6"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.6"/></>) 
  }
];

export const illustrationProcessData: IProcessStep[] = [
  { num: "01", title: "Submit Your Brief", desc: "Tell us your genre, the scenes or elements you want illustrated, and any style references. We recommend the right format mix." },
  { num: "02", title: "Matched to an Illustrator", desc: "We pair you with a genre-specialist illustrator who reviews your manuscript and prepares initial sketch concepts." },
  { num: "03", title: "Sketch to Final Art", desc: "You approve each sketch before we move to line art and final colour — full visibility at every stage of production." },
  { num: "04", title: "Receive Final Files", desc: "Print-ready and digital versions of every illustration delivered, plus placement guidance for your manuscript layout." }
];

export const illustrationPricingData: IPricingPackage[] = [
  {
    tier: "Starter", title: "Spot Illustration", sub: "Chapter headers & motifs",
    price: "Custom", unit: "Priced per illustration",
    list: ["Sketch approval included", "B&W or full colour", "Print + digital files", "1 revision round"]
  },
  {
    tier: "Standard", title: "Half & Full-Page", sub: "Scene illustrations",
    price: "Custom", unit: "Priced per illustration",
    list: ["Everything in Spot", "Full scene composition", "Character consistency", "2 revision rounds"]
  },
  {
    tier: "Premium", title: "Two-Page Spread", sub: "Panoramic scenes", popular: true,
    price: "Custom", unit: "Priced per illustration",
    list: ["Everything in Full-Page", "Panoramic composition", "Priority illustrator matching", "2 revision rounds"]
  },
  {
    tier: "Specialty", title: "Maps & Character Sheets", sub: "World-building assets",
    price: "Custom", unit: "Priced per project",
    list: ["Fantasy world maps", "Multi-pose character sheets", "Style guide included", "2 revision rounds"]
  }
];

export const illustrationFaqsData: IFAQ[] = [
  { q: "What types of book illustration do you offer?", a: "We offer spot illustrations and chapter headers, half-page and full-page scenes, two-page panoramic spreads, fantasy world maps, and character design sheets. Each format serves a different narrative purpose, and we help you choose the right mix during your brief." },
  { q: "How much does book illustration cost?", a: "Pricing depends on the illustration type and complexity. Spot illustrations typically start lower than full-page scenes, and two-page spreads are the most involved. We provide transparent per-illustration pricing with your free quote, so you know exactly what each piece costs before committing." },
  { q: "Do I get to see a sketch before the final illustration?", a: "Yes. Every illustration goes through a sketch approval stage before final rendering begins. You review composition, character poses and scene framing at the sketch stage, so there are no surprises in the finished artwork." },
  { q: "Can you create a fantasy map for my book?", a: "Yes. World maps are one of our most requested illustration types for fantasy and adventure novels. We work from your world-building notes to create a map that helps readers orient themselves in your story's geography." },
  { q: "Do you illustrate non-fiction and technical books?", a: "Yes. We create diagrams, charts, process illustrations and explanatory art for non-fiction, business and educational titles, in addition to narrative illustration for fiction." },
  { q: "How many revisions are included?", a: "Every illustration includes revisions at the sketch stage before final color work begins, plus one round of final revisions after delivery. Additional rounds can be added if needed." }
];

export const illustrationTestimonials = [
  { stars: "★★★★★", text: "The map at the front of my fantasy novel is the thing readers mention most in reviews. My illustrator understood exactly how to translate my world-building notes into something readers actually use while reading.", name: "Theo K.", time: "Fantasy · World Map + Spot Art" },
  { stars: "★★★★★", text: "I was nervous about the cost of full illustrations, so I started with spot art for my chapter headers. The sketch approval process meant zero surprises — what I saw in the sketch is exactly what I got in the final piece, just better.", name: "Sara M.", time: "Memoir · Spot Illustrations" },
  { stars: "★★★★★", text: "Two two-page spreads for the climactic scenes in my novel completely changed how readers experience the book. Worth every penny — the illustrator captured the exact mood and tension I'd been trying to write for months.", name: "Daniel P.", time: "Thriller · Two-Page Spreads" }
];

export const illustrationGenresData: IGenre[] = [
  { icon: "🐉", name: "Fantasy & Sci-Fi" }, { icon: "🔪", name: "Thriller & Crime" },
  { icon: "📖", name: "Literary Fiction" }, { icon: "🌿", name: "Memoir" },
  { icon: "💼", name: "Business & Non-Fiction" }, { icon: "🔬", name: "Technical & Academic" },
  { icon: "🗺️", name: "Adventure & Travel" }, { icon: "📚", name: "Young Adult" },
  { icon: "💕", name: "Romance" }, { icon: "🙏", name: "Inspirational" },
  { icon: "📜", name: "Historical Fiction" }, { icon: "🖋️", name: "Poetry Collections" }
];