import { awardsData } from '../../data/awards';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const AwardsSection = () => {
  const awardsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="about-awards">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Recognition</p>
          <h2 className="section-title">Awards & Industry Recognition</h2>
          <p className="section-sub">Our commitment to quality and service has been recognised across the publishing industry.</p>
        </div>
        <div className="awards reveal" ref={awardsRef}>
          {awardsData.map((award, idx) => (
            <div key={idx} className="awards__item">
              🏅 <span dangerouslySetInnerHTML={{ __html: award.text }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};