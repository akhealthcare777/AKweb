import React from "react";

// Import team images from assets
import kathirvelImg from "../assets/kathirvel.jpg";
import TeenaImg from "../assets/Teena.jpg";
import PrasanthImg from "../assets/Prasanth.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. V. Kathirvel",
      role: "Chief Varma Therapist",
      img: kathirvelImg,
    },
    {
      name: " Heena ",
      role: "Acupuncture Specialist",
      img: PrasanthImg,
    },
    {
      name: "Prasanth.",
      role: "Yoga specialist",
      img: PrasanthImg,
    },
  ];

  return (
    <section id="team" className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Meet Our Team
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Captured like a professional photo studio, our team is here to guide you with care and expertise.
        </p>

        <div className="grid gap-14 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Portrait Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[420px] object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
              />

              {/* Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                              opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-green-300 text-sm mt-1">{member.role}</p>
              </div>

              {/* Always Visible Caption */}
              <div className="bg-white text-center py-4 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                <p className="text-sm text-green-700">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
