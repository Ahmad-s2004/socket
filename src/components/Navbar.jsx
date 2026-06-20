import React, { useState, useEffect } from 'react';
import { Globe, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Debounce/Throttle lagane ke bajaye active animation performance class use karenge
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true }); // passive true se scroll smooth hota hai
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4 transform-gpu will-change-transform">
      <nav className={`max-w-7xl mx-auto rounded-2xl border border-white/10 backdrop-blur-md bg-[#060b18]/70 transition-all duration-300 ease-out overflow-hidden transform-gpu ${
        scrolled 
          ? 'shadow-[0_0_30px_rgba(6,182,212,0.15)] max-w-5xl border-cyan-500/30 bg-[#060b18]/90' 
          : 'shadow-2xl'
      }`}>
        {/* Baki ka navbar code bilkul same rahega */}
        <div className="h-20 flex items-center justify-between px-6 sm:px-8">
          <div className="flex items-center cursor-pointer group">
            <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-white/5 border border-white/10 mr-3 group-hover:border-cyan-500/50 transition-colors">
              <Globe className="w-5 h-5 text-cyan-400" /> {/* Real-time pulse animation lag hata di taake render loop na bane */}
            </div>
            <img 
              src="/src/assets/logo.jpg" 
              alt="Plan Holidays Logo" 
              className="h-9 w-auto object-contain brightness-110 mix-blend-screen"
            />
          </div>

          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-xl border border-white/5">
            <a href="#" className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400">Home</a>
            <a href="#" className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">About Us</a>
            <a href="#" className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">Destinations</a>
            <a href="#" className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">Packages</a>
            <a href="#" className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:02030628927" className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-cyan-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-cyan-400" /> 0203 062 8927
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-xs font-bold text-white rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg shadow-green-500/20">
              <span className="relative px-4 py-2 transition-all bg-[#060b18] rounded-xl">
                Connect WhatsApp
              </span>
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-400 hover:text-white rounded-xl bg-white/5 focus:outline-none">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* MOBILE DRAWER WITH CONTENT-VISIBILITY OPTIMIZATION */}
        <div 
          className={`md:hidden transition-all duration-200 ease-in-out overflow-hidden transform-gpu ${
            mobileMenuOpen ? 'max-h-[500px] border-t border-white/10 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          style={{ contentVisibility: mobileMenuOpen ? 'auto' : 'hidden' }}
        >
          <div className="bg-[#060b18]/95 px-6 py-6 space-y-3">
            <a href="#" className="block py-2.5 px-4 rounded-xl bg-white/5 text-cyan-400 font-medium">Home</a>
            <a href="#" className="block py-2.5 px-4 rounded-xl text-slate-300 hover:bg-white/5">About Us</a>
            <a href="#" className="block py-2.5 px-4 rounded-xl text-slate-300 hover:bg-white/5">Destinations</a>
            <a href="#" className="block py-2.5 px-4 rounded-xl text-slate-300 hover:bg-white/5">Multi-Centre Packages</a>
            <a href="#" className="block py-2.5 px-4 rounded-xl text-slate-300 hover:bg-white/5">Contact Us</a>
          </div>
        </div>
      </nav>
    </div>
  );
}