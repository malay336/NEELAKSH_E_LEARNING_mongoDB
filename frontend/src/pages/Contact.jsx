import { Mail, Phone, MapPin, Send, User } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24 animate-[fadeIn_0.5s_ease-out]">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-400">
            Get In Touch
          </span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">Have questions? We're here to help you on your learning journey.</p>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <div className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all flex items-start gap-6 group">
            <div className="p-4 bg-blue-600/20 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform">
              <User size={28} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-1">Founder & Creator</h3>
              <p className="text-2xl font-black text-white">NEELAKSH SHARMA</p>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all flex items-start gap-6 group">
            <div className="p-4 bg-indigo-600/20 rounded-2xl text-indigo-400 group-hover:scale-110 transition-transform">
              <Phone size={28} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-1">Phone Number</h3>
              <p className="text-2xl font-black text-white">9149433047</p>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all flex items-start gap-6 group">
            <div className="p-4 bg-blue-600/20 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-1">Email</h3>
              <p className="text-2xl font-black text-white">contact@nexuslearn.ai</p>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all flex items-start gap-6 group">
            <div className="p-4 bg-indigo-600/20 rounded-2xl text-indigo-400 group-hover:scale-110 transition-transform">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-1">Location</h3>
              <p className="text-2xl font-black text-white">JAMMU, INDIA</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
           <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
           
           <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>
           
           <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none text-white transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none text-white transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none text-white transition-colors" placeholder="How can we help?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows="4" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none text-white transition-colors" placeholder="Your message..."></textarea>
              </div>
              
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 group">
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
           </form>
        </div>
      </div>
    </div>
  );
}
