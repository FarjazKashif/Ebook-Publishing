import { useScrollReveal } from '../../hooks/useScrollReveal';

export const AboutHeroSection = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="about-hero">
      <div className="about-hero__bg" aria-hidden="true">
        <div className="about-hero__glow-l"></div>
        <div className="about-hero__glow-r"></div>
        <div className="about-hero__lines"></div>
      </div>
      <div className="container about-hero__inner">
        <div className="about-hero__content" ref={contentRef}>
          <p className="eyebrow eyebrow--light reveal"><span className="eyebrow__dot"></span> Our Story</p>
          <h1 className="about-hero__title reveal">We Help Authors Turn <em>Manuscripts</em> Into Published Books</h1>
          <p className="about-hero__lead reveal">
            Infusion Publishing was born from a simple belief: <strong>every author deserves a professional publishing experience</strong>, regardless of budget or connections. Since our founding, we've helped over 3,000 writers share their stories with the world.
          </p>
          <div className="about-hero__ctas reveal">
            <a href="#our-story" className="btn btn--accent btn--lg">Read Our Story</a>
            <a href="#lead-form" className="btn btn--ghost-light btn--lg">Work With Us</a>
          </div>
          <div className="about-hero__stats reveal">
            <div className="about-hero__stat"><strong>3,000+</strong><span>Books Published</span></div>
            <div className="about-hero__stat"><strong>10+</strong><span>Years of Experience</span></div>
            <div className="about-hero__stat"><strong>441+</strong><span>Five-Star Reviews</span></div>
            <div className="about-hero__stat"><strong>100%</strong><span>Royalties Kept</span></div>
          </div>
        </div>
        <div className="about-hero__visual reveal-scale" ref={visualRef} aria-hidden="true">
          {/* SVG Open Book Visual */}
          <div className="open-book">
            <div className="open-book__page open-book__page-l"><div className="open-book__lines-l"><div className="open-book__line"></div><div className="open-book__line open-book__line--short"></div><div className="open-book__line"></div><div className="open-book__line"></div><div className="open-book__line open-book__line--short"></div><div className="open-book__line"></div><div className="open-book__line"></div><div className="open-book__line open-book__line--short"></div></div></div>
            <div className="open-book__spine"></div>
            <div className="open-book__page open-book__page-r"><div className="open-book__lines"><div className="open-book__line"></div><div className="open-book__line"></div><div className="open-book__line open-book__line--short"></div><div className="open-book__line"></div><div className="open-book__line open-book__line--shorter"></div><div className="open-book__line"></div><div className="open-book__line"></div><div className="open-book__line"></div><div className="open-book__line"></div></div></div>
            <div className="open-book__base"></div>
            <div className="open-book__drop open-book__drop--1">✍️</div>
            <div className="open-book__drop open-book__drop--2">📚</div>
          </div>
        </div>
      </div>
    </section>
  );
};