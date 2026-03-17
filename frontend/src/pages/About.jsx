import { User, Phone, Info } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 animate-[fadeIn_0.5s_ease-out]">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-400">
            About NexusLearn
          </span>
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-1 gap-12">
        <div className="glass p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-500"></div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-600/20 rounded-2xl text-blue-400">
              <Info size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          </div>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            NexusLearn is a state-of-the-art e-learning platform dedicated to providing the highest quality MERN stack resources for aspiring developers. 
            We believe in learning through practice, which is why we've built a comprehensive ecosystem of tutorials and interactive Q&A.
          </p>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Our goal is to bridge the gap between theory and real-world application, empowering the next generation of full-stack engineers with tools that are both powerful and beautiful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-600/20 rounded-2xl text-indigo-400">
                <User size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Founder & Creator</h3>
            </div>
            <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">
              NEELAKSH SHARMA
            </p>
            <p className="text-gray-400">Visionary developer leading the NexusLearn initiative.</p>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600/20 rounded-2xl text-blue-400">
                <Phone size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Contact Us</h3>
            </div>
            <p className="text-3xl font-black text-white mb-2">
              9149433047
            </p>
            <p className="text-gray-400">Reach out for collaborations or support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
