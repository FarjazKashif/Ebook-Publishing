import { useState } from 'react';
import type { IFAQ } from '../../types';

interface FAQSectionProps {
  data: IFAQ[];
  eyebrow?: string;
  title?: string;
  sub?: string;
}

export const FAQSection = ({ data, eyebrow = "Common Questions", title = "Frequently Asked Questions", sub = "Everything you need to know." }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> {eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-sub">{sub}</p>
        </div>
        <div className="faq__grid">
          {data.map((item, idx) => (
            <div key={idx} className={`faq-item ${openIndex === idx ? 'is-open' : ''}`}>
              <button 
                className="faq-item__q" 
                aria-expanded={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {item.q}
                <span className="faq-item__icon">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div className="faq-item__a">
                <p className="faq-item__a-inner">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};