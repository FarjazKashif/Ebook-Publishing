// src/data/childrens.ts
import type { IIncludedFeature, IAgeCategory, ISpreadStat, IProcessStep, IPricingPackage, IFAQ } from '../types';

export const includedData: IIncludedFeature[] = [
  { 
    title: "Story Editing & Development", 
    desc: "Professional editing tailored to your age group — from pacing and page-turn moments to age-appropriate vocabulary and emotional resonance.", 
    icon: (<><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Custom Illustration", 
    desc: "Full-spread, character-consistent illustrations in your chosen style — from initial character design sketches through to final colour artwork.", 
    icon: (<><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Interior Layout & Formatting", 
    desc: "Professional interior design that balances text and illustration on every spread — formatted for KDP and IngramSpark print-on-demand.", 
    icon: (<><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "Cover Design", 
    desc: "A custom wraparound cover featuring your main character — designed to stop the scroll on Amazon and stand out in physical bookshops.", 
    icon: (<><path d="M4 19.5V6a2 2 0 0 1 2-2h12a1 1 0 0 1 1 1v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 16.5H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6.5a2 2 0 0 1 0-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></>) 
  },
  { 
    title: "Global Distribution", 
    desc: "Published through Amazon KDP and IngramSpark — giving your book access to 40,000+ bookstores, libraries and educational suppliers worldwide.", 
    icon: (<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "ISBN & Copyright Registration", 
    desc: "ISBN assignment, barcode generation, copyright page setup and metadata optimised for Amazon categories — everything needed to get discovered.", 
    icon: (<><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3a9 9 0 1 1 0 18A9 9 0 0 1 12 3z" stroke="currentColor" strokeWidth="1.6"/></>) 
  }
];

export const ageCategoriesData: IAgeCategory[] = [
  { emoji: "🍼", range: "Ages 0–3", title: "Board Books", desc: "12–16 pages, thick board stock, one concept per spread, minimal text. Pure illustration-led storytelling for babies and toddlers." },
  { emoji: "🌈", range: "Ages 3–8", title: "Picture Books", desc: "32 pages, full-spread illustrations, read-aloud rhythm. The most popular format — and the most competitive. We make yours stand out." },
  { emoji: "🐛", range: "Ages 5–8", title: "Early Readers", desc: "48–96 pages, black-and-white or spot-colour illustration, simple chapter structure. Perfect for children learning to read independently." },
  { emoji: "📖", range: "Ages 8–12", title: "Middle Grade", desc: "Illustrated chapter books with richer narratives, complex characters, and illustrated chapter openers — bridging picture books and YA." }
];

export const spreadStatsData: ISpreadStat[] = [
  { num: "32", label: "Standard page count (industry norm)" },
  { num: "14–16", label: "Full spreads per picture book" },
  { num: "500–1,000", label: "Typical word count for ages 3–8" },
  { num: "1", label: "Key moment per spread — always" }
];

export const childrensProcessData: IProcessStep[] = [
  { num: "01", title: "Brief & Manuscript Review", desc: "Share your story, age group, style preferences and goals. We review your manuscript and map out the full publishing plan." },
  { num: "02", title: "Character & Style Design", desc: "Your illustrator develops character sheets and a style sample spread for your approval before full illustration begins." },
  { num: "03", title: "Illustration & Layout", desc: "Full illustration of every spread, followed by interior layout — text and images positioned page by page with your input throughout." },
  { num: "04", title: "Cover Design & Final Review", desc: "Custom wraparound cover created, final proofread completed, and you review and approve the complete book before anything is published." },
  { num: "05", title: "Publish & Distribute", desc: "Your book goes live on Amazon and IngramSpark — available to readers worldwide in print and digital formats the same day." }
];

export const childrensPricingData: IPricingPackage[] = [
  {
    tier: "Starter", title: "Board Book", sub: "Ages 0–3 · 12–16 pages",
    price: "Custom", unit: "Quoted per project scope",
    list: ["Story editing & read-aloud check", "6–8 full spread illustrations", "Character design & consistency", "Board book interior layout", "KDP print-ready files", "ISBN & metadata setup"]
  },
  {
    tier: "Recommended", title: "Picture Book", sub: "Ages 3–8 · 32 pages", popular: true,
    price: "Custom", unit: "Quoted per project scope",
    list: ["Full story edit & developmental notes", "14–16 full-spread illustrations", "Character sheets & style approval", "Interior layout & cover design", "KDP + IngramSpark distribution", "eBook version included"]
  },
  {
    tier: "Full Service", title: "Early Reader / Chapter Book", sub: "Ages 5–12 · 48–96 pages",
    price: "Custom", unit: "Quoted per project scope",
    list: ["Full developmental editing", "Chapter opener illustrations", "Reading level assessment", "Interior & cover design", "KDP + IngramSpark + library access", "Priority consultant support"]
  }
];

export const childrensFaqsData: IFAQ[] = [
  { q: "How much does it cost to publish a children's book?", a: "The cost depends on your book's length, illustration style, and services needed. Picture book illustration, editing, formatting and cover design are all priced per project. We offer transparent custom quotes with no hidden fees. Contact us for a free, no-obligation estimate tailored to your specific book." },
  { q: "How many illustrations does a picture book need?", a: "A standard 32-page picture book typically needs 14–16 full-spread illustrations plus a cover. Board books of 12–16 pages need 6–8 illustrations. We plan the exact spread count with you during the briefing stage, based on your story's pacing and word count." },
  { q: "How long does it take to illustrate a children's book?", a: "A fully illustrated 32-page picture book typically takes 8–14 weeks from approved brief to final delivery. Board books may be completed in 6–8 weeks. Rush timelines may be available — contact us to discuss your deadline." },
  { q: "Do I need a finished manuscript before starting?", a: "We recommend a finalised or near-finalised manuscript before commissioning illustration, as the text directly affects illustration planning. However, our team can help develop and edit your manuscript first — many clients start with just an idea and we help shape it into a publishable story." },
  { q: "What illustration styles do you offer?", a: "Our illustrators work across soft watercolour, bold flat digital, whimsical storybook, cartoon playful, textured mixed media, and minimalist clean styles. During the brief call we match your story's tone to the perfect style and illustrator — you see a character sample before full illustration begins." },
  { q: "Will my book be in bookstores and on Amazon?", a: "Yes. We publish through Amazon KDP and IngramSpark, giving your book access to Amazon's global marketplace and IngramSpark's network of 40,000+ bookstores, libraries and educational suppliers worldwide. Your book will be available for order in both print and digital formats." }
];

export const childrensTestimonials = [
  { stars: "★★★★★", text: "I had a story in my heart for years but no idea how to make it a real book. The team held my hand through every step — from my rough draft to seeing my daughter's face when she opened the first printed copy. I still get emotional thinking about it.", name: "Amanda W.", time: "Picture Book · Ages 4–7" },
  { stars: "★★★★★", text: "The illustrator captured my character exactly as I imagined him — but better. I asked for warm and whimsical and got something that made me cry. My book is now in 12 school libraries and selling consistently on Amazon.", name: "Richard T.", time: "Children's Chapter Book · Ages 6–9" },
  { stars: "★★★★★", text: "I published a board book as a gift for my grandchildren and it was so well-received that friends and family started asking how to get a copy. It's now on Amazon and has sold over 300 copies in the first three months.", name: "Margaret L.", time: "Board Book · Ages 1–3" }
];