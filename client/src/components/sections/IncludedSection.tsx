import type { IIncludedFeature } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface IncludedSectionProps {
  data: IIncludedFeature[];
  eyebrow: string;
  title: string;
  sub: string;
}

export const IncludedSection = ({ data, eyebrow, title, sub }: IncludedSectionProps) => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="included">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> {eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-sub">{sub}</p>
        </div>
        <div className="included__grid" ref={gridRef}>
          {data.map((item: IIncludedFeature, idx: number) => (
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