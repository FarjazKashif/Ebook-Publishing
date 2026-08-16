import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ServicesSection = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What We Offer</p>
          <h2 className="section-title">Our Book Publishing Services</h2>
          <p className="section-sub">Have a manuscript and wondering how to publish a book? We make it simple. Our all-in-one self-publishing services help authors like you publish professionally — whether it's your first book or your tenth.</p>
        </div> 

        <div className="service-grid" ref={gridRef}>
          {servicesData.map((service, idx) => (
            <article key={idx} className={`service-card reveal ${service.featured ? 'service-card--featured' : ''}`}>
              {service.featured && <div className="service-card__ribbon">Most Popular</div>}
              <div className="service-card__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">{service.icon}</svg>
              </div>
              <p className="service-card__kicker">{service.kicker}</p>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to={`service.href`} className="service-card__link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};