import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Learning', path: '/learning' },
    { name: 'Practice Questions', path: '/questions' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path) => path === location.pathname;

  return (
    <nav className="nav-glass sticky top-0 z-50 w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xl">
                 N
             </div>
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <span className="font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-400">
                NexusLearn
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:block flex-1">
            <div className="flex items-center justify-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-gray-300 hover:text-white transition-colors">
                <Search size={20} />
            </button>
            <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-600 hover:border-gray-400 text-gray-200 transition-colors">
                <User size={18} />
                <span className="text-sm font-medium">Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
             <button className="text-gray-300 mr-4">
                <Search size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#020617] border-t border-gray-800 absolute w-full left-0 fade-in z-50 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-600/10 text-blue-400'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <div className="pt-4 border-t border-gray-800">
                 <button className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full border border-gray-600 hover:border-gray-400 text-gray-200 transition-colors">
                    <User size={18} />
                    <span className="font-medium">Login</span>
                </button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
