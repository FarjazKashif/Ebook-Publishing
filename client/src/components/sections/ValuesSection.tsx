import { valuesData } from '../../data/about';
import type { IValue } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ValuesSection = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="values">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our Core Beliefs</p>
          <h2 className="section-title">Mission & Values</h2>
          <p className="section-sub">Everything we do flows from three convictions that have guided us since day one.</p>
        </div>
        <div className="values__grid" ref={gridRef}>
          {valuesData.map((value: IValue, idx: number) => (
            <article key={idx} className="value-card reveal">
              <div className="value-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">{value.icon}</svg>
              </div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};