import { useScrollReveal } from '../../hooks/useScrollReveal';

export const StyleShowcase = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="style-showcase" id="style-showcase">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow--light"><span className="eyebrow__dot"></span> Our Illustration Portfolio</p>
          <h2 className="section-title section-title--light">Six Illustration Styles, One Expert Studio</h2>
          <p className="section-sub section-sub--light">Every story has its own visual voice. Our illustrators are specialists — matched to your story's tone, age group, and emotional world.</p>
        </div>
        <div className="style-grid" ref={gridRef}>
          {/* Watercolour */}
          <div className="style-card reveal"><div className="style-card__art art-watercolour"><div className="wc-sky"></div><div className="wc-sun"></div><div className="wc-cloud1"></div><div className="wc-cloud2"></div><div className="wc-hill"></div><div className="wc-tree"><div className="wc-tree-t"></div><div className="wc-tree-s"></div></div><div className="wc-bunny" style={{position:'absolute',bottom:'40%',left:'22%'}}><div className="wc-bunny-e"></div><div className="wc-bunny-e2"></div><div className="wc-bunny-b"></div></div></div><div className="style-card__overlay"></div><div className="style-card__info"><span className="style-card__tag">Watercolour</span><div className="style-card__title">Soft, dreamy, emotionally warm</div></div></div>
          {/* Flat Digital */}
          <div className="style-card reveal"><div className="style-card__art art-flat"><div className="flat-bg"></div><div className="flat-circle1"></div><div className="flat-circle2"></div><div className="flat-title">ADVENTURES IN SPACE</div><div className="flat-robot"><div className="flat-r-head"><div className="flat-r-eye-l"></div><div className="flat-r-eye-r"></div><div className="flat-r-mouth"></div><div className="flat-r-ant"></div><div className="flat-r-ant-d"></div></div><div className="flat-r-body" style={{position:'relative'}}><div className="flat-r-btn"></div><div className="flat-r-arm-l"></div><div className="flat-r-arm-r"></div></div><div style={{display:'flex',justifyContent:'center'}}><div className="flat-r-leg-l"></div><div className="flat-r-leg-r"></div></div></div></div><div className="style-card__overlay"></div><div className="style-card__info"><span className="style-card__tag">Bold Flat Digital</span><div className="style-card__title">High-contrast, graphic, energetic</div></div></div>
          {/* Whimsical */}
          <div className="style-card reveal"><div className="style-card__art art-whimsical"><div className="wh-star1"></div><div className="wh-star2"></div><div className="wh-star3"></div><div className="wh-star4"></div><div className="wh-star5"></div><div className="wh-moon"></div><div className="wh-castle-wrap" style={{position:'absolute',bottom:'0',left:'50%',transform:'translateX(-50%)'}}><div style={{position:'relative'}}><div className="wh-tower-l"></div><div className="wh-tower-c" style={{position:'relative',display:'inline-block',verticalAlign:'bottom'}}><div className="wh-window"></div><div className="wh-door"></div></div><div className="wh-tower-r"></div></div></div></div><div className="style-card__overlay"></div><div className="style-card__info"><span className="style-card__tag">Whimsical Storybook</span><div className="style-card__title">Magical, atmospheric, detailed</div></div></div>
          {/* Cartoon */}
          <div className="style-card reveal"><div className="style-card__art art-cartoon"><div className="ct-cloud1"></div><div className="ct-sun"></div><div className="ct-fox-wrap" style={{position:'absolute',bottom:'38%',left:'50%',transform:'translateX(-60%)'}}><div className="ct-fox-b"><div className="ct-fox-ear-l"></div><div className="ct-fox-ear-r"></div><div className="ct-fox-eye-l"></div><div className="ct-fox-eye-r"></div><div className="ct-fox-nose"></div><div className="ct-fox-tail"></div></div></div><div className="ct-flower1"><div className="ct-f-stem"></div><div className="ct-f-head"></div></div><div className="ct-flower2"><div className="ct-f-stem"></div><div className="ct-f-head"></div></div></div><div className="style-card__overlay"></div><div className="style-card__info"><span className="style-card__tag">Cartoon Playful</span><div className="style-card__title">Bright, fun, immediately loveable</div></div></div>
          {/* Mixed Media */}
          <div className="style-card reveal"><div className="style-card__art art-mixed"><div className="mx-texture"></div><div className="mx-paper"></div><div className="mx-paint-l"></div><div className="mx-paint-r"></div><div className="mx-title">The Little Artist</div><div className="mx-figure"><div className="mx-head"></div><div className="mx-body"></div></div></div><div className="style-card__overlay"></div><div className="style-card__info"><span className="style-card__tag">Mixed Media</span><div className="style-card__title">Textured, handmade, expressive</div></div></div>
          {/* Minimalist */}
          <div className="style-card reveal"><div className="style-card__art art-minimal"><div className="mn-line-h"></div><div className="mn-circle-l"></div><div className="mn-circle-r"></div><div className="mn-title">TINY STEPS</div><div className="mn-child-wrap" style={{position:'absolute',top:'22%',left:'50%',transform:'translateX(-50%)'}}><div className="mn-c-head"></div><div className="mn-c-body"><div className="mn-c-arm-l"></div><div className="mn-c-arm-r"></div></div></div><div className="mn-author">by A. Small</div></div><div className="style-card__overlay"></div><div className="style-card__info"><span className="style-card__tag">Minimalist</span><div className="style-card__title">Clean, elegant, quietly powerful</div></div></div>
        </div>
        <div className="style-showcase__cta reveal">
          <p>These illustrations are CSS art showcasing our style range. Your book will be hand-crafted by a specialist illustrator in professional tools — delivered in full resolution, print-ready.</p>
          <a href="#lead-form" className="btn btn--accent btn--lg">Get a Free Illustration Consultation</a>
        </div>
      </div>
    </section>
  );
};