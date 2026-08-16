import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChatFab } from '../components/layout/ChatFab';
import { BackToTop } from '../components/layout/BackToTop';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { IllustrationHero } from '../components/sections/IllustrationHero';
import { TypeShowcase } from '../components/sections/TypeShowcase';
import { IllustrationIncluded } from '../components/sections/IllustrationIncluded';
import { SketchProcess } from '../components/sections/SketchProcess';
import { GenresSection } from '../components/sections/GenresSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PricingSection } from '../components/sections/PricingSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { illustrationProcessData, illustrationPricingData, illustrationFaqsData, illustrationTestimonials, illustrationGenresData } from '../data/illustrations';
import { LeadFormSection } from '../components/sections/LeadFormSection';

export const IllustrationsPage = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar__track">
          <span>🎨 Limited-Time — Get <strong>30% OFF</strong> Book Illustration this month</span>
          <span className="dot">•</span>
          <span>✏️ Sketch Approval Included — <strong>See It Before It's Final</strong></span>
          <span className="dot">•</span>
          <span>🗺️ Spot Art to Full Spreads — <strong>Every Genre, Every Format</strong></span>
          <span className="dot">•</span>
          <span>🎨 Limited-Time — Get <strong>30% OFF</strong> Book Illustration this month</span>
          <span className="dot">•</span>
          <span>✏️ Sketch Approval Included — <strong>See It Before It's Final</strong></span>
          <span className="dot">•</span>
          <span>🗺️ Spot Art to Full Spreads — <strong>Every Genre, Every Format</strong></span>
        </div>
      </div>

      <Header />

      <main>
        <Breadcrumb items={[
          { label: "Home", url: "/" },
          { label: "Services", url: "/services" },
          { label: "Illustrations" }
        ]} />

        <IllustrationHero />

        {/* Trust Bar Inline */}
        <div className="trust-bar">
          <div className="container trust-bar__inner">
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">✓</div><div><span>Sketch Approval Included</span><small>Before final rendering</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">🌍</div><div><span>Every Genre Covered</span><small>Fiction to technical</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--ink">🎨</div><div><span>Six Illustration Formats</span><small>Spot art to full spreads</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">🛡️</div><div><span>Print & Digital Ready</span><small>300 DPI, all formats</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">⏱️</div><div><span>2–4 Week Turnaround</span><small>Per illustration set</small></div></div>
          </div>
        </div>

        <TypeShowcase />
        <IllustrationIncluded />
        <SketchProcess />
        <GenresSection data={illustrationGenresData} />

        <ProcessSection data={illustrationProcessData} variant="timeline" />

        <PricingSection
          data={illustrationPricingData}
          columns={4}
          note="Bundle multiple illustrations for a project discount. <a href='#mid-form' style='color:var(--burgundy);font-weight:700'>Request a custom quote →</a>"
        />

        <LeadFormSection
          urgencyText="Limited illustrator slots this month — 30% off"
          heading="Ready to See Your Story Illustrated?"
          paragraph="Tell us what you're imagining. An illustration consultant will review your brief and send a free, no-obligation quote — with recommended formats for your book — within one business day."
          points={[
            { icon: "✏️", text: <><strong>Sketch approval first</strong> — see composition and framing before any final art is rendered.</> },
            { icon: "🎯", text: <><strong>Genre-matched illustrator</strong> — paired to your book's tone and world, not a generalist.</> },
            { icon: "🖼️", text: <><strong>Every format available</strong> — from a single spot illustration to a full fantasy map.</> },
            { icon: "📦", text: <><strong>Print + digital delivered</strong> — 300 DPI files plus web-ready versions for every piece.</> }
          ]}
          channelsTitle="Prefer to talk through your vision first?"
          formTitle="Get Your Free Illustration Quote"
          buttonText="Get My Free Illustration Quote"
        />

        <TestimonialsSection data={illustrationTestimonials} />

        <FAQSection
          data={illustrationFaqsData}
          eyebrow="Common Questions"
          title="Book Illustration FAQs"
          sub="Everything you need to know before commissioning illustrations for your book."
        />

        <FinalCTA
          urgency="30% off ends this month — limited illustrator slots remaining"
          title="Your World Deserves to Be Seen, Not Just Read"
          text="Whether it's one spot illustration or a full set of scenes and maps, our illustrators are ready to bring your story into full view. Get a free quote and start with a no-obligation brief."
          primaryBtnText="Get My Free Illustration Quote"
        />
      </main>

      <Footer />
      <ChatFab />
      <BackToTop />
    </>
  );
};