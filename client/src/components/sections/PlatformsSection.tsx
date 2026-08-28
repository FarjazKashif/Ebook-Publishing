import { platformsData } from '../../data/audiobook';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const PlatformsSection = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="platforms">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> Where Listeners Find You</p>
          <h2 className="section-title">Distributed to Every Major Platform</h2>
          <p className="section-sub">One production, delivered everywhere audiobook listeners actually shop.</p>
        </div>
        <div className="pf-grid reveal" ref={gridRef}>
          {platformsData.map((p, idx) => (
            <div key={idx} className="pf-card">
              <div className="pf-card__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{p.icon}</svg>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};