import { launchTimelineData } from '../../data/marketing';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const LaunchTimeline = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="launch-timeline">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> The Campaign Arc</p>
          <h2 className="section-title">A Launch Has Three Phases — We Plan for All Three</h2>
          <p className="section-sub">Momentum before launch, a coordinated push at launch, and sustained visibility after — most authors only plan for the middle one.</p>
        </div>
        <div className="lt-grid" ref={gridRef}>
          {launchTimelineData.map((phase, idx) => (
            <div key={idx} className="lt-card reveal">
              <span className="lt-card__phase">{phase.phase}</span>
              <h3>{phase.title}</h3>
              <ul>
                {phase.list.map((item, i) => (
                  <li key={i}><span className="lt-check">✓</span> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};