import { EventsSection } from './components/EventsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { GuestGuideSection } from './components/GuestGuideSection';
import { Hero } from './components/Hero';
import { LoveNotesSection } from './components/LoveNotesSection';
import { Nav } from './components/Nav';
import { PartySection } from './components/PartySection';
import { PetalCanvas } from './components/PetalCanvas';
import { RSVPSection } from './components/RSVPSection';
import { StorySection } from './components/StorySection';
import { VenueSection } from './components/VenueSection';

export default function App() {
  return (
    <div className="app">
      <PetalCanvas />
      <Nav />
      <main>
        <Hero />
        <ExperienceSection />
        <StorySection />
        <EventsSection />
        <VenueSection />
        <PartySection />
        <GallerySection />
        <GuestGuideSection />
        <LoveNotesSection />
      </main>
      <Footer />
    </div>
  );
}
