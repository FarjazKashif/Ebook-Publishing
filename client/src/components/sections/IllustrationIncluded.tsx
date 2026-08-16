import { illustrationIncludedData } from '../../data/illustrations';
import type { IIncludedFeature } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const IllustrationIncluded = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="included">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> Full Illustration Service</p>
          <h2 className="section-title">Everything Needed to Illustrate Your Book</h2>
          <p className="section-sub">One brief, one matched illustrator, every technical detail handled — from first sketch to print-ready final art.</p>
        </div>
        <div className="included__grid" ref={gridRef}>
          {illustrationIncludedData.map((item: IIncludedFeature, idx: number) => (
            <div key={idx} className="inc-card">
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