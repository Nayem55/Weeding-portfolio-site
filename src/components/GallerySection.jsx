import { Divider } from './Divider';
import { Gallery } from './Gallery';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

export function GallerySection() {
  return (
    <section id="gallery" className="section">
      <Reveal><SectionTitle eyebrow="Captured Moments" title="Our Journey" /></Reveal>
      <Divider />
      <Gallery />
    </section>
  );
}
