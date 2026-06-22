import React, { useState, useEffect } from 'react';
import { Globe, Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <nav className={`max-w-7xl mx-auto rounded-2xl border border-slate-200/80 backdrop-blur-md bg-white/80 transition-all duration-300 ease-out overflow-hidden ${
          scrolled ? 'shadow-[0_10px_30px_rgba(11,53,158,0.1)] max-w-6xl border-blue-600/20 bg-white/95' : 'shadow-lg'
        }`}>
          <div className="h-20 flex items-center justify-between px-6 sm:px-8">
            <div className="flex items-center cursor-pointer group gap-3">
              {/* Perfect clean frame for logo.jpg */}
              <div className="bg-white px-2 py-1 rounded-xl flex items-center justify-center">
                <img 
                  src="https://planholidays.co.uk/public/uploads/settings/logo.jpg" 
                  alt="Plan Holidays Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200/60">
              <Link to="/" className="px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-sm">Home</Link>
              <Link to="/destination" className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 hover:text-blue-700 hover:bg-white transition-all">Destinations</Link>
              <Link to="/payment" className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 hover:text-blue-700 hover:bg-white transition-all">E Payment</Link>
              <Link to="/process" className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 hover:text-blue-700 hover:bg-white transition-all">How It Works</Link>
              <Link to="/faq" className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 hover:text-blue-700 hover:bg-white transition-all">FAQs</Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:02030628927" className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors bg-slate-100 px-4 py-2.5 rounded-xl border border-slate-200">
                <Phone className="w-3.5 h-3.5 text-blue-600" /> 0203 062 8927
              </a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/10 hover:scale-105 transition-transform">
                Connect WhatsApp
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-xl bg-slate-100">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[500px] border-t border-slate-200 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
            <div className="bg-white px-6 py-6 space-y-3">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-xl bg-blue-600 text-white font-bold">Home</Link>
              <Link to="/destination" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-xl text-slate-700 hover:bg-slate-50">Destinations</Link>
              <Link to="/payment" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-xl text-slate-700 hover:bg-slate-50">E Payment</Link>
              <Link to="/process" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-xl text-slate-700 hover:bg-slate-50">How It Works</Link>
              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <a href="tel:02030628927" className="flex items-center justify-center gap-2 py-3 font-bold bg-slate-100 rounded-xl"><Phone className="w-4 h-4 text-blue-600" /> 0203 062 8927</a>
              </div>
            </div>
          </div>
        </nav>
    </div>
  );
}