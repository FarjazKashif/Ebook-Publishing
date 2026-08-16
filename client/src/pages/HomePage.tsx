// src/pages/HomePage.tsx
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChatFab } from '../components/layout/ChatFab';
import { BackToTop } from '../components/layout/BackToTop';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { WhyUsSection } from '../components/sections/WhyUsSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { OfferBanner } from '../components/sections/OfferBanner';
import { LeadFormSection } from '../components/sections/LeadFormSection';
import { processSteps } from '../data/processSteps';
import { testimonialsData } from '../data/testimonials';

export const HomePage = () => {
  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="topbar__track">
          <span>📖 Limited-Time Offer — Get <strong>30% OFF</strong> Editing & Cover Design this month</span>
          <span className="dot">•</span>
          <span>🏆 Rated Excellent by 441+ Authors on Google</span>
          <span className="dot">•</span>
          <span>✍️ Keep <strong>100% Royalties</strong> — Always</span>
          <span className="dot">•</span>
          <span>📖 Limited-Time Offer — Get <strong>30% OFF</strong> Editing & Cover Design this month</span>
          <span className="dot">•</span>
          <span>🏆 Rated Excellent by 441+ Authors on Google</span>
          <span className="dot">•</span>
          <span>✍️ Keep <strong>100% Royalties</strong> — Always</span>
        </div>
      </div>

      <Header />

      <main id="home">
        <HeroSection />

        {/* Proof Strip */}
        <section className="proof-strip">
          <div className="container">
            <p className="proof-strip__label">Publish & sell your book on the world's leading platforms</p>
            <div className="proof-strip__logos">
              <span>Amazon KDP</span><span>IngramSpark</span><span>Barnes & Noble</span><span>Apple Books</span><span>Google Play Books</span><span>Kobo</span>
            </div>
          </div>
        </section>

        <ServicesSection />

        {/* Reusable Offer Banner Component */}
        <OfferBanner
          eyebrow="Limited-Time Offer"
          title="Get"
          highlight="30% OFF Editing & Cover Design"
          text="Lock in launch-month pricing on our most-loved services. Offer ends soon — spots are limited each month to protect quality."
          ctaText="Claim My Discount"
          note="No obligation · Free 15-min consult"
        />

        <WhyUsSection />

        <ProcessSection data={processSteps} variant="cards" ctaText="Get Started Today" />

        {/* We must pass the testimonialsData here! */}
        <TestimonialsSection data={testimonialsData} />

        <LeadFormSection
          urgencyText="Ready When You Are"
          heading="Ready to Start Your Publishing Journey?"
          paragraph="Tell us a little about your project. A real publishing consultant — not a bot — will reach out within 30 minutes during business hours."
          points={[
            { icon: "⏱️", text: <><strong>30 min</strong> average response time</> },
            { icon: "🎁", text: <><strong>Free</strong> no-obligation consultation</> },
            { icon: "🔒", text: <><strong>100%</strong> confidential & secure</> }
          ]}
          channelsTitle="Prefer to chat instantly?"
          formTitle="Get Your Free Publishing Quote"
          buttonText="Get My Free Quote"
        />

      </main>

      <Footer />
      <ChatFab />
      <BackToTop />
    </>
  );
};