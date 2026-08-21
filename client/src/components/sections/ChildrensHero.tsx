import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ChildrensHero = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="svc-hero">
      <div className="svc-hero__bg"><div className="svc-hero__glow-l"></div><div className="svc-hero__glow-r"></div><div className="svc-hero__lines"></div></div>
      <div className="container svc-hero__inner">
        <div className="svc-hero__content" ref={contentRef}>
          <div className="svc-hero__badge reveal">⭐ Full-Service Children's Book Publishing</div>
          <h1 className="svc-hero__title reveal">Your Story Deserves<em>to Be on Every Shelf</em></h1>
          <p className="svc-hero__lead reveal">From your first draft to the shelves of Amazon, bookstores, and school libraries worldwide — our <strong>children's book specialists</strong> handle everything: custom illustration, editing, formatting, cover design, and global distribution.</p>
          <div className="svc-hero__ctas reveal">
            <a href="#style-showcase" className="btn btn--accent btn--lg">See Illustration Styles</a>
            <a href="#lead-form" className="btn btn--ghost-light btn--lg">Get a Free Publishing Quote</a>
          </div>
          <div className="svc-hero__trust reveal">
            <div className="svc-hero__trust-item"><span className="stars">★★★★★</span><span><strong>441+</strong> reviews</span></div>
            <div className="svc-hero__trust-item"><span><strong>Award-winning</strong> illustrators</span></div>
            <div className="svc-hero__trust-item"><span><strong>All ages</strong>, all genres</span></div>
            <div className="svc-hero__trust-item"><span><strong>Global distribution</strong> included</span></div>
          </div>
        </div>
        
        {/* Hero storybook CSS visual */}
        <div className="hero-book reveal-scale" ref={visualRef}>
          <div className="storybook">
            <img src="/images/childrensbookpublishing-mockup-1.png" alt="" />
          </div>
          <div className="hero-badge hero-badge--tl"><strong>🏅 Top Illustrators</strong><small>Award-winning team</small></div>
          <div className="hero-badge hero-badge--br"><strong>📚 3,000+ Books</strong><small>Published worldwide</small></div>
        </div>
      </div>
    </section>
  );
};