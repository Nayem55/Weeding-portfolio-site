import { LOVE_NOTES } from '../data/testimonials';
import { Reveal } from './Reveal';

export function LoveNotesSection() {
  return (
    <section className="section section--notes" aria-label="Love notes from family and friends">
      <Reveal>
        <p className="section-title__eyebrow">Love Notes</p>
        <h2>Words from the people who know them best.</h2>
      </Reveal>
      <div className="notes-grid">
        {LOVE_NOTES.map((note, index) => (
          <Reveal key={note.author} delay={index * 0.12}>
            <blockquote className="note-card">
              <p>“{note.quote}”</p>
              <cite>{note.author}</cite>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
