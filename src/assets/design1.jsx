// import React, { useState } from 'react';
// import { 
//   Compass, MapPin, Calendar, Users, ShieldCheck, 
//   Sparkles, Headphones, Clock, ChevronRight, Menu, X, ArrowUpRight 
// } from 'lucide-react';

// export default function App() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const destinations = [
//     {
//       id: 1,
//       title: "Dubai & Maldives Luxury Twin",
//       location: "Dubai + Maldives",
//       duration: "10 Days",
//       price: "1,499",
//       image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
//       tag: "Trending"
//     },
//     {
//       id: 2,
//       title: "Thailand Island Hopping Adventure",
//       location: "Khao Lak + Phuket",
//       duration: "12 Days",
//       price: "1,399",
//       image: "https://images.unsplash.com/photo-1528181304800-2f5353a98ef3?auto=format&fit=crop&w=800&q=80",
//       tag: "Best Seller"
//     },
//     {
//       id: 3,
//       title: "Two Worlds: Istanbul & Antalya",
//       location: "Turkey",
//       duration: "7 Days",
//       price: "789",
//       image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
//       tag: "Cultural"
//     }
//   ];

//   const faqs = [
//     { q: "How do flexible payment plans work?", a: "You can book your dream holiday today with a low deposit starting from £199pp and spread the remaining cost over interest-free monthly installments." },
//     { q: "Are flights and luxury hotels included?", a: "Yes, all our multi-centre packages include premium handpicked flights, top-rated hotels, and seamless transfers between destinations." },
//     { q: "Can I customize the packages?", a: "Absolutely! Every itinerary can be tailored perfectly according to your dates, choice of hotels, and specific travel preferences." }
//   ];

//   return (
//     <div className="min-h-screen bg-[#060b18] text-white font-sans antialiased overflow-x-hidden">
      
//       {/* HEADER / NAV */}
//       <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#060b18]/80 border-b border-white/10 transition-all">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
//           <div className="flex items-center gap-2 cursor-pointer">
//             <div className="p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20">
//               <Compass className="w-6 h-6 text-white animate-spin-slow" />
//             </div>
//             <span className="text-xl font-black tracking-wider bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
//               PLAN<span className="text-cyan-400">HOLIDAYS</span>
//             </span>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
//             <a href="#" className="hover:text-cyan-400 transition-colors">Home</a>
//             <a href="#" className="hover:text-cyan-400 transition-colors">Destinations</a>
//             <a href="#" className="hover:text-cyan-400 transition-colors">Packages</a>
//             <a href="#" className="hover:text-cyan-400 transition-colors">About Us</a>
//           </div>

//           <div className="hidden md:flex items-center gap-4">
//             <a href="tel:02030628927" className="text-sm font-semibold hover:text-cyan-400 transition-colors">0203 062 8927</a>
//             <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-6 py-2.5 rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-cyan-500/10">
//               Get Custom Quote
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-400 hover:text-white">
//             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation Dropdown */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-[#0a1124] border-b border-white/10 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
//             <a href="#" className="block py-2 text-slate-300 hover:text-cyan-400">Home</a>
//             <a href="#" className="block py-2 text-slate-300 hover:text-cyan-400">Destinations</a>
//             <a href="#" className="block py-2 text-slate-300 hover:text-cyan-400">Packages</a>
//             <a href="#" className="block py-2 text-slate-300 hover:text-cyan-400">About Us</a>
//             <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
//               <a href="tel:02030628927" className="text-center py-2 font-semibold">0203 062 8927</a>
//               <button className="w-full bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl">Get Custom Quote</button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* HERO SECTION - Premium Split Screen Design */}
//       <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16 pb-24 grid lg:grid-cols-12 gap-12 items-center">
//         <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
//             <Sparkles className="w-3.5 h-3.5" /> Luxury Multi-Centre Gateways
//           </div>
//           <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none">
//             Explore <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Bangkok</span> & <br />
//             <span className="text-white">Koh Samui Together</span>
//           </h1>
//           <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
//             Stop fixing standard templates. Experience multi-destination luxury travel designed seamlessly around your comfort. Handpicked flights, exquisite stays.
//           </p>
          
