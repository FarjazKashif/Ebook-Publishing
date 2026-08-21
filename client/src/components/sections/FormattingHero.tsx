import { useScrollReveal } from '../../hooks/useScrollReveal';

export const FormattingHero = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="svc-hero" aria-labelledby="hero-heading">
      <div className="svc-hero__bg"><div className="svc-hero__glow-l"></div><div className="svc-hero__glow-r"></div><div className="svc-hero__lines"></div></div>
      <div className="container svc-hero__inner">
        <div className="svc-hero__content" ref={contentRef}>
          <div className="svc-hero__badge reveal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.8" /></svg>
            Professional Interior Book Formatting
          </div>
          <h1 className="svc-hero__title reveal" id="hero-heading">A Manuscript Isn't a Book<em>Until It's Typeset</em></h1>
          <p className="svc-hero__lead reveal">Great writing deserves a layout that matches it. Our formatters transform your Word document into a <strong>professionally typeset interior</strong> — indistinguishable from a traditionally published title, ready for KDP and IngramSpark on the first upload.</p>
          <div className="svc-hero__ctas reveal">
            <a href="#layout-showcase" className="btn btn--accent btn--lg">See Layout Styles</a>
            <a href="#lead-form" className="btn btn--ghost-light btn--lg">Get a Free Formatting Quote</a>
          </div>
          <div className="svc-hero__trust reveal">
            <div className="svc-hero__trust-item"><span className="stars">★★★★★</span><span><strong>441+</strong> reviews</span></div>
            <div className="svc-hero__trust-item"><span><strong>Zero-rejection</strong> upload guarantee</span></div>
            <div className="svc-hero__trust-item"><span><strong>Print + eBook</strong> included</span></div>
            <div className="svc-hero__trust-item"><span><strong>5–10 day</strong> turnaround</span></div>
          </div>
        </div>

        {/* Hero visual: Real Image */}
        <div className="fmt-hero-visual reveal-scale" ref={visualRef} aria-hidden="true">
          <img src="/images/bookformatting-mockup.png" alt="Professional Book Formatting" className="formatting-real-image" />
        </div>
      </div>
    </section>
  );
};