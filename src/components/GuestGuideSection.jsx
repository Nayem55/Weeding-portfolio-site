import { GUEST_GUIDE, REGISTRY_ITEMS } from '../data/guestGuide';
import { Divider } from './Divider';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

export function GuestGuideSection() {
  return (
    <section id="guide" className="section section--guide">
      <Reveal><SectionTitle eyebrow="Guest Concierge" title="Details for the Day" /></Reveal>
      <Divider />
      <div className="guide-grid">
        {GUEST_GUIDE.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="guide-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <aside className="registry-panel">
          <p className="section-title__eyebrow">Registry</p>
          <h3>Your presence is our favorite gift.</h3>
          <p>For guests who have asked, we have curated a small registry around experiences and home beginnings.</p>
          <ul>
            {REGISTRY_ITEMS.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </aside>
      </Reveal>
    </section>
  );
}
