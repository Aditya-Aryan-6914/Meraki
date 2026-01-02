import { Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12 max-w-7xl mx-auto">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">⚡</div>
              <h3 className="text-2xl font-bold tracking-tight">SANSKRUTI</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Reimagining Maratha heritage through contemporary cultural expression. 
              Join us in celebrating tradition with a modern twist.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 border border-zinc-700 hover:border-orange-500 hover:bg-orange-500/10 flex items-center justify-center transition-all">
                <Instagram size={18} />
              </button>
              <button className="w-10 h-10 border border-zinc-700 hover:border-orange-500 hover:bg-orange-500/10 flex items-center justify-center transition-all">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 border border-zinc-700 hover:border-orange-500 hover:bg-orange-500/10 flex items-center justify-center transition-all">
                <Youtube size={18} />
              </button>
              <button className="w-10 h-10 border border-zinc-700 hover:border-orange-500 hover:bg-orange-500/10 flex items-center justify-center transition-all">
                <Linkedin size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-gray-400">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Events', 'Gallery', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-gray-400">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>sanskruti@college.edu</li>
              <li>+91 98765 43210</li>
              <li className="leading-relaxed">Main Building<br />2nd Floor</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500">
              © 2026 Sanskruti Cultural Committee. All rights reserved.
            </p>
            <div className="flex gap-8">
              <button className="text-gray-500 hover:text-white transition-colors">
                Privacy
              </button>
              <button className="text-gray-500 hover:text-white transition-colors">
                Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}