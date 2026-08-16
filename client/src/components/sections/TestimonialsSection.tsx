import type { ITestimonial } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface TestimonialsSectionProps {
  data: ITestimonial[];
}

export const TestimonialsSection = ({ data }: TestimonialsSectionProps) => {
  const trackRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Client Love</p>
          <h2 className="section-title">Hear From Our Clients</h2>
          <div className="testimonials__rating">
            <span className="stars">★★★★★</span>
            <strong>Excellent</strong> · based on 441 reviews on Google
          </div>
        </div>

        <div className="testimonial-track reveal" ref={trackRef}>
          {data.map((t: ITestimonial, idx: number) => (
            <div key={idx} className="testimonial-card">
              <span className="stars">{t.stars}</span>
              <p>"{t.text}"</p>
              <div className="testimonial-card__person">
                <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
                <div><strong>{t.name}</strong><small>Verified Author · {t.time}</small></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};