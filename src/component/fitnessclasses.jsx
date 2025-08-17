import React from "react";
import {
  FaDumbbell,
  FaLaptop,
  FaUsers,
  FaHeartbeat,
  FaAppleAlt,
} from "react-icons/fa";

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
    <section
      id="fitness"
      className="bg-gradient-to-b from-green-50 to-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-800 mb-4 sm:mb-6">
          Fitness Classes
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 text-base sm:text-lg md:text-xl leading-relaxed px-2">
          Get <span className="font-bold text-green-700">online & offline</span>{" "}
          fitness programs — meditation, yoga, zumba, nutrition, weight loss &
          gain — all in{" "}
          <span className="text-green-800 font-bold">one affordable plan!</span>
        </p>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-14 sm:mb-16">
          {classes.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-md hover:shadow-2xl transition duration-500 flex flex-col items-center p-6 sm:p-8 md:p-10 text-center border border-green-100"
            >
              <div className="text-green-700 text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="max-w-lg mx-auto bg-gradient-to-r from-green-700 to-green-400 text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl relative">
          <div className="absolute top-[-10px] sm:top-[-12px] md:top-[-15px] right-[-25px] sm:right-[-35px] md:right-[-45px] rotate-45 bg-yellow-400 text-black px-8 sm:px-10 md:px-14 py-1 text-xs sm:text-sm md:text-base font-bold shadow-lg">
            LIMITED OFFER
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3">
            All-in-One Plan
          </h3>
          <p className="text-green-100 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
            Get access to all classes — pay once, join any session!
          </p>
          <div className="flex justify-center items-end gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="text-gray-200 line-through text-lg sm:text-xl md:text-2xl">
              ₹1500
            </span>
            <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold">
              ₹777
            </span>
            <span className="text-sm sm:text-lg md:text-xl font-medium">
              / month
            </span>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 sm:py-3 px-6 sm:px-8 md:px-10 rounded-full transition duration-300 shadow-lg text-sm sm:text-base md:text-lg">
            Join Now
          </button>
        </div>

        {/* Class Modes */}
        <div className="mt-10 sm:mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 px-2">
          <div className="bg-green-100 px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-8 rounded-xl sm:rounded-2xl shadow-md text-center md:text-left">
            <h4 className="text-green-800 font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">
              💻 Online Classes
            </h4>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Attend from the comfort of your home via Zoom or Google Meet.
            </p>
          </div>
          <div className="bg-green-100 px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-8 rounded-xl sm:rounded-2xl shadow-md text-center md:text-left">
            <h4 className="text-green-800 font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">
              🏢 Offline Classes
            </h4>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Join our in-person sessions at the Healing Touch Clinic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessClasses;
