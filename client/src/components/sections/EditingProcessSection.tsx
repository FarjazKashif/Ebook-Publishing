import { editingProcessData } from '../../data/editing';
import type { IProcessStep } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const EditingProcessSection = () => {
  const railRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="edit-process">
      <div className="container">
        <div className="section-head section-head--light">
          <p className="eyebrow eyebrow--light"><span className="eyebrow__dot"></span> How It Works</p>
          <h2 className="section-title section-title--light">From Manuscript to Polished Draft in 4 Steps</h2>
          <p className="section-sub section-sub--light">A clear, collaborative process — no surprises, no disappearing editors.</p>
        </div>
        <div className="process__rail" ref={railRef}>
          {editingProcessData.map((step: IProcessStep, idx: number) => (
            <div key={idx} className="proc-step reveal">
              <div className="proc-step__num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {idx < editingProcessData.length - 1 && (
                <div className="proc-step__connector" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:'50px',position:'relative',zIndex:1}}>
          <a href="#lead-form" className="btn btn--accent btn--lg">Start Your Editing Project</a>
        </div>
      </div>
    </section>
  );
};