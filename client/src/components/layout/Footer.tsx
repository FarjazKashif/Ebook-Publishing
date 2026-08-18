import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="/" className="brand brand--footer">
            <span className="brand__mark">
              <svg viewBox="0 0 40 40" width="32" height="32" aria-hidden="true">
                <path d="M8 6 L8 34 L20 30 L32 34 L32 6 L20 10 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <line x1="20" y1="10" x2="20" y2="30" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <span className="brand__type">Infusion<span className="brand__type--accent">Publishing</span></span>
          </a>
          <p>Our team of committed and ambitious editors, designers, and marketers has a proven record of producing successful publications across every genre and goal.</p>
          <div className="footer__social">
            <a href="https://www.facebook.com/infusionpublishing/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7h2.4l.4-3H13.5V9c0-.9.2-1.5 1.6-1.5H16V4.8c-.4 0-1.5-.1-2.6-.1-2.7 0-4.4 1.6-4.4 4.6V11H7v3h2v7h4.5Z" /></svg>
            </a>
            <a href="https://www.instagram.com/infusionpublishing/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" /></svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <Link to="/" className="active">Home</Link>
          <Link to="/about">About Us</Link>
          <a href="#lead-form">Contact Us</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <Link to="/services/editing-proofreading">Editing & Proofreading</Link>
          <Link to="/services/book-cover-design">Book Cover Design</Link>
          <Link to="/services/book-marketing">Book Marketing</Link>
          <Link to="/services/illustrations">Illustrations</Link>
          <Link to="/services/book-formatting">Book Formatting</Link>
          <Link to="/services/childrens-book-publishing">Children's Book Publishing</Link>
        </div>

        <div className="footer__col footer__col--contact">
          <h4>Get In Touch</h4>
          <a href="tel:18135370226" className="footer__contact-line">📞 (813) 537-0226</a>
          <a href="mailto:info@infusionpublishing.com" className="footer__contact-line">✉️ info@infusionpublishing.com</a>
          <div className="footer__chat-row">
            <a href="https://wa.me/18135370226" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WA</a>
            <a href="https://m.me/infusionpublishing" target="_blank" rel="noopener noreferrer" aria-label="Messenger">FB</a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© 2026 Infusion Publishing. All Rights Reserved.</p>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a><span>·</span><a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};