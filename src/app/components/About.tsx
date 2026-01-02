import { ArrowRight } from 'lucide-react';
import { NeonIcon } from './NeonIcon';

export function About() {
  return (
    <section id="about" className="py-32 text-white relative overflow-hidden">
      {/* Decorative Neon Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 right-10 animate-pulse" style={{ animationDuration: '3s' }}>
          <NeonIcon icon="🎵" color="#a855f7" className="text-4xl" />
        </div>
        <div className="absolute bottom-20 left-10 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <NeonIcon icon="📖" color="#14b8a6" className="text-4xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <span className="text-orange-500 text-sm uppercase tracking-widest mb-4 block">Who We Are</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">About Sanskruti</h2>
            <div className="w-24 h-1 bg-orange-500"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <p className="text-2xl text-gray-300 leading-relaxed">
                We're not just preserving culture—we're reimagining it for the next generation.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Sanskruti is where the rich heritage of Maharashtra meets contemporary expression. 
                Through events, workshops, and performances, we create spaces where students can 
                explore and celebrate cultural identity in ways that resonate with today's world.
              </p>

              <div className="pt-8">
                <button className="group inline-flex items-center gap-3 text-orange-500 hover:text-orange-400 transition-colors">
                  <span className="uppercase tracking-wider">Learn More</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-zinc-900/50 backdrop-blur-sm p-8 border border-zinc-800 hover:border-orange-500/50 transition-all">
                  <div className="text-5xl text-orange-500 mb-4">50+</div>
                  <p className="text-gray-400 uppercase tracking-wider text-sm">Events Annually</p>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm p-8 border border-zinc-800 hover:border-orange-500/50 transition-all">
                  <div className="text-5xl text-orange-500 mb-4">10+</div>
                  <p className="text-gray-400 uppercase tracking-wider text-sm">Years Legacy</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-zinc-900/50 backdrop-blur-sm p-8 border border-zinc-800 hover:border-orange-500/50 transition-all">
                  <div className="text-5xl text-orange-500 mb-4">500+</div>
                  <p className="text-gray-400 uppercase tracking-wider text-sm">Active Members</p>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm p-8 border border-zinc-800 hover:border-orange-500/50 transition-all">
                  <div className="text-5xl text-orange-500 mb-4">25+</div>
                  <p className="text-gray-400 uppercase tracking-wider text-sm">Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}