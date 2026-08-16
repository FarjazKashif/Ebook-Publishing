import { formattingIncludedData } from '../../data/formatting';
import type { IIncludedFeature } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const FormattingIncluded = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="included">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> Full Formatting Service</p>
          <h2 className="section-title">Everything Needed to Go From Manuscript to Print-Ready</h2>
          <p className="section-sub">One manuscript, one formatter, every technical element handled — so your book meets professional standards inside and out.</p>
        </div>
        <div className="included__grid" ref={gridRef}>
          {formattingIncludedData.map((item: IIncludedFeature, idx: number) => (
            <div key={idx} className="inc-card reveal">
              <div className="inc-card__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">{item.icon}</svg>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};