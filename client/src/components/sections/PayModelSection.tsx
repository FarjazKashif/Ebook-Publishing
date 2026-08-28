import { useScrollReveal } from '../../hooks/useScrollReveal';

export const PayModelSection = () => {
  const panelRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="pay-model">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> The Decision That Matters Most</p>
          <h2 className="section-title">Per Finished Hour vs. Royalty Share</h2>
          <p className="section-sub">How you pay for narration determines who owns your future royalties. We'll walk you through both — but here's why we usually recommend one.</p>
        </div>
        <div className="pm-panel reveal-scale" ref={panelRef}>
          <div className="pm-side pm-side--pfh">
            <span className="pm-side__ribbon">We Recommend</span>
            <div className="pm-side__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
            <h3>Per Finished Hour (PFH)</h3>
            <p>You pay your narrator a flat, upfront fee based on the audiobook's finished length. Once production is complete, every dollar your audiobook earns afterward belongs entirely to you.</p>
            <ul className="pm-list">
              <li><span className="pm-check">✓</span>You keep 100% of royalties, forever</li>
              <li><span className="pm-check">✓</span>Clear, predictable upfront cost</li>
              <li><span className="pm-check">✓</span>No ongoing obligation to the narrator</li>
              <li><span className="pm-check">✓</span>Full creative control over pricing & promotions</li>
            </ul>
          </div>
          <div className="pm-side pm-side--royalty">
            <div className="pm-side__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8"/></svg></div>
            <h3>Royalty Share</h3>
            <p>No upfront cost — instead, the narrator takes a share of your audiobook royalties, typically 50%, for a fixed period that can run several years before rights revert.</p>
            <ul className="pm-list">
              <li><span className="pm-cross">✕</span>No upfront cost required</li>
              <li><span className="pm-cross">✕</span>Narrator keeps ~50% of royalties for years</li>
              <li><span className="pm-cross">✕</span>Harder to predict long-term earnings</li>
              <li><span className="pm-cross">✕</span>Contractual commitment tied to your book</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};