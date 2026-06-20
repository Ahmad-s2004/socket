import React from 'react';
import { MapPin, Clock, ArrowUpRight, ChevronRight } from 'lucide-react';

export default function Destinations() {
  const destinationsList = [
    {
      id: 1,
      title: "Dubai & Maldives Luxury Twin",
      location: "Dubai + Maldives",
      duration: "10 Days",
      price: "1,499",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
      tag: "Trending"
    },
    {
      id: 2,
      title: "Thailand Island Hopping Adventure",
      location: "Khao Lak + Phuket",
      duration: "12 Days",
      price: "1,399",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
      tag: "Best Seller"
    },
    {
      id: 3,
      title: "Two Worlds: Istanbul & Antalya",
      location: "Turkey",
      duration: "7 Days",
      price: "789",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
      tag: "Cultural"
    }
  ];

  return (
    <section className="bg-[#0a1124] py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Popular Multi-Centre Destinations</h2>
            <p className="text-slate-400 mt-2">Explore targeted double transit packages handling logistics flawlessly.</p>
          </div>
          <button className="group inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors whitespace-nowrap">
            Explore All Destinations 
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsList.map((dest) => (
            <div key={dest.id} className="group bg-[#060b18] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={dest.image} alt={dest.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                  {dest.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {dest.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-cyan-400" /> {dest.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors line-clamp-1">{dest.title}</h3>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <span className="text-xs text-slate-500 block">Fr. Per Person</span>
                    <span className="text-xl font-black text-white">£{dest.price}</span>
                  </div>
                  <button className="inline-flex items-center gap-1 bg-white/5 hover:bg-cyan-400 hover:text-slate-950 px-4 py-2 rounded-xl text-sm font-semibold transition-all">
                    View Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}