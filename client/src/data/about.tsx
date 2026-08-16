// src/data/about.ts
import type { IValue, ITeamMember, IDifferentiator } from '../types';

export const valuesData: IValue[] = [
  { 
    title: "Authors First, Always", 
    desc: "Every decision we make starts with one question: is this good for the author? From pricing to timelines to royalty structures, your interests come before ours — full stop. You keep 100% of your rights and 100% of your royalties.", 
    icon: (<path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>) 
  },
  { 
    title: "Uncompromising Quality", 
    desc: "Self-publishing does not mean second-best. Every book we produce is edited, designed, and formatted to the same standard as any traditionally published title. Our authors compete on equal footing with the biggest names.", 
    icon: (<><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3a9 9 0 1 1 0 18A9 9 0 0 1 12 3z" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "Radical Transparency", 
    desc: "No hidden fees. No surprise contract clauses. No opaque processing timelines. You always know exactly what you're paying for, exactly what you'll receive, and exactly when.", 
    icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  }
];

export const teamData: ITeamMember[] = [
  { initial: "S", bgColor: "linear-gradient(135deg,#7A2331,#4F1521)", name: "Sarah Mitchell", role: "Founder & Editorial Director", bio: "Former Big-5 acquisitions editor with 15 years in the industry. Sarah started Infusion Publishing after watching too many talented authors get turned away." },
  { initial: "J", bgColor: "linear-gradient(135deg,#1A3050,#122038)", name: "James Okonkwo", role: "Head of Cover Design", bio: "Award-winning book cover artist whose work has appeared on the shelves of Barnes & Noble, Target and independent bookshops across three continents." },
  { initial: "L", bgColor: "linear-gradient(135deg,#3C6050,#254030)", name: "Lisa Chen", role: "Senior Copy Editor", bio: "Published author and MFA graduate with expertise in fiction, memoir, and business writing. Lisa brings both a writer's empathy and an editor's precision." },
  { initial: "M", bgColor: "linear-gradient(135deg,#4A3860,#2C2040)", name: "Marcus Webb", role: "Book Marketing Lead", bio: "Digital marketing strategist who has launched over 400 titles on Amazon and beyond, with a track record of bestseller campaigns across fiction and non-fiction." }
];

export const differentiatorsData: IDifferentiator[] = [
  {
    eyebrow: "Royalties & Rights",
    title: "You Keep 100% of What You Earn",
    text: "Most publishing services take a cut of your royalties — sometimes as much as 30–50%. We don't. When your book sells, every penny goes directly to you. Your book, your story, your income.",
    list: ["Zero royalty deductions, ever", "You own all rights to your work", "Direct payment from Amazon & distributors", "No hidden contract obligations"],
    panel: "ink",
    panelLabel: "Your Royalty Breakdown",
    panelRows: [
      { 
        icon: (<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>), 
        title: "You receive", 
        subtitle: "100% of net royalties" 
      },
      { 
        icon: (<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>), 
        title: "Infusion Publishing", 
        subtitle: "Service fee only (upfront)" 
      }
    ],
    bar: { percent: 100, label: "Author earnings", value: "100%" }
  },
  {
    flip: true,
    eyebrow: "Production Quality",
    title: "Professional Quality That Rivals Traditional Publishing",
    text: "Self-published doesn't have to mean self-evident. Every book we produce goes through a rigorous multi-stage process resulting in a final product indistinguishable from the biggest publishers.",
    list: ["Multi-stage editorial process", "Award-winning cover designers", "KDP & IngramSpark print-ready files", "eBook formatting for all major platforms"],
    panel: "parchment",
    panelLabel: "Our Production Stages",
    panelRows: [
      { 
        icon: (<><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>), 
        title: "Developmental Edit", 
        subtitle: "Story structure, pacing & clarity" 
      },
      { 
        icon: (<><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3a9 9 0 1 1 0 18A9 9 0 0 1 12 3z" stroke="currentColor" strokeWidth="1.6"/></>), 
        title: "Copy & Proofread", 
        subtitle: "Grammar, style & consistency" 
      },
      { 
        icon: (<><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.6"/></>), 
        title: "Cover Design", 
        subtitle: "Custom art direction & typography" 
      },
      { 
        icon: (<><path d="M4 19.5V6a2 2 0 0 1 2-2h12a1 1 0 0 1 1 1v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 16.5H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6.5a2 2 0 0 1 0-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></>), 
        title: "Print & Digital Format", 
        subtitle: "Ready for every platform" 
      }
    ]
  },
  {
    eyebrow: "Distribution",
    title: "Global Reach From Day One",
    text: "We don't just publish your book — we put it everywhere readers look. Through partnerships with Amazon KDP, IngramSpark, Barnes & Noble, Apple Books, Google Play, Kobo and more, your title is discoverable by millions.",
    list: ["Listed on Amazon in 13 marketplaces", "IngramSpark for bookstore & library access", "eBook distribution to 40+ platforms", "ISBN registration included"],
    panel: "burgundy",
    panelLabel: "Distribution Platforms",
    panelRows: [
      { 
        icon: (<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.6"/></>), 
        title: "Amazon KDP", 
        subtitle: "Print & digital — 13 global stores" 
      },
      { 
        icon: (<><path d="M4 19.5V6a2 2 0 0 1 2-2h12a1 1 0 0 1 1 1v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 16.5H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6.5a2 2 0 0 1 0-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></>), 
        title: "IngramSpark", 
        subtitle: "Bookstores, libraries & more" 
      },
      { 
        icon: (<><rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>), 
        title: "Apple, Kobo & Google", 
        subtitle: "40+ eBook platforms" 
      }
    ]
  }
];