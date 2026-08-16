import { useScrollReveal } from '../../hooks/useScrollReveal';

export const HumanVsAiSection = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="human-vs-ai">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> Why It Matters</p>
          <h2 className="section-title">Human Designers vs. AI-Generated Covers</h2>
          <p className="section-sub">AI can produce a cover in seconds. But can it sell your book? Here's the honest comparison.</p>
        </div>
        <div className="hva-grid reveal-scale" ref={gridRef}>
          <div className="hva-side hva-side--ai">
            <span className="hva-side__label">⚠ AI-Generated Cover</span>
            <h3>Looks generic. Doesn't convert.</h3>
            <ul className="hva-list">
              <li><span className="hva-icon-bad">✕</span>Motifs sit flat — type placed on top, not integrated into the composition</li>
              <li><span className="hva-icon-bad">✕</span>No genre research or bestseller competitor analysis</li>
              <li><span className="hva-icon-bad">✕</span>Colour palette chosen by algorithm, not reader psychology</li>
              <li><span className="hva-icon-bad">✕</span>Fails at thumbnail size — blurs, loses detail, loses impact</li>
              <li><span className="hva-icon-bad">✕</span>Readers are increasingly able to identify AI art — signals low quality</li>
              <li><span className="hva-icon-bad">✕</span>No platform-specific file preparation or quality check</li>
              <li><span className="hva-icon-bad">✕</span>Cannot capture the specific tone, voice or soul of your book</li>
            </ul>
          </div>
          <div className="hva-side hva-side--human">
            <span className="hva-side__label">✦ Infusion Human Designer</span>
            <h3>Strategically built. Designed to sell.</h3>
            <ul className="hva-list">
              <li><span className="hva-icon-good">✓</span>Typography and imagery integrated as a single cohesive composition</li>
              <li><span className="hva-icon-good">✓</span>Full genre and bestseller competitor analysis before design begins</li>
              <li><span className="hva-icon-good">✓</span>Colour strategy mapped to your reader's emotional triggers</li>
              <li><span className="hva-icon-good">✓</span>Thumbnail-tested and approved at every size before delivery</li>
              <li><span className="hva-icon-good">✓</span>Immediately reads as professional — builds reader trust instantly</li>
              <li><span className="hva-icon-good">✓</span>Print-ready + digital files, all platforms, all formats included</li>
              <li><span className="hva-icon-good">✓</span>Briefed entirely from your story — unique every single time</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};