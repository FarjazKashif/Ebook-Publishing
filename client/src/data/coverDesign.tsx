// src/data/coverDesign.ts
import type { IDeliverable, IDesignElement, IGenre, IProcessStep, IPricingPackage, IFAQ } from '../types';

export const deliverablesData: IDeliverable[] = [
  { 
    title: "Front Cover Design", 
    desc: "Custom cover built for your genre, hooked to your target reader, and tested to perform at Amazon thumbnail size where buying decisions are actually made.", 
    icon: (<><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "Full Wraparound & Spine", 
    desc: "Complete print-ready wraparound with back cover layout, spine design, ISBN barcode placement, and 300 DPI bleed-ready PDF for KDP and IngramSpark.", 
    icon: (<><path d="M4 19.5V6a2 2 0 0 1 2-2h12a1 1 0 0 1 1 1v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 16.5H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6.5a2 2 0 0 1 0-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></>) 
  },
  { 
    title: "eBook Cover Version", 
    desc: "Digital-optimised at 1600 × 2560px minimum — RGB colour profile, formatted to Amazon KDP, Apple Books, Kobo and every major eBook platform's specs.", 
    icon: (<><rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Source Files Included", 
    desc: "Final files in PSD and AI format so you or your team can make future updates, resize for promotions, or adapt the design for merchandise and marketing materials.", 
    icon: (<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></>) 
  },
  { 
    title: "Revision Rounds", 
    desc: "All packages include at least two full revision rounds. Premium packages include unlimited revisions — because you should love your cover completely before it goes to print.", 
    icon: (<><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Platform Approval Guarantee", 
    desc: "Every file is checked against KDP, IngramSpark and major platform upload requirements before delivery. Your cover will upload and display correctly — guaranteed.", 
    icon: (<><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3a9 9 0 1 1 0 18A9 9 0 0 1 12 3z" stroke="currentColor" strokeWidth="1.6"/></>) 
  }
];

export const designElementsData: IDesignElement[] = [
  { visual: "typo", title: "Typography Hierarchy", desc: "Typeface, sizing, weight and kerning chosen to be legible at thumbnail scale and emotionally matched to your genre — not just aesthetically pleasing." },
  { visual: "colours", title: "Colour Psychology", desc: "Palette engineered to signal genre, trigger the right emotional response, and make your book stand out in a crowded category without clashing with neighbours." },
  { visual: "comp", title: "Visual Composition", desc: "Rule of thirds, focal points and visual weight balanced to guide the reader's eye naturally from image to title to author — creating instant comprehension." },
  { visual: "thumb", title: "Thumbnail Testing", desc: "Every cover is tested at Amazon thumbnail size (160×240px) before approval — because that's the exact moment your reader decides whether to click or keep scrolling." }
];

export const genresData: IGenre[] = [
  { icon: "📖", name: "Literary Fiction" }, { icon: "🔪", name: "Thriller & Crime" },
  { icon: "🐉", name: "Fantasy" }, { icon: "🚀", name: "Science Fiction" },
  { icon: "💕", name: "Romance" }, { icon: "🌿", name: "Memoir" },
  { icon: "💼", name: "Business & Finance" }, { icon: "🧠", name: "Self-Help" },
  { icon: "👶", name: "Children's Picture Books" }, { icon: "📚", name: "Young Adult" },
  { icon: "🙏", name: "Inspirational" }, { icon: "🔬", name: "Non-Fiction" }
];

export const coverDesignProcessData: IProcessStep[] = [
  { num: "01", title: "Submit Your Design Brief", desc: "Tell us your genre, tone, target audience, and any visual ideas or references you love. The more you share, the better we capture your book's character." },
  { num: "02", title: "Matched to Your Designer", desc: "We pair you with a designer who specialises in your genre — they study your competition, your target reader, and your brief before a single element is placed." },
  { num: "03", title: "Review Initial Concepts", desc: "Receive 1–2 initial design concepts within 7 business days. Give feedback, request changes, and refine collaboratively until the cover is exactly right." },
  { num: "04", title: "Receive Print-Ready Files", desc: "Approved cover delivered in all formats — wraparound PDF, eBook PNG, and source files — platform-checked and ready to upload the moment you publish." }
];

export const coverPricingData: IPricingPackage[] = [
  {
    tier: "Starter", title: "eBook Cover", sub: "Digital-first cover design",
    price: "Custom", unit: "Quoted per project scope",
    list: ["Front cover concept (1 option)", "eBook-ready PNG & JPEG", "KDP & platform optimised", "2 full revision rounds", "7–10 day delivery"]
  },
  {
    tier: "Recommended", title: "Full Print & Digital", sub: "Complete cover — print & eBook", popular: true,
    price: "Custom", unit: "Quoted per project scope",
    list: ["Front cover + wraparound print", "Spine + back cover layout", "eBook version included", "KDP & IngramSpark ready", "Source files (PSD/AI)", "2 concepts + unlimited revisions"]
  },
  {
    tier: "Premium", title: "Series Package", sub: "Cohesive design across 3+ books",
    price: "Custom", unit: "Quoted per series scope",
    list: ["Unified series visual identity", "Full print + digital per title", "Shared series style guide", "Priority dedicated designer", "Unlimited revisions", "Rush delivery available"]
  }
];

export const coverDesignFaqsData: IFAQ[] = [
  { q: "What does a book cover design service include?", a: "Our service includes a custom front cover, spine design, back cover layout and an eBook-ready digital version. You receive print-ready files at 300 DPI with bleed, and digital versions optimised for Amazon KDP, IngramSpark, Apple Books and all major platforms." },
  { q: "How many revisions do I get?", a: "All packages include at least two full revision rounds. Our premium and series packages include unlimited revisions until you are completely satisfied. We won't deliver until you love your cover." },
  { q: "Can you design a cover before my manuscript is finished?", a: "Yes — many authors commission their cover before completing their manuscript. We work from your brief: genre, tone, target audience and any visual ideas. Many authors use their new cover as creative motivation to finish writing." },
  { q: "Do you design covers for all genres?", a: "Yes. Our designers are genre specialists with experience in fiction, literary fiction, thriller, romance, fantasy, sci-fi, self-help, business, memoir, biography, children's picture books, middle grade and young adult." },
  { q: "What file formats will I receive?", a: "You receive a print-ready PDF with bleed and crop marks, high-resolution PNG and JPEG for digital use, and source files in PSD or AI format. All files are checked against platform specifications before delivery — no upload surprises." },
  { q: "How is your design different from AI-generated covers?", a: "AI covers lack strategic thinking — typography sits on top of images, colours are algorithmic, and compositions typically fail at thumbnail size. Our human designers research your genre's bestsellers, brief entirely from your story, and build every element to function as a single, sales-driving tool." }
];

export const coverTestimonials = [
  { stars: "★★★★★", text: "My cover made it onto a 'Best New Thriller Covers' list on Goodreads within a week of launch. The designer understood the genre instantly — dark, tense, and absolutely impossible to scroll past.", name: "James R.", time: "Thriller · Full Print & Digital" },
  { stars: "★★★★★", text: "I gave the designer a mood board, a colour idea, and two lines about my story. What came back captured my novel's soul completely. My Amazon sales jumped the week I updated to the new cover.", name: "Patricia O.", time: "Literary Fiction · Full Print & Digital" },
  { stars: "★★★★★", text: "Three books, one series, one dedicated designer. The cohesion across my business trilogy looks incredible on my author page and on the shelf. The best investment I made in my entire publishing journey.", name: "David C.", time: "Business · Series Package" }
];