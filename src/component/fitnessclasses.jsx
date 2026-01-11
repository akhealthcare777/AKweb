import React from "react";
import { Helmet } from "react-helmet";
// ✅ FIXED: Switched back to react-icons (which you have installed)
import {
  FaDumbbell,
  FaLaptop,
  FaUsers,
  FaHeartbeat,
  FaAppleAlt,
  FaMusic,
  FaWifi,
  FaMapMarkerAlt,
  FaCheckCircle
} from "react-icons/fa";

const FitnessClasses = () => {
  // Bento Grid Layout Configuration
  const classes = [
    { 
      id: 1,
      title: "Yoga & Flexibility", 
      desc: "Restore range of motion and core strength through Hatha and Vinyasa flows.", 
      icon: <FaUsers />, 
      style: "md:col-span-2 bg-emerald-50 text-emerald-700 border-emerald-200", 
      iconBg: "bg-emerald-200",
      hasDiagram: true // Trigger for Yoga Diagram
    },
    { 
      id: 2,
      title: "Mindful Meditation", 
      desc: "Guided sessions to reduce cortisol levels and sharpen mental focus.", 
      icon: <FaHeartbeat />, 
      style: "md:col-span-1 bg-rose-50 text-rose-700 border-rose-200",
      iconBg: "bg-rose-200"
    },
    { 
      id: 3,
      title: "Zumba Fitness", 
      desc: "High-energy cardio dance workouts that burn calories while having fun.", 
      icon: <FaMusic />, 
      style: "md:col-span-1 bg-violet-50 text-violet-700 border-violet-200",
      iconBg: "bg-violet-200"
    },
    { 
      id: 4,
      title: "Clinical Nutrition", 
      desc: "Personalized diet plans balancing macros and micros for your specific body type.", 
      icon: <FaAppleAlt />, 
      style: "md:col-span-2 bg-orange-50 text-orange-700 border-orange-200",
      iconBg: "bg-orange-200",
      hasDiagram: true // Trigger for Nutrition Diagram
    },
    { 
      id: 5,
      title: "Weight Management", 
      desc: "Scientific approach to Weight Loss & Gain using muscle hypertrophy strategies.", 
      icon: <FaDumbbell />, 
      style: "md:col-span-3 bg-blue-50 text-blue-700 border-blue-200",
      iconBg: "bg-blue-200"
    },
  ];

  return (
    <section id="fitness" className="relative py-24 bg-gray-50 overflow-hidden font-sans">
      
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <Helmet>
        <title>Fitness Hub | Yoga, Zumba & Nutrition in Coimbatore</title>
        <meta name="description" content="All-in-one fitness membership: Yoga, Zumba, Meditation, and Diet plans." />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-green-200 text-green-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            Total Body Wellness
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            One Membership. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-600">
              Unlimited Possibilities.
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience a holistic approach to fitness combining movement, mind, and nutrition.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {classes.map((item) => (
            <div 
              key={item.id} 
              className={`group relative p-8 rounded-3xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${item.style}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${item.iconBg} bg-opacity-40`}>
                  {item.icon}
                </div>
                {item.id === 5 && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase rounded-full">
                    Most Popular
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="opacity-80 leading-relaxed mb-4">{item.desc}</p>
              
              {/* Visual Learning Context */}
              {item.hasDiagram && item.id === 1 && (
                 <div className="mt-4 text-xs font-semibold opacity-60 flex items-center gap-2">
                    <FaLaptop /> Visual Guide: 

[Image of yoga poses for flexibility]

                 </div>
              )}
              {item.hasDiagram && item.id === 4 && (
                 <div className="mt-4 text-xs font-semibold opacity-60 flex items-center gap-2">
                    <FaAppleAlt /> Visual Guide: 

[Image of healthy eating plate food groups]

                 </div>
              )}
            </div>
          ))}
        </div>

        {/* Membership Card */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            
            {/* Card Content */}
            <div className="relative z-10 flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">The All-Access Pass</h3>
              <p className="text-gray-400 mb-6">Unlock every class, every mode, and every diet plan.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                 <div className="flex items-center gap-2 text-green-400 text-sm font-bold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <FaWifi /> Online (Zoom)
                 </div>
                 <div className="flex items-center gap-2 text-green-400 text-sm font-bold bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <FaMapMarkerAlt /> Offline (Clinic)
                 </div>
              </div>
            </div>

            {/* Pricing Circle */}
            <div className="relative z-10 flex-shrink-0 text-center">
              <div className="text-gray-500 line-through text-lg mb-1">₹1500</div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl font-bold">₹</span>
                <span className="text-6xl font-extrabold tracking-tight text-white">777</span>
                <span className="text-gray-400 font-medium">/mo</span>
              </div>
              <a href="tel:+919943069678" className="mt-6 inline-block w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded-xl transition-colors shadow-lg">
                Join Now
              </a>
            </div>

            {/* Decorative Patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full blur-[80px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FitnessClasses;