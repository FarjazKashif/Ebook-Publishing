// src/data/formatting.ts
import type { IIncludedFeature, ISpecStat, IProcessStep, IPricingPackage, IFAQ } from '../types';

export const formattingIncludedData: IIncludedFeature[] = [
  { 
    title: "Custom Typesetting", 
    desc: "Professional font pairing, line spacing, and paragraph styling matched to your genre — designed for readability and a premium in-hand feel.", 
    icon: (<><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "Front & Back Matter", 
    desc: "Title page, copyright page, dedication, table of contents, acknowledgements and author bio — formatted to industry convention.", 
    icon: (<><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Chapter & Section Design", 
    desc: "Consistent chapter openers, running headers, drop caps and section breaks — designed once and applied flawlessly throughout.", 
    icon: (<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Images, Tables & Charts", 
    desc: "Photographs, illustrations, tables, charts, footnotes and citations formatted and positioned precisely — no awkward page breaks.", 
    icon: (<><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Spine Width Calculation", 
    desc: "Exact spine width calculated from your final page count — ensuring your cover design fits perfectly with zero misalignment at print.", 
    icon: (<><path d="M4 19.5V6a2 2 0 0 1 2-2h12a1 1 0 0 1 1 1v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 16.5H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6.5a2 2 0 0 1 0-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></>) 
  },
  { 
    title: "Pre-Upload Compliance Check", 
    desc: "Every file is checked against current KDP and IngramSpark technical specifications before delivery — so your upload is accepted first time.", 
    icon: (<><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3a9 9 0 1 1 0 18A9 9 0 0 1 12 3z" stroke="currentColor" strokeWidth="1.6"/></>) 
  }
];

export const specsStatsData: ISpecStat[] = [
  { num: "0.125\"", label: "Standard bleed beyond trim size" },
  { num: "6\"×9\"", label: "Most common trim size for novels" },
  { num: "300 DPI", label: "Minimum image resolution for print" },
  { num: "100%", label: "Files checked before delivery" }
];

export const formattingProcessData: IProcessStep[] = [
  { num: "01", title: "Submit Your Manuscript", desc: "Upload your final Word or Google Docs file. We review length, genre and any special elements like images, tables or footnotes." },
  { num: "02", title: "Style & Trim Size Selection", desc: "We recommend the right typeface, trim size and layout style for your genre — or apply your existing brand guidelines if you have a series." },
  { num: "03", title: "Full Interior Typesetting", desc: "Complete formatting of every page — chapters, front/back matter, images and tables — delivered as a proof for your review." },
  { num: "04", title: "Compliance Check & Delivery", desc: "Final files checked against KDP and IngramSpark specs, then delivered as print-ready PDF and reflowable EPUB — ready to upload." }
];

export const formattingPricingData: IPricingPackage[] = [
  {
    tier: "Starter", title: "eBook Only", sub: "Reflowable digital formatting",
    price: "Custom", unit: "Quoted per word count",
    list: ["Reflowable EPUB file", "Clickable table of contents", "Kindle, Apple & Kobo compatible", "Front & back matter included", "5–7 day turnaround"]
  },
  {
    tier: "Recommended", title: "Print + eBook", sub: "Complete formatting, both formats", popular: true,
    price: "Custom", unit: "Quoted per word count",
    list: ["Press-ready print PDF", "Reflowable EPUB file", "Spine width calculation", "KDP + IngramSpark compliance check", "One free revision round", "7–10 day turnaround"]
  },
  {
    tier: "Full Service", title: "Complex Interior", sub: "Images, tables, charts & citations",
    price: "Custom", unit: "Quoted per project scope",
    list: ["Everything in Print + eBook", "Image & table formatting", "Footnotes & citation styling", "Custom chapter design", "Two free revision rounds", "Priority formatter assigned"]
  }
];

export const formattingFaqsData: IFAQ[] = [
  { q: "What's the difference between print and eBook formatting?", a: "Print formatting creates fixed pages at a specific trim size with precise margins and bleed designed for physical printing. eBook formatting creates reflowable text that adapts to any screen size or font setting the reader chooses. Both require different technical files, and most authors need both to publish everywhere." },
  { q: "What file formats do you deliver?", a: "For print, you receive a press-ready PDF formatted to your exact trim size with proper margins and bleed for KDP or IngramSpark. For eBook, you receive a reflowable EPUB file compatible with Amazon KDP, Apple Books, Kobo and other major platforms." },
  { q: "How long does book formatting take?", a: "Standard formatting for a 250–350 page novel typically takes 5–10 business days. Books with complex elements like tables, charts, footnotes or many images may take 2–3 weeks. We provide a specific timeline with every quote." },
  { q: "Can you format my book if I already have a cover?", a: "Yes. We format your interior independently of your cover, and we calculate the final spine width to match your printed page count exactly, so your existing cover design fits perfectly with no misalignment." },
  { q: "Do you format books with images, tables or footnotes?", a: "Yes. Our formatters handle photographs, illustrations, tables, charts, footnotes, endnotes, and academic citations. Complex interior elements are quoted based on the specific requirements of your manuscript." },
  { q: "Will my book meet KDP and IngramSpark requirements?", a: "Yes. Every file we deliver is checked against current KDP and IngramSpark technical specifications before delivery, including trim size, bleed, margins, resolution and file format — so your upload is accepted the first time." }
];

export const formattingTestimonials = [
  { stars: "★★★★★", text: "I'd formatted my first book myself in Word and it looked exactly like what it was — a Word document. This time I hired Infusion and the difference was staggering. It looks like it came from a real publishing house.", name: "Laura B.", time: "Novel · Print + eBook" },
  { stars: "★★★★★", text: "My book has 40 photographs and I was terrified of the layout falling apart. Every single image landed exactly where it needed to, captions styled perfectly, and it passed IngramSpark review on the very first upload.", name: "Gary M.", time: "Memoir · Full Service" },
  { stars: "★★★★★", text: "Fast, precise, and genuinely helpful when I had questions about trim size. My workbook has complex numbered exercises and callout boxes and it all typeset beautifully. Highly recommend for anything beyond a simple novel.", name: "Nadia F.", time: "Workbook · Full Service" }
];