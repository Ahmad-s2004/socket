import React, { useState, useEffect } from 'react';
import { 
  Globe, Phone, Menu, X, Sparkles, MapPin, 
  Calendar, Clock, Users, Heart, Compass, 
  Umbrella, ArrowUpRight, ChevronRight, Star, Mail, PlaneTakeoff, Shield
} from 'lucide-react';

export default function App() {
  // Navigation & UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Data Arrays synced with logo.jpg styling
  const travelThemes = [
    { title: "Honeymoon Escape", icon: Heart, img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80", tag: "Romantic" },
    { title: "Family Adventures", icon: Users, img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80", tag: "Generational" },
    { title: "Bespoke Multi-Centre", icon: Compass, img: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=600&q=80", tag: "Elite Logistics" },
    { title: "Ultra Beach Resorts", icon: Umbrella, img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80", tag: "All-Inclusive" }
  ];

  const mainPackages = [
    {
      id: 1,
      title: "Bangkok & Koh Samui Dual Paradise",
      location: "Thailand Twin-Centre",
      duration: "12 Nights",
      price: "1,249",
      img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
      badge: "Most Popular",
      highlights: ["5★ Luxury Resorts", "Internal Flights Included", "Private Beach Dinner"]
    },
    {
      id: 2,
      title: "Dubai Skyscrapers & Maldives Blue Lagoons",
      location: "UAE & Indian Ocean",
      duration: "10 Nights",
      price: "1,699",
      img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
      badge: "Ultra Luxury",
      highlights: ["Desert Safari Tour", "Overwater Pool Villa", "Seamless Airport Transfers"]
    },
    {
      id: 3,
      title: "Ancient Istanbul & Turquoise Antalya Coast",
      location: "Turkey Discovery",
      duration: "9 Nights",
      price: "849",
      img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
      badge: "Best Cultural Value",
      highlights: ["Bosphorus Cruise", "All-Inclusive Beach Stay", "Guided Heritage Walk"]
    },
    {
      id: 4,
      title: "Ultimate Bali Rainforest & Gili Island Hop",
      location: "Indonesia Multi-Centre",
      duration: "14 Nights",
      price: "1,450",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      badge: "Trending Fast",
      highlights: ["Ubud Jungle Resort", "Speedboat Inter-links", "Private Sunset Tour"]
    },
    {
      id: 5,
      title: "Mediterranean Luxury: Barcelona & Ibiza Air",
      location: "Spain Dual Gateway",
      duration: "8 Nights",
      price: "1,120",
      img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80",
      badge: "Summer Special",
      highlights: ["Sagrada Familia Passes", "Beachfront Boutique Hotel", "VIP Lounge Access"]
    },
    {
      id: 6,
      title: "Wild Zanzibar Island & Serengeti Luxury Safari",
      location: "Tanzania Adventure",
      duration: "11 Nights",
      price: "2,199",
      img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
      badge: "Bucket List",
      highlights: ["5-Star Safari Lodge", "Zanzibar Spice Tour", "All Game Drives Included"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      {/* ==================== 1. BRAND SYNCED LIGHT NAVBAR ==================== */}
      <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4 transform-gpu">
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
              <a href="#" className="px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-sm">Home</a>
              <a href="#destinations" className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 hover:text-blue-700 hover:bg-white transition-all">Destinations</a>
              <a href="#themes" className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 hover:text-blue-700 hover:bg-white transition-all">Travel Styles</a>
              <a href="#process" className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 hover:text-blue-700 hover:bg-white transition-all">How It Works</a>
              <a href="#faq" className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-600 hover:text-blue-700 hover:bg-white transition-all">FAQs</a>
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
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-xl bg-blue-600 text-white font-bold">Home</a>
              <a href="#destinations" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-xl text-slate-700 hover:bg-slate-50">Destinations</a>
              <a href="#themes" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-xl text-slate-700 hover:bg-slate-50">Travel Styles</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-xl text-slate-700 hover:bg-slate-50">How It Works</a>
              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <a href="tel:02030628927" className="flex items-center justify-center gap-2 py-3 font-bold bg-slate-100 rounded-xl"><Phone className="w-4 h-4 text-blue-600" /> 0203 062 8927</a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* ==================== 2. CLEAN AIRY HERO SECTION ==================== */}
      <header className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Resort Scene" 
            className="w-full h-full object-cover scale-105 filter brightness-[0.85] contrast-100"
          />
          {/* Smooth light gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-slate-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" /> Bespoke Premium Vacations
            </div>
            <h1 className="text-4xl sm:text-7xl font-black tracking-tight leading-none text-slate-900">
              Escape Rigidity.<br />
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-indigo-800 bg-clip-text text-transparent">Craft Your Own</span><br />
              Luxury Journey.
            </h1>
            <p className="text-slate-700 text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 font-medium">
              Don't adapt to pre-packaged layouts. Experience handpicked luxury multi-centre transits with dynamic custom itineraries built exactly for you.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-2">
              <div className="flex items-center gap-3 bg-white/80 border border-slate-200 px-4 py-2.5 rounded-2xl shadow-sm backdrop-blur-sm">
                <PlaneTakeoff className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-slate-800">100+ Multi-Centres</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 border border-slate-200 px-4 py-2.5 rounded-2xl shadow-sm backdrop-blur-sm">
                <Shield className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-bold text-slate-800">Full Financial Protection</span>
              </div>
            </div>
          </div>

          {/* Form Styled with Bright Premium Card Frame */}
          <div className="lg:col-span-5 transform-gpu">
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-black mb-6 text-slate-900 tracking-wide flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-600 rounded-full inline-block"></span>
                Tailor Your Next Escape
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Where do you want to go? *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-blue-500" />
                    <input type="text" required placeholder="e.g. Bangkok & Koh Samui" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-semibold" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Departure Date *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-blue-500" />
                      <input type="date" required className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-semibold" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Duration (Nights) *</label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-3.5 w-4 h-4 text-blue-500" />
                      <input type="number" required placeholder="e.g. 10" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-semibold" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Contact Number *</label>
                    <input type="tel" required placeholder="Your Phone No" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-semibold" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address *</label>
                    <input type="email" required placeholder="name@domain.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-semibold" />
                  </div>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 hover:brightness-110 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-blue-700/20 uppercase tracking-widest text-xs">
                  Generate Dream Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* ==================== 3. TRAVEL THEMES SECTION ==================== */}
      <section id="themes" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">Vibrant Vacation Style Matrices</h2>
          <p className="text-slate-500 text-base sm:text-lg mt-3">Visualise your comfort guidelines. Click any theme to load targeted custom vectors.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelThemes.map((theme, idx) => {
            const Icon = theme.icon;
            return (
              <div 
                key={idx} 
                className="group relative h-96 rounded-3xl overflow-hidden border border-slate-200 cursor-pointer shadow-md transform-gpu hover:-translate-y-2 transition-all duration-300"
              >
                <img src={theme.img} alt={theme.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <span className="self-start bg-white/90 backdrop-blur-md text-blue-700 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm">
                    {theme.tag}
                  </span>
                  <div className="space-y-2">
                    <div className="p-3 bg-white/20 border border-white/30 rounded-xl w-fit text-white backdrop-blur-md group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black text-white tracking-wide group-hover:text-blue-300 transition-colors">{theme.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== 4. CLEAN BRIGHT TOUR GRID ==================== */}
      <section id="destinations" className="bg-white py-24 border-y border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">Trending Multi-Centre Luxury Portals</h2>
              <p className="text-slate-500 text-base sm:text-lg mt-2">Handpicked destinations bundled with dynamic logistical integrity.</p>
            </div>
            <button className="group inline-flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-blue-500 px-6 py-3 rounded-xl text-blue-600 font-bold text-sm transition-all whitespace-nowrap shadow-sm">
              Explore All 120+ Twin-Centres 
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 hover:border-blue-600/40 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200 flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    {pkg.badge}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                      <span className="flex items-center gap-1 text-blue-600"><MapPin className="w-3.5 h-3.5" /> {pkg.location}</span>
                      <span className="flex items-center gap-1 text-indigo-600"><Clock className="w-3.5 h-3.5" /> {pkg.duration}</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{pkg.title}</h3>
                    
                    <div className="space-y-1.5 pt-1">
                      {pkg.highlights.map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-widest">Fr. Per Person</span>
                      <span className="text-2xl font-black text-slate-900">£{pkg.price}</span>
                    </div>
                    <button className="inline-flex items-center gap-1.5 bg-white border border-slate-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 text-slate-700 group-hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm">
                      View Itinerary <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. PIPELINE IN CLEAN LIGHT BLOCKS ==================== */}
      <section id="process" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">The 3-Step Bespoke Pipeline</h2>
          <p className="text-slate-500 text-base sm:text-lg mt-3">How we convert your vacation parameters into optimized physical reality maps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            { num: "01", title: "Submit Parameters", desc: "Input your ideal travel styles, destination nodes, and budget benchmarks via our clean form wizard." },
            { num: "02", title: "Custom Blueprinting", desc: "Our premium holiday architects model a completely tailored dual itinerary framework balancing multi-transits." },
            { num: "03", title: "Locked-In Luxury", desc: "Embark on an unfragmented holiday lifecycle backed by our real-time emergency priority line assistance." }
          ].map((step, idx) => (
            <div key={idx} className="relative bg-white border border-slate-200 p-8 rounded-3xl space-y-4 shadow-sm">
              <span className="text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block font-mono">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-slate-900 tracking-wide">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 6. SOCIAL PROOF ==================== */}
      <section className="bg-slate-100 py-24 border-t border-slate-200 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-1 text-blue-600 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">Bespoke Guest Dispatches</h2>
            <p className="text-slate-500 text-sm mt-3">Verified reviews tracking elite multi-destination execution layers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Ahmad Amman", destination: "Dubai & Maldives Twin", text: "The cross-border logistical integrity was elite. Transferring straight from Dubai skyscrapers into a private Maldives lagoon villa was native and uninterrupted." },
              { name: "S. Jenkins", destination: "Thailand Multi-Centre", text: "No static packages blocks! Tailored our stays between Bangkok city culture and Koh Samui luxury completely around our specific timeframe." }
            ].map((rev, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm">
                <p className="text-slate-600 text-sm leading-relaxed italic">"{rev.text}"</p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">{rev.name}</h4>
                    <span className="text-xs text-blue-600 font-semibold">{rev.destination}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-md">
                    Verified Guest
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 7. FAQS IN CLEAN LIGHT PANELS ==================== */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 text-center mb-12">FAQ Database</h2>
        <div className="space-y-4">
          {[
            { q: "How do your multi-centre custom deposits operate?", a: "You can fully secure your luxury twin-centre flights and handpicked resort matrices with low deposits starting from £199 per person, spreading remaining nodes interest-free." },
            { q: "Are intra-destination transit flights fully handled?", a: "Absolutely. All inter-island ferries, internal flights, and luxury private transfers are embedded straight into your primary master routing blueprint." },
            { q: "Can we shift dates after launching our quote inquiry?", a: "Yes, our travel architects specialize in dynamic parameter modification. Your itinerary is completely flexible until final seat confirmation parameters lock." }
          ].map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm">
                <button 
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left font-bold flex items-center justify-between text-slate-800 hover:text-blue-600 transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <span className={`text-2xl text-blue-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 py-5 text-sm text-slate-500 leading-relaxed bg-slate-50">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== 8. BRAND ALIGNED LIGHT/DARK CONTRAST FOOTER ==================== */}
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

    </div>
  );
}