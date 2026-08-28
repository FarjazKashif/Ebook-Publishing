import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const isScrolled = useScrollPosition(12);
    const location = useLocation();
    const isServicesActive = location.pathname.startsWith('/services');

    return (
        <>
            <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="siteHeader">
                <div className="container header__inner">
                    <Link to="/" className="brand" aria-label="The eBook Publishing — Home">
                        <img src='/logos/eBook-Logo.svg' />
                    </Link>

                    <nav className="main-nav" aria-label="Primary">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>

                        <div className="nav-dropdown">
                            <a href="#" onClick={(e) => e.preventDefault()} className={isServicesActive ? "active" : ""}>
                                Services
                                <svg width="10" height="6" viewBox="0 0 10 6"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg>
                            </a>
                            <div className="nav-dropdown__panel">
                                <NavLink to="/services/ghostwriting">Ghostwriting</NavLink>
                                <NavLink to="/services/editing-proofreading">Editing &amp; Proofreading</NavLink>
                                <NavLink to="/services/book-cover-design">Book Cover Design</NavLink>
                                <NavLink to="/services/illustrations">Illustrations</NavLink>
                                <NavLink to="/services/book-formatting">Book Formatting</NavLink>
                                <NavLink to="/services/childrens-book-publishing">Children's Book Publishing</NavLink>
                                <NavLink to="/services/book-marketing">Book Marketing</NavLink>
                                <NavLink to="/services/audiobook">Audiobook</NavLink>
                            </div>
                        </div>

                        <a href="#lead-form">Contact</a>
                    </nav>

                    <div className="header__actions">
                        <a href="tel:18135370226" className="header__call">
                            <span className="header__call-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.7 3.6.7.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.7 3.6.1.3.1.7-.2 1l-2.4 2.2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                            </span>
                            <span className="header__call-text"><small>Call Us Now</small><strong>(813) 537-0226</strong></span>
                        </a>
                        <a href="#lead-form" className="btn btn--primary btn--sm">
                            <span className="btn__label-full">Get Free Quote</span>
                            <span className="btn__label-short">Quote</span>
                        </a>
                        <button className={`nav-toggle ${isMenuOpen ? 'is-open' : ''}`} aria-label="Toggle menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <span></span><span></span><span></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Blurred Overlay - Clicking this closes the menu */}
            <div
                className={`mobile-overlay ${isMenuOpen ? 'is-open' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Glassmorphism Mobile Drawer */}
            <div className={`mobile-drawer ${isMenuOpen ? 'is-open' : ''}`}>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>

                <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="mobile-accordion-trigger"
                >
                    Services
                    <svg className={`chevron ${isMobileServicesOpen ? 'rotate' : ''}`} width="12" height="8" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg>
                </button>

                <div className={`mobile-accordion-content ${isMobileServicesOpen ? 'is-open' : ''}`}>
                    <Link to="/services/ghostwriting" onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}>Ghostwriting</Link>
                    <Link to="/services/editing-proofreading" onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}>Editing & Proofreading</Link>
                    <Link to="/services/book-cover-design" onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}>Book Cover Design</Link>
                    <Link to="/services/illustrations" onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}>Illustrations</Link>
                    <Link to="/services/book-formatting" onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}>Book Formatting</Link>
                    <Link to="/services/childrens-book-publishing" onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}>Children's Book Publishing</Link>
                    <Link to="/services/book-marketing" onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}>Book Marketing</Link>
                    <Link to="/services/audiobook" onClick={() => { setIsMenuOpen(false); setIsMobileServicesOpen(false); }}>Audiobook</Link>
                </div>

                <a href="#lead-form" onClick={() => setIsMenuOpen(false)} className="mobile-contact-link">Contact</a>

                <a href="tel:18135370226" className="mobile-drawer__call">📞 (813) 537-0226</a>
                <a href="#lead-form" className="btn btn--primary mobile-quote-btn" onClick={() => setIsMenuOpen(false)}>Get Free Quote</a>
            </div>
        </>
    );
};