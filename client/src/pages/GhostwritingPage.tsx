import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChatFab } from '../components/layout/ChatFab';
import { BackToTop } from '../components/layout/BackToTop';
import { GhostwritingHero } from '../components/sections/GhostwritingHero';
import { BookTypesShowcase } from '../components/sections/BookTypesShowcase';
import { IncludedSection } from '../components/sections/IncludedSection';
import { VoiceMatchSection } from '../components/sections/VoiceMatchSection';
import { ConfidentialitySection } from '../components/sections/ConfidentialitySection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PricingSection } from '../components/sections/PricingSection';
import { LeadFormSection } from '../components/sections/LeadFormSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { ghostwritingIncludedData, ghostwritingProcessData, ghostwritingPricingData, ghostwritingFaqsData, ghostwritingTestimonials } from '../data/ghostwriting';

export const GhostwritingPage = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar__track">
          <span>🖋️ Limited-Time — Get <strong>30% OFF</strong> Ghostwriting this month</span>
          <span className="dot">•</span>
          <span>🔒 Strict NDA on Every Project — <strong>Your Ideas Stay Yours</strong></span>
          <span className="dot">•</span>
          <span>🎙️ Voice-Matched Writing — <strong>It Reads Like You</strong></span>
          <span className="dot">•</span>
          <span>🖋️ Limited-Time — Get <strong>30% OFF</strong> Ghostwriting this month</span>
          <span className="dot">•</span>
          <span>🔒 Strict NDA on Every Project — <strong>Your Ideas Stay Yours</strong></span>
          <span className="dot">•</span>
          <span>🎙️ Voice-Matched Writing — <strong>It Reads Like You</strong></span>
        </div>
      </div>

      <Header />
      
      <main>
        <GhostwritingHero />
        
        <div className="trust-bar">
          <div className="container trust-bar__inner">
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">🛡️</div><div><span>Strict Confidentiality</span><small>NDA on every project</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">✓</div><div><span>You Keep Full Credit</span><small>100% author, always</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--ink">🎙️</div><div><span>Voice-Matched Writing</span><small>Reads exactly like you</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">📖</div><div><span>Memoir to Fiction</span><small>Every genre covered</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">⏱️</div><div><span>4–9 Month Timeline</span><small>Interview to manuscript</small></div></div>
          </div>
        </div>

        <BookTypesShowcase />
        
        <IncludedSection 
          data={ghostwritingIncludedData}
          eyebrow="Full Ghostwriting Service"
          title="Everything Needed to Go From Idea to Manuscript"
          sub="One writer, one confidential process, a finished manuscript that's entirely, authentically yours."
        />
        
        <VoiceMatchSection />
        <ConfidentialitySection />
        
        <ProcessSection 
          data={ghostwritingProcessData} 
          variant="timeline" 
          ctaText="Start My Ghostwriting Project" 
        />
        
        <PricingSection 
          data={ghostwritingPricingData} 
          note="All packages begin with a free, no-obligation discovery call. <a href='#mid-form' style='color:var(--burgundy);font-weight:700'>Book yours →</a>" 
        />
        
        <LeadFormSection 
          urgencyText="Limited ghostwriter slots this month — 30% off"
          heading="Ready to Finally Get Your Story Written?"
          paragraph="Tell us about your book. A ghostwriting consultant will reach out within one business day for a free, completely confidential discovery call — no pressure, no obligation."
          points={[
            { icon: "🔒", text: <><strong>NDA before we talk details</strong> — your idea is protected from the very first call.</> },
            { icon: "🎙️", text: <><strong>Matched to a specialist writer</strong> — genre and subject-matter experience, not a generalist.</> },
            { icon: "✍️", text: <><strong>You stay in control</strong> — review and guide every chapter as it's written, not just at the end.</> },
            { icon: "📚", text: <><strong>A clear path to publishing</strong> — seamless handoff to editing, design and distribution when you're ready.</> }
          ]}
          channelsTitle="Prefer to talk first?"
          formTitle="Get Your Free Confidential Consultation"
          buttonText="Get My Free Consultation"
        />
        
        <TestimonialsSection data={ghostwritingTestimonials} />
        
        <FAQSection 
          data={ghostwritingFaqsData}
          eyebrow="Common Questions"
          title="Ghostwriting FAQs"
          sub="Everything you need to know before starting your ghostwriting project."
        />

        <FinalCTA 
          urgency="30% off ends this month — limited ghostwriter slots remaining"
          title="The Book You've Been Meaning to Write Starts With a Conversation"
          text="You don't need to know how to write a book. You just need to know your story. Let's talk — confidentially, with no pressure — about turning it into one."
          primaryBtnText="Get My Free Consultation"
        />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};