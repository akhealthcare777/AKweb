import React from "react";
import { User, Calendar, Award, Linkedin, Mail } from "lucide-react";
import kathirvelImg from "../assets/kathirvel.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. V. Kathirvel",
      role: "Chief Varma Therapist",
      img: kathirvelImg,
      badge: "Founder",
      bio: "20+ Years Exp",
      socials: true
    },
    {
      id: 2,
      name: "Heena",
      role: "Acupuncture Specialist",
      initials: "H",
      gradient: "from-teal-400 to-emerald-600",
      bio: "Certified Specialist"
    },
    {
      id: 3,
      name: "Prasanth",
      role: "Yoga Instructor",
      initials: "P",
      gradient: "from-blue-400 to-indigo-600",
      bio: "Wellness Expert"
    },
    {
      id: 4,
      name: "Raji",
      role: "Beauty Therapist",
      initials: "R",
      gradient: "from-rose-400 to-pink-600",
      bio: "Skin Care Pro"
    },
  ];

  return (
    <section id="team" className="relative py-24 bg-stone-50 overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            Our Healers
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Guided by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-teal-600">Experts</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Meet the dedicated professionals committed to your holistic journey.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group relative h-[420px] rounded-[2rem] overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              
              {/* Image Area */}
              <div className="absolute inset-0 w-full h-full">
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                    <User className="w-24 h-24 text-white opacity-20" />
                    <span className="absolute text-9xl font-bold text-white opacity-10 select-none">
                        {member.initials}
                    </span>
                  </div>
                )}
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              {/* Founder Badge (Only for Dr. Kathirvel) */}
              {member.badge && (
                <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Award className="w-3 h-3" /> {member.badge}
                </div>
              )}

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                
                {/* Name & Role */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-green-300 uppercase tracking-wider mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-2xl font-serif font-bold leading-tight">
                    {member.name}
                  </h3>
                </div>

                {/* Divider Line */}
                <div className="w-12 h-0.5 bg-green-400 mb-4 transition-all duration-500 group-hover:w-full"></div>

                {/* Hidden Bio & Actions (Reveals on Hover) */}
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-slate-200 text-sm mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <button className="flex-1 bg-white text-green-900 py-2.5 rounded-xl text-sm font-bold hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                       <Calendar className="w-3 h-3" /> Book
                    </button>
                    {member.socials && (
                        <>
                            <button className="p-2.5 bg-white/20 hover:bg-white/40 rounded-xl backdrop-blur-md transition">
                                <Linkedin className="w-4 h-4" />
                            </button>
                            <button className="p-2.5 bg-white/20 hover:bg-white/40 rounded-xl backdrop-blur-md transition">
                                <Mail className="w-4 h-4" />
                            </button>
                        </>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;