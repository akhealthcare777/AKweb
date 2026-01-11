import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { 
  Leaf, Activity, Syringe, Droplets, 
  Smile, Heart, RotateCw, ArrowRight 
} from "lucide-react";

// Keep your existing image imports
import back1 from "../assets/back1.webp";
import back2 from "../assets/back3.webp";
import back3 from "../assets/back2.webp";
import back4 from "../assets/back4.webp";
import back5 from "../assets/back5.webp";
import back6 from "../assets/back6.webp";

const ServicesSection = () => {
  const services = [
    { 
      id: 1,
      title: "Varma Therapy", 
      short: "Pressure Point Healing",
      desc: "Ancient Tamil Siddha healing art. We manipulate vital energy points (Varmam) to cure nerve disorders and joint pain without medicine.", 
      icon: <Leaf className="w-8 h-8" />, 
      backImg: back1,
      color: "bg-emerald-50 text-emerald-700"
    },
    { 
      id: 2,
      title: "Chiropractic", 
      short: "Spinal Alignment",
      desc: "Non-invasive spinal adjustments to correct posture and relieve chronic back pain.",
      // Educational Diagram Trigger
      diagram: true, 
      diagramText: "View Vertebral Chart",
      icon: <Activity className="w-8 h-8" />, 
      backImg: back2,
      color: "bg-blue-50 text-blue-700"
    },
    { 
      id: 3,
      title: "Acupuncture", 
      short: "Energy Flow Therapy",
      desc: "Fine needle insertion to unblock Qi flow along meridian channels.",
      // Educational Diagram Trigger
      diagram: true,
      diagramText: "View Meridian Map",
      icon: <Syringe className="w-8 h-8" />, 
      backImg: back3,
      color: "bg-amber-50 text-amber-700"
    },
    { 
      id: 4,
      title: "Detox Therapy", 
      short: "Natural Purification",
      desc: "Eliminate toxins through purgation, herbal steam, and dietary adjustments.", 
      icon: <Droplets className="w-8 h-8" />, 
      backImg: back4,
      color: "bg-cyan-50 text-cyan-700"
    },
    { 
      id: 5,
      title: "Massage Therapy", 
      short: "Deep Relaxation",
      desc: "Therapeutic oil massage to improve circulation, reduce stress hormones, and relax muscle tension.", 
      icon: <Smile className="w-8 h-8" />, 
      backImg: back5,
      color: "bg-rose-50 text-rose-700"
    },
    { 
      id: 6,
      title: "Yoga & Meditation", 
      short: "Mind-Body Balance",
      desc: "Guided Asanas and Pranayama to restore mental clarity and physical flexibility.", 
      icon: <Heart className="w-8 h-8" />, 
      backImg: back6,
      color: "bg-violet-50 text-violet-700"
    },
  ];

  const [flippedCards, setFlippedCards] = useState(Array(services.length).fill(false));

  const handleFlip = (index) => {
    setFlippedCards((prev) => {
      const newFlips = [...prev];
      newFlips[index] = !newFlips[index];
      return newFlips;
    });
  };

  return (
    <section id="services" className="relative py-24 bg-stone-50 min-h-screen font-sans overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <Helmet>
        <title>Holistic Services | Varma, Chiropractic & Acupuncture</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-3 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Therapies for the <br />
            <span className="italic text-green-800">Mind, Body & Spirit</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tap a card to reveal treatment details.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              className="group h-[380px] cursor-pointer [perspective:1000px]" 
              onClick={() => handleFlip(idx)}
            >
              <div
                className={`relative w-full h-full duration-700 transition-all [transform-style:preserve-3d] ${
                  flippedCards[idx] ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* ================= FRONT SIDE ================= */}
                <div className="absolute inset-0 w-full h-full bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60 border border-white flex flex-col items-center text-center justify-between z-20 [backface-visibility:hidden]">
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                    {service.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 font-medium text-sm tracking-wide uppercase">
                      {service.short}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-green-700 opacity-60 group-hover:opacity-100 transition-opacity">
                    <RotateCw className="w-4 h-4" />
                    <span>Tap to Flip</span>
                  </div>
                </div>

                {/* ================= BACK SIDE ================= */}
                <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  
                  {/* Background Image */}
                  <img src={service.backImg} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full p-8 flex flex-col justify-center items-center text-center text-white">
                    <div className="mb-4 text-green-400 scale-75">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    
                    <p className="text-slate-200 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Diagram Link (Visual Only) */}
                    {service.diagram && (
                      <div className="text-[10px] text-green-300/80 italic mb-4 border border-green-300/30 px-3 py-1 rounded-full flex items-center gap-1">
                         <Activity className="w-3 h-3" />
                         {service.diagramText}
                      </div>
                    )}

                    <button className="bg-white text-slate-900 px-6 py-2 rounded-full text-sm font-bold hover:bg-green-50 transition flex items-center gap-2">
                      Book Now <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ================= FIXED YIN YANG SVG ================= */}
        <div className="mt-24 flex justify-center">
          <div className="relative group cursor-pointer animate-[spin_10s_linear_infinite] hover:animate-[spin_3s_linear_infinite]" title="Balance">
             {/* Simple SVG Yin Yang */}
             <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
                <circle cx="50" cy="50" r="48" fill="white" stroke="#1e293b" strokeWidth="2"/>
                <path d="M50 2A48 48 0 0 0 50 98A24 24 0 0 1 50 50A24 24 0 0 0 50 2Z" fill="#1e293b"/>
                <circle cx="50" cy="26" r="6" fill="white"/>
                <circle cx="50" cy="74" r="6" fill="#1e293b"/>
             </svg>
             {/* Glow Effect */}
             <div className="absolute inset-0 bg-green-500 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;