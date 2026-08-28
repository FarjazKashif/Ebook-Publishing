import { useScrollReveal } from '../../hooks/useScrollReveal';

const voices = [
  { tag: "Thriller", title: "Narrators trained for tension & pacing", genre: "Thriller & Suspense", style: "TENSE · DELIBERATE · GRAVELLY", className: "vc-thriller", color: "#CC0000", bars: [14,32,20,44,18,38,12,28,40,16] },
  { tag: "Romance", title: "Warm, emotionally expressive delivery", genre: "Romance", style: "WARM · EXPRESSIVE · INTIMATE", className: "vc-romance", color: "#E85A8A", bars: [22,30,24,34,26,32,20,28,36,24] },
  { tag: "Fantasy", title: "Distinct character voices, full range", genre: "Fantasy & Multi-Cast", style: "DYNAMIC · CHARACTER VOICES · EPIC", className: "vc-fantasy", color: "#9370DB", bars: [16,40,26,46,20,34,28,42,18,30] },
  { tag: "Business", title: "Clear, credible, easy to follow", genre: "Business & Non-Fiction", style: "CLEAR · STEADY · AUTHORITATIVE", className: "vc-business", color: "#C99A3D", bars: [24,24,26,24,28,24,26,24,28,24] },
  { tag: "Children's", title: "Playful, animated storytelling voice", genre: "Children's", style: "PLAYFUL · BRIGHT · ANIMATED", className: "vc-childrens", color: "#FFD700", bars: [18,36,14,30,22,38,16,32,20,28] },
  { tag: "Memoir", title: "Sincere, reflective, personal tone", genre: "Memoir & Biography", style: "REFLECTIVE · SINCERE · UNHURRIED", className: "vc-memoir", color: "#B89968", bars: [20,26,18,28,22,24,16,26,20,22] }
];

export const VoiceShowcase = () => {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="voice-showcase" id="voices">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow eyebrow--light"><span className="eyebrow__dot"></span> Narrator Voice Matching</p>
          <h2 className="section-title section-title--light">Every Genre Sounds Different — We Cast Accordingly</h2>
          <p className="section-sub section-sub--light">A thriller needs tension in the voice. A children's book needs warmth and play. We match your book to a narrator who understands the difference.</p>
        </div>
        <div className="vs-grid" ref={gridRef}>
          {voices.map((v, idx) => (
            <div key={idx} className="vs-card reveal">
              <div className={`vs-card__art ${v.className}`}>
                <div className="vs-waveform">
                  {v.bars.map((h, i) => (
                    <div key={i} className="vs-wave-bar" style={{ height: `${h}px`, background: v.color }}></div>
                  ))}
                </div>
                <div className="vs-genre-label">{v.genre}</div>
                <div className="vs-narrator-label">{v.style}</div>
              </div>
              <div className="vs-card__overlay"></div>
              <div className="vs-card__info"><span className="vs-card__tag">{v.tag}</span><div className="vs-card__title">{v.title}</div></div>
            </div>
          ))}
        </div>
        <div className="voice-showcase__cta reveal">
          <p>These waveforms are visual mockups showing genre-matched vocal styles. Your audiobook is narrated by a real professional, auditioned and approved by you before recording begins.</p>
          <a href="#mid-form" className="btn btn--accent btn--lg">Get a Free Audiobook Quote</a>
        </div>
      </div>
    </section>
  );
};