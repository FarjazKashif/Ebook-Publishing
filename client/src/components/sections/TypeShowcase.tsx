import { useScrollReveal } from '../../hooks/useScrollReveal';

export const TypeShowcase = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="type-showcase" id="type-showcase">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow--light"><span className="eyebrow__dot"></span> Illustration Formats</p>
          <h2 className="section-title section-title--light">Six Ways to Bring Your Book to Life</h2>
          <p className="section-sub section-sub--light">Different moments in your story call for different formats. We help you choose the right mix — and execute every one beautifully.</p>
        </div>
        <div className="type-grid" ref={gridRef}>
          {/* Notice I removed the "reveal" class from the divs below */}
          <div className="type-card">
            <div className="type-card__art ty-spot">
              <div className="ty-spot__wreath"></div>
            </div>
            <div className="type-card__overlay"></div>
            <div className="type-card__info">
              <span className="type-card__tag">Spot Illustration</span>
              <div className="type-card__title">Chapter headers & decorative motifs</div>
            </div>
          </div>

          <div className="type-card">
            <div className="type-card__art ty-half">
              <div className="ty-half__art"></div>
              <div className="ty-half__text">
                <div className="ty-half__line" style={{ width: '90%' }}></div>
                <div className="ty-half__line" style={{ width: '75%' }}></div>
                <div className="ty-half__line" style={{ width: '82%' }}></div>
              </div>
            </div>
            <div className="type-card__overlay"></div>
            <div className="type-card__info">
              <span className="type-card__tag">Half-Page</span>
              <div className="type-card__title">Scene art alongside your text</div>
            </div>
          </div>

          <div className="type-card">
            <div className="type-card__art ty-full">
              <div className="ty-full__tree">
                <div className="ty-full__canopy"></div>
                <div className="ty-full__trunk"></div>
              </div>
              <div className="ty-full__fig"></div>
            </div>
            <div className="type-card__overlay"></div>
            <div className="type-card__info">
              <span className="type-card__tag">Full-Page Scene</span>
              <div className="type-card__title">A single moment, fully realised</div>
            </div>
          </div>

          <div className="type-card">
            <div className="type-card__art ty-spread">
              <div className="ty-spread__sun"></div>
              <div className="ty-spread__hills"></div>
              <div className="ty-spread__fold"></div>
            </div>
            <div className="type-card__overlay"></div>
            <div className="type-card__info">
              <span className="type-card__tag">Two-Page Spread</span>
              <div className="type-card__title">Panoramic, immersive world-building</div>
            </div>
          </div>

          <div className="type-card">
            <div className="type-card__art ty-map">
              <div className="ty-map__texture"></div>
              <div className="ty-map__land"></div>
              <div className="ty-map__mountain"></div>
              <div className="ty-map__dotted"></div>
              <div className="ty-map__compass">N</div>
            </div>
            <div className="type-card__overlay"></div>
            <div className="type-card__info">
              <span className="type-card__tag">Fantasy Map</span>
              <div className="type-card__title">Ground readers in your world's geography</div>
            </div>
          </div>

          <div className="type-card">
            <div className="type-card__art ty-char">
              <div className="ty-char__grid">
                <div className="ty-char__pose"><div className="ty-char__head"></div><div className="ty-char__body"></div></div>
                <div className="ty-char__pose"><div className="ty-char__head"></div><div className="ty-char__body" style={{ background: '#7A2331' }}></div></div>
                <div className="ty-char__pose"><div className="ty-char__head"></div><div className="ty-char__body" style={{ background: '#C99A3D' }}></div></div>
              </div>
            </div>
            <div className="type-card__overlay"></div>
            <div className="type-card__info">
              <span className="type-card__tag">Character Design Sheet</span>
              <div className="type-card__title">Consistent character reference art</div>
            </div>
          </div>
        </div>

        <div className="type-showcase__cta">
          <p>These are CSS mockups showcasing our format range. Your illustrations will be hand-drawn by a specialist illustrator matched to your genre, delivered in full resolution.</p>
          <a href="#lead-form" className="btn btn--accent btn--lg">Get a Free Illustration Quote</a>
        </div>
      </div>
    </section>
  );
};