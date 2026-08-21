import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ChatFab } from '../components/layout/ChatFab';
import { BackToTop } from '../components/layout/BackToTop';
import { statsData } from '../data/stats';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { AboutHeroSection } from '../components/sections/AboutHeroSection';
import { ValuesSection } from '../components/sections/ValuesSection';
import { TeamSection } from '../components/sections/TeamSection';
import { DifferentiatorsSection } from '../components/sections/DifferentiatorsSection';
import { AwardsSection } from '../components/sections/AwardsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { OfferBanner } from '../components/sections/OfferBanner';
import { testimonialsData } from '../data/testimonials'; // Re-using data file for now, or create aboutTestimonials
import { LeadFormSection } from '../components/sections/LeadFormSection';

export const AboutPage = () => {
  return (
    <>
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

      <main>
        <AboutHeroSection />

        {/* Our Story Section can be a component, but left inline here for brevity */}
        <section className="our-story" id="our-story">
          <div className="container our-story__grid">
            <div className="our-story__content">
              <p className="eyebrow reveal"><span className="eyebrow__dot"></span> How It All Began</p>
              <h2 className="our-story__title reveal">A Team of Writers Who Knew the Struggle</h2>
              <div className="our-story__body reveal">
                <p>Infusion Publishing started in a small office with a big conviction: the traditional publishing world was leaving <strong>too many talented authors behind</strong>.</p>
                <div className="our-story__pull">
                  <p>"We wanted to build the publishing company we wished had existed when we were authors ourselves."</p>
                </div>
                <p>So we assembled a team of <strong>editors, cover designers, formatters, and marketers</strong> — all with deep roots in publishing — and built a service that puts the author first.</p>
              </div>
              <div className="our-story__cta reveal">
                <a href="#lead-form" className="btn btn--primary">Start Your Publishing Journey</a>
              </div>
            </div>
            <div className="manuscript-visual reveal-scale" aria-hidden="true">
              <div className="mss-page mss-page--back">
                <div className="mss-line"></div><div className="mss-line mss-line--short"></div>
                <div className="mss-line"></div><div className="mss-line"></div>
              </div>
              <div className="mss-page mss-page--mid">
                <div className="mss-title-block"></div>
                <div className="mss-line"></div><div className="mss-line mss-line--short"></div>
                <div className="mss-line"></div><div className="mss-line"></div>
                <div className="mss-line mss-line--short"></div>
              </div>
              <div className="mss-page mss-page--front">
                <div className="mss-title-block"></div>
                <div className="mss-line"></div><div className="mss-line mss-line--short"></div>
                <div className="mss-line"></div><div className="mss-line"></div>
                <div className="mss-line mss-line--short"></div><div className="mss-line"></div>
                <div className="mss-stamp"><span>Ready<br />to<br />Publish</span></div>
              </div>
              {/* <div className="mss-badge">✅ Published!</div> */}
            </div>
          </div>
        </section>

        <ValuesSection />

        {/* By the Numbers Section */}
        <section className="about-stats">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow"><span className="eyebrow__dot"></span> By the Numbers</p>
              <h2 className="section-title">Results That Speak for Themselves</h2>
              <p className="section-sub">A decade of helping authors publish successfully, one book at a time.</p>
            </div>

            {/* Added useScrollReveal to the grid ref */}
            <div className="about-stats__grid" ref={useScrollReveal<HTMLDivElement>()}>
              {statsData.map((stat, idx) => (
                < div key={idx} className={`stat-card ${stat.accent ? 'stat-card--accent' : ''}`}>
                  <div className="stat-card__num">{stat.num}</div>
                  <div className="stat-card__label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TeamSection />
        <DifferentiatorsSection />

        {/* Reusable Testimonials Section (passing props if needed) */}
        <TestimonialsSection data={testimonialsData} />

        {/* Reusable Offer Banner */}
        <OfferBanner
          eyebrow="Ready to Publish?"
          title="Get"
          highlight="30% OFF Your First Publishing Package"
          text="Join over 3,000 authors who trusted Infusion Publishing to bring their book to life."
          ctaText="Claim My Discount"
          note="No obligation · Free 15-min consult"
        />

        <LeadFormSection
          urgencyText="Ready When You Are"
          heading="Start Your Publishing Journey Today"
          paragraph="Tell us about your book. A real publishing consultant — not a bot — will reach out within 30 minutes during business hours."
          points={[
            { icon: "⏱️", text: <><strong>30 min</strong> average response time</> },
            { icon: "🎁", text: <><strong>Free</strong> no-obligation consultation</> },
            { icon: "🔒", text: <><strong>100%</strong> confidential & secure</> }
          ]}
          channelsTitle="Prefer to chat instantly?"
          formTitle="Get Your Free Publishing Quote"
          buttonText="Get My Free Quote"
        />

      </main >

      <Footer />
      <ChatFab />
      <BackToTop />
    </>
  );
};