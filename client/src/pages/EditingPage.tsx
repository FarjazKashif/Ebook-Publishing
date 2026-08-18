import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChatFab } from '../components/layout/ChatFab';
import { BackToTop } from '../components/layout/BackToTop';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { EditingHero } from '../components/sections/EditingHero';
import { EditingServices } from '../components/sections/EditingServices';
import { EditorsSection } from '../components/sections/EditorsSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PricingSection } from '../components/sections/PricingSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { editingTestimonials, editingFaqsData, editingProcessData, pricingPackagesData } from '../data/editing'; // <-- Added editingProcessData
import { LeadFormSection } from '../components/sections/LeadFormSection';

export const EditingPage = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar__track">
          <span>✏️ Limited-Time — Get <strong>30% OFF</strong> Editing & Proofreading this month</span>
          <span className="dot">•</span>
          <span>🏆 Rated Excellent by 441+ Authors on Google</span>
          <span className="dot">•</span>
          <span>📖 Professional editors — <strong>MFA & Big-5 trained</strong></span>
          <span className="dot">•</span>
          <span>✏️ Limited-Time — Get <strong>30% OFF</strong> Editing & Proofreading this month</span>
          <span className="dot">•</span>
          <span>🏆 Rated Excellent by 441+ Authors on Google</span>
          <span className="dot">•</span>
          <span>📖 Professional editors — <strong>MFA & Big-5 trained</strong></span>
        </div>
      </div>

      <Header />

      <main>
        <Breadcrumb items={[
          { label: "Home", url: "/" },
          { label: "Services", url: "/services" },
          { label: "Editing & Proofreading" }
        ]} />

        <EditingHero />

        {/* Trust Bar Inline */}
        <div className="trust-bar">
          <div className="container trust-bar__inner">
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">⭐</div><div><span>Rated Excellent</span><small>441+ Google reviews</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">✓</div><div><span>3,000+ Authors Published</span><small>Across all genres</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--ink">🎓</div><div><span>MFA & Big-5 Trained</span><small>Expert editors only</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">🛡️</div><div><span>Your Voice Preserved</span><small>We enhance, never override</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">⏱️</div><div><span>5–14 Day Turnaround</span><small>Depending on length & type</small></div></div>
          </div>
        </div>

        <EditingServices />
        <EditorsSection />

        {/* Before/After Showcase */}
        <section className="before-after">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow"><span className="eyebrow__dot"></span> See the Difference</p>
              <h2 className="section-title">What Expert Editing Actually Looks Like</h2>
              <p className="section-sub">A real example of the transformation our copyeditors deliver — same idea, sharper execution.</p>
            </div>

            <div className="ba-panel">
              {/* BEFORE SIDE */}
              <div className="ba-side ba-side--before">
                <span className="ba-side__label">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
                  Before Editing
                </span>
                <p className="ba-text">
                  The old man <span className="ba-del">walked very slowly</span> towards the door. He was feeling
                  <span className="ba-del">a lot of</span> pain in his <span className="ba-del">old and tired</span> legs.
                  <span className="ba-del">It was very hard for him to</span> move forward but he
                  <span className="ba-del">kept on going</span> anyway, because he <span className="ba-del">really</span> had no choice.
                </p>
                <div className="ba-note">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--burgundy)', flexShrink: 0, marginTop: '1px' }}><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" /><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <p>Weak adverbs, redundant adjectives, and passive sentence rhythm undermine the emotional impact of this scene.</p>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="ba-divider" aria-hidden="true">
                <span className="ba-divider__pill">EDITED</span>
              </div>

              {/* AFTER SIDE */}
              <div className="ba-side ba-side--after">
                <span className="ba-side__label">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  After Editing
                </span>
                <p className="ba-text">
                  The old man <span className="ba-ins">shuffled</span> toward the door. Pain <span className="ba-ins">burned</span> through his legs with each step.
                  <span className="ba-ins">Still, he moved.</span> He had no other choice.
                </p>
                <div className="ba-note">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold-light)', flexShrink: 0, marginTop: '1px' }}><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" /></svg>
                  <p>Precise verbs and shorter sentences create tension and momentum. Same scene — twice as powerful.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection data={editingProcessData} variant="timeline" ctaText="Start Your Editing Project" />

        <PricingSection data={pricingPackagesData} note="All packages include a free sample edit on your first 1,000 words. <a href='#lead-form' style='color:var(--burgundy);font-weight:700;'>Request yours →</a>" />

        <LeadFormSection
          urgencyText="Limited spots this month — 30% off"
          heading="Ready to Get Your Manuscript Professionally Edited?"
          paragraph="Tell us about your project. A real editing consultant will review your details and send a free, no-obligation quote — with a sample edit of your first 1,000 words — within one business day."
          points={[
            { icon: "✏️", text: <><strong>Free 1,000-word sample edit</strong> — see exactly how we'd improve your writing before you commit.</> },
            { icon: "🎯", text: <><strong>Genre-matched editor</strong> — we pair you with a specialist, not a generalist.</> },
            { icon: "💬", text: <><strong>Clear tracked changes</strong> — you accept or reject every suggestion. You stay in control.</> },
            { icon: "🔒", text: <><strong>Fully confidential</strong> — your manuscript is protected by a strict NDA from day one.</> }
          ]}
          channelsTitle="Prefer to talk first?"
          formTitle="Get Your Free Editing Quote"
          buttonText="Get My Free Quote & Sample Edit"
        />

        <TestimonialsSection data={editingTestimonials} />

        <FAQSection
          data={editingFaqsData}
          eyebrow="Common Questions"
          title="Editing & Proofreading FAQs"
          sub="Everything you need to know before submitting your manuscript."
        />

        <FinalCTA
          urgency="30% off ends this month — limited spots remaining"
          title="Your Manuscript Is Closer to Published Than You Think"
          text="Let our editors take it across the finish line. Get a free quote and a complimentary 1,000-word sample edit — no commitment required."
          primaryBtnText="Get My Free Quote + Sample Edit"
        />
      </main>

      <Footer />
      <ChatFab />
      <BackToTop />
    </>
  );
};