import { useScrollReveal } from '../../hooks/useScrollReveal';

export const EditingHero = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="svc-hero">
      <div className="svc-hero__bg" aria-hidden="true">
        <div className="svc-hero__glow-l"></div>
        <div className="svc-hero__glow-r"></div>
        <div className="svc-hero__lines"></div>
      </div>
      <div className="container svc-hero__inner">
        <div className="svc-hero__content" ref={contentRef}>
          <div className="svc-hero__badge reveal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            Book Editing & Proofreading Service
          </div>
          <h1 className="svc-hero__title reveal">
            Your Manuscript Deserves
            <em>Expert Eyes</em>
          </h1>
          <p className="svc-hero__lead reveal">
            From developmental editing to final proofreading — our <strong>MFA-trained, Big-5 experienced editors</strong> will sharpen your writing, preserve your voice, and deliver a manuscript that's ready to publish with confidence.
          </p>
          <div className="svc-hero__ctas reveal">
            <a href="#lead-form" className="btn btn--accent btn--lg">Get a Free Editing Quote</a>
            <a href="tel:18135370226" className="btn btn--ghost-light btn--lg">(813) 537-0226</a>
          </div>
          <div className="svc-hero__trust reveal">
            <div className="svc-hero__trust-item"><span className="stars">★★★★★</span> <span><strong>441+</strong> reviews</span></div>
            <div className="svc-hero__trust-item"><span><strong>3,000+</strong> authors published</span></div>
            <div className="svc-hero__trust-item"><span><strong>100%</strong> royalties yours</span></div>
          </div>
        </div>
        <div className="edit-visual reveal-scale" ref={visualRef} aria-hidden="true">
           {/* Annotated manuscript SVG markup from original HTML goes here exactly */}
           <div className="edit-doc">
              <div className="edit-doc__title"></div>
              <div className="edit-line" style={{position:'relative'}}><span className="edit-mark-del d2"></span></div>
              <div className="edit-line edit-line--short" style={{position:'relative'}}><span className="edit-mark-del d3" style={{animationDelay:'1.8s'}}></span></div>
              <div className="edit-line" style={{position:'relative'}}><span className="edit-caret" style={{left:'48%',top:'-7px'}}></span></div>
              <div className="edit-line edit-line--short"></div>
              <div className="edit-line"></div>
              <div className="edit-line edit-line--shorter"></div>
              <div className="edit-line" style={{position:'relative'}}><span className="edit-caret" style={{left:'72%',top:'-7px',animationDelay:'0.6s'}}></span></div>
              <div className="edit-line edit-line--short"></div>
              <div className="edit-line"></div>
              <div className="edit-bubble edit-bubble--1">✓ Great opening!</div>
              <div className="edit-bubble edit-bubble--2">Tighten this sentence</div>
              <div className="edit-bubble edit-bubble--3">Strong voice here</div>
              <div className="edit-doc__check">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Manuscript Approved
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};