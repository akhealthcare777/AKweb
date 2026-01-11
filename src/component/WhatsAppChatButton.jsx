import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingActionButtons = () => {
  const phoneNumber = "919943069678"; 
  const message = "Hello, I would like to book an appointment.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const callLink = `tel:+${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-6 animate-fade-in-up">
      
      {/* ================= PHONE BUTTON ================= */}
      <a
        href={callLink}
        className="group relative flex items-center justify-end"
      >
        {/* Hover Label */}
        <div className="absolute right-20 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          <div className="bg-white/90 backdrop-blur-md text-slate-800 text-sm font-bold px-4 py-2 rounded-xl shadow-lg border border-white/50 whitespace-nowrap">
            Call Clinic
          </div>
        </div>

        {/* Button Container (Increased Size: w-16 h-16) */}
        <div className="w-16 h-16 bg-white text-blue-600 rounded-full shadow-xl border border-blue-50 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 hover:rotate-12">
          {/* Icon (Increased Size: w-8 h-8) */}
          <FaPhoneAlt className="w-8 h-8" />
        </div>
      </a>

      {/* ================= WHATSAPP BUTTON ================= */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-end"
      >
        {/* Chat Bubble (Desktop) */}
        <div className="absolute right-24 hidden md:flex items-center">
             <div className="bg-white text-slate-800 text-sm font-bold px-4 py-2 rounded-l-xl rounded-t-xl shadow-xl border border-green-50 transform origin-right transition-transform group-hover:scale-105">
                Chat with Dr. Kathirvel 👋
             </div>
             {/* Tiny Triangle */}
             <div className="w-4 h-4 bg-white transform rotate-45 -translate-x-1.5 mt-1 border-r border-b border-green-50"></div>
        </div>

        {/* Pulse Effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>

        {/* Button Container (Same Size: w-16 h-16) */}
        <div className="relative w-16 h-16 bg-gradient-to-tr from-green-600 to-emerald-400 rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
          
          {/* Icon (Same Size: w-8 h-8) */}
          <FaWhatsapp className="w-9 h-9 text-white" />
          
          {/* Notification Badge */}
          <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">1</span>
          </div>
        </div>
      </a>

    </div>
  );
};

export default FloatingActionButtons;