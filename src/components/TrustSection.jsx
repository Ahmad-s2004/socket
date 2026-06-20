import React from 'react';
import { ShieldCheck, Sparkles, Headphones } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Why Trust Us with Holidays</h2>
        <p className="text-slate-400 mt-2">Explore the best travel themes available for you, have a best travel experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
          <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl w-fit text-cyan-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Loved by millions</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Come hang out with the 7 million folks who've vacationed with us!</p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6 bg-[#0a1124]/50">
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl w-fit text-blue-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Spread the cost</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Low deposits from £199pp, with flexible payment plans.</p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
          <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl w-fit text-purple-400">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">24/7 Customer Support</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Support is always available on your journey without static bot layers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}