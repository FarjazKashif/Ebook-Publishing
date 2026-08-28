import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { BackToTop } from '../components/layout/BackToTop';
import { AudiobookHero } from '../components/sections/AudiobookHero';
import { VoiceShowcase } from '../components/sections/VoiceShowcase';
import { IncludedSection } from '../components/sections/IncludedSection';
import { PayModelSection } from '../components/sections/PayModelSection';
import { PlatformsSection } from '../components/sections/PlatformsSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PricingSection } from '../components/sections/PricingSection';
import { LeadFormSection } from '../components/sections/LeadFormSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { audiobookIncludedData, audiobookProcessData, audiobookPricingData, audiobookFaqsData, audiobookTestimonials } from '../data/audiobook';

export const AudiobookPage = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar__track">
          <span>🎧 Limited-Time — Get <strong>30% OFF</strong> Audiobook Production this month</span>
          <span className="dot">•</span>
          <span>🎙️ Human Narrators Only — <strong>ACX & Audible Compliant</strong></span>
          <span className="dot">•</span>
          <span>💰 Keep 100% of Your Royalties — <strong>Pay Per Finished Hour</strong></span>
          <span className="dot">•</span>
          <span>🎧 Limited-Time — Get <strong>30% OFF</strong> Audiobook Production this month</span>
          <span className="dot">•</span>
          <span>🎙️ Human Narrators Only — <strong>ACX & Audible Compliant</strong></span>
          <span className="dot">•</span>
          <span>💰 Keep 100% of Your Royalties — <strong>Pay Per Finished Hour</strong></span>
        </div>
      </div>

      <Header />
      
      <main>
        <AudiobookHero />
        
        <div className="trust-bar">
          <div className="container trust-bar__inner">
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">🎤</div><div><span>Human Narrators Only</span><small>No AI, ever</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">✓</div><div><span>Genre-Matched Casting</span><small>Audition before you commit</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--ink">🌍</div><div><span>Distributed Everywhere</span><small>Audible, Apple, Spotify & more</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">💰</div><div><span>100% Royalties Yours</span><small>Pay-per-finished-hour model</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">⏱️</div><div><span>8–14 Week Production</span><small>Casting to final master</small></div></div>
          </div>
        </div>

        <VoiceShowcase />
        
        <IncludedSection 
          data={audiobookIncludedData}
          eyebrow="Full Production Service"
          title="Everything Needed to Go From Manuscript to Audiobook"
          sub="One production team, one narrator match, every technical detail handled — from casting to final distribution."
        />
        
        <PayModelSection />
        <PlatformsSection />
        
        <ProcessSection 
          data={audiobookProcessData} 
          variant="timeline" 
          ctaText="Start My Audiobook Project" 
        />
        
        <PricingSection 
          data={audiobookPricingData} 
          note="All packages include a free narrator audition before you commit. <a href='#mid-form' style='color:var(--burgundy);font-weight:700'>Request yours →</a>" 
        />
        
        <LeadFormSection 
          urgencyText="Limited narrator slots this month — 30% off"
          heading="Ready to Hear Your Book Come to Life?"
          paragraph="Tell us about your manuscript. A production consultant will review your genre and length and send a free, no-obligation quote with narrator audition samples within one business day."
          points={[
            { icon: "🎙️", text: <><strong>Free narrator auditions</strong> — hear real samples before you commit to anyone.</> },
            { icon: "💰", text: <><strong>Keep 100% of royalties</strong> — pay-per-finished-hour, no ongoing revenue share.</> },
            { icon: "✅", text: <><strong>ACX & Audible compliant</strong> — every file meets retailer technical standards.</> },
            { icon: "🌍", text: <><strong>Distributed everywhere</strong> — Audible, Apple, Spotify, Google Play and more.</> }
          ]}
          channelsTitle="Prefer to talk first?"
          formTitle="Get Your Free Audiobook Quote"
          buttonText="Get My Free Audiobook Quote"
        />
        
        <TestimonialsSection data={audiobookTestimonials} />
        
        <FAQSection 
          data={audiobookFaqsData}
          eyebrow="Common Questions"
          title="Audiobook Production FAQs"
          sub="Everything you need to know before producing your audiobook."
        />

        <FinalCTA 
          urgency="30% off ends this month — limited narrator slots remaining"
          title="Somewhere, a Listener Is Waiting for Your Book"
          text="Audiobooks are the fastest-growing way readers discover new authors. Get a free quote and hear real narrator samples before you commit to anything."
          primaryBtnText="Get My Free Audiobook Quote"
        />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};