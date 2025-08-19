import React from "react";
import kathirvelImg from "../assets/kathirvel.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. V. Kathirvel",
      role: "Chief Varma Therapist",
      img: kathirvelImg,
    },
    {
      name: "Heena",
      role: "Acupuncture Specialist",
      initials: "H",
      bgColor: "bg-green-500",
    },
    {
      name: "Prasanth",
      role: "Yoga Specialist",
      initials: "P",
      bgColor: "bg-blue-500",
    },
    {
      name: "Raji",
      role: "Beauty Therapist",
      initials: "R",
      bgColor: "bg-pink-500",
    },
  ];

  return (
    <section id="team" className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Meet Our <span className="text-green-600">Experts</span>
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Our professional and caring team is dedicated to guiding you towards holistic healing and wellness.
        </p>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Profile Image or Avatar */}
              {member.img ? (
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-green-100 mb-6 transform group-hover:scale-110 transition duration-500"
                />
              ) : (
                <div
                  className={`w-32 h-32 flex items-center justify-center text-white text-3xl font-bold rounded-full shadow-md mb-6 ${member.bgColor}`}
                >
                  {member.initials}
                </div>
              )}

              {/* Info */}
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-green-600 text-sm mt-2">{member.role}</p>

              {/* Hover Interaction */}
              <div className="absolute inset-0 bg-green-600/90 text-white opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center px-4">
                <h4 className="text-2xl font-bold">{member.name}</h4>
                <p className="mt-2 text-sm">{member.role}</p>
                <button className="mt-4 bg-white text-green-700 px-4 py-2 rounded-full shadow-md hover:bg-green-100 transition">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
