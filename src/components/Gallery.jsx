import { GALLERY_ITEMS } from '../data/gallery';
import { Reveal } from './Reveal';

export function Gallery() {
  return (
    <div className="gallery-grid">
      {GALLERY_ITEMS.map((item, index) => (
        <Reveal key={item.label} delay={index * 0.08} className={item.size ? `gallery-reveal gallery-reveal--${item.size}` : 'gallery-reveal'}>
          <figure className="gallery-card" style={{ background: item.gradient }}>
            <figcaption>{item.label}</figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
