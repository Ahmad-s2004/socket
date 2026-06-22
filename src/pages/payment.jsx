import React, { useState } from 'react';
import { 
  CreditCard, ShieldCheck, User, Mail, Phone, 
  FileText, DollarSign, CheckCircle, Info, Lock, HelpCircle, Sparkles, Compass
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    bookingRef: '',
    amount: '',
    description: '',
    firstName: '',
    lastName: '',
    email: '',
    contactNo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Secure deployment api submission pipeline simulation
    setTimeout(() => {
      alert("🔒 Security Layer: Payment processing payload simulated successfully!");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* ==================== HERO HERO SUB-SECTION ==================== */}
      <section className="pt-32 pb-12 lg:py-20 lg:pt-40 bg-white border-b border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 256-Bit SSL Encrypted Link
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                Secure Terminal <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">E-Payment</span>
              </h1>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-xl font-medium leading-relaxed">
                Please fill all the corporate fields below to execute instant authorization nodes directly into the automated clearance channel safely.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 pt-4 lg:pt-0">
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl text-center shadow-sm flex flex-col justify-center items-center">
                <Lock className="w-6 h-6 text-blue-600 mb-2" />
                <span className="text-xs uppercase font-black text-slate-400 tracking-wider">PCI-DSS Compliant</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl text-center shadow-sm flex flex-col justify-center items-center">
                <CheckCircle className="w-6 h-6 text-emerald-600 mb-2" />
                <span className="text-xs uppercase font-black text-slate-400 tracking-wider">ATOL Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CORE FORM CONTAINER INTERFACE ==================== */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-slate-200/40 text-left">
          
          <div className="border-b border-slate-100 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-black text-slate-900 text-xl tracking-tight flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-600" /> Payment Validation Engine
              </h2>
              <p className="text-xs text-slate-400 font-medium">Verify your booking reference credentials before dispatching currency rates.</p>
            </div>
            <span className="self-start sm:self-center text-[10px] font-black bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
              Active Secure Session
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* ROW 1: Booking Ref & Amount */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-400" /> Booking Reference Number *
                </label>
                <input 
                  type="text" 
                  name="bookingRef"
                  required 
                  value={formData.bookingRef}
                  onChange={handleInputChange}
                  placeholder="Enter Booking Reference Number (e.g., PH-2026-X9)" 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-sm px-4 py-3.5 rounded-xl outline-none transition font-semibold shadow-inner" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-slate-400" /> Order Amount (£) *
                </label>
                <input 
                  type="number" 
                  name="amount"
                  required 
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="Enter Amount in Digits" 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-sm px-4 py-3.5 rounded-xl outline-none transition font-semibold shadow-inner" 
                />
              </div>
            </div>

            {/* ROW 2: Order Description */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-slate-400" /> Order Description *
              </label>
              <textarea 
                name="description"
                rows="4" 
                required 
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter Order Details Here (e.g., 7-Night Phuket Getaway Twin-City Node bundle)..." 
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-sm px-4 py-3.5 rounded-xl outline-none transition font-semibold shadow-inner resize-none"
              ></textarea>
            </div>

            {/* ROW 3: First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" /> First Name *
                </label>
                <input 
                  type="text" 
                  name="firstName"
                  required 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter First Name" 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-sm px-4 py-3.5 rounded-xl outline-none transition font-semibold shadow-inner" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" /> Last Name *
                </label>
                <input 
                  type="text" 
                  name="lastName"
                  required 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter Last Name" 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-sm px-4 py-3.5 rounded-xl outline-none transition font-semibold shadow-inner" 
                />
              </div>
            </div>

            {/* ROW 4: Email & Contact No */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" /> Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email Address" 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-sm px-4 py-3.5 rounded-xl outline-none transition font-semibold shadow-inner" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" /> Contact No. *
                </label>
                <input 
                  type="tel" 
                  name="contactNo"
                  required 
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  placeholder="Enter Contact No." 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-sm px-4 py-3.5 rounded-xl outline-none transition font-semibold shadow-inner" 
                />
              </div>
            </div>

            {/* Submit Action Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white font-black text-xs sm:text-sm py-4 rounded-xl uppercase tracking-widest transition-all shadow-md shadow-blue-500/10 disabled:opacity-50 text-center block"
              >
                {isSubmitting ? 'Authorizing Encryption Module...' : 'Pay Now'}
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* ==================== WHY TRUST US MATRIX (BRAND VALUE CAPTURED FROM SCREENSHOT) ==================== */}
      {/* ==================== SECTION 1: TRUST & SECURITY INDICES GRID ==================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-xl border border-white/10">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-black text-blue-400 tracking-widest block">Encryption</span>
              <h4 className="text-sm font-black tracking-tight">256-Bit SSL Layer</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed font-medium">Your credentials are tokenized directly through financial pipeline nodes.</p>
            </div>
            <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
              <span className="text-[10px] uppercase font-black text-emerald-400 tracking-widest block">Authentication</span>
              <h4 className="text-sm font-black tracking-tight">3D Secure v2</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed font-medium">Instant biometric verification matches with your specific mobile banking node.</p>
            </div>
            <div className="space-y-1 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <span className="text-[10px] uppercase font-black text-purple-400 tracking-widest block">Protection</span>
              <h4 className="text-sm font-black tracking-tight">ATOL Bonded</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed font-medium">Absolute monetary shelter for all configurations deployed via Traveligence Ltd.</p>
            </div>
            <div className="space-y-1 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <span className="text-[10px] uppercase font-black text-blue-400 tracking-widest block">Settlement</span>
              <h4 className="text-sm font-black tracking-tight">Instant Clearance</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed font-medium">Automated booking reservation status switches to approved immediately upon authorization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: PAYMENT METHODOLOGY ACCORDION (FAQ) ==================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-left relative z-10">
        <div className="bg-white border border-slate-200/80 rounded-[2rem] p-6 md:p-8 shadow-sm">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600" /> Payment Node Frequently Asked Questions
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-2xl">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide mb-1">When will I receive my ATOL confirmation certificate?</h4>
              <p className="text-slate-500 text-xs font-medium leading-relaxed">System logs dispatch the verified protection tokens within 30 minutes of payment clearance directly to your custom email node address.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-2xl">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide mb-1">Can I split the remaining balance into sequential micro deposits?</h4>
              <p className="text-slate-500 text-xs font-medium leading-relaxed">Yes. If your configuration parameters are active, you can input specific custom digits matching your structured payment plan breakdown layout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: THE UPGRADED 'WHY TRUST US' BLOCK ==================== */}
      <section className="border-t border-slate-200/60 bg-white py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-[10px] text-blue-600 font-black uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-3">
              Corporate Credentials
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">Why Trust Us with Holidays</h2>
            <p className="text-slate-400 text-xs sm:text-sm font-medium mt-1">Explore the best premium travel themes configured for clean structural routing safety.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Box 1 */}
            <div className="group bg-slate-50 border border-slate-200/60 p-8 rounded-[2rem] space-y-4 hover:bg-white hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Loved by millions</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Come hang out with the <span className="text-slate-700 font-bold">7 million folks</span> who've vacationed with us and mapped out architectural holiday layers securely.</p>
              </div>
              <div className="text-[10px] font-black text-blue-600 tracking-wider uppercase pt-2">Verified Ecosystem</div>
            </div>

            {/* Box 2 */}
            <div className="group bg-slate-50 border border-slate-200/60 p-8 rounded-[2rem] space-y-4 hover:bg-white hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Spread the cost</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Low deposits starting from <span className="text-slate-700 font-bold">£199pp</span>, integrated with secure micro flex-payment pipelines to manage limits comfortably.</p>
              </div>
              <div className="text-[10px] font-black text-indigo-600 tracking-wider uppercase pt-2">Flexible Terms</div>
            </div>

            {/* Box 3 */}
            <div className="group bg-slate-50 border border-slate-200/60 p-8 rounded-[2rem] space-y-4 hover:bg-white hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Chosen by you</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">Discover your ideal holiday with just a few taps, tailoring down custom multi-centres built dynamically via real-time logic execution.</p>
              </div>
              <div className="text-[10px] font-black text-blue-600 tracking-wider uppercase pt-2">Custom Pipelines</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}