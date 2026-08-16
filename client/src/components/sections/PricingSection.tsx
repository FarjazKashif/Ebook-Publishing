import type { IPricingPackage } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface PricingSectionProps {
  data: IPricingPackage[];
  note?: string;
  columns?: number; // Add this prop
}

export const PricingSection = ({ data, note, columns }: PricingSectionProps) => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="pricing">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> Transparent Pricing</p>
          <h2 className="section-title">Packages for Every Stage</h2>
          <p className="section-sub">All pricing is per project, not per hour — so you always know what you're paying before we begin.</p>
        </div>
        <div className="pricing__grid" ref={gridRef} style={columns ? { gridTemplateColumns: `repeat(${columns}, 1fr)` } : {}}>
          {data.map((pkg: IPricingPackage, idx: number) => (
            <div key={idx} className={`price-card reveal ${pkg.popular ? 'price-card--popular' : ''}`}>
              {pkg.popular && <div className="price-card__ribbon">Most Popular</div>}
              <div className="price-card__tier">{pkg.tier}</div>
              <h3>{pkg.title}</h3>
              <p className="price-card__sub">{pkg.sub}</p>
              <div className="price-card__price">{pkg.price}</div>
              <div className="price-card__unit">{pkg.unit}</div>
              <ul className="price-card__list">
                {pkg.list.map((item, i) => (
                  <li key={i}><span className="price-check">✓</span> {item}</li>
                ))}
              </ul>
              <a href="#lead-form" className={`btn btn--block ${pkg.popular ? 'btn--accent' : 'btn--ghost-dark'}`}>Get a Quote</a>
            </div>
          ))}
        </div>
        {note && <p style={{textAlign:'center',marginTop:'28px',fontSize:'0.88rem',color:'var(--charcoal-soft)'}} dangerouslySetInnerHTML={{ __html: note }} />}
      </div>
    </section>
  );
};