import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useMemo } from 'react';

export const IllustrationHero = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  // Generate random stars once
  const stars = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 55}%`
    }));
  }, []);

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
          <div className="ill-panel ill-panel--sketch">
            <span className="ill-tag ill-tag--sketch">SKETCH</span>
            <svg className="sketch-svg" viewBox="0 0 210 290" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke="#8B8070" strokeWidth="1.4" strokeLinecap="round">
                <ellipse cx="105" cy="90" rx="55" ry="30" />
                <path d="M60 100 Q40 130 55 160" />
                <path d="M150 100 Q170 130 155 160" />
                <path d="M75 105 Q105 95 135 105" />
                <path d="M70 200 L80 240 M140 200 L130 240" />
                <ellipse cx="105" cy="170" rx="38" ry="45" />
                <path d="M85 75 Q90 65 100 68" />
                <path d="M125 75 Q120 65 110 68" />
                <path d="M40 150 Q55 145 65 155" />
                <path d="M170 150 Q155 145 145 155" />
              </g>
            </svg>
          </div>
          <div className="ill-arrow"><svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div className="ill-panel ill-panel--final">
            <span className="ill-tag ill-tag--final"><svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>FINAL</span>
            <div className="final-art">
              <div className="final-art__stars">
                {stars.map(star => <div key={star.id} className="final-art__star" style={{ left: star.left, top: star.top }}></div>)}
              </div>
              <div className="final-art__moon"></div>
              <div className="final-art__mountain2"></div>
              <div className="final-art__mountain"></div>
              <div className="final-art__dragon">
                <div className="final-art__d-wing"></div>
                <div className="final-art__d-body"></div>
                <div className="final-art__d-head"></div>
              </div>
            </div>
          </div>
          <div className="hero-badge hero-badge--tl"><strong>✓ You Approve</strong><small>Every sketch stage</small></div>
          <div className="hero-badge hero-badge--br"><strong>🎨 Full Colour</strong><small>Print-ready art</small></div>
        </div>
      </div>
    </section>
  );
};