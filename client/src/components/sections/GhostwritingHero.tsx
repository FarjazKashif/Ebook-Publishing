import { useScrollReveal } from '../../hooks/useScrollReveal';

export const GhostwritingHero = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="svc-hero" aria-labelledby="hero-heading">
      <div className="svc-hero__bg"><div className="svc-hero__glow-l"></div><div className="svc-hero__glow-r"></div><div className="svc-hero__lines"></div></div>
      <div className="container svc-hero__inner">
        <div className="svc-hero__content" ref={contentRef}>
          <div className="svc-hero__badge reveal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.8"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            Confidential Ghostwriting Services
          </div>
          <h1 className="svc-hero__title reveal" id="hero-heading">You Have the Story<em>We Have the Craft</em></h1>
          <p className="svc-hero__lead reveal">Not everyone with a book in them has time to write it. Our ghostwriters interview you, learn your voice, and turn your ideas, memories or expertise into a <strong>professionally written manuscript</strong> — credited entirely to you, protected by NDA from the first conversation.</p>
          <div className="svc-hero__ctas reveal">
            <a href="#book-types" className="btn btn--accent btn--lg">See What We Ghostwrite</a>
            <a href="#mid-form" className="btn btn--ghost-light btn--lg">Get a Free Consultation</a>
          </div>
          <div className="svc-hero__trust reveal">
            <div className="svc-hero__trust-item"><span className="stars">★★★★★</span><span><strong>441+</strong> reviews</span></div>
            <div className="svc-hero__trust-item"><span><strong>NDA-protected</strong> from day one</span></div>
            <div className="svc-hero__trust-item"><span><strong>100%</strong> author credit, always</span></div>
            <div className="svc-hero__trust-item"><span><strong>4–9 month</strong> full process</span></div>
          </div>
        </div>
        
        <div className="gw-hero-visual reveal-scale" ref={visualRef} aria-hidden="true">
          <div className="gw-panel gw-panel--interview">
            <span className="gw-tag gw-tag--interview">INTERVIEW</span>
            <div className="gw-mic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.8"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
            <div className="gw-bubble gw-bubble--them">Tell me about the day you started the company.</div>
            <div className="gw-bubble gw-bubble--you">Honestly? I was terrified. I'd just quit my job and...</div>
            <div className="gw-bubble gw-bubble--them">What kept you going?</div>
            <div className="gw-waveform">
              <div className="gw-wave-bar" style={{height:'6px'}}></div><div className="gw-wave-bar" style={{height:'12px'}}></div><div className="gw-wave-bar" style={{height:'8px'}}></div><div className="gw-wave-bar" style={{height:'16px'}}></div><div className="gw-wave-bar" style={{height:'10px'}}></div><div className="gw-wave-bar" style={{height:'14px'}}></div><div className="gw-wave-bar" style={{height:'7px'}}></div><div className="gw-wave-bar" style={{height:'11px'}}></div><div className="gw-wave-bar" style={{height:'15px'}}></div><div className="gw-wave-bar" style={{height:'9px'}}></div>
            </div>
          </div>
          <div className="gw-arrow"><svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div className="gw-panel gw-panel--manuscript">
            <span className="gw-tag gw-tag--manuscript"><svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>DRAFT</span>
            <div className="gw-manuscript-header">
              <div className="gw-manuscript-chnum">CHAPTER ONE</div>
              <div className="gw-manuscript-chtitle">The Leap</div>
              <div className="gw-manuscript-orn"></div>
            </div>
            <div className="gw-manuscript-para">
              <span className="gw-manuscript-drop">I</span>
              <div className="gw-manuscript-line"></div>
              <div className="gw-manuscript-line" style={{width:'92%'}}></div>
              <div className="gw-manuscript-line" style={{width:'96%'}}></div>
            </div>
            <div className="gw-manuscript-line"></div>
            <div className="gw-manuscript-line" style={{width:'88%'}}></div>
            <div className="gw-manuscript-line" style={{width:'94%'}}></div>
            <div className="gw-manuscript-line" style={{width:'70%'}}></div>
          </div>
          <div className="hero-badge hero-badge--tl"><strong>🔒 NDA Signed</strong><small>Before we begin</small></div>
          <div className="hero-badge hero-badge--br"><strong>✍️ Your Voice</strong><small>Captured & refined</small></div>
        </div>
      </div>
      <div className="hero__scroll-cue" aria-hidden="true"><span></span></div>
    </section>
  );
};