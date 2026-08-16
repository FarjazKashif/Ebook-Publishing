import { useScrollReveal } from '../../hooks/useScrollReveal';

const steps = [
  { step: "Stage 1", title: "Rough Sketch", desc: "A loose pencil sketch establishes composition, pose and framing. This is where the biggest changes are easiest to make.", visual: "sketch" },
  { step: "Stage 2", title: "Refined Line Art", desc: "Once composition is approved, clean line work locks in every detail — clothing, expressions, environment — before colour begins.", visual: "line" },
  { step: "Stage 3", title: "Final Colour Art", desc: "Full colour, lighting and texture bring the illustration to life — delivered print-ready and matched to your book's tone.", visual: "color" }
];

export const SketchProcess = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="sketch-process">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> How Every Illustration Is Made</p>
          <h2 className="section-title">From Rough Sketch to Finished Art</h2>
          <p className="section-sub">Three approval stages mean no surprises — you're involved at every step, not just at delivery.</p>
        </div>
        <div className="sp-grid" ref={gridRef}>
          {steps.map((s, idx) => (
            <div key={idx} className="sp-card">
              <div className={`sp-card__visual sp-card__visual--${s.visual}`}>
                <div className="sp-fig">
                  <div className={`sp-fig__${s.visual}-head`}></div>
                  <div className={`sp-fig__${s.visual}-body`}></div>
                </div>
              </div>
              <div className="sp-card__body">
                <div className="sp-card__step">{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};