import type { IGenre } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface GenresSectionProps {
  data: IGenre[];
}

export const GenresSection = ({ data }: GenresSectionProps) => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="genres">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow"><span className="eyebrow__dot"></span> Genre Expertise</p>
          <h2 className="section-title">We Design for Every Genre</h2>
          <p className="section-sub">Genre conventions are a design language. Our specialists are fluent in all of them — and they speak your readers' visual vocabulary fluently.</p>
        </div>
        <div className="genre-grid reveal" ref={gridRef}>
          {data.map((genre: IGenre, idx: number) => (
            <div key={idx} className="genre-pill">
              <span>{genre.icon}</span> {genre.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};