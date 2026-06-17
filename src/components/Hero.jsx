import { COUPLE, WEDDING_DETAILS } from '../constants/wedding';
import { Countdown } from './Countdown';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__background" />
      <div className="hero__orb hero__orb--left" aria-hidden="true" />
      <div className="hero__orb hero__orb--right" aria-hidden="true" />
      <div className="hero__content">
        <Reveal>
          <p className="eyebrow">A Premium Wedding Portfolio</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="hero__names">
            <span>{COUPLE.bride}</span>
            <span className="hero__ampersand">&amp;</span>
            <span>{COUPLE.groom}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="hero__date">{WEDDING_DETAILS.dateLabel}</p>
        </Reveal>
        <Reveal delay={0.45}>
          <p className="hero__venue">{WEDDING_DETAILS.venue}</p>
        </Reveal>
        <Reveal delay={0.6}>
          <Countdown />
        </Reveal>
      </div>
      <div className="hero__bottom-border" />
    </section>
  );
}
