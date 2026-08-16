import type { IService } from '../types';

export const servicesData: IService[] = [
  { 
    kicker: "Book", title: "Editing", 
    desc: "Professional and thorough developmental editing, copyediting, and proofreading to polish your manuscript and make it publish-ready.", 
    featured: false, 
    href: "/services/editing-proofreading",
    icon: (<><path d="M4 19.5V6a2 2 0 0 1 2-2h12a1 1 0 0 1 1 1v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 16.5H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6.5a2 2 0 0 1 0-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></>) 
  },
  { 
    kicker: "Book", title: "Formatting", 
    desc: "Interior and layout formatting that makes your book readable and eye-catching — perfectly typeset to meet every publishing standard.", 
    featured: false, 
    href: "/services/book-formatting",
    icon: (<><rect x="4" y="4" width="16" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><path d="M4 9h16M9 9v11" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    kicker: "Book", title: "Cover Design", 
    desc: "Book covers that grab your reader's attention — striking designs using fonts and colors that match the theme and soul of your story.", 
    featured: true, 
    href: "/services/book-cover-design",
    icon: (<><path d="M7 3h8l2 4-6 14-6-14 2-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M9 7h6M7 3l5 4 5-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></>) 
  },
  { 
    kicker: "Book", title: "Illustrations", 
    desc: "Imaginative illustrations, infographics, and charts for your books and ebooks, crafted by our talented in-house artists and designers.", 
    featured: false, 
    href: "/services/illustrations",
    icon: (<><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><path d="M8 13l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></>) 
  },
  { 
    kicker: "Book", title: "Marketing", 
    desc: "Promote your book by getting it in front of renowned industry names and reviewers to maximize visibility and increase sales.", 
    featured: false, 
    href: "/services/childrens-book-publishing",
    icon: <path d="M3 11l18-7-7 18-2.5-7.5L3 11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/> 
  },
];