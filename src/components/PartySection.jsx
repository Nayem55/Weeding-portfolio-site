import { WEDDING_PARTY } from '../data/party';
import { Divider } from './Divider';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

export function PartySection() {
  return (
    <section id="party" className="section">
      <Reveal><SectionTitle eyebrow="Beside Us" title="Wedding Party" /></Reveal>
      <Divider />
      <div className="party-grid">
        {WEDDING_PARTY.map((person, index) => (
          <Reveal key={person.name} delay={index * 0.08}>
            <article className="party-card">
              <div className="party-card__avatar" aria-hidden="true">{person.name.charAt(0)}</div>
              <p>{person.role}</p>
              <h3>{person.name}</h3>
              <span>{person.note}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
