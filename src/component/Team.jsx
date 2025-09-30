import React from "react";
import kathirvelImg from "../assets/kathirvel.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. V. Kathirvel",
      role: "Chief Varma Therapist",
      img: kathirvelImg,
      bio: "Expert in traditional Varma therapy with 20+ years of experience.",
    },
    {
      name: "Heena",
      role: "Acupuncture Specialist",
      initials: "H",
      bgColor: "bg-green-500",
      bio: "Certified acupuncture specialist focused on holistic healing.",
    },
    {
      name: "Prasanth",
      role: "Yoga Specialist",
      initials: "P",
      bgColor: "bg-blue-500",
      bio: "Passionate yoga instructor helping you find balance and strength.",
    },
    {
      name: "Raji",
      role: "Beauty Therapist",
      initials: "R",
      bgColor: "bg-pink-500",
      bio: "Skilled beauty therapist enhancing natural glow and wellness.",
    },
  ];

  return (
    <section
      id="team"
      className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Meet Our <span className="text-green-600">Experts</span>
        </h2>
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
          Our professional and caring team is dedicated to guiding you towards holistic healing and wellness.
        </p>

        {/* Team Grid */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
            >
              {/* Image or Avatar */}
              <div className="relative w-full h-72 rounded-t-3xl overflow-hidden">
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center text-white text-6xl font-extrabold ${member.bgColor}`}
                  >
                    {member.initials}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-green-600 text-sm mt-1">{member.role}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-green-700 bg-opacity-90 text-white p-6 flex flex-col justify-center items-center opacity-0 translate-y-full hover:translate-y-0 hover:opacity-100 transition-all duration-300 rounded-3xl">
                <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                <p className="text-center text-sm mb-4">{member.bio}</p>
                <button className="bg-white text-green-700 px-5 py-2 rounded-full font-semibold hover:bg-green-100 transition">
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
