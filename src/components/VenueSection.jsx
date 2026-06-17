import { WEDDING_DETAILS } from '../constants/wedding';
import { Divider } from './Divider';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

export function VenueSection() {
  return (
    <section id="venue" className="section section--venue">
      <Reveal>
        <SectionTitle eyebrow="The Destination" title="Rosewood Estate" />
      </Reveal>
      <Divider />
      <div className="venue-layout">
        <Reveal>
          <div className="venue-art" aria-hidden="true">
            <span>NV</span>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="venue-card">
            <p className="venue-card__label">Ceremony + Reception</p>
            <h3>{WEDDING_DETAILS.venue}</h3>
            <p>
              A private Napa Valley estate with sculpted gardens, a grand chapel, reflecting lake,
              and a candlelit ballroom reserved exclusively for the celebration.
            </p>
            <div className="venue-meta">
              <span>Garden Pavilion</span>
              <span>Grand Chapel</span>
              <span>Rosewood Ballroom</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
