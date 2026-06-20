import React, { useState } from 'react';

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "How do flexible payment plans work?", a: "You can book your dream holiday today with a low deposit starting from £199pp and spread the remaining cost over interest-free monthly installments." },
    { q: "Are flights and luxury hotels included?", a: "Yes, all our multi-centre packages include premium handpicked flights, top-rated hotels, and seamless transfers between destinations." },
    { q: "Can I customize the packages?", a: "Absolutely! Every itinerary can be tailored perfectly according to your dates, choice of hotels, and specific travel preferences." }
  ];

  return (
    <section className="bg-[#0a1124] py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-center mb-12">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="bg-[#060b18] border border-white/5 rounded-xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left font-semibold flex items-center justify-between hover:text-cyan-400 transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className={`text-xl text-cyan-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-4 text-sm text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}