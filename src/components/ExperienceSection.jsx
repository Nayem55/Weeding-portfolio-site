import { EXPERIENCE_HIGHLIGHTS, SIGNATURE_DETAILS } from '../data/highlights';
import { Reveal } from './Reveal';

export function ExperienceSection() {
  return (
    <section id="experience" className="section section--editorial">
      <div className="editorial-grid">
        <Reveal>
          <div className="editorial-copy">
            <p className="section-title__eyebrow">The Experience</p>
            <h2>A wedding weekend designed like a luxury editorial.</h2>
            <p>
              Soft florals, candlelight, live music, elevated hospitality, and thoughtful guest
              moments come together for a refined celebration that feels deeply personal.
            </p>
          </div>
        </Reveal>
        <div className="stats-panel" aria-label="Wedding highlights">
          {SIGNATURE_DETAILS.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <div className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="experience-cards">
        {EXPERIENCE_HIGHLIGHTS.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.12}>
            <article className="experience-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
