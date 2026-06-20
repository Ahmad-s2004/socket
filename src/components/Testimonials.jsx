import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: "Ahmad Amman", trip: "Dubai & Maldives Twin", text: "The multi-centre transit logistics were managed flawlessly. The transition from Dubai city life straight into a Maldives private overwater villa felt native and unfragmented." },
    { name: "Sarah Jenkins", trip: "Thailand Luxury Tour", text: "No rigid structural blocks. I customized my Phuket and Khao Lak dates completely on the fly. Elite tier hotels and immediate WhatsApp support line." }
  ];

  return (
    <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-1 text-emerald-400 mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Verified Guest Experiences</h2>
        <p className="text-slate-400 text-sm mt-2">Rated Exceptional on luxury travel index tracking layers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-[#0a1124] border border-white/5 p-8 rounded-2xl flex flex-col justify-between space-y-6 transform-gpu">
            <p className="text-slate-300 text-sm leading-relaxed italic">"{rev.text}"</p>
            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <div>
                <h4 className="text-white font-bold text-sm">{rev.name}</h4>
                <span className="text-xs text-cyan-400">{rev.trip}</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}