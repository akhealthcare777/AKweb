import React, { useState } from "react";
import LeftIllustration from "../assets/illustration-left.jpg";
import RightIllustration from "../assets/illustration-right.jpg";

// Example backside images
import back1 from "../assets/back1.webp";
import back2 from "../assets/back3.webp";
import back3 from "../assets/back2.webp";
import back4 from "../assets/back4.webp";
import back5 from "../assets/back5.webp";
import back6 from "../assets/back6.webp";

const ServicesSection = () => {
  const services = [
    { title: "Varma Therapy", desc: "Traditional healing using pressure points.", icon: "🌿", backImg: back1 },
    { title: "Chiropractic", desc: "Spinal alignment Pain relief Posture correction  Lifestyle balance", icon: "🍃", backImg: back2 },
    { title: "Acupuncture", desc: "Needle therapy to release blockages.", icon: "🧬", backImg: back3 },
    { title: "Detox Therapy", desc: "Flush toxins with natural techniques.", icon: "💧", backImg: back4 },
    { title: "Massage Therapy", desc: "Stress relief with therapeutic massages.", icon: "💆‍♂️", backImg: back5 },
    { title: "Yoga & Meditation", desc: "Balance body and mind.", icon: "🧘‍♀️", backImg: back6 },
  ];

  // Track which card is flipped
  const [flippedCards, setFlippedCards] = useState(Array(services.length).fill(false));

  const handleFlip = (index) => {
    setFlippedCards((prev) => {
      const newFlips = [...prev];
      newFlips[index] = !newFlips[index];
      return newFlips;
    });
  };

  return (
    <section id="services" className="py-24 bg-gray-50 px-6 min-h-[110vh]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Illustration */}
        <div className="hidden lg:block w-1/5">
          <img src={LeftIllustration} alt="Illustration-left" className="w-full h-auto" />
        </div>

        {/* Services Content */}
        <div className="w-full lg:w-3/5 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">Our Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map(({ title, desc, icon, backImg }, idx) => (
              <div key={title} className="perspective cursor-pointer" onClick={() => handleFlip(idx)}>
                <div
                  className={`relative w-full h-[300px] transition-transform duration-700 transform-style preserve-3d ${
                    flippedCards[idx] ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 bg-white rounded-2xl p-10 shadow-md border backface-hidden flex flex-col items-center justify-center">
                    <div className="text-4xl mb-6">{icon}</div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
                    <p className="text-gray-600 text-base">{desc}</p>
                    <span className="text-sm text-blue-600 mt-4">(Tap to flip)</span>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden rotate-y-180">
                    <img src={backImg} alt={title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden lg:block w-1/5">
          <img src={RightIllustration} alt="Illustration-right" className="w-full h-auto" />
        </div>
      </div>

      <style>
        {`
          .perspective { perspective: 1000px; }
          .preserve-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
        `}
      </style>
        {/* Interactive Yin-Yang Symbol */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-24 relative rounded-full overflow-hidden border-4 border-gray-800 rotate-45 hover:rotate-[405deg] transition-all duration-700 ease-in-out shadow-xl cursor-pointer bg-gradient-to-tr from-white via-gray-200 to-black">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-black flex justify-center items-center">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white flex justify-center items-center">
                <div className="w-4 h-4 bg-black rounded-full" />
              </div>
            </div>
          </div>
    </section>
  );
};

export default ServicesSection;
