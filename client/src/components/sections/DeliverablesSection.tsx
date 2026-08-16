import { deliverablesData } from '../../data/coverDesign';
import type { IDeliverable } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const DeliverablesSection = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="deliverables">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> Everything You Get</p>
          <h2 className="section-title">A Complete Cover Package — Print & Digital</h2>
          <p className="section-sub">One brief, one dedicated designer, every format your book needs to publish and sell everywhere.</p>
        </div>
        <div className="deliverables__grid" ref={gridRef}>
          {deliverablesData.map((item: IDeliverable, idx: number) => (
            <div key={idx} className="deliv-card reveal">
              <div className="deliv-card__icon">
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