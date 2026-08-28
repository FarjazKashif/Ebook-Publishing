import type { IIncludedFeature, IProcessStep, IPricingPackage, IFAQ, ITestimonial } from '../types';

export const audiobookIncludedData: IIncludedFeature[] = [
  { 
    title: "Narrator Casting & Auditions", 
    desc: "Sample auditions from narrators matched to your genre and tone. You listen and approve your narrator before full recording begins.", 
    icon: (<><path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.6"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) 
  },
  { 
    title: "Professional Studio Recording", 
    desc: "Full manuscript recorded in professional studio conditions, with pronunciation guides prepared in advance for names and terms.", 
    icon: (<><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "Editing & Mastering", 
    desc: "Every chapter edited for pacing and clarity, then mastered to meet Audible's strict technical loudness and noise-floor standards.", 
    icon: (<><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3a9 9 0 1 1 0 18A9 9 0 0 1 12 3z" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "Multi-Platform Distribution", 
    desc: "Delivered to Audible/ACX, Apple Books, Spotify, Google Play, Kobo and library platforms so listeners can find you everywhere.", 
    icon: (<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.6"/></>) 
  },
  { 
    title: "Quality Control Review", 
    desc: "Every finished hour reviewed against retailer technical specs and proofed against your manuscript before submission.", 
    icon: (<><path d="M4 19.5V6a2 2 0 0 1 2-2h12a1 1 0 0 1 1 1v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 16.5H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6.5a2 2 0 0 1 0-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></>) 
  },
  { 
    title: "Metadata & Retail Setup", 
    desc: "Sample selection, cover art formatting for audio platforms, and metadata optimisation to help your audiobook get discovered.", 
    icon: (<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.6"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.6"/></>) 
  }
];

export const platformsData = [
  { title: "Audible / ACX", desc: "The largest audiobook retailer", icon: (<><path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.8"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>) },
  { title: "Apple Books", desc: "Native iOS & Mac listeners", icon: (<><rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>) },
  { title: "Spotify", desc: "Fast-growing audiobook hub", icon: (<><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><path d="M8 9c3-1 5-1 8 1M7 12.5c2.5-1 5.5-1 8.5.7M8.5 16c2-.7 4-.7 6 .3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>) },
  { title: "Google Play", desc: "Android & web listeners", icon: (<path d="M12 2l3.1 6.2 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.2L7 14.1 2 9.2l6.9-1L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>) },
  { title: "Kobo & Libraries", desc: "Wide retail & library access", icon: (<><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.8"/></>) }
];

export const audiobookProcessData: IProcessStep[] = [
  { num: "01", title: "Submit & Scope", desc: "Share your manuscript, genre and any character voice needs. We estimate finished hours and provide a transparent quote." },
  { num: "02", title: "Narrator Casting", desc: "Review audition samples from narrators matched to your genre and approve your narrator before recording begins." },
  { num: "03", title: "Recording", desc: "Your narrator records the full manuscript in professional studio conditions, chapter by chapter." },
  { num: "04", title: "Edit & Master", desc: "Every chapter edited, mastered and quality-checked against retailer technical specifications before final approval." },
  { num: "05", title: "Distribute & Publish", desc: "Final audio delivered to Audible, Apple Books, Spotify and beyond — live and available to listeners worldwide." }
];

export const audiobookPricingData: IPricingPackage[] = [
  {
    tier: "Starter", title: "Single Narrator", sub: "Standard fiction or non-fiction",
    price: "Custom", unit: "Quoted per finished hour",
    list: ["Narrator casting & audition", "Full recording, editing & mastering", "ACX & Audible compliant files", "1 revision round"]
  },
  {
    tier: "Standard", title: "Full Distribution", sub: "Single narrator + wide distribution", popular: true,
    price: "Custom", unit: "Quoted per finished hour",
    list: ["Everything in Starter", "Distribution to 5+ major platforms", "Metadata & retail setup", "Quality control review", "2 revision rounds"]
  },
  {
    tier: "Premium", title: "Multi-Cast Production", sub: "Fantasy, YA & character-driven fiction",
    price: "Custom", unit: "Quoted per finished hour",
    list: ["Everything in Standard", "Multiple narrators / character voices", "Priority production scheduling", "Unlimited revision rounds"]
  }
];

export const audiobookFaqsData: IFAQ[] = [
  { q: "Do you use AI narration or human narrators?", a: "We use professional human narrators exclusively. Audible's ACX platform, the largest audiobook retailer in the world, does not accept AI-narrated content for standard submission, so human narration keeps your book eligible for the widest possible distribution and the best listener experience." },
  { q: "What's the difference between per finished hour and royalty share?", a: "Per Finished Hour (PFH) means you pay the narrator a flat upfront fee and keep 100% of your audiobook royalties going forward. Royalty Share means no upfront cost, but the narrator keeps a share of royalties for a set period, often several years. We recommend PFH whenever possible so you keep every dollar your audiobook earns." },
  { q: "How much does an audiobook cost to produce?", a: "Professional narration typically costs between $150 and $400 per finished hour, and a standard 300-page book produces roughly 9 to 11 finished hours of audio. We provide a transparent, itemized quote based on your manuscript length, genre and chosen narrator before any work begins." },
  { q: "Which platforms will my audiobook be on?", a: "We distribute to Audible and Amazon via ACX, plus Apple Books, Spotify, Google Play, Kobo, and library platforms through wide distribution aggregators, so your audiobook reaches listeners everywhere they shop, not just one retailer." },
  { q: "How do I choose the right narrator?", a: "We match you with narrator auditions based on your genre, tone and any character voice requirements. You listen to sample auditions and approve your narrator before full production begins, so you know exactly how your book will sound." },
  { q: "How long does audiobook production take?", a: "From narrator casting to final mastered files, most audiobook productions take 8 to 14 weeks depending on book length, narrator availability and revision rounds. We provide a specific timeline with your quote." }
];

export const audiobookTestimonials: ITestimonial[] = [
  { stars: "★★★★★", text: "I cried listening to the first chapter. The narrator captured exactly the tone I'd imagined when I wrote it — tender in the right places, tense in others. Worth every cent of the upfront cost, especially knowing I keep all future royalties.", name: "Melissa D.", time: "Memoir · Standard Package" },
  { stars: "★★★★★", text: "My fantasy series has a dozen named characters and I was terrified they'd all sound the same. My narrator gave each one a distinct, memorable voice. Audible reviewers specifically call out the narration as a highlight.", name: "Ryan T.", time: "Fantasy · Multi-Cast Package" },
  { stars: "★★★★★", text: "I almost went with a cheaper royalty-share narrator before Infusion walked me through the math. Paying upfront meant my audiobook sales this year alone already paid for the whole production, and I keep every dollar going forward.", name: "Carlos V.", time: "Business Book · Standard Package" }
];