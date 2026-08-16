import { differentiatorsData } from '../../data/about';
import type { IDifferentiator } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const DifferentiatorsSection = () => {
  return (
    <section className="differentiators">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What Sets Us Apart</p>
          <h2 className="section-title">Why Authors Choose Infusion Publishing</h2>
          <p className="section-sub">There are dozens of self-publishing companies. Here's why over 3,000 authors chose — and trusted — us.</p>
        </div>

        {differentiatorsData.map((diff: IDifferentiator, idx: number) => {
          // Hooks must be called at the top level, so we call them here before returning JSX
          // Note: In a real production app with longer lists, you'd extract this into a child component.
          // For 3 items, this inline pattern works perfectly.
          const contentRef = useScrollReveal<HTMLDivElement>();
          const visualRef = useScrollReveal<HTMLDivElement>();
          
          return (
            <div key={idx} className={`diff-row ${diff.flip ? 'diff-row--flip' : ''}`}>
              <div className="diff-content reveal-left" ref={contentRef}>
                <p className="eyebrow"><span className="eyebrow__dot"></span> {diff.eyebrow}</p>
                <h3>{diff.title}</h3>
                <p>{diff.text}</p>
                <ul className="diff-list">
                  {diff.list.map((item, i) => (
                    <li key={i}><span className="diff-check">✓</span> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="diff-visual reveal-right" ref={visualRef}>
                <div className={`diff-panel diff-panel--${diff.panel}`}>
                  <p className="diff-panel__label">{diff.panelLabel}</p>
                  
                  {diff.bar && (
                    <>
                      <div className="diff-panel__row">
                        <div className="diff-panel__icon">
                          {/* Wrapped icon in SVG! */}
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            {diff.panelRows[0].icon}
                          </svg>
                        </div>
                        <div className="diff-panel__text">
                          <strong style={{ color: diff.panel === 'ink' ? 'var(--gold-light)' : 'var(--ink)' }}>{diff.panelRows[0].title}</strong>
                          <span>{diff.panelRows[0].subtitle}</span>
                        </div>
                      </div>
                      <div className="diff-panel__bar"><div className="diff-panel__bar-fill" style={{ width: `${diff.bar.percent}%` }}></div></div>
                      <div className="diff-panel__progress-label">
                        <span>{diff.bar.label}</span>
                        <span style={{ color: 'var(--gold-light)' }}>{diff.bar.value}</span>
                      </div>
                      <div className="diff-panel__row">
                        <div className="diff-panel__icon">
                          {/* Wrapped icon in SVG! */}
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            {diff.panelRows[1].icon}
                          </svg>
                        </div>
                        <div className="diff-panel__text">
                          <strong>{diff.panelRows[1].title}</strong>
                          <span>{diff.panelRows[1].subtitle}</span>
                        </div>
                      </div>
                    </>
                  )}

                  {!diff.bar && diff.panelRows.map((row, i) => (
                    <div key={i} className="diff-panel__row">
                      <div className="diff-panel__icon" style={{ color: 'var(--burgundy)' }}>
                        {/* Wrapped icon in SVG! */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          {row.icon}
                        </svg>
                      </div>
                      <div className="diff-panel__text">
                        <strong>{row.title}</strong>
                        <span>{row.subtitle}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};