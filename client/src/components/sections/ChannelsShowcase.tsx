import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ChannelsShowcase = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="channels-showcase" id="channels">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow--light"><span className="eyebrow__dot"></span> Where We Put Your Book</p>
          <h2 className="section-title section-title--light">Six Channels, One Coordinated Campaign</h2>
          <p className="section-sub section-sub--light">No single channel sells a book alone. We combine paid, organic and earned media into a campaign built around your genre and budget.</p>
        </div>
        <div className="ch-grid" ref={gridRef}>
          <div className="ch-card reveal">
            <div className="ch-card__art chn-amazon">
              <div className="chn-amazon__bar"><span>amazon.com</span></div>
              <div className="chn-amazon__sponsored">Sponsored</div>
              <div className="chn-amazon__card">
                <div className="chn-amazon__thumb"></div>
                <div className="chn-amazon__lines">
                  <div className="chn-amazon__line" style={{width:'90%'}}></div>
                  <div className="chn-amazon__line" style={{width:'60%'}}></div>
                  <div className="chn-amazon__price">$4.99</div>
                </div>
              </div>
            </div>
            <div className="ch-card__overlay"></div>
            <div className="ch-card__info"><span className="ch-card__tag">Amazon Ads</span><div className="ch-card__title">Sponsored Products targeting comp authors</div></div>
          </div>

          <div className="ch-card reveal">
            <div className="ch-card__art chn-bookbub">
              <div className="chn-bookbub__label">Featured Deal</div>
              <div className="chn-bookbub__deal">
                <div className="chn-bookbub__book"></div>
                <div className="chn-bookbub__price-row"><span className="chn-bookbub__was">$4.99</span><span className="chn-bookbub__now">$0.99</span></div>
              </div>
            </div>
            <div className="ch-card__overlay"></div>
            <div className="ch-card__info"><span className="ch-card__tag">BookBub</span><div className="ch-card__title">Featured Deals & targeted ad campaigns</div></div>
          </div>

          <div className="ch-card reveal">
            <div className="ch-card__art chn-social">
              <div className="chn-social__phone">
                <div className="chn-social__play"><svg width="12" height="12" viewBox="0 0 24 24" fill="#1A1A2E"><path d="M8 5v14l11-7z"/></svg></div>
                <div className="chn-social__heart">❤️</div>
                <div className="chn-social__bar"></div>
              </div>
            </div>
            <div className="ch-card__overlay"></div>
            <div className="ch-card__info"><span className="ch-card__tag">Social & BookTok</span><div className="ch-card__title">Short-form video for TikTok & Reels</div></div>
          </div>

          <div className="ch-card reveal">
            <div className="ch-card__art chn-email">
              <div className="chn-email__header"><div className="chn-email__dot"></div><div className="chn-email__from">Newsletter · New Release</div></div>
              <div className="chn-email__subject">Your next favourite mystery is here 📖</div>
              <div className="chn-email__line" style={{width:'95%'}}></div>
              <div className="chn-email__line" style={{width:'80%'}}></div>
              <div className="chn-email__line" style={{width:'60%'}}></div>
              <div className="chn-email__cta">Get My Copy</div>
            </div>
            <div className="ch-card__overlay"></div>
            <div className="ch-card__info"><span className="ch-card__tag">Email Marketing</span><div className="ch-card__title">Launch sequences & reader newsletters</div></div>
          </div>

          <div className="ch-card reveal">
            <div className="ch-card__art chn-web">
              <div className="chn-web__browser-bar"><div className="chn-web__dot"></div><div className="chn-web__dot"></div><div className="chn-web__dot"></div></div>
              <div className="chn-web__hero">
                <div className="chn-web__title">Meet the Author</div>
                <div className="chn-web__sub">New release available now</div>
                <div className="chn-web__btn">Shop Books</div>
              </div>
            </div>
            <div className="ch-card__overlay"></div>
            <div className="ch-card__info"><span className="ch-card__tag">Author Website</span><div className="ch-card__title">Your central hub for readers & media</div></div>
          </div>

          <div className="ch-card reveal">
            <div className="ch-card__art chn-press">
              <div className="chn-press__stars">★★★★★</div>
              <div className="chn-press__quote">"A gripping debut that refuses to let go until the final page."</div>
              <div className="chn-press__source">Book Blogger Review</div>
            </div>
            <div className="ch-card__overlay"></div>
            <div className="ch-card__info"><span className="ch-card__tag">Press & Reviews</span><div className="ch-card__title">Blogger outreach & review campaigns</div></div>
          </div>
        </div>
        <div className="channels-showcase__cta reveal">
          <p>These are mockups showing the channels we manage. Your campaign is built from real ad accounts, real submissions, and real analytics — reported to you monthly.</p>
          <a href="#lead-form" className="btn btn--accent btn--lg">Get a Free Strategy Call</a>
        </div>
      </div>
    </section>
  );
};