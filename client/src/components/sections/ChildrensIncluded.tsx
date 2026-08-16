import { includedData } from '../../data/childrens';
import type { IIncludedFeature } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ChildrensIncluded = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="included">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> Full-Service Publishing</p>
          <h2 className="section-title">Everything Your Children's Book Needs — In One Place</h2>
          <p className="section-sub">We handle every stage of your book's journey — from rough manuscript to fully published, globally distributed title.</p>
        </div>
        <div className="included__grid" ref={gridRef}>
          {includedData.map((item: IIncludedFeature, idx: number) => (
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