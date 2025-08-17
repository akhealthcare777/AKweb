// import React from "react";

// // Import team images from assets
// import kathirvelImg from "../assets/kathirvel.jpg";
// import TeenaImg from "../assets/Teena.jpg";
// import PrasanthImg from "../assets/Prasanth.jpg";

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       name: "Dr. V. Kathirvel",
//       role: "Chief Varma Therapist",
//       img: kathirvelImg,
//     },
//     {
//       name: "Heena",
//       role: "Acupuncture Specialist",
//       img: PrasanthImg,
//     },
//     {
//       name: "Prasanth",
//       role: "Yoga Specialist",
//       img: PrasanthImg,
//     },
//     {
//       name: "Raji",
//       role: "Beauty Therapist",
//       img: PrasanthImg,
//     },
//   ];

//   return (
//     <section
//       id="team"
//       className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-x-auto"
//     >
//       <div className="max-w-[1600px] mx-auto text-center">
//         <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
//           Meet Our Team
//         </h2>
//         <p className="text-gray-600 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
//           Captured like a professional photo studio, our team is here to guide
//           you with care and expertise.
//         </p>

//         {/* Horizontal Scrollable Row */}
//         <div className="flex gap-10 justify-center min-w-max px-4">
//           {teamMembers.map((member, i) => (
//             <div
//               key={i}
//               className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 w-[280px] flex-shrink-0"
//             >
//               {/* Portrait Image */}
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="w-full h-[380px] object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
//               />

//               {/* Overlay Info */}
//               <div
//                 className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
//                               opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6"
//               >
//                 <h3 className="text-2xl font-bold text-white">{member.name}</h3>
//                 <p className="text-green-300 text-sm mt-1">{member.role}</p>
//               </div>

//               {/* Always Visible Caption */}
//               <div className="bg-white text-center py-4 shadow-md">
//                 <h4 className="text-lg font-semibold text-gray-900">
//                   {member.name}
//                 </h4>
//                 <p className="text-sm text-green-700">{member.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;
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
      bgColor: "bg-green-400",
    },
    {
      name: "Prasanth",
      role: "Yoga Specialist",
      initials: "P",
      bgColor: "bg-blue-400",
    },
    {
      name: "Raji",
      role: "Beauty Therapist",
      initials: "R",
      bgColor: "bg-pink-400",
    },
  ];

  return (
    <section
      id="team"
      className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-x-auto"
    >
      <div className="max-w-[1600px] mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Meet Our Team
        </h2>
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          Captured like a professional photo studio, our team is here to guide
          you with care and expertise.
        </p>

        {/* Horizontal Scrollable Row */}
        <div className="flex gap-10 justify-center min-w-max px-4">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 w-[280px] flex-shrink-0"
            >
              {/* Portrait Image or Avatar */}
              {member.img ? (
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[380px] object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
                />
              ) : (
                <div
                  className={`w-full h-[380px] flex items-center justify-center text-white text-6xl font-bold ${member.bgColor}`}
                >
                  {member.initials}
                </div>
              )}

              {/* Overlay Info */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                            opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6"
              >
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-green-300 text-sm mt-1">{member.role}</p>
              </div>

              {/* Always Visible Caption */}
              <div className="bg-white text-center py-4 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h4>
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
