import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChatFab } from '../components/layout/ChatFab';
import { BackToTop } from '../components/layout/BackToTop';
import { CoverDesignHero } from '../components/sections/CoverDesignHero';
import { CoverDesignPortfolio } from '../components/sections/CoverDesignPortfolio';
import { DeliverablesSection } from '../components/sections/DeliverablesSection';
import { DesignElementsSection } from '../components/sections/DesignElementsSection';
import { HumanVsAiSection } from '../components/sections/HumanVsAiSection';
import { GenresSection } from '../components/sections/GenresSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PricingSection } from '../components/sections/PricingSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { LeadFormSection } from '../components/sections/LeadFormSection';
import { coverDesignProcessData, coverPricingData, coverDesignFaqsData, coverTestimonials, genresData } from '../data/coverDesign';

export const CoverDesignPage = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar__track">
          <span>🎨 Limited-Time — Get <strong>30% OFF</strong> Book Cover Design this month</span>
          <span className="dot">•</span>
          <span>🏆 Award-Winning Designers — <strong>3,000+ Covers Created</strong></span>
          <span className="dot">•</span>
          <span>✅ Human Designers, Not AI — <strong>Covers That Actually Sell</strong></span>
          <span className="dot">•</span>
          <span>🎨 Limited-Time — Get <strong>30% OFF</strong> Book Cover Design this month</span>
          <span className="dot">•</span>
          <span>🏆 Award-Winning Designers — <strong>3,000+ Covers Created</strong></span>
          <span className="dot">•</span>
          <span>✅ Human Designers, Not AI — <strong>Covers That Actually Sell</strong></span>
        </div>
      </div>

      <Header />

      <main>
        <CoverDesignHero />

        {/* Trust Bar Inline */}
        <div className="trust-bar">
          <div className="container trust-bar__inner">
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">⭐</div><div><span>Award-Winning Designers</span><small>Industry recognised</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">✓</div><div><span>3,000+ Covers Created</span><small>Across all major genres</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--ink">🎨</div><div><span>Human Designers Only</span><small>No AI — ever</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">🛡️</div><div><span>KDP & IngramSpark Ready</span><small>Print & digital formats</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">⏱️</div><div><span>7–14 Day Turnaround</span><small>Rush options available</small></div></div>
          </div>
        </div>

        <CoverDesignPortfolio />
        <DeliverablesSection />
        <DesignElementsSection />
        <HumanVsAiSection />
        <GenresSection data={genresData} />

        <ProcessSection data={coverDesignProcessData} variant="timeline" />

        <PricingSection
          data={coverPricingData}
          note="All packages include genre competitor analysis & thumbnail testing. <a href='#lead-form' style='color:var(--burgundy);font-weight:700;'>Request a free brief call →</a>"
        />

        <LeadFormSection
          urgencyText="Limited design slots this month — 30% off"
          heading="Ready for a Cover That Actually Sells Your Book?"
          paragraph="Tell us about your book and vision. A design consultant will reach out within 1 business day with a free brief call — no commitment, no pressure."
          points={[
            { icon: "🎨", text: <><strong>Genre-specialist designer</strong> — matched to your book's category before any design work begins.</> },
            { icon: "🔍", text: <><strong>Competitor analysis included</strong> — we study your genre's bestsellers so your cover stands out, not just fits in.</> },
            { icon: "📐", text: <><strong>Thumbnail-tested every time</strong> — approved at full size and at Amazon thumbnail before we call it done.</> },
            { icon: "📦", text: <><strong>All formats delivered</strong> — print-ready wraparound PDF, eBook digital PNG, and editable source files in one package.</> }
          ]}
          channelsTitle="Prefer to talk through your cover idea first?"
          formTitle="Get Your Free Cover Design Brief"
          buttonText="Get My Free Design Brief"
        />

        <TestimonialsSection data={coverTestimonials} />

        <FAQSection
          data={coverDesignFaqsData}
          eyebrow="Common Questions"
          title="Book Cover Design FAQs"
          sub="Everything you need to know before commissioning your cover."
        />

        <FinalCTA
          urgency="30% off ends this month — limited design slots remaining"
          title="Your Cover Is the First Sale You Make"
          text="Before a reader clicks 'Look Inside.' Before they read a single word. Your cover has already won or lost the sale. Make it count — get a free design brief today."
          primaryBtnText="Get My Free Design Brief"
        />
      </main>

      <Footer />
      <ChatFab />
      <BackToTop />
    </>
  );
};