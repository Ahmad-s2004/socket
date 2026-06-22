import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="bg-white px-3 py-1.5 rounded-xl inline-block border border-slate-200">
              <img 
                src="https://planholidays.co.uk/public/uploads/settings/logo.jpg" 
                alt="Plan Holidays Logo" 
                className="h-7 w-auto object-contain"
              />
            </div>
            <p className="text-xs leading-relaxed text-slate-400 font-medium">
              18, BMHC, College Road, M16 8BP, Manchester, United Kingdom.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* <a href="#" className="p-2 bg-white/5 rounded-xl text-slate-400 hover:text-blue-400 transition-all"><Facebook className="w-4 h-4" /></a> */}
              {/* <a href="#" className="p-2 bg-white/5 rounded-xl text-slate-400 hover:text-blue-400 transition-all"><Instagram className="w-4 h-4" /></a> */}
              {/* <a href="#" className="p-2 bg-white/5 rounded-xl text-slate-400 hover:text-blue-400 transition-all"><Twitter className="w-4 h-4" /></a> */}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-2 text-blue-400">Company Matrix</h4>
            <a href="#" className="block text-sm hover:text-white transition-colors">About Frameworks</a>
            <a href="#" className="block text-sm hover:text-white transition-colors">Privacy Protections</a>
            <a href="#" className="block text-sm hover:text-white transition-colors">Terms of Operations</a>
            <a href="#" className="block text-sm hover:text-white transition-colors">Contact Support</a>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-2 text-blue-400">Hot Selling Twin Nodes</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <a href="#" className="hover:text-white transition-colors">Bangkok</a>
              <a href="#" className="hover:text-white transition-colors">Koh Samui</a>
              <a href="#" className="hover:text-white transition-colors">Maldives</a>
              <a href="#" className="hover:text-white transition-colors">Dubai</a>
              <a href="#" className="hover:text-white transition-colors">Bali</a>
              <a href="#" className="hover:text-white transition-colors">Istanbul</a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-2 text-blue-400">Direct Inquiries</h4>
            <div className="space-y-2.5 text-sm">
              <a href="mailto:info@planholidays.co.uk" className="flex items-center gap-2 hover:text-white transition-colors truncate">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>info@planholidays.co.uk</span>
              </a>
              <a href="tel:02030628927" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>0203 062 8927</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-12 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-bold">
          <p>© 2026 Plan Holidays. Protected by ATOL Architecture. All rights reserved.</p>
          <p className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent tracking-widest">BRAND LIGHT v3.2</p>
        </div>
      </footer>
  );
}