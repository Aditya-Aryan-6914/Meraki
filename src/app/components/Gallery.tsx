import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { NeonIcon } from './NeonIcon';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1765278624799-9c90305b0b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBkYW5jZSUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc2NzM3Mzg3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Dance Performance",
    title: "Contemporary Fusion"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1615097305541-786cdb65e3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmRpYW4lMjBmZXN0aXZhbHxlbnwxfHx8fDE3NjczNzM4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Festival Celebration",
    title: "Diwali Fest"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1585346230722-6b9df46d0d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmVzdCUyMHN0YWdlfGVufDF8fHx8MTc2NzM3Mzg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Stage Performance",
    title: "Cultural Night"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1758316727379-4c995d3ae455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGN1bHR1cmFsJTIwZXZlbnR8ZW58MXx8fHwxNzY3MzczODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Youth Event",
    title: "Youth Festival"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1615097305541-786cdb65e3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmRpYW4lMjBmZXN0aXZhbHxlbnwxfHx8fDE3NjczNzM4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Traditional Celebration",
    title: "Gudi Padwa"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1765278624799-9c90305b0b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBkYW5jZSUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc2NzM3Mzg3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Workshop",
    title: "Dance Workshop"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 text-white relative overflow-hidden">
      {/* Decorative Neon Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-10 animate-pulse" style={{ animationDuration: '3s' }}>
          <NeonIcon icon="🎺" color="#06b6d4" className="text-5xl" />
        </div>
        <div className="absolute bottom-1/3 left-10 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
          <NeonIcon icon="✨" color="#fbbf24" className="text-5xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <span className="text-orange-500 text-sm uppercase tracking-widest mb-4 block">Memories</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Gallery</h2>
            <div className="w-24 h-1 bg-orange-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-all aspect-square"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl text-white uppercase tracking-wider">{image.title}</h3>
                    <div className="w-12 h-px bg-orange-500 mt-3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="group px-8 py-4 bg-orange-500 text-white hover:bg-orange-600 transition-all inline-flex items-center gap-3 uppercase tracking-wider">
              <span>View Full Gallery</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}