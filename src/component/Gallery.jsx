import React from "react";

// --- Import your images ---
import backAcupuncture from "../assets/backAcupuncture.jpg";
import facialAcupuncture from "../assets/facialAcupuncture.webp";
import neckVarma from "../assets/neckVarma.webp";
import handAcupuncture from "../assets/handAcupuncture.webp";
import traditionalVarma from "../assets/traditionalVarma.webp";
import stressRelief from "../assets/stressRelief.webp";

// --- Elegant SVG Icons ---
const Icons = {
  Lotus: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 4.4-3.6 8-8 8z"/><path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M12 5v8"/><path d="M12 21v-8"/></svg>
  ),
  Needle: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20"/><path d="m16 8-4-4"/><path d="m8 16 4 4"/></svg>
  ),
  Spine: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="10" r="1"/><circle cx="12" cy="15" r="1"/><circle cx="12" cy="20" r="1"/><path d="M8 8h8"/><path d="M8 18h8"/></svg>
  ),
  Hands: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M6 14c0-3 2-5 6-5s6 2 6 5v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6Z"/></svg>
  ),
};

const ServicesAndGallery = () => {
  const services = [
    {
      title: "Varmam Maruthuvam",
      desc: "Unlock your body's vital energy flow using ancient Siddha pressure points.",
      icon: <Icons.Lotus />,
    },
    {
      title: "Needle Acupuncture",
      desc: "Fine needle therapy to stimulate nerves and release natural painkillers.",
      icon: <Icons.Needle />,
    },
    {
      title: "Chiropractic Care",
      desc: "Expert spinal adjustments to correct alignment and improve posture.",
      icon: <Icons.Spine />,
    },
    {
      title: "Dorn Therapy",
      desc: "Gentle, non-invasive method for correcting misalignments of the spine.",
      icon: <Icons.Hands />,
    },
  ];

  return (
    <div className="w-full bg-stone-50 text-stone-800 selection:bg-green-200">
      
      {/* ==================== SERVICES SECTION ==================== */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100 rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="text-green-700 font-bold tracking-widest uppercase text-xs mb-2 block">Our Expertise</span>
              <h2 className="text-5xl md:text-6xl font-serif text-stone-900 leading-tight">
                Healing arts for the <br /><span className="italic text-stone-500">modern soul.</span>
              </h2>
            </div>
            <p className="text-stone-500 max-w-sm text-lg leading-relaxed text-right md:text-left">
              We combine traditional wisdom with modern physiology to treat the root cause, not just the symptoms.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover Fill Effect */}
                <div className="absolute inset-0 bg-stone-900 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mb-8 text-stone-900 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-medium mb-4 group-hover:text-white transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed group-hover:text-stone-300 transition-colors duration-300">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== GALLERY (BENTO GRID) ==================== */}
      <section className="py-32 bg-stone-900 text-stone-100 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Visual Harmony</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto opacity-50"></div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            
            {/* Item 1: Large Feature (Left) */}
            <div className="md:col-span-2 md:row-span-2 relative group rounded-2xl overflow-hidden cursor-pointer">
              <img src={backAcupuncture} alt="Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Featured</span>
                <h3 className="text-2xl font-serif">Acupuncture Therapy</h3>
                <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Rebalancing your body's energy meridians.</p>
              </div>
            </div>

            {/* Item 2: Tall (Middle Top) */}
            <div className="md:col-span-1 md:row-span-1 relative group rounded-2xl overflow-hidden cursor-pointer">
              <img src={traditionalVarma} alt="Varma" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-serif">Varma Varmam</h3>
              </div>
            </div>

            {/* Item 3: Wide (Right Top) */}
            <div className="md:col-span-1 md:row-span-1 relative group rounded-2xl overflow-hidden cursor-pointer">
              <img src={facialAcupuncture} alt="Face" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-serif">Facial Rejuvenation</h3>
              </div>
            </div>

            {/* Item 4: Wide (Middle Bottom) */}
            <div className="md:col-span-1 md:row-span-1 relative group rounded-2xl overflow-hidden cursor-pointer">
              <img src={handAcupuncture} alt="Hand" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-serif">Hand Reflexology</h3>
              </div>
            </div>

             {/* Item 5: Tall (Right Bottom) */}
             <div className="md:col-span-1 md:row-span-1 relative group rounded-2xl overflow-hidden cursor-pointer">
              <img src={neckVarma} alt="Neck" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-serif">Spinal Care</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS (TIMELINE) ==================== */}
      <section className="py-28 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center mb-16">
             <h2 className="text-4xl font-serif text-stone-900">Your Journey</h2>
             <p className="text-stone-500 mt-2">Three simple steps to a better you.</p>
          </div>
          
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-stone-200 via-green-300 to-stone-200"></div>

            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
              <div className="order-1 md:w-5/12 text-left md:text-right p-4">
                <h3 className="text-xl font-bold text-stone-800">01. Diagnosis</h3>
                <p className="text-stone-500 text-sm mt-1">We start with Nadi Pariksha (Pulse Diagnosis) to understand your root imbalance.</p>
              </div>
              <div className="order-2 z-10 w-8 h-8 rounded-full bg-white border-4 border-green-500 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="order-3 md:w-5/12 p-4"></div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group">
              <div className="order-1 md:w-5/12 p-4"></div>
              <div className="order-2 z-10 w-8 h-8 rounded-full bg-white border-4 border-green-500 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="order-3 md:w-5/12 text-left p-4">
                <h3 className="text-xl font-bold text-stone-800">02. Therapy</h3>
                <p className="text-stone-500 text-sm mt-1">Customized sessions involving Varmam, Acupuncture, or Cupping based on your needs.</p>
              </div>
            </div>

             {/* Step 3 */}
             <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <div className="order-1 md:w-5/12 text-left md:text-right p-4">
                <h3 className="text-xl font-bold text-stone-800">03. Rejuvenation</h3>
                <p className="text-stone-500 text-sm mt-1">Experience long-term relief and learn lifestyle changes to maintain balance.</p>
              </div>
              <div className="order-2 z-10 w-8 h-8 rounded-full bg-white border-4 border-green-500 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="order-3 md:w-5/12 p-4"></div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesAndGallery;