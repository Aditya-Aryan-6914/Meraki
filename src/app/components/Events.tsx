import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NeonIcon } from './NeonIcon';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Shiv Jayanti 2026",
    date: "Feb 19, 2026",
    time: "10:00 AM",
    location: "Main Auditorium",
    description: "Celebrating the legacy of Chhatrapati Shivaji Maharaj with cultural performances, traditional music, and inspiring talks.",
    image: "https://images.unsplash.com/photo-1615097305541-786cdb65e3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmRpYW4lMjBmZXN0aXZhbHxlbnwxfHx8fDE3NjczNzM4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Festival"
  },
  {
    id: 2,
    title: "Contemporary Fusion Workshop",
    date: "Mar 5, 2026",
    time: "2:00 PM",
    location: "Dance Studio",
    description: "Learn the fusion of classical Lavani with contemporary dance forms. Led by renowned choreographers.",
    image: "https://images.unsplash.com/photo-1765278624799-9c90305b0b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBkYW5jZSUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc2NzM3Mzg3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Workshop"
  },
  {
    id: 3,
    title: "Cultural Nights",
    date: "Mar 15, 2026",
    time: "6:00 PM",
    location: "Open Amphitheater",
    description: "An evening of performances showcasing the best of Marathi culture meets modern music and art.",
    image: "https://images.unsplash.com/photo-1585346230722-6b9df46d0d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmVzdCUyMHN0YWdlfGVufDF8fHx8MTc2NzM3Mzg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Performance"
  }
];

export function Events() {
  return (
    <section id="events" className="py-32 text-white relative overflow-hidden">
      {/* Decorative Neon Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-1/4 animate-pulse" style={{ animationDuration: '4s' }}>
          <NeonIcon icon="🎤" color="#f43f5e" className="text-5xl" />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
          <NeonIcon icon="🎨" color="#8b5cf6" className="text-5xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <span className="text-orange-500 text-sm uppercase tracking-widest mb-4 block">What's Happening</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Upcoming Events</h2>
            <div className="w-24 h-1 bg-orange-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="group bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-orange-500/50 transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 text-xs uppercase tracking-wider">
                    {event.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl mb-4">{event.title}</h3>
                  
                  <div className="space-y-2 mb-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-orange-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-orange-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-orange-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <button className="group/btn inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors">
                    <span className="uppercase tracking-wider text-sm">Register</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="group px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all inline-flex items-center gap-3 uppercase tracking-wider">
              <span>View All Events</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}