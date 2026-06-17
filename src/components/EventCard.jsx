import { Reveal } from './Reveal';

export function EventCard({ icon, time, title, place, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="event-card">
        <div className="event-card__icon" aria-hidden="true">{icon}</div>
        <div>
          <p className="event-card__time">{time}</p>
          <h3>{title}</h3>
          <p className="event-card__place">{place}</p>
        </div>
      </article>
    </Reveal>
  );
}
