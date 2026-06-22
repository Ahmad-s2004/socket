import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, MessageSquare, 
  Clock, Sparkles, Compass, CreditCard
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("🚀 Inquiry Stream Securely Dispatched into Core Node Pipeline!");
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* ==================== 1. HERO ARCHITECTURE HEADER ==================== */}
      <section className="pt-32 pb-12 lg:py-20 lg:pt-40 bg-white border-b border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Communications Layer Active
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                Connect With Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Travel Experts</span>
              </h1>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-xl font-medium leading-relaxed">
                Have a customized itinerary node in mind? Reach out to our operational grid deployment desk for rapid structural holiday engineering.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 pt-4 lg:pt-0">
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl text-center shadow-sm flex flex-col justify-center items-center group hover:bg-white hover:border-blue-500/20 transition-all duration-300">
                <Clock className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="block text-sm font-black text-slate-900">24/7 Monitoring</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Emergency Dispatch</span>
              </div>
              <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl text-center shadow-sm flex flex-col justify-center items-center group hover:bg-white hover:border-indigo-500/20 transition-all duration-300">
                <MessageSquare className="w-5 h-5 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="block text-sm font-black text-slate-900">&lt; 15 Min</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Average Chat Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. CORE INFORMATION GRID CARDS ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Card 1: Call Us */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between items-start group">
            <div className="space-y-4 w-full">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call Us</h3>
                <a href="tel:02030628927" className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-200 block mt-1">0203 062 8927</a>
              </div>
            </div>
            <a href="tel:02030628927" className="w-full mt-6 bg-blue-50 text-blue-700 text-[11px] font-black uppercase tracking-widest text-center py-3.5 rounded-xl border border-blue-100/80 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 block">
              Call our Teams
            </a>
          </div>

          {/* Card 2: Send a Mail */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between items-start group">
            <div className="space-y-4 w-full">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Send a Mail</h3>
                <a href="mailto:info@planholidays.co.uk" className="text-base font-black text-slate-900 group-hover:text-indigo-600 transition-colors duration-200 block mt-1 truncate">info@planholidays.co.uk</a>
              </div>
            </div>
            <a href="mailto:info@planholidays.co.uk" className="w-full mt-6 bg-indigo-50 text-indigo-700 text-[11px] font-black uppercase tracking-widest text-center py-3.5 rounded-xl border border-indigo-100/80 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 block">
              Email Us
            </a>
          </div>

          {/* Card 3: Visit Us */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between items-start group">
            <div className="space-y-4 w-full">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Visit Us</h3>
                <p className="text-xs font-bold text-slate-600 leading-relaxed mt-1">10, BMHC, College Road, M16 8BP, Manchester.</p>
              </div>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="w-full mt-6 bg-emerald-50 text-emerald-700 text-[11px] font-black uppercase tracking-widest text-center py-3.5 rounded-xl border border-emerald-100/80 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 block">
              Get Directions
            </a>
          </div>

        </div>
      </section>

      {/* ==================== 3. SPLIT WORKFLOW INTERFACE: FORM & MAP ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Inquiry Deployment Form (7 Columns) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-8 shadow-sm text-left">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <h2 className="font-black text-slate-900 text-lg tracking-tight flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" /> Digital Transmission Inquiry
              </h2>
              <p className="text-xs text-slate-400 font-medium">Drop your message context node below to target direct holiday pipelines.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Full Identity Name *</label>
                  <input type="text" required name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. Ahmad Amman" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-xs px-4 py-3 rounded-xl outline-none transition-all duration-200 font-semibold shadow-inner" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Email Node Connection *</label>
                  <input type="email" required name="email" value={formData.email} onChange={handleInputChange} placeholder="username@domain.com" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-xs px-4 py-3 rounded-xl outline-none transition-all duration-200 font-semibold shadow-inner" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Contact Phone *</label>
                  <input type="tel" required name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+44 7123 456789" className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-xs px-4 py-3 rounded-xl outline-none transition-all duration-200 font-semibold shadow-inner" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Target Subject Core</label>
                  <select name="subject" value={formData.subject} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-xs px-3 py-3 rounded-xl outline-none transition-all duration-200 font-bold cursor-pointer shadow-inner">
                    <option>General Inquiry</option>
                    <option>Custom Multi-City Bundle</option>
                    <option>Payment Route Verification</option>
                    <option>Corporate Partnership</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Message Description Log *</label>
                <textarea rows="4" required name="message" value={formData.message} onChange={handleInputChange} placeholder="Write down exact destination parameters, dates configuration or queries logs..." className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-xs px-4 py-3 rounded-xl outline-none transition-all duration-200 font-semibold resize-none shadow-inner"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs py-3.5 rounded-xl uppercase tracking-widest transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/10 disabled:opacity-50 flex items-center justify-center gap-2">
                {isSubmitting ? 'Injecting Data...' : <>Send Secure Inquiry <Send className="w-3 h-3" /></>}
              </button>
            </form>
          </div>

          {/* Visual Map Matrix & Support Meta (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Embedded map placeholder box */}
            <div className="bg-slate-200 border border-slate-200/80 rounded-[2.5rem] aspect-[4/3] relative overflow-hidden shadow-sm group">
              <iframe 
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.446864115456!2d-2.2618957!3d53.4601111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3cb4c2b9561%3A0x6b8ef9ea27bcadfa!2sCollege%20Rd%2C%20Manchester!5e0!3m2!1sen!2suk!4v1719060000000!5m2!1sen!2suk"
                className="w-full h-full border-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>

            {/* Quick response parameters block */}
            <div className="bg-white border border-slate-200/80 rounded-[2rem] p-6 text-left shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-600" />
              
              <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Operational Hours Mesh
              </h4>
              
              <ul className="space-y-3 text-xs font-semibold text-slate-600">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">Monday - Friday</span> 
                  <span className="font-black text-slate-900">09:00 AM - 06:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">Saturday</span> 
                  <span className="font-black text-slate-900">10:00 AM - 04:00 PM</span>
                </li>
                <li className="flex justify-between items-center pt-0.5">
                  <span className="text-slate-400 font-medium">Sunday</span> 
                  <span className="px-2 py-0.5 text-[10px] font-black text-red-600 bg-red-50 rounded-md uppercase tracking-wider">
                    Automated Nodes Only
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== 4. THE UPGRADED 'WHY TRUST US' BLOCK ==================== */}
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

            {/* Box 2 (FIXED SECOND CARD STRUCTURAL BUG HERE) */}
            <div className="group bg-slate-50 border border-slate-200/60 p-8 rounded-[2rem] space-y-4 hover:bg-white hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/60 flex flex-col justify-between">
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