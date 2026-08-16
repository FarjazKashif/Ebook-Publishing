import { teamData } from '../../data/about';
import type { ITeamMember } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const TeamSection = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="team">
      <div className="container">
        <div className="section-head section-head--light">
          <p className="eyebrow eyebrow--light">The People Behind the Pages</p>
          <h2 className="section-title section-title--light">Meet Our Team</h2>
          <p className="section-sub section-sub--light">Editors, designers, marketers and publishing strategists — united by one purpose.</p>
        </div>
        <div className="team__grid" ref={gridRef}>
          {teamData.map((member: ITeamMember, idx: number) => (
            <article key={idx} className="team-card reveal">
              <div className="team-card__avatar">
                <div className="team-card__avatar-bg" style={{ background: member.bgColor }}></div>
                <span className="team-card__initial">{member.initial}</span>
              </div>
              <h3>{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
              <p>{member.bio}</p>
              <div className="team-card__social">
                <a href="#" aria-label={`${member.name} on LinkedIn`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};