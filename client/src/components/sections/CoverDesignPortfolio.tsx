import { useScrollReveal } from '../../hooks/useScrollReveal';

type BookDataType = {
  href: string;
  alt: string;
}

export const CoverDesignPortfolio = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  const BookData: BookDataType[] = [
    {
      href: "/images/bookCovers/ALDawson-New-1.jpg",
      alt: "ALDawson-New-1",
    },
    {
      href: "/images/bookCovers/BryceFrontC.jpg",
      alt: "BryceFrontC",
    },
    {
      href: "/images/bookCovers/CharlesWilliam-FC.jpg",
      alt: "CharlesWilliam-FC",
    },
    {
      href: "/images/bookCovers/CorgiDetective-CoverMockup.jpg",
      alt: "CorgiDetective-CoverMockup",
    },
    {
      href: "/images/bookCovers/David-FC.jpg",
      alt: "David-FC",
    },
    {
      href: "/images/bookCovers/Final-RonaldCamilleri-FC.jpg",
      alt: "Final-RonaldCamilleri-FC",
    },
    {
      href: "/images/bookCovers/JaredSantiago-FrontC-1.jpg",
      alt: "JaredSantiago-FrontC-1",
    },
    {
      href: "/images/bookCovers/Joan-FC.jpg",
      alt: "Joan-FC",
    },
    {
      href: "/images/bookCovers/Larry-coverf.jpg",
      alt: "Larry-coverf",
    },
    {
      href: "/images/bookCovers/MarkRusso-3.jpg",
      alt: "MarkRusso-3",
    },
    {
      href: "/images/bookCovers/MarlonLott-FC.jpg",
      alt: "MarlonLott-FC",
    },
    {
      href: "/images/bookCovers/Richard-FC-1.jpg",
      alt: "Richard-FC-1",
    },
    {
      href: "/images/bookCovers/Rodriguez-FC.jpg",
      alt: "Rodriguez-FC",
    },
    {
      href: "/images/bookCovers/Shafiq-FC.jpg",
      alt: "Shafiq-FC",
    },
    {
      href: "/images/bookCovers/Stacy-FC.jpg",
      alt: "Stacy-FC",
    },
  ]

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow--light"><span className="eyebrow__dot"></span> Our Work</p>
          <h2 className="section-title section-title--light">Covers That Stop the Scroll</h2>
          <p className="section-sub section-sub--light">Every cover is built from your brief, your genre, and your story. No templates. No stock art. No shortcuts.</p>
        </div>
        <div className="portfolio__grid" ref={gridRef}>
          {BookData.map((book, index) => {
            const { href, alt } = book;

            return (
              <div className="cover-card reveal" key={index}>
                <div className="cover-card__book cc-thr">
                  <img src={href} alt={alt} />
                  <div className="cv-shine"></div>
                </div>
                <div className="cover-card__overlay"></div>
                {/* <div className="cover-card__info">
                  <span className="cover-card__genre-tag">Thriller</span>
                  <div className="cover-card__title">High contrast · Stark symbolism</div>
                </div> */}
              </div>
            );
          })}
        </div>
        <div className="portfolio__cta reveal">
          <a href="#lead-form" className="btn btn--accent btn--lg">Get a Free Design Brief</a>
        </div>
      </div>
    </section>
  );
};