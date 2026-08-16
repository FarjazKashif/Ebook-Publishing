import { useScrollReveal } from '../../hooks/useScrollReveal';

export const LayoutShowcase = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="layout-showcase" id="layout-showcase">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow--light"><span className="eyebrow__dot"></span> Our Formatting Portfolio</p>
          <h2 className="section-title section-title--light">Six Layout Styles, Every Genre Covered</h2>
          <p className="section-sub section-sub--light">Every genre has its own typographic conventions. Our formatters know them all — and apply the right one to your manuscript.</p>
        </div>
        <div className="layout-grid" ref={gridRef}>
          {/* Novel */}
          <div className="layout-card reveal">
            <div className="layout-card__page">
              <div className="lc-novel-num">CHAPTER ONE</div>
              <div className="lc-novel-title">The Long Way Home</div>
              <div className="lc-novel-orn"></div>
              <div className="lc-novel-p"><span className="lc-novel-drop">S</span><div className="lc-novel-line"></div><div className="lc-novel-line" style={{width:'90%'}}></div><div className="lc-novel-line" style={{width:'95%'}}></div></div>
              <div className="lc-novel-line"></div><div className="lc-novel-line" style={{width:'85%'}}></div><div className="lc-novel-line" style={{width:'92%'}}></div><div className="lc-novel-line" style={{width:'60%'}}></div>
              <div className="lc-novel-pagenum">12</div>
            </div>
            <div className="layout-card__overlay"></div>
            <div className="layout-card__info"><span className="layout-card__tag">Novel / Fiction</span><div className="layout-card__title">Drop caps, serif type, chapter ornaments</div></div>
          </div>
          {/* Memoir */}
          <div className="layout-card reveal">
            <div className="layout-card__page">
              <div className="lc-memoir-title">Chapter Four: Summer, 1987</div>
              <div className="lc-memoir-photo"></div>
              <div className="lc-memoir-cap">The old farmhouse, taken the year we moved</div>
              <div className="lc-memoir-line"></div><div className="lc-memoir-line" style={{width:'88%'}}></div><div className="lc-memoir-line" style={{width:'92%'}}></div><div className="lc-memoir-line" style={{width:'70%'}}></div>
            </div>
            <div className="layout-card__overlay"></div>
            <div className="layout-card__info"><span className="layout-card__tag">Memoir</span><div className="layout-card__title">Photo integration, caption styling</div></div>
          </div>
          {/* Non-Fiction */}
          <div className="layout-card reveal">
            <div className="layout-card__page">
              <div className="lc-nf-h1">Building Better Systems</div>
              <div className="lc-nf-line"></div><div className="lc-nf-line" style={{width:'90%'}}></div><div className="lc-nf-line" style={{width:'80%'}}></div>
              <div className="lc-nf-h2">Key Principles</div>
              <div className="lc-nf-bullet"><div className="lc-nf-bullet-line" style={{width:'85%'}}></div></div>
              <div className="lc-nf-bullet"><div className="lc-nf-bullet-line" style={{width:'70%'}}></div></div>
              <div className="lc-nf-bullet"><div className="lc-nf-bullet-line" style={{width:'78%'}}></div></div>
            </div>
            <div className="layout-card__overlay"></div>
            <div className="layout-card__info"><span className="layout-card__tag">Non-Fiction</span><div className="layout-card__title">Headers, subheads, bulleted structure</div></div>
          </div>
          {/* Poetry */}
          <div className="layout-card reveal">
            <div className="layout-card__page">
              <div className="lc-poetry-title">Quiet Mornings</div>
              <div className="lc-poetry-stanza">
                <div className="lc-poetry-line" style={{width:'60%'}}></div><div className="lc-poetry-line" style={{width:'75%'}}></div><div className="lc-poetry-line" style={{width:'50%'}}></div>
              </div>
              <div className="lc-poetry-stanza">
                <div className="lc-poetry-line" style={{width:'68%'}}></div><div className="lc-poetry-line" style={{width:'45%'}}></div><div className="lc-poetry-line" style={{width:'72%'}}></div>
              </div>
            </div>
            <div className="layout-card__overlay"></div>
            <div className="layout-card__info"><span className="layout-card__tag">Poetry</span><div className="layout-card__title">Centred verse, deliberate white space</div></div>
          </div>
          {/* Textbook */}
          <div className="layout-card reveal">
            <div className="layout-card__page">
              <div className="lc-tb-header">MODULE 3 — FRACTIONS</div>
              <div className="lc-tb-line"></div><div className="lc-tb-line" style={{width:'85%'}}></div>
              <div className="lc-tb-box"><div className="lc-tb-box-line" style={{width:'90%'}}></div><div className="lc-tb-box-line" style={{width:'70%'}}></div></div>
              <div className="lc-tb-numbered"><span className="lc-tb-num">1.</span><div className="lc-tb-box-line" style={{width:'80%'}}></div></div>
              <div className="lc-tb-numbered"><span className="lc-tb-num">2.</span><div className="lc-tb-box-line" style={{width:'65%'}}></div></div>
            </div>
            <div className="layout-card__overlay"></div>
            <div className="layout-card__info"><span className="layout-card__tag">Textbook / Workbook</span><div className="layout-card__title">Numbered exercises, callout boxes</div></div>
          </div>
          {/* Cookbook */}
          <div className="layout-card reveal">
            <div className="layout-card__page">
              <div className="lc-ck-title">Sunday Roast Chicken</div>
              <div className="lc-ck-sub">Serves 4 · 90 minutes</div>
              <div className="lc-ck-photo"></div>
              <div className="lc-ck-ing-title">INGREDIENTS</div>
              <div className="lc-ck-line"></div><div className="lc-ck-line" style={{width:'65%'}}></div><div className="lc-ck-line" style={{width:'72%'}}></div>
            </div>
            <div className="layout-card__overlay"></div>
            <div className="layout-card__info"><span className="layout-card__tag">Cookbook</span><div className="layout-card__title">Recipe grids, ingredient columns</div></div>
          </div>
        </div>
        <div className="layout-showcase__cta reveal">
          <p>These layouts are CSS mockups showcasing our typographic range. Your book will be professionally typeset in industry-standard software and delivered fully print and eBook ready.</p>
          <a href="#lead-form" className="btn btn--accent btn--lg">Get a Free Formatting Quote</a>
        </div>
      </div>
    </section>
  );
};