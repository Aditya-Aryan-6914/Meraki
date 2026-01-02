import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { NeonIcon } from './NeonIcon';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative Neon Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-pulse" style={{ animationDuration: '3s' }}>
          <NeonIcon icon="🎭" color="#3b82f6" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <NeonIcon icon="🎸" color="#f97316" />
        </div>
        <div className="absolute bottom-32 left-20 animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '2s' }}>
          <NeonIcon icon="💃" color="#ec4899" />
        </div>
        <div className="absolute bottom-40 right-10 animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}>
          <NeonIcon icon="🪘" color="#eab308" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full backdrop-blur-sm">
            <span className="text-orange-400 text-sm uppercase tracking-wider">KIT's College of Engineering Presents</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white mb-8 font-bold tracking-tight">
            Meraki '26
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where tradition meets innovation. Celebrating Maratha heritage through modern expression and cultural excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-orange-500 text-white rounded-none hover:bg-orange-600 transition-all inline-flex items-center justify-center gap-3"
            >
              <span className="uppercase tracking-wider">View Events</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border border-white text-white rounded-none hover:bg-white hover:text-black transition-all uppercase tracking-wider"
            >
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}