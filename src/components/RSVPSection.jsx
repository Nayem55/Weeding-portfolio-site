import { WEDDING_DETAILS } from '../constants/wedding';
import { Divider } from './Divider';
import { Reveal } from './Reveal';
import { RSVPForm } from './RSVPForm';
import { SectionTitle } from './SectionTitle';

export function RSVPSection() {
  return (
    <section id="rsvp" className="section section--rsvp">
      <Reveal>
        <SectionTitle eyebrow={`Kindly Reply By ${WEDDING_DETAILS.rsvpDeadline}`} title="RSVP" />
      </Reveal>
      <Divider />
      <Reveal delay={0.1}>
        <RSVPForm />
      </Reveal>
    </section>
  );
}
