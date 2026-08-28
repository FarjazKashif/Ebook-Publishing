import { confidentialityData } from '../../data/ghostwriting';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ConfidentialitySection = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="confidential">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> Trust & Discretion</p>
          <h2 className="section-title">Your Story Stays Yours — Completely</h2>
          <p className="section-sub">Confidentiality isn't an add-on in ghostwriting. It's the foundation the entire relationship is built on.</p>
        </div>
        <div className="conf-grid reveal" ref={gridRef}>
          {confidentialityData.map((item, idx) => (
            <div key={idx} className="conf-card">
              <div className="conf-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">{item.icon}</svg>
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