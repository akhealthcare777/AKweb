import React from "react";
import { FaDumbbell, FaLaptop, FaUsers, FaHeartbeat, FaAppleAlt } from "react-icons/fa";

const FitnessClasses = () => {
  const classes = [
    {
      title: "Meditation",
      desc: "Calm your mind and improve focus with guided meditation sessions.",
      icon: <FaHeartbeat />,
    },
    {
      title: "Yoga",
      desc: "Improve flexibility, strength, and balance through regular practice.",
      icon: <FaUsers />,
    },
    {
      title: "Zumba",
      desc: "Fun and energetic dance workouts to boost your fitness levels.",
      icon: <FaDumbbell />,
    },
    {
      title: "Nutrition & Diet Plan",
      desc: "Personalized diet plans for better health and lifestyle.",
      icon: <FaAppleAlt />,
    },
    {
      title: "Weight Loss",
      desc: "Structured programs to help you achieve your ideal weight.",
      icon: <FaLaptop />,
    },
    {
      title: "Weight Gain",
      desc: "Healthy strategies to build muscle and increase weight safely.",
      icon: <FaDumbbell />,
    },
  ];

  return (
    <section id="fitness" className="bg-gradient-to-b from-white to-green-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-green-800 mb-6">Fitness Classes</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          Join our <span className="text-green-700 font-semibold">online and offline</span> sessions 
          to achieve your fitness goals — whether it’s meditation, yoga, or personalized diet plans, 
          we’ve got you covered.
        </p>

        {/* Class Cards */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          {classes.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-500 flex flex-col items-center text-center relative"
            >
              <div className="text-green-700 text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>

              {/* Unique Price Tag */}
              <div className="bg-green-100 px-5 py-2 rounded-full shadow-md mt-auto">
                <span className="text-gray-500 line-through text-lg mr-2">₹1500</span>
                <span className="text-green-800 font-extrabold text-2xl">₹777</span>
              </div>

              {/* Offer Ribbon */}
              <div className="absolute top-4 right-[-40px] rotate-45 bg-green-700 text-white px-16 py-1 text-sm font-bold shadow-lg">
                LIMITED OFFER
              </div>
            </div>
          ))}
        </div>

        {/* Mode of Classes */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="bg-green-100 px-8 py-6 rounded-2xl shadow-md">
            <h4 className="text-green-800 font-bold text-xl mb-2">💻 Online Classes</h4>
            <p className="text-gray-700">Attend from the comfort of your home via Zoom or Google Meet.</p>
          </div>
          <div className="bg-green-100 px-8 py-6 rounded-2xl shadow-md">
            <h4 className="text-green-800 font-bold text-xl mb-2">🏢 Offline Classes</h4>
            <p className="text-gray-700">Join our in-person sessions at the Healing Touch Clinic.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessClasses;
