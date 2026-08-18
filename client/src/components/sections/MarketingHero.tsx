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
          <div className="mk-panel mk-panel--before">
            <span className="mk-tag mk-tag--before">BEFORE</span>
            <div className="mk-search"><span>🔍 search: cozy mystery novels</span></div>
            <div className="mk-result"><div className="mk-result__thumb"></div><div className="mk-result__lines"><div className="mk-result__line" style={{width:'85%'}}></div><div className="mk-result__line" style={{width:'60%'}}></div></div></div>
            <div className="mk-result"><div className="mk-result__thumb"></div><div className="mk-result__lines"><div className="mk-result__line" style={{width:'80%'}}></div><div className="mk-result__line" style={{width:'55%'}}></div></div></div>
            <div className="mk-result mk-result--yours"><div className="mk-result__thumb"></div><div className="mk-result__lines"><div className="mk-result__line" style={{width:'70%'}}></div><div className="mk-result__line" style={{width:'45%'}}></div><div className="mk-yours-label">↑ your book, page 4</div></div></div>
          </div>
          <div className="mk-arrow"><svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div className="mk-panel mk-panel--after">
            <span className="mk-tag mk-tag--after"><svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>AFTER</span>
            <div className="mk-badge-graphic"><strong>#1</strong><span>BESTSELLER</span></div>
            <div className="mk-chart">
              <div className="mk-chart-bar" style={{height:'20%'}}></div><div className="mk-chart-bar" style={{height:'35%'}}></div><div className="mk-chart-bar" style={{height:'30%'}}></div><div className="mk-chart-bar" style={{height:'55%'}}></div><div className="mk-chart-bar" style={{height:'70%'}}></div><div className="mk-chart-bar" style={{height:'100%'}}></div>
            </div>
            <div className="mk-after-title">Sales Rank Rising</div>
            <div className="mk-after-sub">Amazon · Cozy Mystery</div>
          </div>
          <div className="hero-badge hero-badge--tl"><strong>📊 Real Data</strong><small>Weekly reporting</small></div>
          <div className="hero-badge hero-badge--br"><strong>🎯 Targeted Reach</strong><small>Readers ready to buy</small></div>
        </div>
      </div>
    </section>
  );
};