//           <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
//             <div className="flex -space-x-3">
//               {[1,2,3,4].map((i) => (
//                 <div key={i} className="w-9 h-9 rounded-full border-2 border-[#060b18] bg-slate-700 overflow-hidden">
//                   <img src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80&index=${i}`} alt="User" />
//                 </div>
//               ))}
//             </div>
//             <p className="text-sm text-slate-400"><strong className="text-white">7M+ Wanderers</strong> trusted our custom curation plans.</p>
//           </div>
//         </div>

//         {/* Dynamic Interactive Booking Glass Panel */}
//         <div className="lg:col-span-6 relative">
//           <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
//           <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
//             <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
//               Tailor Your Next Escape
//             </h3>
//             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div className="space-y-1.5">
//                   <label className="text-xs font-semibold text-slate-400">Where to?</label>
//                   <div className="relative">
//                     <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-cyan-400" />
//                     <input type="text" placeholder="e.g. Dubai & Maldives" className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors" />
//                   </div>
//                 </div>
//                 <div className="space-y-1.5">
//                   <label className="text-xs font-semibold text-slate-400">Travel Date</label>
//                   <div className="relative">
//                     <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-cyan-400" />
//                     <input type="date" className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors" />
//                   </div>
//                 </div>
//               </div>

//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div className="space-y-1.5">
//                   <label className="text-xs font-semibold text-slate-400">Total Nights</label>
//                   <div className="relative">
//                     <Clock className="absolute left-3 top-3.5 w-4 h-4 text-cyan-400" />
//                     <input type="number" placeholder="7 Nights" className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors" />
//                   </div>
//                 </div>
//                 <div className="space-y-1.5">
//                   <label className="text-xs font-semibold text-slate-400">Travelers</label>
//                   <div className="relative">
//                     <Users className="absolute left-3 top-3.5 w-4 h-4 text-cyan-400" />
//                     <select className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none">
//                       <option>2 Adults, 0 Children</option>
//                       <option>1 Adult</option>
//                       <option>Family Package</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-1.5">
//                 <label className="text-xs font-semibold text-slate-400">Your Email Address</label>
//                 <input type="email" placeholder="name@domain.com" className="w-full bg-slate-900/60 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors" />
//               </div>

//               <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-center tracking-wide mt-2">
//                 Get Instant Quote Plan
//               </button>
//             </form>
//           </div>
//         </div>
//       </header>

//       {/* POPULAR MULTI-CENTRE DESTINATIONS */}
//       <section className="bg-[#0a1124] py-24 border-y border-white/5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
//             <div>
//               <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Popular Multi-Centre Packages</h2>
//               <p className="text-slate-400 mt-2">Perfectly matched twin-destinations handling dual transits flawlessly.</p>
//             </div>
//             <button className="group inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors whitespace-nowrap">
//               Explore All Destinations 
//               <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {destinations.map((dest) => (
//               <div key={dest.id} className="group bg-[#060b18] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full shadow-xl">
//                 <div className="relative aspect-[4/3] overflow-hidden">
//                   <img src={dest.image} alt={dest.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                   <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-xs font-bold px-3 py-1 rounded-full border border-white/10">
//                     {dest.tag}
//                   </span>
//                 </div>
//                 <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
//                   <div className="space-y-2">
//                     <div className="flex items-center gap-4 text-xs text-slate-400">
//                       <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {dest.location}</span>
//                       <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-cyan-400" /> {dest.duration}</span>
//                     </div>
//                     <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors line-clamp-1">{dest.title}</h3>
//                   </div>
                  
