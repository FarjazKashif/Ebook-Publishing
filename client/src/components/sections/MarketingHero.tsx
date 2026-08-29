import { useScrollReveal } from '../../hooks/useScrollReveal';

export const MarketingHero = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="svc-hero" aria-labelledby="hero-heading">
      <div className="svc-hero__bg"><div className="svc-hero__glow-l"></div><div className="svc-hero__glow-r"></div><div className="svc-hero__lines"></div></div>
      <div className="container svc-hero__inner">
        <div className="svc-hero__content" ref={contentRef}>
          <div className="svc-hero__badge reveal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-8M21 7v6h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Full-Service Book Marketing
          </div>
          <h1 className="svc-hero__title reveal" id="hero-heading">A Great Book<em>Deserves to Be Found</em></h1>
          <p className="svc-hero__lead reveal">Publishing is only half the job. Getting discovered is the other half. We manage <strong>Amazon Ads, BookBub, social media and email campaigns</strong> that put your book in front of readers who are already looking for something exactly like it.</p>
          <div className="svc-hero__ctas reveal">
            <a href="#channels" className="btn btn--accent btn--lg">See Our Marketing Channels</a>
            <a href="#lead-form" className="btn btn--ghost-light btn--lg">Get a Free Strategy Call</a>
          </div>
          <div className="svc-hero__trust reveal">
            <div className="svc-hero__trust-item"><span className="stars">★★★★★</span><span><strong>441+</strong> reviews</span></div>
            <div className="svc-hero__trust-item"><span><strong>No audience</strong> required to start</span></div>
            <div className="svc-hero__trust-item"><span><strong>Multi-channel</strong> campaigns</span></div>
            <div className="svc-hero__trust-item"><span><strong>Monthly</strong> performance reports</span></div>
          </div>
        </div>
        
        {/* Before/After Search Visual */}
        <div className="mk-hero-visual reveal-scale" ref={visualRef} aria-hidden="true">
          <img src="/images/bookmarketing-mockup.png" alt="" />
        </div>
      </div>
      <div className="hero__scroll-cue" aria-hidden="true"><span></span></div>
    </section>
  );
};