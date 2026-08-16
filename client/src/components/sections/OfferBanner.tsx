interface OfferBannerProps {
  eyebrow: string;
  title: string;
  highlight: string;
  text: string;
  ctaText: string;
  note: string;
}

export const OfferBanner = ({ eyebrow, title, highlight, text, ctaText, note }: OfferBannerProps) => {
  return (
    <section className="offer-banner">
      <div className="container offer-banner__inner">
        <div className="offer-banner__text">
          <p className="eyebrow eyebrow--light">{eyebrow}</p>
          <h3>{title} <span className="offer-banner__highlight">{highlight}</span></h3>
          <p>{text}</p>
        </div>
        <div className="offer-banner__cta">
          <a href="#lead-form" className="btn btn--accent btn--lg">{ctaText}</a>
          <span className="offer-banner__note">{note}</span>
        </div>
      </div>
    </section>
  );
};