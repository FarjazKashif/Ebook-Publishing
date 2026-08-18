// src/data/marketing.ts
import type { IIncludedFeature, IProcessStep, IPricingPackage, IFAQ } from '../types';

export const marketingIncludedData: IIncludedFeature[] = [
  { 
    title: "Amazon Ads Management", 
    desc: "Sponsored Product campaigns targeting comparable authors and genre keywords, with ongoing bid optimization and monthly reporting.", 
    icon: (<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "BookBub Strategy", 
    desc: "Featured Deal submissions optimised for acceptance, plus managed BookBub Ads campaigns targeting engaged genre readers.", 
    icon: (<><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3a9 9 0 1 1 0 18A9 9 0 0 1 12 3z" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "Social Media Content", 
    desc: "Short-form video for TikTok and Instagram Reels, plus static posts and an engagement strategy built for your target readers.", 
    icon: (<><rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M9 18h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Email Marketing", 
    desc: "Launch sequences, newsletter growth strategy, and lead magnet design to build a reader list you own and control long-term.", 
    icon: (<><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.6"/><path d="M4 8h16M9 8v12" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "Press & Review Outreach", 
    desc: "Targeted pitches to book bloggers, reviewers and podcasts in your genre to build early social proof and word of mouth.", 
    icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.6"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "Monthly Performance Reports", 
    desc: "Clear reporting on ad spend, reach, sales rank movement and channel performance — no vanity metrics, just what matters.", 
    icon: (<><path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M7 14l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></>) 
  }
];

export const launchTimelineData = [
  {
    phase: "Pre-Launch",
    title: "Build Anticipation",
    list: ["Author website & landing page live", "Email list & lead magnet in place", "Advance reader copies distributed", "Social teaser content scheduled"]
  },
  {
    phase: "Launch Week",
    title: "Coordinated Push",
    list: ["Amazon Ads live from day one", "Launch email sequence sent", "Review requests to early readers", "Daily social content push"]
  },
  {
    phase: "Post-Launch",
    title: "Sustain Momentum",
    list: ["Ad optimization based on real data", "BookBub Featured Deal submission", "Ongoing content & email nurture", "Monthly strategy review calls"]
  }
];

export const marketingProcessData: IProcessStep[] = [
  { num: "01", title: "Free Strategy Call", desc: "We discuss your book, genre, budget and goals, and recommend the right channel mix for your specific title." },
  { num: "02", title: "Campaign Build", desc: "We set up ad accounts, write copy, design creative and prepare submissions across every channel in your plan." },
  { num: "03", title: "Launch & Monitor", desc: "Your campaign goes live, and we monitor performance daily during the critical early weeks, adjusting as real data comes in." },
  { num: "04", title: "Report & Optimize", desc: "Monthly performance reports and strategy calls keep you informed and let us continually refine what's working." }
];

export const marketingPricingData: IPricingPackage[] = [
  {
    tier: "Starter", title: "Single Channel", sub: "Amazon Ads or BookBub only",
    price: "Custom", unit: "Monthly management fee + ad spend",
    list: ["One channel, fully managed", "Campaign setup & copywriting", "Monthly performance report", "Bid & budget optimization"]
  },
  {
    tier: "Growth", title: "Multi-Channel Campaign", sub: "Amazon Ads + BookBub + Social", popular: true,
    price: "Custom", unit: "Monthly management fee + ad spend",
    list: ["3 channels, fully coordinated", "Social content creation included", "Email sequence setup", "BookBub Featured Deal submission", "Monthly strategy call"]
  },
  {
    tier: "Full Launch", title: "Complete Campaign", sub: "All channels + press outreach + website",
    price: "Custom", unit: "Monthly management fee + ad spend",
    list: ["All 6 channels managed", "Author website build included", "Press & blogger outreach", "Full pre/launch/post-launch plan", "Priority strategist support"]
  }
];

export const marketingFaqsData: IFAQ[] = [
  { q: "How much does book marketing cost?", a: "Book marketing costs depend on the channels used and your campaign scope. We offer tiered packages from single-channel starter campaigns to full multi-channel launches, plus separate ad spend budgets you control directly. We provide a transparent custom quote after understanding your goals." },
  { q: "Do you manage Amazon Ads for my book?", a: "Yes. We set up and manage Amazon Sponsored Product campaigns targeting comparable authors and relevant keywords in your genre, with ongoing bid optimization and monthly performance reporting." },
  { q: "Can you get my book featured on BookBub?", a: "We prepare and submit BookBub Featured Deal applications on your behalf and manage BookBub Ads campaigns. Featured Deal acceptance is determined by BookBub's editorial team based on reviews, pricing and genre fit, but we optimize your submission for the best possible chance." },
  { q: "Do I need a big following to benefit from book marketing?", a: "No. Most of our clients start with little to no existing platform. Paid channels like Amazon Ads and BookBub don't require an audience of your own — they put your book in front of readers who are already looking for books like yours." },
  { q: "How long before I see results from a marketing campaign?", a: "Paid advertising channels like Amazon Ads typically show initial data within 1-2 weeks, though meaningful optimization takes 4-6 weeks. Organic channels like social media and email typically take longer to build momentum. We set realistic expectations and timelines during your strategy call." },
  { q: "Do you handle social media marketing too?", a: "Yes. We create and manage social media content including short-form video for TikTok and Instagram Reels, static posts, and engagement strategy tailored to your genre and target readers." }
];

export const marketingTestimonials = [
  { stars: "★★★★★", text: "My book sat at zero sales for two months after launch. Within three weeks of starting Amazon Ads, I was averaging daily sales and climbing in my category. I wish I'd started sooner.", name: "Priya S.", time: "Fantasy · Growth Package" },
  { stars: "★★★★★", text: "We got a BookBub Featured Deal on our second submission after they helped me fix my pricing and category strategy. It was genuinely the single biggest sales day I've ever had.", name: "Kevin O.", time: "Thriller · Full Launch Package" },
  { stars: "★★★★★", text: "I had zero social media presence and was terrified of video content. The team built a BookTok strategy for me that actually worked — my first video hit 40,000 views and directly drove sales.", name: "Anita R.", time: "Romance · Growth Package" }
];