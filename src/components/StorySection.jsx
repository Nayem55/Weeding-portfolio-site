import { Divider } from './Divider';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

export function StorySection() {
  return (
    <section id="story" className="section">
      <Reveal><SectionTitle eyebrow="How it began" title="Our Story" /></Reveal>
      <Divider />
      <Reveal delay={0.1}>
        <p className="story-paragraph">
          It was a rainy autumn afternoon in Florence when their eyes first met across a crowded
          café. Sofia had just knocked over her espresso and Alexander rushed over with napkins.
          From that clumsy, coffee-stained beginning blossomed five extraordinary years of laughter,
          adventure, and an unbreakable bond.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="story-paragraph">
          He proposed on the same cobblestone terrace where they first danced — lanterns glowing,
          Vivaldi in the air — and she said <em>yes</em> before he even finished the question.
        </p>
      </Reveal>
      <div className="quote-block">
        <Reveal delay={0.3}>
          <p className="quote-block__quote">&quot;In all the world, there is no heart for me like yours.&quot;</p>
          <p className="quote-block__author">— Maya Angelou</p>
        </Reveal>
      </div>
    </section>
  );
}
