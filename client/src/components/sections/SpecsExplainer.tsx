import { specsStatsData } from '../../data/formatting';
import type { ISpecStat } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const SpecsExplainer = () => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const visualRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="specs-explainer">
      <div className="container specs-grid">
        <div className="specs-content" ref={contentRef}>
          <p className="eyebrow reveal"><span className="eyebrow__dot"></span> The Technical Details</p>
          <h2 className="reveal">Margins, Bleed & Trim Size Aren't Arbitrary</h2>
          <p className="reveal">Every measurement on a formatted page serves a purpose. Inside margins accommodate the binding so text isn't lost in the spine. Outside margins protect content from being trimmed during production. Bleed extends artwork past the trim edge so nothing prints with an accidental white border.</p>
          <p className="reveal">Get these wrong and the result is subtle but damaging — text swallowed by the spine, cramped lines that fatigue the reader, or a printer rejection that delays your launch. Our formatters calculate every specification to your exact trim size before a single page is designed.</p>
          
          <div className="specs-stats reveal">
            {specsStatsData.map((stat: ISpecStat, idx: number) => (
              <div key={idx} className="specs-stat">
                <div className="specs-stat__num">{stat.num}</div>
                <div className="specs-stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <a href="#lead-form" className="btn btn--primary reveal">Get My Formatting Spec Right</a>
        </div>
        
        <div className="specs-visual reveal-scale" ref={visualRef}>
          <div className="trim-diagram">
            <div className="trim-bleed"></div>
            <div className="trim-page">
              <div className="trim-margin"></div>
              <div className="trim-text">
                <div className="trim-tline"></div><div className="trim-tline" style={{width:'92%'}}></div><div className="trim-tline" style={{width:'88%'}}></div>
                <div className="trim-tline" style={{width:'95%'}}></div><div className="trim-tline" style={{width:'80%'}}></div><div className="trim-tline" style={{width:'90%'}}></div>
                <div className="trim-tline" style={{width:'70%'}}></div><div className="trim-tline" style={{width:'93%'}}></div><div className="trim-tline" style={{width:'85%'}}></div>
              </div>
            </div>
            <span className="trim-label trim-label--bleed">Bleed 0.125"</span>
            <span className="trim-label trim-label--margin">Margin</span>
            <span className="trim-label trim-label--spine">Spine Side</span>
          </div>
        </div>
      </div>
    </section>
  );
};