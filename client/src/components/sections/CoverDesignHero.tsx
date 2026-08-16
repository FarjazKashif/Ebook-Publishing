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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.1 6.2 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.2L7 14.1 2 9.2l6.9-1L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
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
        
        {/* Hero book covers CSS visual */}
        <div className="hero-covers reveal-scale" ref={visualRef} aria-hidden="true">
          <div className="hc hc-1"><div className="hc__spine" style={{background:'linear-gradient(180deg,#8B0000,#2A0000)'}}></div><div className="hc__shine"></div><div className="hc__genre">Thriller</div><div className="hc__title"><strong>The Last Signal</strong><em>J. Harmon</em></div></div>
          <div className="hc hc-2"><div className="hc__spine" style={{background:'linear-gradient(180deg,#5B00AA,#200050)'}}></div><div className="hc__shine"></div><div className="hc__genre">Fantasy</div><div className="hc__title"><strong>Realm of Echoes</strong><em>A. Voss</em></div></div>
          <div className="hc hc-3"><div className="hc__spine" style={{background:'linear-gradient(180deg,#A07A20,#3A2800)'}}></div><div className="hc__shine"></div><div className="hc__genre" style={{color:'rgba(255,255,255,0.55)'}}>Business</div><div className="hc-3__diamond">◆</div><div className="hc__title"><strong>The Growth Blueprint</strong><em>M. Torres</em></div></div>
          <div className="hc hc-4"><div className="hc__spine" style={{background:'linear-gradient(180deg,#B5294A,#4A000F)'}}></div><div className="hc__shine"></div><div className="hc__genre">Romance</div><div className="hc__title"><strong>When We Return</strong><em>S. Elaine</em></div></div>
          <div className="hc hc-5"><div className="hc__spine" style={{background:'linear-gradient(180deg,#E87B3D,#C45A1A)'}}></div><div className="hc__shine"></div><div className="hc__genre" style={{color:'rgba(255,255,255,0.65)'}}>Children's</div><div className="hc__title"><strong>The Cloud Keeper</strong><em>P. Wren</em></div></div>
          <div className="hero-covers__award"><strong>🏅 Top Design</strong><small>Industry Award</small></div>
        </div>
      </div>
    </section>
  );
};