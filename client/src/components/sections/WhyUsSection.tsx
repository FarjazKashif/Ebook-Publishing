import { statsData } from '../../data/stats';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const WhyUsSection = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const statsRef = useScrollReveal<HTMLDivElement>();
  const awardsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="why-us" id="about">
      <div className="container why-us__grid">
        <div className="why-us__content reveal" ref={contentRef}>
          <p className="eyebrow">Why Authors Choose Us</p>
          <h2 className="section-title">A Publishing Partner You Can Actually Trust</h2>
          <p className="section-sub">From your first draft to your first sale, we handle every detail — so you can focus on what matters: telling your story.</p>

          <ul className="why-us__list">
            <li><span className="why-us__check">✓</span> Top-rated self-publishing company</li>
            <li><span className="why-us__check">✓</span> Affordable, transparent publishing packages</li>
            <li><span className="why-us__check">✓</span> Dedicated marketing support to boost sales</li>
            <li><span className="why-us__check">✓</span> 100% royalties — you own your rights, always</li>
            <li><span className="why-us__check">✓</span> Published on Amazon, IngramSpark & more</li>
          </ul>

          <a href="#lead-form" className="btn btn--primary">Start My Publishing Journey</a>
        </div>

        <div className="why-us__stats reveal" ref={statsRef}>
          {statsData.map((stat, idx) => (
            <div key={idx} className={`stat-card ${stat.accent ? 'stat-card--accent' : ''}`}>
              <div className="stat-card__num">{stat.num}</div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="awards reveal" ref={awardsRef}>
          <div className="awards__item">🏅 <span>eBook Content<br />Writing Excellence</span></div>
          <div className="awards__item">🏅 <span>Top Children's Book<br />Writing Company</span></div>
          <div className="awards__item">🏅 <span>Top Editing &<br />Proofreading Service</span></div>
          <div className="awards__item">🏅 <span>2023 Book Award —<br />Non-Fiction Winner</span></div>
          <div className="awards__item">🏅 <span>Top Product<br />Marketing Agency</span></div>
          <div className="awards__item">🏅 <span>Gold Winner —<br />Fiction Category</span></div>
        </div>
      </div>
    </section>
  );
};