import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StarryBackground } from './components/StarryBackground';
import { FloatingElements } from './components/FloatingElements';

export default function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <StarryBackground />
      <FloatingElements />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Events />
          <Gallery />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}