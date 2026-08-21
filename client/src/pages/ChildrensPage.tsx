import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChatFab } from '../components/layout/ChatFab';
import { BackToTop } from '../components/layout/BackToTop';
import { ChildrensHero } from '../components/sections/ChildrensHero';
import { StyleShowcase } from '../components/sections/StyleShowcase';
import { ChildrensIncluded } from '../components/sections/ChildrensIncluded';
import { AgeCategories } from '../components/sections/AgeCategories';
import { SpreadExplainer } from '../components/sections/SpreadExplainer';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PricingSection } from '../components/sections/PricingSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { childrensProcessData, childrensPricingData, childrensFaqsData, childrensTestimonials } from '../data/childrens';
import { LeadFormSection } from '../components/sections/LeadFormSection';

export const ChildrensPage = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar__track">
          <span>📚 Limited-Time — Get <strong>30% OFF</strong> Children's Book Publishing this month</span>
          <span className="dot">•</span>
          <span>🎨 Custom Illustrations — <strong>Every Art Style, Every Age Group</strong></span>
          <span className="dot">•</span>
          <span>🌍 Published on Amazon & IngramSpark — <strong>40,000+ Bookstores Worldwide</strong></span>
          <span className="dot">•</span>
          <span>📚 Limited-Time — Get <strong>30% OFF</strong> Children's Book Publishing this month</span>
          <span className="dot">•</span>
          <span>🎨 Custom Illustrations — <strong>Every Art Style, Every Age Group</strong></span>
          <span className="dot">•</span>
          <span>🌍 Published on Amazon & IngramSpark — <strong>40,000+ Bookstores Worldwide</strong></span>
        </div>
      </div>

      <Header />

      <main>
        <ChildrensHero />

        {/* Trust Bar Inline */}
        <div className="trust-bar">
          <div className="container trust-bar__inner">
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--gold">⭐</div><div><span>Award-Winning Illustrators</span><small>Multiple style specialists</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">✓</div><div><span>All Ages Covered</span><small>Board books to middle grade</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--coral">📕</div><div><span>Amazon & IngramSpark</span><small>40,000+ bookstores globally</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--ink">🤝</div><div><span>Dedicated Story Consultant</span><small>From brief to bookshelf</small></div></div>
            <div className="trust-bar__divider"></div>
            <div className="trust-pill"><div className="trust-pill__icon trust-pill__icon--green">⏱️</div><div><span>8–16 Week Delivery</span><small>Depending on scope</small></div></div>
          </div>
        </div>

        <StyleShowcase />
        <ChildrensIncluded />
        <AgeCategories />
        <SpreadExplainer />

        <ProcessSection data={childrensProcessData} variant="timeline" ctaText="Start My Children's Book" />

        <PricingSection
          data={childrensPricingData}
          note="All packages include character design approval before full illustration begins. <a href='#lead-form' style='color:var(--burgundy);font-weight:700'>Request a free consultation →</a>"
        />

        <LeadFormSection
          urgencyText="Limited slots this month — 30% off"
          heading="Ready to Bring Your Children's Book to Life?"
          paragraph="Tell us about your story and vision. A children's book specialist will reach out within 1 business day with a free, no-obligation consultation tailored to your book's age group, style and goals."
          points={[
            { icon: "🎨", text: <><strong>Style-matched illustrator</strong> — paired to your story's tone, age group and visual world before any work begins.</> },
            { icon: "✏️", text: <><strong>Character design approval</strong> — you approve your main character before full illustration of every spread begins.</> },
            { icon: "📚", text: <><strong>Global distribution included</strong> — Amazon KDP and IngramSpark access so your book reaches bookstores and libraries worldwide.</> },
            { icon: "🔒", text: <><strong>100% your rights, 100% royalties</strong> — you own every word, every illustration, and every penny your book earns.</> }
          ]}
          channelsTitle="Prefer to talk through your book idea first?"
          formTitle="Get Your Free Children's Book Quote"
          buttonText="Get My Free Publishing Quote"
        />

        <TestimonialsSection data={childrensTestimonials} />

        <FAQSection
          data={childrensFaqsData}
          eyebrow="Common Questions"
          title="Children's Book Publishing FAQs"
          sub="Everything you need to know before starting your children's book project."
        />

        <FinalCTA
          urgency="30% off ends this month — limited illustration slots remaining"
          title="Every Child Deserves a Book Written Just for Them"
          text="Whether it's a story you've carried for years or an idea that came to you last week — we'll help you turn it into a professionally published, beautifully illustrated children's book that will be read and loved for years to come."
          primaryBtnText="Get My Free Publishing Quote"
        />
      </main>

      <Footer />
      <ChatFab />
      <BackToTop />
    </>
  );
};