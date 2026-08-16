import { useScrollReveal } from '../../hooks/useScrollReveal';

export const DualFormatSection = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="dual-format">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> Two Formats, Two Disciplines</p>
          <h2 className="section-title">Print Formatting vs. eBook Formatting</h2>
          <p className="section-sub">They're not the same skill. Publishing everywhere means getting both exactly right — and we deliver both as standard.</p>
        </div>
        <div className="df-grid reveal-scale" ref={gridRef}>
          <div className="df-side df-side--print">
            <div className="df-side__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 19.5V6a2 2 0 0 1 2-2h12a1 1 0 0 1 1 1v13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 16.5H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6.5a2 2 0 0 1 0-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg></div>
            <h3>Print Formatting</h3>
            <p>Fixed pages at your exact trim size, with precise margins and bleed calculated for physical printing. Every page is a deliberate design decision — because paper doesn't reflow.</p>
            <ul className="df-list">
              <li><span className="df-check">✓</span>Press-ready PDF at exact trim size</li>
              <li><span className="df-check">✓</span>Bleed & margin compliance for binding</li>
              <li><span className="df-check">✓</span>Running headers & page numbers</li>
              <li><span className="df-check">✓</span>Spine width matched to page count</li>
              <li><span className="df-check">✓</span>KDP Print & IngramSpark ready</li>
            </ul>
          </div>
          <div className="df-side df-side--ebook">
            <div className="df-side__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
            <h3>eBook Formatting</h3>
            <p>Reflowable text that adapts to any screen, font size, or spacing the reader chooses. You're not designing fixed pages — you're structuring content that performs everywhere.</p>
            <ul className="df-list">
              <li><span className="df-check">✓</span>Reflowable EPUB file structure</li>
              <li><span className="df-check">✓</span>Clickable table of contents</li>
              <li><span className="df-check">✓</span>Device-responsive images & formatting</li>
              <li><span className="df-check">✓</span>Kindle, Apple Books & Kobo compatible</li>
              <li><span className="df-check">✓</span>Metadata & navigation optimised</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};