import { useState, useRef } from 'react';
import type { ReactNode } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export interface ILeadFormPoint {
  icon: string;
  text: ReactNode;
}

interface LeadFormSectionProps {
  urgencyText: string;
  heading: string;
  paragraph: string;
  points: ILeadFormPoint[];
  channelsTitle: string;
  formTitle: string;
  buttonText: string;
}

export const LeadFormSection = ({ urgencyText, heading, paragraph, points, channelsTitle, formTitle, buttonText }: LeadFormSectionProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const copyRef = useScrollReveal<HTMLDivElement>();
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formElement = formRef.current;
    setIsSubmitting(true);

    const SERVICE_ID = 'service_3mv3pa8';
    const TEMPLATE_ID = 'template_rdt0hd9';
    const PUBLIC_KEY = 'ra9OA9dE103tb7pBb';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement, {
      publicKey: PUBLIC_KEY, // The newest EmailJS SDK requires this format
    })
      .then((result) => {
        console.log('EmailJS Success:', result.text);
        setIsSubmitted(true);
        formElement.reset();
      }, (error) => {
        console.error('EmailJS Error:', error.text);
        alert('Oops! Something went wrong. Please try calling us instead.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  return (
    <section className="mid-form" id="mid-form">
      <div className="mid-form__bg" aria-hidden="true"></div>
      <div className="container mid-form__inner">

        {/* LEFT SIDE */}
        <div className="mid-form__copy reveal" ref={copyRef}>
          {urgencyText && (
            <div className="mid-form__urgency">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" /><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              {urgencyText}
            </div>
          )}
          <h2>{heading}</h2>
          <p>{paragraph}</p>

          <div className="mid-form__points">
            {points.map((p, idx) => (
              <div key={idx} className="mid-form__point">
                <div className="mid-form__point-icon">{p.icon}</div>
                <p>{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mid-form__channels">
            <p>{channelsTitle}</p>
            <div className="channel-buttons">
              <a href="https://wa.me/18135370226" target="_blank" rel="noopener noreferrer" className="channel-btn channel-btn--whatsapp">WhatsApp</a>
              <a href="tel:18135370226" className="channel-btn channel-btn--call">Call Us</a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <form ref={formRef} className={`lead-form reveal ${isSubmitted ? 'is-submitted' : ''}`} onSubmit={handleFormSubmit}>
          <h3>{formTitle}</h3>
          <div className="lead-form__row">
            <div className="field"><label>First Name</label><input type="text" name="fname" required placeholder="Jane" /></div>
            <div className="field"><label>Last Name</label><input type="text" name="lname" required placeholder="Doe" /></div>
          </div>
          <div className="lead-form__row">
            <div className="field"><label>Email</label><input type="email" name="email" required placeholder="jane@email.com" /></div>
            <div className="field"><label>Phone</label><input type="tel" name="phone" required placeholder="(555) 555-5555" /></div>
          </div>
          <div className="field">
            <label>Do you have a manuscript ready?</label>
            <select name="manuscript" required defaultValue="">
              <option value="" disabled>Select an option</option>
              <option>Yes, I'm ready to publish today</option>
              <option>Yes, ready in 1–3 months</option>
              <option>Yes, ready in 3–6 months</option>
              <option>No, I don't have one yet</option>
            </select>
          </div>
          <div className="field">
            <label>What type of book are you publishing?</label>
            <select name="booktype" required defaultValue="">
              <option value="" disabled>Select a genre</option>
              <option>Business</option><option>Biography</option><option>Inspirational</option>
              <option>Non-Fiction</option><option>How-To</option><option>Memoir</option>
              <option>Self-Help</option><option>Children's</option><option>Fiction</option><option>Other</option>
            </select>
          </div>
          <div className="field">
            <label>Services you're interested in</label>
            <div className="checkbox-grid">
              {["Self Publishing", "Cover Design", "Illustration", "Editing", "Formatting", "Marketing"].map(service => (
                <label key={service} className={`chip ${selectedServices.includes(service) ? 'chip--checked' : ''}`}>
                  <input type="checkbox" name="services" value={service} onChange={() => toggleService(service)} />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="btn btn--accent btn--block btn--lg" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : buttonText}
          </button>

          <p className="lead-form__fineprint">No obligation. A real consultant responds within 1 business day. Your project is kept strictly confidential.</p>

          <div className="lead-form__success">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" /><path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <h4>Request Received!</h4>
            <p>A publishing consultant will reach out within 1 business day to start your project.</p>
          </div>
        </form>
      </div>
    </section>
  );
};