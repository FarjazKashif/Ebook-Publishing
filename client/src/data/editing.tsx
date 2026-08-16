// src/data/editing.ts
import type { IEditingService, IEditorCred, IPricingPackage, IFAQ, IProcessStep } from '../types';

export const editingServicesData: IEditingService[] = [
  {
    num: "01", tag: "Most Comprehensive", title: "Developmental Editing",
    desc: "A deep structural review of your entire manuscript — plot, pacing, character arc, chapter structure, thematic consistency, and narrative flow. Ideal if you've finished a draft but know something isn't quite working.",
    list: ["Full manuscript structural assessment", "Chapter-by-chapter editorial letter", "Plot hole & pacing analysis", "Character arc & motivation review", "Inline comments throughout manuscript"]
  },
  {
    num: "02", tag: "Recommended", title: "Copyediting", featured: true, ribbon: "Most Popular",
    desc: "Line-by-line editing for grammar, spelling, punctuation, style consistency and sentence-level clarity. The essential edit before any book is published — catches the errors that undermine reader trust.",
    list: ["Grammar, spelling & punctuation", "Style consistency throughout", "Sentence clarity & flow", "Fact-checking flagged issues", "Tracked changes + style sheet"]
  },
  {
    num: "03", tag: "Precision Focused", title: "Line Editing",
    desc: "Focused on the craft of writing at the sentence and paragraph level — rhythm, word choice, tone, voice, transitions and paragraph flow. Perfect when your structure is solid but your prose needs polish.",
    list: ["Word choice & tone refinement", "Sentence rhythm & variety", "Paragraph transitions", "Voice consistency", "Show don't tell feedback"]
  },
  {
    num: "04", tag: "Final Polish", title: "Proofreading",
    desc: "The final safety net before publishing. A meticulous read-through to catch any remaining typos, formatting inconsistencies, widow/orphan lines, and production errors your previous editors may have missed.",
    list: ["Typo & final spelling sweep", "Formatting inconsistency check", "Header, chapter & layout errors", "Widow/orphan line correction", "Print-ready quality assurance"]
  }
];

export const editorCredsData: IEditorCred[] = [
  {
    iconBg: "linear-gradient(135deg,var(--gold-light),var(--gold))",
    icon: (<path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>),
    title: "MFA & Publishing Credentials",
    desc: "Every editor holds an MFA in Creative Writing, Journalism, or English — or has direct experience at a Big-5 publishing house, literary agency, or major publication."
  },
  {
    iconBg: "var(--ink)",
    icon: (<path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>),
    title: "Genre Specialists",
    desc: "We match your manuscript to an editor who specialises in your genre — whether that's literary fiction, business non-fiction, children's books, memoir, or self-help. The nuances matter."
  },
  {
    iconBg: "var(--burgundy)",
    icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>),
    title: "Voice-First Philosophy",
    desc: "Your writing voice is an asset, not a problem to solve. Our editors are trained to strengthen what makes your writing distinctive — not homogenise it into a bland, generic style."
  }
];

export const pricingPackagesData: IPricingPackage[] = [
  {
    tier: "Starter", title: "Proofreading", sub: "Final polish before publishing",
    price: "Custom", unit: "Quoted per word count & complexity",
    list: ["Spelling, grammar & typo sweep", "Formatting inconsistency check", "Punctuation corrections", "Tracked changes in Word", "5–7 day turnaround (avg)"]
  },
  {
    tier: "Recommended", title: "Copyediting", sub: "The complete pre-publish edit", popular: true,
    price: "Custom", unit: "Quoted per word count & complexity",
    list: ["Everything in Proofreading", "Grammar & style consistency", "Sentence-level clarity edit", "Style sheet provided", "One free revision round", "7–10 day turnaround (avg)"]
  },
  {
    tier: "Full Service", title: "Developmental + Copy", sub: "Structure & sentence — complete",
    price: "Custom", unit: "Quoted per word count & complexity",
    list: ["Full structural assessment", "Editorial letter (10–15 pages)", "Complete copyedit pass", "Inline comments throughout", "Two free revision rounds", "Priority editor matching"]
  }
];

export const editingFaqsData: IFAQ[] = [
  { q: "What's the difference between copyediting and proofreading?", a: "Copyediting focuses on grammar, spelling, punctuation, style consistency and sentence-level clarity throughout your manuscript. Proofreading is the final quality-check — it catches remaining typos, formatting errors or inconsistencies after layout and design are complete. Proofreading happens after copyediting, not instead of it." },
  { q: "How long does book editing take?", a: "Turnaround depends on manuscript length and editing type. Proofreading an 80,000-word novel typically takes 5–7 business days. Full developmental editing for the same manuscript may take 3–4 weeks. We provide a specific timeline with every free quote." },
  { q: "Do I need developmental editing or copyediting?", a: "If your manuscript has structural issues — plot holes, pacing problems, unclear arguments — you need developmental editing first. Once the structure is solid, copyediting addresses grammar, style and clarity at the sentence level. Many authors benefit from both stages in sequence. Not sure? Submit for our free assessment." },
  { q: "Will the editor change my writing voice?", a: "No. A professional editor enhances your voice, not replaces it. Our editors are trained to preserve what makes your writing distinctive while improving clarity and correctness. Every suggested change includes an explanation, and you accept or reject each one individually." },
  { q: "What file formats do you accept?", a: "We accept Microsoft Word (.docx), Google Docs (shared link), and plain text (.txt). All edits are returned in Word with tracked changes enabled, so you can review, accept or reject each suggestion individually." },
  { q: "How much does book editing cost?", a: "Editing costs depend on manuscript length, the type of editing, and the current condition of your draft. We offer transparent per-project pricing — no hourly surprises. Contact us for a free, no-obligation quote. We also include a free 1,000-word sample edit so you can evaluate our quality before committing." }
];

export const editingProcessData: IProcessStep[] = [
  { num: "01", title: "Submit Your Manuscript", desc: "Upload your draft in Word or Google Docs format. We review it within 24 hours and confirm the right editing service for your goals." },
  { num: "02", title: "Get Matched to an Editor", desc: "We pair you with a specialist editor in your genre who reviews your brief, writing sample, and goals before starting work." },
  { num: "03", title: "Receive Your Edited Manuscript", desc: "All edits delivered with tracked changes in Word and an editorial letter explaining key decisions — so you're always in control." },
  { num: "04", title: "Revise & Approve", desc: "Review every tracked change, ask questions, and request one free round of follow-up edits. Nothing goes to print without your approval." }
];

// Custom testimonials for this page
export const editingTestimonials = [
  { stars: "★★★★★", text: "My editor caught things I'd missed in six read-throughs. The tracked changes were clear, the editorial letter was insightful, and my voice felt stronger — not erased. Worth every penny.", name: "Karen L.", time: "Literary Fiction · Copyediting" },
  { stars: "★★★★★", text: "I submitted a rough second draft for developmental editing expecting lots of red ink. What I got was a detailed, encouraging roadmap that showed me exactly how to fix the structural issues I knew were there but couldn't identify myself.", name: "Thomas W.", time: "Thriller · Developmental Editing" },
  { stars: "★★★★★", text: "Fast, professional, and thorough. The proofreader caught 47 errors in a manuscript I thought was clean. My book launched on Amazon looking as polished as anything from a Big-5 publisher.", name: "Sandra M.", time: "Business Non-Fiction · Proofreading" }
];