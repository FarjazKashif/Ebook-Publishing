import { designElementsData } from '../../data/coverDesign';
import type { IDesignElement } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const DesignElementsSection = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  const renderVisual = (type: string) => {
    switch (type) {
      case 'typo':
        return <div className="de-typo"><span>Title</span><span>Subtitle</span><span>AUTHOR NAME</span></div>;
      case 'colours':
        return <div className="de-colours"><div className="de-swatch" style={{background:'#0D1117'}}></div><div className="de-swatch" style={{background:'#CC0000'}}></div><div className="de-swatch" style={{background:'#C99A3D'}}></div><div className="de-swatch" style={{background:'#F5E6C8'}}></div><div className="de-swatch" style={{background:'#1B5FA8'}}></div></div>;
      case 'comp':
        return <div className="de-comp"><div className="de-comp__r" style={{width:'60px',height:'72px',background:'var(--parchment-2)',top:'4px',left:'6px',borderRadius:'3px',position:'absolute'}}></div><div className="de-comp__r" style={{width:'36px',height:'36px',background:'var(--burgundy)',opacity:0.55,top:'16px',left:'18px',borderRadius:'50%',position:'absolute'}}></div><div className="de-comp__r" style={{width:'48px',height:'6px',background:'var(--ink)',opacity:0.18,bottom:'18px',left:'12px',borderRadius:'3px',position:'absolute'}}></div><div className="de-comp__r" style={{width:'36px',height:'4px',background:'var(--ink)',opacity:0.1,bottom:'10px',left:'18px',borderRadius:'3px',position:'absolute'}}></div></div>;
      case 'thumb':
        return <div className="de-thumb"><div className="de-thumb__b"></div><div className="de-thumb__s"></div><div className="de-thumb__t"></div></div>;
      default:
        return null;
    }
  };

  return (
    <section className="design-elements">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> The Craft Behind the Cover</p>
          <h2 className="section-title">What Makes a Cover Actually Sell</h2>
          <p className="section-sub">Great cover design isn't instinct — it's strategy applied through four disciplines on every single project.</p>
        </div>
        <div className="de-grid" ref={gridRef}>
          {designElementsData.map((item: IDesignElement, idx: number) => (
            <div key={idx} className="de-card reveal">
              <div className="de-card__visual">{renderVisual(item.visual)}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};