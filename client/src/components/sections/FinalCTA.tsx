interface FinalCTAProps {
  urgency?: string;
  title: string;
  text: string;
  primaryBtnText: string;
  primaryBtnHref?: string;
}

export const FinalCTA = ({ urgency, title, text, primaryBtnText, primaryBtnHref = "#lead-form" }: FinalCTAProps) => {
  return (
    <section className="final-cta">
      <div className="container final-cta__inner reveal">
        {urgency && (
          <div className="final-cta__urgency">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            {urgency}
          </div>
        )}
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="final-cta__actions">
          <a href={primaryBtnHref} className="btn btn--accent btn--lg">
            {primaryBtnText}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="tel:18135370226" className="btn btn--ghost-light btn--lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.7 3.6.7.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.7 3.6.1.3.1.7-.2 1l-2.4 2.2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
            Call (813) 537-0226
          </a>
        </div>
      </div>
    </section>
  );
};