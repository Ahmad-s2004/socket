import React, { useState, useMemo } from 'react';
import { 
  MapPin, Clock, SlidersHorizontal, Sparkles, 
  ArrowUpRight, Compass, X
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DEMO_PACKAGES = [
  {
    id: 1,
    title: "Thailand Escape 2026: Ultra Luxury Beach Resort & Spa Getaway",
    theme: "Multi-City",
    destinations: ["Phuket", "Khao Lak", "Bangkok"],
    duration: "7 Nights",
    price: "1,099",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
    badge: "Best Seller"
  },
  {
    id: 2,
    title: "Exclusive Phuket Escape: Private Villa & Island Tour",
    theme: "Beach Holidays",
    destinations: ["Phuket"],
    duration: "7 Nights",
    price: "899",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    badge: "Luxury Stay"
  },
  {
    id: 3,
    title: "Endless Sunshine & Family Smiles: Luxury Resort Stay",
    theme: "Family Holidays tour",
    destinations: ["Antalya"],
    duration: "5 Nights",
    price: "449",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80",
    badge: "Family Pick"
  },
  {
    id: 4,
    title: "Maldives Paradise Perfected: 5-Star Emerald Water Villas",
    theme: "Beach Holidays",
    destinations: ["Maldives"],
    duration: "7 Nights",
    price: "2,999",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80",
    badge: "Ultra Luxury"
  },
  {
    id: 5,
    title: "Dubai Extended Twin-City: Modern Skyscraper & Desert Safari",
    theme: "Twin-City",
    destinations: ["Dubai"],
    duration: "6 Nights",
    price: "1,299",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    badge: "Trending"
  },
  {
    id: 6,
    title: "European Classic Twin-City: Istanbul & Historical Bursa Tour",
    theme: "Twin-City",
    destinations: ["Istanbul"],
    duration: "8 Nights",
    price: "1,499",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80",
    badge: "Cultural"
  }
];

export default function DestinationPage() {
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [selectedDests, setSelectedDests] = useState([]);
  const [maxBudget, setMaxBudget] = useState(3500);
  const [sortBy, setSortBy] = useState("Popularity");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const uniqueThemes = ["Family Holidays tour", "Multi-City", "Twin-City", "Beach Holidays"];
  const uniqueDestinations = ["Dubai", "Mauritius", "Maldives", "Zanzibar", "Phuket", "Istanbul", "Antalya"];

  const handleThemeChange = (theme) => {
    setSelectedThemes(prev => prev.includes(theme) ? prev.filter(t => t !== theme) : [...prev, theme]);
  };

  const handleDestChange = (dest) => {
    setSelectedDests(prev => prev.includes(dest) ? prev.filter(d => d !== dest) : [...prev, dest]);
  };

  const clearAllFilters = () => {
    setSelectedThemes([]);
    setSelectedDests([]);
    setMaxBudget(3500);
  };

  const filteredPackages = useMemo(() => {
    let result = [...DEMO_PACKAGES];
    if (selectedThemes.length > 0) result = result.filter(p => selectedThemes.includes(p.theme));
    if (selectedDests.length > 0) result = result.filter(p => p.destinations.some(d => selectedDests.includes(d)));
    
    if (sortBy === "Low to High") result.sort((a, b) => parseFloat(a.price.replace(/,/g, '')) - parseFloat(b.price.replace(/,/g, '')));
    if (sortBy === "High to Low") result.sort((a, b) => parseFloat(b.price.replace(/,/g, '')) - parseFloat(a.price.replace(/,/g, '')));
    return result;
  }, [selectedThemes, selectedDests, sortBy]);

  const FilterContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-2 text-left">
      <div>
        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-1.5 h-3 bg-blue-600 rounded-full inline-block"></span> Holiday Themes
        </h4>
        <div className="space-y-2">
          {uniqueThemes.map((theme, idx) => (
            <label key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer">
              <input type="checkbox" checked={selectedThemes.includes(theme)} onChange={() => handleThemeChange(theme)} className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20 transition" />
              <span className="truncate">{theme}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-1.5 h-3 bg-indigo-600 rounded-full inline-block"></span> Budget Limits
        </h4>
        <div className="space-y-3">
          <input type="range" min="400" max="3500" value={maxBudget} onChange={(e) => setMaxBudget(Number(e.target.value))} className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-400">£400</span>
            <span className="text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">Max £{maxBudget.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-1.5 h-3 bg-blue-600 rounded-full inline-block"></span> Top Destinations
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {uniqueDestinations.map((dest, idx) => (
            <label key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer">
              <input type="checkbox" checked={selectedDests.includes(dest)} onChange={() => handleDestChange(dest)} className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20" />
              <span className="truncate">{dest}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* ==================== EXPLORE LUXURY PORTAL SECTION (HEIGHT INCREASED ON DESKTOP) ==================== */}
      <section className="pt-32 pb-12 lg:py-24 lg:pt-40 bg-white border-b border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Premium Curation Engine
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                Explore Our Luxury <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">Portals</span>
              </h1>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-xl font-medium leading-relaxed">
                Tailor down the matrix nodes. Filter dynamically through custom multi-centre frameworks built for architectural comfort protection.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-3 gap-4 pt-4 lg:pt-0">
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl text-center shadow-sm">
                <span className="block text-2xl lg:text-3xl font-black text-slate-900">45+</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Destinations</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl text-center shadow-sm">
                <span className="block text-2xl lg:text-3xl font-black text-blue-600">5★</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Luxury Only</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl text-center shadow-sm">
                <span className="block text-2xl lg:text-3xl font-black text-indigo-600">100%</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER CONTROL CONTROLLER HEADER */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 relative z-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200/60 pb-4 gap-4">
  {/* Left Side: Showing count (Mobile par text-center ya left align structured line) */}
  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider text-left">
    Showing <span className="text-blue-600 font-black">{filteredPackages.length}</span> Premium Dynamic Layouts
  </p>
  
  {/* Right Side Controls: Filter & Dropdown (Mobile par w-full aur grid/flex-row taake dono aik hi line mein rahein) */}
  <div className="flex items-center gap-3 w-full md:w-auto">
    <button 
      onClick={() => setIsFilterOpen(!isFilterOpen)}
      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 bg-white hover:border-blue-500 rounded-xl text-xs font-bold text-slate-700 transition shadow-sm"
    >
      <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" /> 
      <span className="whitespace-nowrap">
        {isFilterOpen ? 'Hide Parameters' : 'Filter Framework'}
      </span>
    </button>

    <select 
      value={sortBy} 
      onChange={(e) => setSortBy(e.target.value)}
      className="flex-1 md:flex-none bg-white border border-slate-200 text-xs font-bold rounded-xl px-3 py-2.5 text-slate-700 outline-none hover:border-blue-500 transition cursor-pointer shadow-sm min-w-0"
    >
      <option>Popularity Matrix</option>
      <option>Low to High</option>
      <option>High to Low</option>
    </select>
  </div>
</div>

        {/* Desktop Dropdown Matrix View */}
        {isFilterOpen && (
          <div className="hidden md:block mt-4 bg-white border border-slate-200 rounded-3xl p-6 shadow-xl shadow-slate-200/50 transition-all">
            <FilterContent />
            <div className="flex justify-end gap-3 border-t border-slate-100 pt-4 mt-4">
              <button onClick={clearAllFilters} className="text-xs font-bold text-slate-400 hover:text-slate-600 px-3 transition">Clear Matrix</button>
              <button onClick={() => setIsFilterOpen(false)} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black px-5 py-2.5 rounded-xl hover:brightness-110 transition shadow-md shadow-blue-500/10 uppercase tracking-wider">Apply Nodes</button>
            </div>
          </div>
        )}
      </header>

      {/* ==================== RE-SIZED COMPACT PRODUCT GRID ==================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-4 relative z-10">
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-blue-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-blue-700 text-[10px] font-black px-3 py-1 rounded-full shadow-sm border border-slate-100 uppercase tracking-wider">
                    {pkg.badge}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400">
                      <span className="flex items-center gap-1 text-blue-600"><MapPin className="w-3 h-3" /> {pkg.destinations.join(" • ")}</span>
                      <span className="flex items-center gap-1 text-slate-500"><Clock className="w-3 h-3" /> {pkg.duration}</span>
                    </div>
                    
                    <h3 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight leading-snug line-clamp-2">
                      {pkg.title}
                    </h3>
                    
                    <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 border border-slate-200/40">
                      {pkg.theme}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="text-left">
                      <span className="text-[9px] text-slate-400 block font-bold uppercase tracking-wider">From Rate</span>
                      <span className="text-xl font-black text-slate-900">£{pkg.price}</span>
                    </div>
                    <button className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 text-slate-700 group-hover:text-white px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-sm">
                      Blueprint <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 max-w-xl mx-auto shadow-sm">
            <p className="text-slate-400 font-semibold text-sm">No curated layout matrices align with your criteria selection.</p>
            <button onClick={clearAllFilters} className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs px-4 py-2 rounded-xl uppercase tracking-wider">Reset Query Node</button>
          </div>
        )}
      </main>

      {/* ==================== HOMEPAGE ALIGNED SECTION 1: 3-STEP PIPELINE BLOCK ==================== */}
      <section className="py-24 border-t border-slate-200/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">The 3-Step Verification Layer</h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">How we guarantee seamless unfragmented execution maps across multi-transits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { num: "01", title: "Select Destination Node", desc: "Lock down your targeted global luxury hotspots using our real-time reactive dynamic interface widgets." },
            { num: "02", title: "Verify Fluid Logistics", desc: "Our automated holiday layer scans airport interfaces and internal links to secure structural routing stability." },
            { num: "03", title: "Deploy Secure Protections", desc: "Instantly launch your tailored escape with full luxury protection bounds and priority support vectors." }
          ].map((step, idx) => (
            <div key={idx} className="relative bg-white border border-slate-200 p-8 rounded-3xl text-left space-y-3 shadow-sm">
              <span className="text-4xl font-mono font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-slate-900 tracking-wide">{step.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== HOMEPAGE ALIGNED SECTION 2: DARK FULL-WIDTH INCENTIVE BANNER ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <div className="relative z-10 max-w-md text-left space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" /> Luxury Waitlist Open
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">Unlock Flash Rates & Bespoke Secret Slots</h2>
            <p className="text-slate-400 text-xs leading-relaxed font-medium">Join our private registry vector to secure instantaneous luxury slots prior to public release channels.</p>
          </div>

          <div className="relative z-10 w-auto md:w-auto min-w-[300px]">
            <form className="flex flex-col sm:flex-row gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Enter custom email node" className="bg-transparent text-xs px-4 py-3 outline-none w-full text-white placeholder-slate-500 font-semibold" />
              <button type="submit" className="bg-white hover:bg-slate-100 text-slate-900 font-black text-xs px-5 py-3 rounded-xl transition whitespace-nowrap uppercase tracking-wider">
                Notify Registry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== SMART SMOOTH BOTTOM DRAWER POPUP FOR MOBILE VIEW ==================== */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop transparent background blur */}
        <div onClick={() => setIsFilterOpen(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
        
        {/* Drawer Sliding Element */}
        <div className={`absolute bottom-0 inset-x-0 bg-white rounded-t-[2.5rem] p-6 shadow-2xl transition-transform duration-300 ease-out transform ${isFilterOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          {/* Top Notch bar indicator */}
          <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-6" />
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <h3 className="font-black text-slate-900 text-lg tracking-tight">Filter Framework Nodes</h3>
            <button onClick={() => setIsFilterOpen(false)} className="p-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-slate-500 transition">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Render layout forms filter options */}
          <div className="max-h-[50vh] overflow-y-auto pb-4 pr-1">
            <FilterContent />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 mt-2">
            <button onClick={clearAllFilters} className="border border-slate-200 text-slate-700 text-xs font-bold py-3.5 rounded-xl uppercase tracking-wider bg-slate-50">
              Clear All
            </button>
            <button onClick={() => setIsFilterOpen(false)} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black py-3.5 rounded-xl uppercase tracking-wider shadow-md shadow-blue-500/20">
              Apply Matrix
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}