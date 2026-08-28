import { useScrollReveal } from '../../hooks/useScrollReveal';

export const VoiceMatchSection = () => {
  const panelRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="voice-match">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> The Heart of Ghostwriting</p>
          <h2 className="section-title">Your Voice, Not Ours</h2>
          <p className="section-sub">A real example of how an interview transcript becomes polished prose — your words, your phrasing, elevated but never replaced.</p>
        </div>
        <div className="vm-panel reveal-scale" ref={panelRef}>
          <div className="vm-side vm-side--raw">
            <span className="vm-side__label">🎙 What You Said</span>
            <p className="vm-text">"So, um, I remember standing in the parking lot, right, and just thinking, <span className="vm-highlight">what have I done</span>. Like I'd just walked away from a paycheck. And my hands were actually shaking a little. But there was this other part of me that was, I dunno, weirdly calm about it too."</p>
            <div className="vm-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{color:'var(--burgundy)', flexShrink:0, marginTop:'1px'}}><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <p>Raw transcript from a recorded interview — natural, unfiltered speech.</p>
            </div>
          </div>
          <div className="vm-divider" aria-hidden="true"><span className="vm-divider__pill">GHOSTWRITTEN</span></div>
          <div className="vm-side vm-side--polished">
            <span className="vm-side__label">✦ What We Wrote</span>
            <p className="vm-text">I stood in that parking lot and thought, <span className="vm-highlight">what have I done</span>. My hands were shaking — I'd just walked away from a paycheck with nothing but a plan on a napkin. But underneath the fear, something in me was strangely, stubbornly calm.</p>
            <div className="vm-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{color:'var(--gold-light)', flexShrink:0, marginTop:'1px'}}><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/></svg>
              <p>Same memory, same phrasing, same voice — shaped into scene-driven prose.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};