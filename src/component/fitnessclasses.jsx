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
      className="bg-gradient-to-b from-green-50 to-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-green-800 mb-6">
          Fitness Classes
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          Get <span className="font-bold text-green-700">online & offline</span>{" "}
          fitness programs — meditation, yoga, zumba, nutrition, weight loss &
          gain — all in{" "}
          <span className="text-green-800 font-bold">one affordable plan!</span>
        </p>

        {/* Classes Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 mb-20">
          {classes.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 flex flex-col items-center p-8 text-center border border-green-100"
            >
              <div className="text-green-700 text-6xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="max-w-xl mx-auto bg-gradient-to-r from-green-700 to-green-400 text-white rounded-3xl p-10 shadow-2xl relative">
          <div className="absolute top-[-15px] right-[-45px] rotate-45 bg-yellow-400 text-black px-14 py-1 text-sm font-bold shadow-lg">
            LIMITED OFFER
          </div>
          <h3 className="text-3xl font-extrabold mb-3">All-in-One Plan</h3>
          <p className="text-green-100 mb-6">
            Get access to all classes — pay once, join any session!
          </p>
          <div className="flex justify-center items-end gap-3 mb-6">
            <span className="text-gray-200 line-through text-xl">₹1500</span>
            <span className="text-5xl font-extrabold">₹777</span>
            <span className="text-lg font-medium">/ month</span>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
            Join Now
          </button>
        </div>

        {/* Class Modes */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="bg-green-100 px-8 py-6 rounded-2xl shadow-md">
            <h4 className="text-green-800 font-bold text-xl mb-2">
              💻 Online Classes
            </h4>
            <p className="text-gray-700">
              Attend from the comfort of your home via Zoom or Google Meet.
            </p>
          </div>
          <div className="bg-green-100 px-8 py-6 rounded-2xl shadow-md">
            <h4 className="text-green-800 font-bold text-xl mb-2">
              🏢 Offline Classes
            </h4>
            <p className="text-gray-700">
              Join our in-person sessions at the Healing Touch Clinic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessClasses;
