import { useScrollReveal } from '../../hooks/useScrollReveal';

export const IllustrationHero = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="svc-hero" aria-labelledby="hero-heading">
      <div className="svc-hero__bg"><div className="svc-hero__glow-l"></div><div className="svc-hero__glow-r"></div><div className="svc-hero__lines"></div></div>
      <div className="container svc-hero__inner">
        <div className="svc-hero__content" ref={contentRef}>
          <div className="svc-hero__badge reveal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            Custom Book Illustration Services
          </div>
          <h1 className="svc-hero__title reveal" id="hero-heading">Words Set the Scene<em>Illustration Makes It Real</em></h1>
          <p className="svc-hero__lead reveal">From a single spot illustration to a sprawling fantasy map, our illustrators bring your world to the page. <strong>Every piece starts as a sketch you approve</strong> — so the final artwork is exactly the story you imagined, in any genre.</p>
          <div className="svc-hero__ctas reveal">
            <a href="#type-showcase" className="btn btn--accent btn--lg">See Illustration Types</a>
            <a href="#lead-form" className="btn btn--ghost-light btn--lg">Get a Free Illustration Quote</a>
          </div>
          <div className="svc-hero__trust reveal">
            <div className="svc-hero__trust-item"><span className="stars">★★★★★</span><span><strong>441+</strong> reviews</span></div>
            <div className="svc-hero__trust-item"><span><strong>Sketch approval</strong> included</span></div>
            <div className="svc-hero__trust-item"><span><strong>All genres</strong> illustrated</span></div>
            <div className="svc-hero__trust-item"><span><strong>2–4 week</strong> turnaround</span></div>
          </div>
        </div>
        
        <div className="ill-hero-visual reveal-scale" ref={visualRef} aria-hidden="true">
          <img src="/images/illustrations-mockup.png" alt="" />
        </div>
      </div>
    </section>
  );
};