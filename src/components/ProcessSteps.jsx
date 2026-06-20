import React from 'react';

export default function ProcessSteps() {
  const steps = [
    { num: "01", title: "Submit Your Vibe", desc: "Fill your baseline destination parameters and comfort metrics into our dynamic quote compiler." },
    { num: "02", title: "Custom Curation", desc: "Our luxury travel architects design a bespoke multi-centre package balancing logistics perfectly." },
    { num: "03", title: "Fly Confidently", desc: "Embark on an uninterrupted premium transition with locked-in 24/7 priority elite assistance layers." }
  ];

  return (
    <section className="bg-[#0a1124] py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">The Luxury Roadmap</h2>
          <p className="text-slate-400 mt-2">How we transform raw trip parameters into handpicked seamless realities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative space-y-4">
              <span className="text-6xl font-black bg-gradient-to-b from-cyan-500/20 to-transparent bg-clip-text text-transparent block font-mono">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-white tracking-wide">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              
              {idx !== 2 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-cyan-500/20 to-transparent -z-10 transform -translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}