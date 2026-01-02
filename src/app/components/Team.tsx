import { Mail, Linkedin } from 'lucide-react';
import { NeonIcon } from './NeonIcon';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rajesh Shinde",
    role: "President",
    department: "Computer Engineering"
  },
  {
    id: 2,
    name: "Priya Deshmukh",
    role: "Vice President",
    department: "Electronics"
  },
  {
    id: 3,
    name: "Amit Patil",
    role: "Event Coordinator",
    department: "Mechanical"
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    role: "Cultural Secretary",
    department: "Civil"
  },
  {
    id: 5,
    name: "Rohan Jadhav",
    role: "Treasurer",
    department: "IT"
  },
  {
    id: 6,
    name: "Ananya Marathe",
    role: "Public Relations",
    department: "E&TC"
  }
];

export function Team() {
  return (
    <section id="team" className="py-32 text-white relative overflow-hidden">
      {/* Decorative Neon Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-1/3 animate-pulse" style={{ animationDuration: '3.5s' }}>
          <NeonIcon icon="🎭" color="#3b82f6" className="text-4xl" />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <NeonIcon icon="🪘" color="#eab308" className="text-4xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <span className="text-orange-500 text-sm uppercase tracking-widest mb-4 block">The People</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Our Team</h2>
            <div className="w-24 h-1 bg-orange-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group bg-zinc-900 border border-zinc-800 p-8 hover:border-orange-500/50 transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-4">
                    <span className="text-2xl text-orange-500">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl mb-2">{member.name}</h3>
                  <p className="text-orange-500 uppercase tracking-wider text-sm mb-1">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.department}</p>
                </div>

                <div className="flex gap-3">
                  <button className="w-10 h-10 border border-zinc-700 hover:border-orange-500 flex items-center justify-center transition-colors">
                    <Mail size={16} className="text-gray-400" />
                  </button>
                  <button className="w-10 h-10 border border-zinc-700 hover:border-orange-500 flex items-center justify-center transition-colors">
                    <Linkedin size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}