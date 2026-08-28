import { useScrollReveal } from '../../hooks/useScrollReveal';

export const AudiobookHero = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  const waveformHeights = [10, 22, 16, 32, 20, 28, 14, 26, 18, 24, 12, 30, 20, 16, 24];

  return (
    <section className="svc-hero" aria-labelledby="hero-heading">
      <div className="svc-hero__bg"><div className="svc-hero__glow-l"></div><div className="svc-hero__glow-r"></div><div className="svc-hero__lines"></div></div>
      <div className="container svc-hero__inner">
        <div className="svc-hero__content" ref={contentRef}>
          <div className="svc-hero__badge reveal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.8"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            Professional Audiobook Production
          </div>
          <h1 className="svc-hero__title reveal" id="hero-heading">Every Book Has a Voice<em>Let Readers Hear It</em></h1>
          <p className="svc-hero__lead reveal">Audiobooks are the fastest-growing format in publishing. Our production team matches your manuscript with a <strong>professional human narrator</strong>, handles every stage of recording and mastering, and distributes to every platform that matters — while you keep 100% of your royalties.</p>
          <div className="svc-hero__ctas reveal">
            <a href="#voices" className="btn btn--accent btn--lg">Hear Narrator Voice Types</a>
            <a href="#mid-form" className="btn btn--ghost-light btn--lg">Get a Free Audiobook Quote</a>
          </div>
          <div className="svc-hero__trust reveal">
            <div className="svc-hero__trust-item"><span className="stars">★★★★★</span><span><strong>441+</strong> reviews</span></div>
            <div className="svc-hero__trust-item"><span><strong>Human narrators</strong>, never AI</span></div>
            <div className="svc-hero__trust-item"><span><strong>100%</strong> royalties yours</span></div>
            <div className="svc-hero__trust-item"><span><strong>8–14 week</strong> production</span></div>
          </div>
        </div>
        
        <div className="ab-hero-visual reveal-scale" ref={visualRef} aria-hidden="true">
          <div className="ab-panel ab-panel--page">
            <span className="ab-tag ab-tag--page">MANUSCRIPT</span>
            <div className="ab-page-header">
              <div className="ab-page-chnum">CHAPTER ONE</div>
              <div className="ab-page-chtitle">The Beginning</div>
              <div className="ab-page-orn"></div>
            </div>
            <div className="ab-page-para"><span className="ab-page-drop">T</span><div className="ab-page-line"></div><div className="ab-page-line" style={{width:'92%'}}></div><div className="ab-page-line" style={{width:'96%'}}></div></div>
            <div className="ab-page-line"></div>
            <div className="ab-page-line" style={{width:'88%'}}></div>
            <div className="ab-page-line" style={{width:'94%'}}></div>
            <div className="ab-page-line" style={{width:'70%'}}></div>
          </div>
          <div className="ab-arrow"><svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div className="ab-panel ab-panel--audio">
            <span className="ab-tag ab-tag--audio"><svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>NARRATED</span>
            <div className="ab-mic-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.8"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
            <div className="ab-waveform-hero">
              {waveformHeights.map((h, i) => (
                <div key={i} className="ab-wave-bar-hero" style={{ height: `${h}px` }}></div>
              ))}
            </div>
            <div className="ab-audio-title">Chapter One: The Beginning</div>
            <div className="ab-audio-sub">Narrated by James Whitfield</div>
            <div className="ab-audio-scrub"><span className="ab-audio-time">04:12</span><div className="ab-audio-dot"></div><div className="ab-audio-track"></div><span className="ab-audio-time">11:48</span></div>
          </div>
          <div className="hero-badge hero-badge--tl"><strong>✓ ACX Ready</strong><small>Audible compliant</small></div>
          <div className="hero-badge hero-badge--br"><strong>🎙️ Studio Quality</strong><small>Professionally mastered</small></div>
        </div>
      </div>
    </section>
  );
};