import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChatFab } from '../components/layout/ChatFab';
import { BackToTop } from '../components/layout/BackToTop';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { MarketingHero } from '../components/sections/MarketingHero';
import { ChannelsShowcase } from '../components/sections/ChannelsShowcase';
import { LaunchTimeline } from '../components/sections/LaunchTimeline';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PricingSection } from '../components/sections/PricingSection';
import { LeadFormSection } from '../components/sections/LeadFormSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { marketingIncludedData, marketingProcessData, marketingPricingData, marketingFaqsData, marketingTestimonials } from '../data/marketing';
import { IncludedSection } from '../components/sections/IncludedSection';

export const MarketingPage = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar__track">
          <span>📈 Limited-Time — Get <strong>30% OFF</strong> Book Marketing this month</span>
          <span className="dot">•</span>
          <span>🎯 Amazon Ads, BookBub & Social — <strong>Managed End to End</strong></span>
          <span className="dot">•</span>
          <span>📊 Real Reporting, No Guesswork — <strong>Know What's Working</strong></span>
          <span className="dot">•</span>
          <span>📈 Limited-Time — Get <strong>30% OFF</strong> Book Marketing this month</span>
          <span className="dot">•</span>
          <span>🎯 Amazon Ads, BookBub & Social — <strong>Managed End to End</strong></span>
          <span className="dot">•</span>
          <span>📊 Real Reporting, No Guesswork — <strong>Know What's Working</strong></span>
        </div>
      </div>

      <Header />
      
      <main>
        <MarketingHero />
        
        {/* Trust Bar Inline */}
        <div className="trust-bar">
          <div className="container trust-bar__inner">
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">🎯</div><div><span>Amazon Ads Managed</span><small>Sponsored Product campaigns</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">✓</div><div><span>BookBub Submissions</span><small>Featured Deals & Ads</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--ink">📱</div><div><span>Social & BookTok Content</span><small>Short-form video included</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">🛡️</div><div><span>No Existing Platform Needed</span><small>Paid reach from day one</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">⏱️</div><div><span>Results in 1–2 Weeks</span><small>Initial ad data</small></div></div>
          </div>
        </div>

        <ChannelsShowcase />
        
        {/* Using a generic IncludedSection if you have one, or create MarketingIncluded.tsx */}
        <IncludedSection 
          data={marketingIncludedData}
          eyebrow="Full Marketing Service"
          title="Everything Needed to Get Your Book Discovered"
          sub="One strategist, one coordinated plan, campaigns managed across every channel that matters for your genre."
        />
        
        <LaunchTimeline />
        
        <ProcessSection 
          data={marketingProcessData} 
          variant="timeline" 
          ctaText="Start My Marketing Campaign" 
        />
        
        <PricingSection 
          data={marketingPricingData} 
          note="All packages start with a free strategy call — no commitment required. <a href='#lead-form' style='color:var(--burgundy);font-weight:700'>Book yours →</a>" 
        />
        
        {/* Universal Lead Form */}
        <LeadFormSection 
          urgencyText="Limited strategist slots this month — 30% off"
          heading="Ready to Get Your Book in Front of Readers?"
          paragraph="Tell us about your book. A marketing strategist will review your genre and goals and send a free, no-obligation channel recommendation within one business day."
          points={[
            { icon: "🎯", text: <><strong>No existing audience needed</strong> — paid channels put you in front of readers immediately.</> },
            { icon: "📊", text: <><strong>Full transparency on spend</strong> — you always know exactly where your ad budget is going.</> },
            { icon: "🧩", text: <><strong>Channels matched to genre</strong> — what works for thrillers doesn't work for business books.</> },
            { icon: "📈", text: <><strong>Monthly reporting, always</strong> — see real performance data, not vague promises.</> }
          ]}
          channelsTitle="Prefer to talk first?"
          formTitle="Get Your Free Marketing Strategy Call"
          buttonText="Get My Free Strategy Call"
        />
        
        <TestimonialsSection data={marketingTestimonials} />
        
        <FAQSection 
          data={marketingFaqsData}
          eyebrow="Common Questions"
          title="Book Marketing FAQs"
          sub="Everything you need to know before starting a marketing campaign for your book."
        />

        <FinalCTA 
          urgency="30% off ends this month — limited strategist slots remaining"
          title="The Best Book in the World Still Needs to Be Found"
          text="You wrote it. Now let's make sure readers can actually find it. Get a free strategy call and a channel recommendation tailored to your genre — no pressure, no obligation."
          primaryBtnText="Get My Free Strategy Call"
        />
      </main>

      <Footer />
      <ChatFab />
      <BackToTop />
    </>
  );
};