//                   <div className="flex items-center justify-between pt-4 border-t border-white/5">
//                     <div>
//                       <span className="text-xs text-slate-500 block">Fr. Per Person</span>
//                       <span className="text-xl font-black text-white">£{dest.price}</span>
//                     </div>
//                     <button className="inline-flex items-center gap-1 bg-white/5 hover:bg-cyan-400 hover:text-slate-950 px-4 py-2 rounded-xl text-sm font-semibold transition-all">
//                       View Details <ArrowUpRight className="w-3.5 h-3.5" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHY TRUST US - Bento Grid Style Layout */}
//       <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Why Smart Travelers Choose Us</h2>
//           <p className="text-slate-400 mt-2">Providing unparalleled custom logistics and values without hidden terms.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Bento Box 1 */}
//           <div className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-8">
//             <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl w-fit text-cyan-400">
//               <ShieldCheck className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-2">Loved By Millions</h3>
//               <p className="text-slate-400 text-sm leading-relaxed">Join millions of satisfied explorers who trust our protective, custom flight-routing itineraries globally.</p>
//             </div>
//           </div>

//           {/* Bento Box 2 */}
//           <div className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-8 md:scale-105 bg-[#0a1124]/50">
//             <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl w-fit text-blue-400">
//               <Sparkles className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-2 text-cyan-400">Flexible Payment Plans</h3>
//               <p className="text-slate-300 text-sm leading-relaxed">Secure premium rates instantly at low booking fees of £199pp. Zero compound interest charges.</p>
//             </div>
//           </div>

//           {/* Bento Box 3 */}
//           <div className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-8">
//             <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl w-fit text-purple-400">
//               <Headphones className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-2">24/7 Human Concierge</h3>
//               <p className="text-slate-400 text-sm leading-relaxed">No automated robotic dynamic menus. Live operational real-time dynamic assistants handling transit edits seamlessly.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQS SECTION */}
//       <section className="bg-[#0a1124] py-24 border-t border-white/5">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-center mb-12">Frequently Asked Inquiries</h2>
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div key={index} className="bg-[#060b18] border border-white/5 rounded-xl overflow-hidden transition-colors">
//                 <button 
//                   onClick={() => setActiveFaq(activeFaq === index ? null : index)}
//                   className="w-full px-6 py-4 text-left font-semibold flex items-center justify-between hover:text-cyan-400 transition-colors"
//                 >
//                   <span>{faq.q}</span>
//                   <span className="text-xl text-cyan-400">{activeFaq === index ? '−' : '+'}</span>
//                 </button>
//                 {activeFaq === index && (
//                   <div className="px-6 pb-5 text-sm text-slate-400 border-t border-white/5 pt-3 animate-fadeIn">
//                     {faq.a}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-[#040812] border-t border-white/10 text-xs sm:text-sm text-slate-500 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
//           <div className="col-span-2 space-y-4">
//             <div className="flex items-center gap-2">
//               <div className="p-1.5 bg-cyan-500 rounded-lg">
//                 <Compass className="w-4 h-4 text-slate-950" />
//               </div>
//               <span className="font-bold text-white tracking-wider">PLAN HOLIDAYS</span>
//             </div>
//             <p className="text-slate-400 max-w-sm text-xs leading-relaxed">
//               18, BMHC, College Road, M16 8BP, Manchester. Regulated agency offering customized dual destination packages seamlessly.
//             </p>
//           </div>
//           <div className="space-y-2">
//             <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Company Links</h4>
//             <a href="#" className="block hover:text-white transition-colors">About Us</a>
//             <a href="#" className="block hover:text-white transition-colors">Privacy Shield Policy</a>
//             <a href="#" className="block hover:text-white transition-colors">Terms & Service Clauses</a>
//           </div>
//           <div className="space-y-2">
//             <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Destinations</h4>
//             <a href="#" className="block hover:text-white transition-colors">Dubai & Maldives</a>
//             <a href="#" className="block hover:text-white transition-colors">Thailand & Phuket</a>
//             <a href="#" className="block hover:text-white transition-colors">Istanbul Escapes</a>
//           </div>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-xs">
//           <p>© 2026 Plan Holidays. Developed as premium customizable UI/UX pitch prototype.</p>
//           <p className="text-slate-400">Hotline: info@planholidays.co.uk</p>
//         </div>
//       </footer>
//     </div>
//   );
// }