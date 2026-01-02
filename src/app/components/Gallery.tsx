import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar } from 'lucide-react';
import { NeonIcon } from './NeonIcon';

interface EventGallery {
  eventId: number;
  eventName: string;
  eventDate: string;
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
}

const galleryByEvent: EventGallery[] = [
  {
    eventId: 1,
    eventName: "Cultural Nights 2026",
    eventDate: "March 2026",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1585346230722-6b9df46d0d54?w=800", alt: "Cultural Night Stage" },
      { id: 2, src: "https://images.unsplash.com/photo-1765278624799-9c90305b0b7e?w=800", alt: "Dance Performance" },
      { id: 3, src: "https://images.unsplash.com/photo-1758316727379-4c995d3ae455?w=800", alt: "Audience View" },
      { id: 4, src: "https://images.unsplash.com/photo-1615097305541-786cdb65e3ae?w=800", alt: "Traditional Dance" },
      { id: 5, src: "https://images.unsplash.com/photo-1585346230722-6b9df46d0d54?w=800", alt: "Stage Lights" },
      { id: 6, src: "https://images.unsplash.com/photo-1765278624799-9c90305b0b7e?w=800", alt: "Group Performance" },
    ]
  },
  {
    eventId: 2,
    eventName: "Shiv Jayanti 2026",
    eventDate: "February 2026",
    images: [
      { id: 7, src: "https://images.unsplash.com/photo-1615097305541-786cdb65e3ae?w=800", alt: "Shiv Jayanti Celebration" },
      { id: 8, src: "https://images.unsplash.com/photo-1758316727379-4c995d3ae455?w=800", alt: "Traditional Setup" },
      { id: 9, src: "https://images.unsplash.com/photo-1585346230722-6b9df46d0d54?w=800", alt: "Cultural Program" },
      { id: 10, src: "https://images.unsplash.com/photo-1765278624799-9c90305b0b7e?w=800", alt: "Performance" },
    ]
  },
  {
    eventId: 3,
    eventName: "Diwali Festival 2025",
    eventDate: "November 2025",
    images: [
      { id: 11, src: "https://images.unsplash.com/photo-1615097305541-786cdb65e3ae?w=800", alt: "Diwali Decorations" },
      { id: 12, src: "https://images.unsplash.com/photo-1758316727379-4c995d3ae455?w=800", alt: "Rangoli Competition" },
      { id: 13, src: "https://images.unsplash.com/photo-1585346230722-6b9df46d0d54?w=800", alt: "Diya Lighting" },
      { id: 14, src: "https://images.unsplash.com/photo-1765278624799-9c90305b0b7e?w=800", alt: "Cultural Dance" },
      { id: 15, src: "https://images.unsplash.com/photo-1615097305541-786cdb65e3ae?w=800", alt: "Group Photo" },
    ]
  },
  {
    eventId: 4,
    eventName: "Fresher's Welcome 2025",
    eventDate: "August 2025",
    images: [
      { id: 16, src: "https://images.unsplash.com/photo-1758316727379-4c995d3ae455?w=800", alt: "Welcome Ceremony" },
      { id: 17, src: "https://images.unsplash.com/photo-1585346230722-6b9df46d0d54?w=800", alt: "Stage Performance" },
      { id: 18, src: "https://images.unsplash.com/photo-1765278624799-9c90305b0b7e?w=800", alt: "Fresher's Dance" },
      { id: 19, src: "https://images.unsplash.com/photo-1615097305541-786cdb65e3ae?w=800", alt: "Group Activities" },
    ]
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 text-white relative overflow-hidden">
      {/* Decorative Neon Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-10 animate-pulse" style={{ animationDuration: '3s' }}>
          <NeonIcon icon="📸" color="#06b6d4" className="text-5xl" />
        </div>
        <div className="absolute bottom-1/3 left-10 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
          <NeonIcon icon="✨" color="#fbbf24" className="text-5xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <span className="text-orange-500 text-sm uppercase tracking-widest mb-4 block">Captured Moments</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Event Gallery</h2>
            <div className="w-24 h-1 bg-orange-500"></div>
          </div>

          {/* Event-wise Gallery */}
          <div className="space-y-20">
            {galleryByEvent.map((event) => (
              <div key={event.eventId} className="space-y-6">
                {/* Event Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-zinc-800">
                  <Calendar className="text-orange-500" size={20} />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{event.eventName}</h3>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mt-1">{event.eventDate}</p>
                  </div>
                </div>

                {/* Image Grid - Google Photos style */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {event.images.map((image, index) => (
                    <div
                      key={image.id}
                      className={`group relative overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-all cursor-pointer
                        ${index === 0 && event.images.length > 3 ? 'md:col-span-2 md:row-span-2' : 'aspect-square'}`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-2 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-2xl">🔍</span>
                          </div>
                          <p className="text-white text-sm">View</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}