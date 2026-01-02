import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { NeonIcon } from './NeonIcon';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 text-white relative overflow-hidden">
      {/* Decorative Neon Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 right-20 animate-pulse" style={{ animationDuration: '3s' }}>
          <NeonIcon icon="🎸" color="#f97316" className="text-5xl" />
        </div>
        <div className="absolute bottom-20 left-20 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <NeonIcon icon="💃" color="#ec4899" className="text-5xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <span className="text-orange-500 text-sm uppercase tracking-widest mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h2>
            <div className="w-24 h-1 bg-orange-500"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div className="space-y-12">
              <p className="text-2xl text-gray-300 leading-relaxed">
                Ready to be part of something extraordinary? Reach out and let's create cultural magic together.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 border border-zinc-700 group-hover:border-orange-500 flex items-center justify-center transition-colors flex-shrink-0">
                    <Mail className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 uppercase tracking-wider text-sm mb-2">Email</h4>
                    <p className="text-xl">sanskruti@college.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 border border-zinc-700 group-hover:border-orange-500 flex items-center justify-center transition-colors flex-shrink-0">
                    <Phone className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 uppercase tracking-wider text-sm mb-2">Phone</h4>
                    <p className="text-xl">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 border border-zinc-700 group-hover:border-orange-500 flex items-center justify-center transition-colors flex-shrink-0">
                    <MapPin className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 uppercase tracking-wider text-sm mb-2">Location</h4>
                    <p className="text-xl">Cultural Committee Office<br />Main Building, 2nd Floor</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-zinc-800">
                <h4 className="text-gray-400 uppercase tracking-wider text-sm mb-4">Office Hours</h4>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-300">Saturday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 uppercase tracking-wider text-sm mb-3">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-zinc-700 focus:border-orange-500 focus:outline-none transition-colors text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 uppercase tracking-wider text-sm mb-3">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-zinc-700 focus:border-orange-500 focus:outline-none transition-colors text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-400 uppercase tracking-wider text-sm mb-3">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-zinc-700 focus:border-orange-500 focus:outline-none transition-colors text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 uppercase tracking-wider text-sm mb-3">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-zinc-700 focus:border-orange-500 focus:outline-none transition-colors text-white resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-orange-500 text-white py-4 hover:bg-orange-600 transition-all inline-flex items-center justify-center gap-3 uppercase tracking-wider mt-8"
                >
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}