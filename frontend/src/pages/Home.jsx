import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-24 pb-20 px-4 animate-[fadeIn_0.5s_ease-out] relative">
       
       {/* Background Glow */}
       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="flex flex-col items-center text-center max-w-5xl mx-auto z-10">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 mb-10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
          <span className="text-sm font-medium text-gray-300">Welcome to the future of learning</span>
        </div>
        
        {/* Main Heading & Gradient Text */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-400/80 drop-shadow-sm">
            NexusLearn
          </span>
        </h1>
        
        <p className="text-lg md:text-xl font-medium tracking-widest uppercase text-blue-200/80 mb-14 drop-shadow">
          ALL IN ONE TECH SOLUTION AT ONE PLACE
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          <Link
            to="/learning"
            className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-[17px] hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] group w-full sm:w-auto"
          >
            Start Learning 
            <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </div>
      
      {/* Bottom fade/gradient block (to simulate the white block in the reference image at the bottom) */}
       <div className="absolute left-0 right-0 bottom-0 top-auto h-[20vh] bg-white mt-32 translate-y-[20vh]"></div>
    </div>
  );
}
