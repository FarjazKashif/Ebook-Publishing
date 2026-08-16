import { ageCategoriesData } from '../../data/childrens';
import type { IAgeCategory } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const AgeCategories = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="age-cats">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> Age Group Expertise</p>
          <h2 className="section-title">We Publish for Every Young Reader</h2>
          <p className="section-sub">Each age category has its own reading level, page count and market expectations — our specialists know them all.</p>
        </div>
        <div className="age-grid" ref={gridRef}>
          {ageCategoriesData.map((age: IAgeCategory, idx: number) => (
            <div key={idx} className="age-card reveal">
              <span className="age-card__emoji">{age.emoji}</span>
              <span className="age-card__range">{age.range}</span>
              <h3>{age.title}</h3>
              <p>{age.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};