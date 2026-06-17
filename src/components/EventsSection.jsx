import { WEDDING_EVENTS } from '../data/events';
import { Divider } from './Divider';
import { EventCard } from './EventCard';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

export function EventsSection() {
  return (
    <section id="events" className="section section--soft">
      <Reveal><SectionTitle eyebrow="Save the Date" title="Wedding Events" /></Reveal>
      <Divider />
      <div className="events-grid">
        {WEDDING_EVENTS.map((event, index) => (
          <EventCard key={event.title} {...event} delay={(index + 1) * 0.1} />
        ))}
      </div>
    </section>
  );
}
