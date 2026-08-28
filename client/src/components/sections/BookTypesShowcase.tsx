import { useScrollReveal } from '../../hooks/useScrollReveal';

export const BookTypesShowcase = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="book-types" id="book-types">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow--light"><span className="eyebrow__dot"></span> What We Ghostwrite</p>
          <h2 className="section-title section-title--light">Every Story Has a Format That Fits It</h2>
          <p className="section-sub section-sub--light">Whether you're documenting a life, building authority, or telling a story only you could imagine — we match the craft to the category.</p>
        </div>
        <div className="bt-grid" ref={gridRef}>
          <div className="bt-card reveal">
            <div className="bt-card__art bt-memoir">
              <div className="bt-spine" style={{background:'linear-gradient(180deg,#8A7860,#3D3226)'}}></div>
              <div className="bt-memoir__photo"></div>
              <div className="bt-memoir__title">A Life in<br />Full Colour</div>
              <div className="bt-memoir__author">A Memoir</div>
              <div className="bt-shine"></div>
            </div>
            <div className="bt-card__overlay"></div>
            <div className="bt-card__info"><span className="bt-card__tag">Memoir</span><div className="bt-card__title">Personal stories, told with care</div></div>
          </div>

          <div className="bt-card reveal">
            <div className="bt-card__art bt-biz">
              <div className="bt-spine" style={{background:'linear-gradient(180deg,#122038,#0B1626)'}}></div>
              <div className="bt-biz__bar"></div><div className="bt-biz__accent"></div>
              <div className="bt-biz__title">Scaling the Unscalable</div>
              <div className="bt-biz__sub">Lessons from building past $10M</div>
              <div className="bt-biz__chart">
                <div className="bt-biz__bar-el" style={{height:'40%'}}></div><div className="bt-biz__bar-el" style={{height:'60%'}}></div><div className="bt-biz__bar-el" style={{height:'50%'}}></div><div className="bt-biz__bar-el" style={{height:'85%'}}></div><div className="bt-biz__bar-el" style={{height:'70%'}}></div><div className="bt-biz__bar-el" style={{height:'95%'}}></div>
              </div>
              <div className="bt-biz__author">J. Whitfield</div>
              <div className="bt-shine"></div>
            </div>
            <div className="bt-card__overlay"></div>
            <div className="bt-card__info"><span className="bt-card__tag">Business Book</span><div className="bt-card__title">Authority-building, expertise-driven</div></div>
          </div>

          <div className="bt-card reveal">
            <div className="bt-card__art bt-sh">
              <div className="bt-sh__bar"></div>
              <div className="bt-sh__title">Rewrite Your Story</div>
              <div className="bt-sh__sub">A practical guide to lasting change</div>
              <div className="bt-sh__arrow">↑</div>
              <div className="bt-sh__author">DR. A. HOLT</div>
              <div className="bt-shine"></div>
            </div>
            <div className="bt-card__overlay"></div>
            <div className="bt-card__info"><span className="bt-card__tag">Self-Help</span><div className="bt-card__title">Frameworks readers can actually use</div></div>
          </div>

          <div className="bt-card reveal">
            <div className="bt-card__art bt-novel">
              <div className="bt-spine" style={{background:'linear-gradient(180deg,#4A2278,#1A0A2E)'}}></div>
              <div className="bt-novel__glow"></div>
              <div className="bt-novel__title">The Hollow<br />Crown</div>
              <div className="bt-novel__author">A Novel</div>
              <div className="bt-shine"></div>
            </div>
            <div className="bt-card__overlay"></div>
            <div className="bt-card__info"><span className="bt-card__tag">Novel / Fiction</span><div className="bt-card__title">Your imagined world, fully written</div></div>
          </div>

          <div className="bt-card reveal">
            <div className="bt-card__art bt-lead">
              <div className="bt-spine" style={{background:'linear-gradient(180deg,#C99A3D,#8B6914)'}}></div>
              <div className="bt-lead__peak"></div>
              <div className="bt-lead__bar"></div>
              <div className="bt-lead__title">Leading Without<br />the Ego</div>
              <div className="bt-lead__sub">A FIELD GUIDE FOR EXECUTIVES</div>
              <div className="bt-shine"></div>
            </div>
            <div className="bt-card__overlay"></div>
            <div className="bt-card__info"><span className="bt-card__tag">Leadership</span><div className="bt-card__title">Executive insight, distilled to prose</div></div>
          </div>

          <div className="bt-card reveal">
            <div className="bt-card__art bt-bio">
              <div className="bt-spine" style={{background:'linear-gradient(180deg,#9C3142,#4F1521)'}}></div>
              <div className="bt-bio__frame"></div>
              <div className="bt-bio__title">The Unlikely<br />Ascent</div>
              <div className="bt-bio__sub">The Authorized Biography</div>
              <div className="bt-shine"></div>
            </div>
            <div className="bt-card__overlay"></div>
            <div className="bt-card__info"><span className="bt-card__tag">Biography</span><div className="bt-card__title">A life, researched and rendered</div></div>
          </div>
        </div>
        <div className="book-types__cta reveal">
          <p>These covers are CSS mockups illustrating the range of books we ghostwrite. Your manuscript is written entirely from your interviews, in your voice, on your subject.</p>
          <a href="#mid-form" className="btn btn--accent btn--lg">Get a Free Consultation</a>
        </div>
      </div>
    </section>
  );
};