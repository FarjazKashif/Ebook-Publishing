import { editingServicesData } from '../../data/editing';
import type { IEditingService } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const EditingServices = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="svc-types">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> Our Editing Services</p>
          <h2 className="section-title">Four Types of Editing, One Expert Team</h2>
          <p className="section-sub">Every manuscript is different. We offer every level of editorial support — from big-picture story structure to final comma placement.</p>
        </div>
        <div className="svc-types__grid" ref={gridRef}>
          {editingServicesData.map((svc: IEditingService, idx: number) => (
            <article key={idx} className={`svc-card reveal ${svc.featured ? 'svc-card--featured' : ''}`}>
              {svc.ribbon && <div className="svc-card__ribbon">{svc.ribbon}</div>}
              <div className="svc-card__num">{svc.num}</div>
              <span className="svc-card__tag">{svc.tag}</span>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <ul className="svc-card__list">
                {svc.list.map((item, i) => (
                  <li key={i}><span className="svc-card__check">✓</span> {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};