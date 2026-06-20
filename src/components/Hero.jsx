import React from 'react';
import { Sparkles, MapPin, Calendar, Clock, Users } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-24 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Luxury Multi-Centre Gateways
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-white">
          Explore <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Bangkok</span> & <br />
          <span>Koh Samui Together</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
          Stop dealing with rigid booking layouts. Experience customized multi-destination luxury travel built completely around your comfort parameter metrics.
        </p>
      </div>

      {/* Dynamic Booking Panel with GPU acceleration layer */}
      <div className="lg:col-span-6 relative transform-gpu">
        <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl opacity-40 mix-blend-screen pointer-events-none blur-xl" />
        <div className="bg-[#0b1224]/90 border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-md">
          <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            Tailor Your Next Escape
          </h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">Destination *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-cyan-400" />
                  <input type="text" required placeholder="e.g. Dubai & Maldives" className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">Travel Date *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-cyan-400" />
                  <input type="date" required className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors" />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">Total Nights *</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3.5 w-4 h-4 text-cyan-400" />
                  <input type="number" required placeholder="7 Nights" className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">Contact No *</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3.5 w-4 h-4 text-cyan-400" />
                  <input type="tel" required placeholder="Contact Number" className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors" />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">Your Email *</label>
              <input type="email" required placeholder="name@domain.com" className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors" />
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold py-3.5 rounded-xl transition-transform active:scale-[0.99] text-center tracking-wide">
              Get A Quote
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}


// import React from 'react';
// import { Sparkles, MapPin, Calendar, Clock, Users } from 'lucide-react';

// export default function Hero() {
//   return (
//     <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-24 grid lg:grid-cols-12 gap-12 items-center">
//       <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
//         <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
//           <Sparkles className="w-3.5 h-3.5" /> Luxury Multi-Centre Gateways
//         </div>
//         <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none">
//           Explore <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Bangkok</span> & <br />
//           <span className="text-white">Koh Samui Together</span>
//         </h1>
//         <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
//           Stop dealing with rigid booking layouts. Experience customized multi-destination luxury travel built completely around your comfort parameter metrics.
//         </p>
        
//         <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
//           <div className="flex -space-x-3">
//             {[1, 2, 3, 4].map((i) => (
//               <div className="w-9 h-9 rounded-full border-2 border-[#060b18] bg-slate-700 overflow-hidden" key={i}>
//                 <img src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80`} alt="User Feedback" />
//               </div>
//             ))}
//           </div>
//           <p className="text-sm text-slate-400"><strong className="text-white">7M+ Travelers</strong> trusted our custom curation plans.</p>
//         </div>
//       </div>

//       {/* Dynamic Booking Panel */}
//       <div className="lg:col-span-6 relative">
//         <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
//         <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
//           <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
//             Tailor Your Next Escape
//           </h3>
//           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//             <div className="grid sm:grid-cols-2 gap-4">
//               <div className="space-y-1.5">
//                 <label className="text-xs font-semibold text-slate-400">Destination *</label>
//                 <div className="relative">
//                   <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-cyan-400" />
//                   <input type="text" required placeholder="e.g. Dubai & Maldives" className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors" />
//                 </div>
//               </div>
//               <div className="space-y-1.5">
//                 <label className="text-xs font-semibold text-slate-400">Travel Date *</label>
//                 <div className="relative">
//                   <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-cyan-400" />
//                   <input type="date" required className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors" />
//                 </div>
//               </div>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-4">
//               <div className="space-y-1.5">
//                 <label className="text-xs font-semibold text-slate-400">Total Nights *</label>
//                 <div className="relative">
//                   <Clock className="absolute left-3 top-3.5 w-4 h-4 text-cyan-400" />
//                   <input type="number" required placeholder="7 Nights" className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors" />
//                 </div>
//               </div>
//               <div className="space-y-1.5">
//                 <label className="text-xs font-semibold text-slate-400">Contact No *</label>
//                 <div className="relative">
//                   <Users className="absolute left-3 top-3.5 w-4 h-4 text-cyan-400" />
//                   <input type="tel" required placeholder="Contact Number" className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors" />
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-1.5">
//               <label className="text-xs font-semibold text-slate-400">Your Email *</label>
//               <input type="email" required placeholder="name@domain.com" className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors" />
//             </div>

//             <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-center tracking-wide">
//               Get A Quote
//             </button>
//           </form>
//         </div>
//       </div>
//     </header>
//   );
// }