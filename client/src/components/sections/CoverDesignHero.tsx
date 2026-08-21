import { useScrollReveal } from '../../hooks/useScrollReveal';

export const CoverDesignHero = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="svc-hero">
      <div className="svc-hero__bg" aria-hidden="true">
        <div className="svc-hero__glow-l"></div>
        <div className="svc-hero__glow-r"></div>
        <div className="svc-hero__lines"></div>
      </div>
      <div className="container svc-hero__inner">
        <div className="svc-hero__content" ref={contentRef}>
          <div className="svc-hero__badge reveal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.1 6.2 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.2L7 14.1 2 9.2l6.9-1L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
            Award-Winning Book Cover Design
          </div>
          <h1 className="svc-hero__title reveal">Covers Readers<em>Can't Scroll Past</em></h1>
          <p className="svc-hero__lead reveal">Your cover works 24/7 — on Amazon, in search results, across social feeds. Our <strong>award-winning human designers</strong> craft covers that stop the scroll, signal your genre instantly, and earn the click. Every single time.</p>
          <div className="svc-hero__ctas reveal">
            <a href="#portfolio" className="btn btn--accent btn--lg">See Our Cover Portfolio</a>
            <a href="#lead-form" className="btn btn--ghost-light btn--lg">Get a Free Design Brief</a>
          </div>
          <div className="svc-hero__trust reveal">
            <div className="svc-hero__trust-item"><span className="stars">★★★★★</span><span><strong>441+</strong> reviews</span></div>
            <div className="svc-hero__trust-item"><span><strong>Industry award</strong> winners</span></div>
            <div className="svc-hero__trust-item"><span><strong>All genres</strong> covered</span></div>
            <div className="svc-hero__trust-item"><span><strong>Human designers</strong>, not AI</span></div>
          </div>
        </div>

        <div className="hero-covers reveal-scale" ref={visualRef} aria-hidden="true">
          <img src="/images/bookcover-design-mockup.png" alt="Custom Book Cover Design" className="cover-real-image" />
        </div>
      </div>
    </section>
  );
};