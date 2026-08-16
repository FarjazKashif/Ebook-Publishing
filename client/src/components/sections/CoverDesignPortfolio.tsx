import { useScrollReveal } from '../../hooks/useScrollReveal';

export const CoverDesignPortfolio = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow--light"><span className="eyebrow__dot"></span> Our Work</p>
          <h2 className="section-title section-title--light">Covers That Stop the Scroll</h2>
          <p className="section-sub section-sub--light">Every cover is built from your brief, your genre, and your story. No templates. No stock art. No shortcuts.</p>
        </div>
        <div className="portfolio__grid" ref={gridRef}>
          {/* Literary Fiction */}
          <div className="cover-card reveal">
            <div className="cover-card__book cc-lit">
              <div className="cv-spine" style={{background:'linear-gradient(180deg,#C99A3D,#8B6914)'}}></div>
              <div className="cc-lit__type"><div className="cc-lit__title">Where Light Ends</div><div className="cc-lit__author">Clara Whitfield</div></div>
              <div className="cc-lit__circle"></div><div className="cc-lit__circle2"></div>
              <div className="cc-lit__bottom">Infusion Publishing</div>
              <div className="cv-shine"></div>
            </div>
            <div className="cover-card__overlay"></div>
            <div className="cover-card__info"><span className="cover-card__genre-tag">Literary Fiction</span><div className="cover-card__title">Minimalist geometry · Gold typography</div></div>
          </div>
          {/* Thriller */}
          <div className="cover-card reveal">
            <div className="cover-card__book cc-thr">
              <div className="cv-spine" style={{background:'linear-gradient(180deg,#8B0000,#2A0000)'}}></div>
              <div className="cc-thr__blade"></div><div className="cc-thr__drip"></div><div className="cc-thr__dot"></div>
              <div className="cc-thr__type"><div className="cc-thr__title">DARK MATTER</div><div className="cc-thr__author">R. S. Hendricks</div></div>
              <div className="cc-thr__tag">A story of no return</div>
              <div className="cv-shine"></div>
            </div>
            <div className="cover-card__overlay"></div>
            <div className="cover-card__info"><span className="cover-card__genre-tag">Thriller</span><div className="cover-card__title">High contrast · Stark symbolism</div></div>
          </div>
          {/* Self-Help */}
          <div className="cover-card reveal">
            <div className="cover-card__book cc-sh">
              <div className="cv-spine" style={{background:'linear-gradient(180deg,#8B6914,#5A4000)'}}></div>
              <div className="cc-sh__bar"></div>
              <div className="cc-sh__type"><div className="cc-sh__title">Atomic Habits for Authors</div><div className="cc-sh__sub">Build the writing life you actually want</div></div>
              <div className="cc-sh__div"></div>
              <div className="cc-sh__arr">↑</div>
              <div className="cc-sh__auth">D. Marlowe</div>
              <div className="cv-shine"></div>
            </div>
            <div className="cover-card__overlay"></div>
            <div className="cover-card__info"><span className="cover-card__genre-tag">Self-Help</span><div className="cover-card__title">Bold type · Warm palette · Clarity-first</div></div>
          </div>
          {/* Romance */}
          <div className="cover-card reveal">
            <div className="cover-card__book cc-rom">
              <div className="cv-spine" style={{background:'linear-gradient(180deg,#B5294A,#4A000F)'}}></div>
              <div className="cc-rom__glow"></div>
              <div className="cc-rom__top">A Love Story</div>
              <div className="cc-rom__type"><div className="cc-rom__title">Under the Summer Stars</div><div className="cc-rom__author">Elise Montague</div></div>
              <div className="cv-shine"></div>
            </div>
            <div className="cover-card__overlay"></div>
            <div className="cover-card__info"><span className="cover-card__genre-tag">Romance</span><div className="cover-card__title">Deep rose palette · Mood lighting</div></div>
          </div>
          {/* Children's */}
          <div className="cover-card reveal">
            <div className="cover-card__book cc-ch">
              <div className="cv-spine" style={{background:'linear-gradient(180deg,#F5A623,#CC7A00)'}}></div>
              <div className="cc-ch__sun"></div>
              <div className="cc-ch__cloud"></div><div className="cc-ch__cloud2"></div>
              <div className="cc-ch__hill"></div>
              <div className="cc-ch__header">Oliver & The</div>
              <div className="cc-ch__type"><div className="cc-ch__title">Magic Cloud Factory</div><div className="cc-ch__author">by Penny Wren</div></div>
              <div className="cv-shine"></div>
            </div>
            <div className="cover-card__overlay"></div>
            <div className="cover-card__info"><span className="cover-card__genre-tag">Children's</span><div className="cover-card__title">Bright palette · Playful scene-setting</div></div>
          </div>
          {/* Business */}
          <div className="cover-card reveal">
            <div className="cover-card__book cc-biz">
              <div className="cv-spine" style={{background:'linear-gradient(180deg,#122038,#0B1626)'}}></div>
              <div className="cc-biz__bar-t"></div><div className="cc-biz__bar-a"></div>
              <div className="cc-biz__type"><div className="cc-biz__title">The Revenue Architecture</div><div className="cc-biz__sub">Scale your business without burning out</div></div>
              <div className="cc-biz__rule"></div>
              <div className="cc-biz__chart">
                <div className="cc-biz__bar" style={{height:'45%'}}></div>
                <div className="cc-biz__bar" style={{height:'62%'}}></div>
                <div className="cc-biz__bar" style={{height:'50%'}}></div>
                <div className="cc-biz__bar" style={{height:'80%'}}></div>
                <div className="cc-biz__bar" style={{height:'70%'}}></div>
                <div className="cc-biz__bar" style={{height:'96%'}}></div>
              </div>
              <div className="cc-biz__bottom"><div className="cc-biz__auth">Marcus Reid</div><div className="cc-biz__pub">Infusion Publishing</div></div>
              <div className="cv-shine"></div>
            </div>
            <div className="cover-card__overlay"></div>
            <div className="cover-card__info"><span className="cover-card__genre-tag">Business</span><div className="cover-card__title">Sharp minimal · Gold accent · Authoritative</div></div>
          </div>
        </div>
        <div className="portfolio__cta reveal">
          <p>These covers are CSS artworks showcasing our genre range and design sensibility. Your cover will be created in professional design tools and delivered print-ready.</p>
          <a href="#lead-form" className="btn btn--accent btn--lg">Get a Free Design Brief</a>
        </div>
      </div>
    </section>
  );
};