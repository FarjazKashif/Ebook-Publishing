import { spreadStatsData } from '../../data/childrens';
import type { ISpreadStat } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const SpreadExplainer = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="spread-explainer">
      <div className="container spread-grid">
        <div className="spread-content" ref={contentRef}>
          <p className="eyebrow reveal"><span className="eyebrow__dot"></span> The Craft of Picture Books</p>
          <h2 className="reveal">How a 32-Page Picture Book Actually Works</h2>
          <p className="reveal">The 32-page picture book isn't arbitrary — it's the industry standard that bookstores, libraries and print-on-demand platforms are built around. Understanding the structure is what separates a publishable book from a manuscript.</p>
          <p className="reveal">Think in <strong>spreads, not pages</strong>. Each double-page spread is a unit of story — a moment, an emotion, a discovery. Our team plans your spread sequence during the brief stage, ensuring every illustration advances your narrative with purpose.</p>
          
          <div className="spread-stats reveal">
            {spreadStatsData.map((stat: ISpreadStat, idx: number) => (
              <div key={idx} className="spread-stat">
                <div className="spread-stat__num">{stat.num}</div>
                <div className="spread-stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <a href="#lead-form" className="btn btn--primary reveal">Plan My Book With an Expert</a>
        </div>
        
        <div className="reveal-scale" ref={visualRef}>
          <div className="book-spread">
            <div className="bs-page-l"><div className="bs-text-block"><div className="bs-line"></div><div className="bs-line bs-line--short"></div><div className="bs-line"></div><div className="bs-line bs-line--shorter"></div></div><div className="bs-illo"><div className="bs-illo-sun"></div><div className="bs-illo-hill"></div></div><span className="bs-page-num bs-page-num--l">4</span></div>
            <div className="bs-spine"></div>
            <div className="bs-page-r"><div className="bs-illo" style={{marginBottom:'10px'}}><div className="bs-illo-sun" style={{right:'auto',left:'18%',top:'18%',width:'16px',height:'16px'}}></div><div className="bs-illo-hill" style={{background:'#7BC67E'}}></div></div><div className="bs-text-block"><div className="bs-line"></div><div className="bs-line bs-line--short"></div></div><span className="bs-page-num bs-page-num--r">5</span></div>
          </div>
          <div className="spread-counter">
            <span className="sc-pill">Spread 1</span><span className="sc-pill">Spread 2</span><span className="sc-pill sc-pill--active">Spread 3 ←</span><span className="sc-pill">Spread 4</span><span className="sc-pill">⋯</span><span className="sc-pill">Spread 16</span>
          </div>
        </div>
      </div>
    </section>
  );
};