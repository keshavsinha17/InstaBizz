import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full bg-[#1a1424]/80 backdrop-blur-md z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Instagram className="w-6 h-6 text-[#a855f7]" />
            <span className="text-white font-bold text-xl">InstaBiz</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Features', 'How It Works', 'Pricing', 'Testimonials', 'Compare', 'FAQ'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <button className="px-6 py-2 bg-[#a855f7] text-white rounded-full font-semibold hover:bg-[#9333ea] transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;