import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useLeadModal } from '../../context/LeadModalContext';

export const LeadModal = () => {
  const { isModalOpen, closeModal } = useLeadModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formElement = formRef.current;
    setIsSubmitting(true);

    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement, { publicKey: PUBLIC_KEY })
      .then(() => {
        setIsSubmitted(true);
        formElement.reset();
      }, (error) => {
        console.error('EmailJS Error:', error.text);
        alert('Oops! Something went wrong. Please try calling us instead.');
      })
      .finally(() => setIsSubmitting(false));
  };

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  if (!isModalOpen) return null;

  return (
    <div className="lead-modal-overlay" onClick={closeModal}>
      <div className="lead-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="lead-modal-close" onClick={closeModal} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        
        <form ref={formRef} className={`lead-form lead-modal-form ${isSubmitted ? 'is-submitted' : ''}`} onSubmit={handleFormSubmit}>
          <h3>Get Your Free Quote</h3>
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
            {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
          </button>
          
          <div className="lead-form__success">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h4>Request Received!</h4>
            <p>A publishing consultant will reach out within 1 business day.</p>
          </div>
        </form>
      </div>
    </div>
  );
};