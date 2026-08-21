import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChatFab } from '../components/layout/ChatFab';
import { BackToTop } from '../components/layout/BackToTop';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { FormattingHero } from '../components/sections/FormattingHero';
import { LayoutShowcase } from '../components/sections/LayoutShowcase';
import { FormattingIncluded } from '../components/sections/FormattingIncluded';
import { DualFormatSection } from '../components/sections/DualFormatSection';
import { SpecsExplainer } from '../components/sections/SpecsExplainer';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PricingSection } from '../components/sections/PricingSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { formattingProcessData, formattingPricingData, formattingFaqsData, formattingTestimonials } from '../data/formatting';
import { LeadFormSection } from '../components/sections/LeadFormSection';

export const FormattingPage = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar__track">
          <span>📐 Limited-Time — Get <strong>30% OFF</strong> Book Formatting this month</span>
          <span className="dot">•</span>
          <span>📖 Print & eBook Ready — <strong>KDP + IngramSpark Compliant</strong></span>
          <span className="dot">•</span>
          <span>✅ Zero Upload Rejections — <strong>Pre-Checked Every Time</strong></span>
          <span className="dot">•</span>
          <span>📐 Limited-Time — Get <strong>30% OFF</strong> Book Formatting this month</span>
          <span className="dot">•</span>
          <span>📖 Print & eBook Ready — <strong>KDP + IngramSpark Compliant</strong></span>
          <span className="dot">•</span>
          <span>✅ Zero Upload Rejections — <strong>Pre-Checked Every Time</strong></span>
        </div>
      </div>

      <Header />

      <main>
        <FormattingHero />

        {/* Trust Bar Inline */}
        <div className="trust-bar">
          <div className="container trust-bar__inner">
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">✓</div><div><span>Zero-Rejection Guarantee</span><small>Pre-checked against specs</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">📖</div><div><span>Print & eBook Included</span><small>Every package, every time</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--ink">⭐</div><div><span>Genre-Specific Typesetting</span><small>Fiction, non-fiction & more</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">🛡️</div><div><span>KDP & IngramSpark Specs</span><small>Fully compliant files</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">⏱️</div><div><span>5–10 Day Turnaround</span><small>Rush available</small></div></div>
          </div>
        </div>

        <LayoutShowcase />
        <FormattingIncluded />
        <DualFormatSection />
        <SpecsExplainer />

        <ProcessSection data={formattingProcessData} variant="timeline" />

        <PricingSection
          data={formattingPricingData}
          note="All packages include a free 10-page sample formatting on request. <a href='#lead-form' style='color:var(--burgundy);font-weight:700'>Request yours →</a>"
        />

        <LeadFormSection
          urgencyText="Limited slots this month — 30% off"
          heading="Ready for a Book That Reads Like It Was Traditionally Published?"
          paragraph="Tell us about your manuscript. A formatting consultant will review your file and send a free, no-obligation quote — with a 10-page sample formatting — within one business day."
          points={[
            { icon: "📄", text: <><strong>Free 10-page sample</strong> — see exactly how your book will look before you commit.</> },
            { icon: "✅", text: <><strong>Zero-rejection guarantee</strong> — every file checked against KDP and IngramSpark specs before delivery.</> },
            { icon: "📖", text: <><strong>Print + eBook included</strong> — both formats delivered as standard, not an add-on.</> },
            { icon: "🎯", text: <><strong>Genre-matched typesetting</strong> — the right layout conventions for fiction, non-fiction, memoir and more.</> }
          ]}
          channelsTitle="Prefer to talk first?"
          formTitle="Get Your Free Formatting Quote + Sample"
          buttonText="Get My Free Quote & Sample"
        />

        <TestimonialsSection data={formattingTestimonials} />

        <FAQSection
          data={formattingFaqsData}
          eyebrow="Common Questions"
          title="Book Formatting FAQs"
          sub="Everything you need to know before submitting your manuscript for formatting."
        />

        <FinalCTA
          urgency="30% off ends this month — limited formatting slots remaining"
          title="Your Manuscript Deserves to Look as Good as It Reads"
          text="Don't let amateur formatting undercut great writing. Get a free quote and a complimentary 10-page sample — see the difference before you commit to anything."
          primaryBtnText="Get My Free Quote + Sample"
        />
      </main>

      <Footer />
      <ChatFab />
      <BackToTop />
    </>
  );
};