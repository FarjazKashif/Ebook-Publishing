import { editorCredsData } from '../../data/editing';
import type { IEditorCred } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const EditorsSection = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="editors">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> Who Edits Your Book</p>
          <h2 className="section-title">Editors You Can Actually Trust</h2>
          <p className="section-sub">We don't use freelancers without vetting. Every editor on our team meets a strict standard of experience and craft.</p>
        </div>
        <div className="editors__grid" ref={gridRef}>
          {editorCredsData.map((cred: IEditorCred, idx: number) => (
            <div key={idx} className="editor-cred reveal">
              <div className="editor-cred__icon" style={{ background: cred.iconBg }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">{cred.icon}</svg>
              </div>
              <h3>{cred.title}</h3>
              <p>{cred.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};