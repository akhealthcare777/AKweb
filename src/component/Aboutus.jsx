import React from "react";
import { Helmet } from "react-helmet";
import { 
  Wind, Droplets, Globe, Flame, Sparkles, 
  ArrowRight, Quote, Activity, UserCheck 
} from "lucide-react";

// Import images
import therapy1 from "../assets/therapy1.jpg";
import therapy2 from "../assets/therapy2.jpg";
import therapy3 from "../assets/therapy3.jpg";
import Best from "../assets/beststudent.webp";

const AboutAndServices = () => {
  const elements = [
    { 
      name: "Air (Vayu)", 
      desc: "Controls movement, breathing, and nervous impulses.",
      color: "text-blue-600",
      bg: "from-blue-50 to-white",
      border: "hover:border-blue-200",
      icon: <Wind className="w-6 h-6" /> 
    },
    { 
      name: "Water (Jala)", 
      desc: "Governs fluids, nourishment, and emotional balance.",
      color: "text-cyan-600",
      bg: "from-cyan-50 to-white",
      border: "hover:border-cyan-200",
      icon: <Droplets className="w-6 h-6" /> 
    },
    { 
      name: "Earth (Prithvi)", 
      desc: "Provides structure, stability, and physical strength.",
      color: "text-emerald-600",
      bg: "from-emerald-50 to-white",
      border: "hover:border-emerald-200",
      icon: <Globe className="w-6 h-6" /> 
    },
    { 
      name: "Fire (Agni)", 
      desc: "Responsible for digestion, metabolism, and intelligence.",
      color: "text-orange-600",
      bg: "from-orange-50 to-white",
      border: "hover:border-orange-200",
      icon: <Flame className="w-6 h-6" /> 
    },
    { 
      name: "Space (Akasha)", 
      desc: "The container for all other elements; connects the spirit.",
      color: "text-violet-600",
      bg: "from-violet-50 to-white",
      border: "hover:border-violet-200",
      icon: <Sparkles className="w-6 h-6" /> 
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Philosophy | Agasthiyas Kathir Health Care</title>
      </Helmet>

      <section id="about" className="relative py-24 bg-stone-50/50 overflow-hidden font-sans">
        
        {/* Artistic Background Blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 mix-blend-multiply"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          {/* ================= SECTION 1: THE STORY ================= */}
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-32">
            
            {/* Left: Sticky Headline & Quote */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-xs font-bold tracking-widest uppercase mb-6">
                Established Excellence
              </span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mb-8">
                We Don't Just Treat. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500">
                  We Restore Balance.
                </span>
              </h2>
              
              <div className="relative p-8 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-green-200 -z-0" />
                <p className="relative z-10 text-slate-600 italic text-lg leading-relaxed mb-4">
                  "The body is a temple, and health is the harmony within it. Our goal is to awaken the body's own healing intelligence using the wisdom of Siddha and Varma."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center text-white font-bold text-xs">Dr.</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Chief Physician</p>
                    <p className="text-xs text-slate-500">Agasthiyas Kathir</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Rich Content & Images */}
            <div className="lg:col-span-7 space-y-12">
              <div className="prose prose-lg text-slate-600">
                <p>
                  At <strong>Agasthiyas Kathir Health Care Centre</strong>, we bridge the gap between ancient tradition and modern needs. Located in the heart of nature, our clinic is a sanctuary for those seeking relief from chronic pain, stress, and lifestyle disorders.
                </p>
                <p>
                  Unlike conventional medicine that often targets symptoms, our <strong>Drug-Free & Non-Invasive</strong> approach targets the root cause—imbalances in the body's vital energy (Prana) and the five elemental forces.
                </p>
              </div>

              {/* Collage Image Layout */}
              <div className="grid grid-cols-2 gap-4 h-[500px]">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-lg group">
                   <img src={therapy1} alt="Acupuncture" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                   <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white font-medium text-sm">Precision Acupuncture</p>
                   </div>
                </div>
                <div className="flex flex-col gap-4 h-full">
                  <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg group">
                    <img src={therapy2} alt="Varma" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white font-medium text-sm">Varma Therapy</p>
                   </div>
                  </div>
                  <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg group">
                    <img src={Best} alt="Awards" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white font-medium text-sm">Award Winning Care</p>
                   </div>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-8 border-y border-slate-200">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-lg text-green-700"><UserCheck size={20} /></div>
                    <div><span className="block font-bold text-slate-900 text-xl">5000+</span><span className="text-xs text-slate-500 uppercase">Happy Patients</span></div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-lg text-green-700"><Activity size={20} /></div>
                    <div><span className="block font-bold text-slate-900 text-xl">100%</span><span className="text-xs text-slate-500 uppercase">Natural Cure</span></div>
                 </div>
                 <div className="hidden md:flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-lg text-green-700"><Sparkles size={20} /></div>
                    <div><span className="block font-bold text-slate-900 text-xl">15+</span><span className="text-xs text-slate-500 uppercase">Years Exp.</span></div>
                 </div>
              </div>
            </div>
          </div>

          {/* ================= SECTION 2: THE 5 ELEMENTS ================= */}
          <div className="relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">The Science of Harmony</h3>
              <p className="text-slate-600">
                According to Siddha medicine, the human body is a microcosm of the universe, composed of five fundamental elements (Pancha Bhutas). Disease is merely an imbalance of these.
              </p>
            </div>
            
            {/* Visual Context: Diagram of the Elements */}
            <div className="flex justify-center mb-12">
               
            </div>

            {/* Interactive Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {elements.map((el, index) => (
                <div 
                  key={index}
                  className={`group relative bg-gradient-to-b ${el.bg} p-6 rounded-2xl border border-slate-100 ${el.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 flex flex-col items-center text-center`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-sm mb-4 ${el.color} group-hover:scale-110 transition-transform duration-300`}>
                    {el.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{el.name}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{el.desc}</p>
                  
                  {/* Subtle decorative glow at bottom */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 ${el.color.replace('text', 'bg')} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <a href="#services" className="inline-flex items-center gap-2 text-green-800 font-bold hover:gap-3 transition-all">
                Explore Our Treatments <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutAndServices;