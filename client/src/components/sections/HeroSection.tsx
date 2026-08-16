import { useScrollReveal } from '../../hooks/useScrollReveal';

export const HeroSection = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow"></div>
        <div className="hero__pages"></div>
      </div>

      <div className="container hero__inner">
        <div className="hero__content" ref={contentRef}>
          <p className="eyebrow eyebrow--light reveal">
            <span className="eyebrow__dot"></span> Trusted by 3,000+ Published Authors
          </p>
          <h1 className="hero__title reveal">
            Turn Your Manuscript Into a<span className="hero__title-line"> Published Book</span>
          </h1>
          <p className="hero__subtitle reveal">
            Affordable, full-service self-publishing — editing, design, formatting and global distribution — guided by experts who treat your story like their own. <strong>Keep 100% of your royalties.</strong>
          </p>

          <div className="hero__ctas reveal">
            <a href="#lead-form" className="btn btn--accent btn--lg">
              Get Your Book Published Today
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="tel:18135370226" className="btn btn--ghost-light btn--lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.7 3.6.7.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.7 3.6.1.3.1.7-.2 1l-2.4 2.2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
              Speak to a Publishing Consultant
            </a>
          </div>

          <div className="hero__trust reveal">
            <div className="hero__stars">
              <span className="stars">★★★★★</span> <strong>Excellent</strong> — 441 Reviews on
              <svg width="62" height="20" viewBox="0 0 74 24" aria-label="Google"><text x="0" y="18" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18" fill="currentColor">Google</text></svg>
            </div>
          </div>
        </div>

        <div className="hero__visual reveal-visual" aria-hidden="true" ref={visualRef}>
          <div className="book-stack">
            <div className="book-stack__spine spine-1"><span>Self-Help</span></div>
            <div className="book-stack__spine spine-2"><span>Memoir</span></div>
            <div className="book-stack__spine spine-3"><span>Children's</span></div>
            <div className="book-stack__cover">
              <div className="book-stack__cover-shine"></div>
              <span className="book-stack__cover-label">YOUR<br />STORY</span>
              <span className="book-stack__cover-sub">by You</span>
            </div>
            <div className="floating-badge floating-badge--top">
              <strong>100%</strong><small>Royalties</small>
            </div>
            <div className="floating-badge floating-badge--bottom">
              <strong>3X</strong><small>More Visibility</small>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll-cue" aria-hidden="true"><span></span></div>
    </section>
  );
};