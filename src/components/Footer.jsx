import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040812] border-t border-white/10 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <img 
            src="https://planholidays.co.uk/public/uploads/settings/logo.jpg" 
            alt="Plan Holidays Logo" 
            className="h-10 w-auto object-contain brightness-110 mix-blend-screen mb-2"
          />
          <p className="text-xs leading-relaxed text-slate-400">
            18, BMHC, College Road, M16 8BP, Manchester.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-lg border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
            Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-lg border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
            Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-lg border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
            Twitter
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Important Links</h4>
          <a href="#" className="block text-sm hover:text-cyan-400 transition-colors">About Us</a>
          <a href="#" className="block text-sm hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="#" className="block text-sm hover:text-cyan-400 transition-colors">Terms & Conditions</a>
          <a href="#" className="block text-sm hover:text-cyan-400 transition-colors">Contact Us</a>
        </div>

        <div className="space-y-3">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Popular Destinations</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">Dubai</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Istanbul</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Antalya</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Alicante</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Barcelona</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Zanzibar</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Phuket</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Khao Lak</a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Contact</h4>
          <div className="space-y-2.5 text-sm">
            <a href="mailto:info@planholidays.co.uk" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span className="truncate">info@planholidays.co.uk</span>
            </a>
            <a href="tel:02030628927" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>0203 062 8927</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© 2026 Plan Holidays. All rights reserved.</p>
        <p className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium">Crafted with Luxury Frameworks</p>
      </div>
    </footer>
  );
}