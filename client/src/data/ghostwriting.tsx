import type { IIncludedFeature, IProcessStep, IPricingPackage, IFAQ, ITestimonial } from '../types';

export const ghostwritingIncludedData: IIncludedFeature[] = [
  { 
    title: "In-Depth Interviews", 
    desc: "8–20 hours of recorded conversations by phone or video, scheduled around your calendar, forming the raw material for your book.", 
    icon: (<><path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.6"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Chapter-by-Chapter Drafting", 
    desc: "Your writer delivers chapters progressively, so you can review and guide direction throughout — not just at the very end.", 
    icon: (<><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Voice & Style Matching", 
    desc: "Every ghostwriter is trained to capture your specific cadence, vocabulary and storytelling instincts — not their own writing style.", 
    icon: (<><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3a9 9 0 1 1 0 18A9 9 0 0 1 12 3z" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "Structural Editing Included", 
    desc: "Beyond writing, we shape narrative arc, pacing and chapter structure — the architecture that turns anecdotes into a book.", 
    icon: (<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Fact-Checking & Research", 
    desc: "For memoir and non-fiction, we verify dates, names and events, and conduct supplementary research where your memory needs support.", 
    icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.6"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "Publishing Handoff", 
    desc: "Once your manuscript is finished, we connect you directly to our editing, design and formatting teams for a seamless path to publication.", 
    icon: (<><path d="M4 19.5V6a2 2 0 0 1 2-2h12a1 1 0 0 1 1 1v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 16.5H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6.5a2 2 0 0 1 0-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></>) 
  }
];

export const confidentialityData = [
  { title: "NDA From Day One", desc: "Signed before your first interview begins.", icon: (<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8"/>) },
  { title: "Secure Storage", desc: "Interviews and drafts kept in encrypted files.", icon: (<><rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.8"/></>) },
  { title: "Writer Never Disclosed", desc: "Your ghostwriter's identity stays private unless you choose to share it.", icon: (<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>) },
  { title: "Full Rights, Full Credit", desc: "You own the copyright and the byline — 100%, always.", icon: (<path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>) }
];

export const ghostwritingProcessData: IProcessStep[] = [
  { num: "01", title: "Discovery Call", desc: "A free, no-obligation call to discuss your story, goals and timeline. We confirm fit before anything else begins." },
  { num: "02", title: "NDA & Matching", desc: "You sign an NDA, and we match you with a ghostwriter whose experience and style fit your subject matter and voice." },
  { num: "03", title: "Recorded Interviews", desc: "8–20 hours of structured conversations, scheduled around your availability, form the foundation of your manuscript." },
  { num: "04", title: "Chapter Drafts & Review", desc: "Chapters delivered progressively for your feedback — guiding tone, detail and direction throughout the writing process." },
  { num: "05", title: "Final Manuscript", desc: "A complete, polished manuscript delivered — with a direct path into our editing, design and publishing services." }
];

export const ghostwritingPricingData: IPricingPackage[] = [
  {
    tier: "Essential", title: "Short-Form Manuscript", sub: "Up to 30,000 words",
    price: "Custom", unit: "Quoted per project scope",
    list: ["8–10 hours of interviews", "Chapter-by-chapter drafts", "Voice-matched writing", "NDA included", "1 revision round"]
  },
  {
    tier: "Standard", title: "Full-Length Book", sub: "40,000–70,000 words", popular: true,
    price: "Custom", unit: "Quoted per project scope",
    list: ["12–16 hours of interviews", "Full structural editing included", "Fact-checking & research support", "Progressive chapter review", "2 revision rounds", "Publishing team handoff"]
  },
  {
    tier: "Premium", title: "Complex / Research-Heavy", sub: "70,000+ words, extensive research",
    price: "Custom", unit: "Quoted per project scope",
    list: ["20+ hours of interviews", "Dedicated research support", "Priority senior ghostwriter", "Legal review for sensitive content", "Unlimited revision rounds", "Full publishing partnership"]
  }
];

export const ghostwritingFaqsData: IFAQ[] = [
  { q: "What is ghostwriting and how does it work?", a: "Ghostwriting is when a professional writer creates your book on your behalf, based on your ideas, stories and expertise, and you retain full authorship credit. The process starts with in-depth interviews where we learn your story, voice and goals, then we draft, revise and deliver a finished manuscript that reads as if you wrote it yourself." },
  { q: "Will the book sound like me or like the ghostwriter?", a: "It will sound like you. Our ghostwriters are trained to capture your specific voice, cadence, vocabulary and storytelling style during the interview process. The goal is a manuscript that reads exactly as if you sat down and wrote it yourself, just more polished." },
  { q: "Is ghostwriting confidential?", a: "Yes. Every ghostwriting project begins with a signed non-disclosure agreement. Your ideas, interviews, and manuscript content remain strictly confidential, and your ghostwriter will never be disclosed without your permission." },
  { q: "How many interviews will I need to do?", a: "This depends on your package and book length, typically ranging from 8 to 20 hours of recorded interviews spread across several sessions. We work around your schedule, including evenings and weekends, and interviews can be conducted by phone or video call." },
  { q: "How long does the ghostwriting process take?", a: "Most ghostwriting projects take four to nine months from initial interview to finished manuscript, depending on book length, research complexity, and revision cycles. We provide a specific timeline with every quote." },
  { q: "Do you ghostwrite fiction as well as non-fiction?", a: "Yes. While memoir and business books are our most requested categories, we also ghostwrite novels across genres. We work from your plot outline, characters and world-building notes to craft a complete manuscript in your creative vision." }
];

export const ghostwritingTestimonials: ITestimonial[] = [
  { stars: "★★★★★", text: "I'd tried to write my memoir myself for three years and never got past chapter two. My ghostwriter had the whole thing drafted in five months, and reading it felt like reading my own diary — if my diary actually made sense to other people.", name: "Carol B.", time: "Memoir · Standard Package" },
  { stars: "★★★★★", text: "As a CEO I had zero time to write, but I needed a book to establish authority in my space. The interviews fit around my schedule completely, and the final manuscript sounded exactly like how I talk — just better organized.", name: "Marcus T.", time: "Business Book · Standard Package" },
  { stars: "★★★★★", text: "I was nervous about confidentiality since my book touches on some sensitive family history. The NDA process put me completely at ease, and my writer handled the difficult material with real care and discretion.", name: "Rebecca L.", time: "Biography · Premium Package" }
];