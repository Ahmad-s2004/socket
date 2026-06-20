import React from 'react';
import { Heart, Users, Compass, Umbrella } from 'lucide-react';

export default function TravelThemes() {
  const themes = [
    { title: "Honeymoon & Romance", desc: "Curated intimate twin-centres with private pool villas.", icon: Heart, color: "text-pink-400", bg: "from-pink-500/10" },
    { title: "Family Luxury Breaks", desc: "Multi-room generational escapes with premium transfers.", icon: Users, color: "text-cyan-400", bg: "from-cyan-500/10" },
    { title: "Bespoke Multi-Centres", desc: "Complex cross-border itineraries handled flawlessly.", icon: Compass, color: "text-amber-400", bg: "from-amber-500/10" },
    { title: "Elite Beach Resorts", desc: "Handpicked 5-star ultra-all-inclusive island properties.", icon: Umbrella, color: "text-emerald-400", bg: "from-emerald-500/10" }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Travel Styles Tailored For You</h2>
        <p className="text-slate-400 mt-2">Select a premium theme configuration that defines your travel parameters.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {themes.map((theme, idx) => {
          const Icon = theme.icon;
          return (
            <div key={idx} className="group bg-gradient-to-b from-white/5 to-transparent p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 transform-gpu hover:-translate-y-1">
              <div className={`p-3 bg-gradient-to-br ${theme.bg} to-transparent border border-white/10 rounded-xl w-fit ${theme.color} mb-6`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">{theme.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{theme.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}