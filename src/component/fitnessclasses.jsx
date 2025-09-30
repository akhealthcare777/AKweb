import React from "react";
import { Helmet } from "react-helmet";
import {
  FaDumbbell,
  FaLaptop,
  FaUsers,
  FaHeartbeat,
  FaAppleAlt,
} from "react-icons/fa";

const FitnessClasses = () => {
  const classes = [
    { title: "Meditation", desc: "Calm your mind and improve focus with guided meditation sessions.", icon: <FaHeartbeat />, bgColor: "from-green-400 to-green-600", iconBg: "bg-green-600" },
    { title: "Yoga", desc: "Improve flexibility, strength, and balance through regular practice.", icon: <FaUsers />, bgColor: "from-emerald-400 to-emerald-600", iconBg: "bg-emerald-600" },
    { title: "Zumba", desc: "Fun and energetic dance workouts to boost your fitness levels.", icon: <FaDumbbell />, bgColor: "from-lime-400 to-lime-600", iconBg: "bg-lime-600" },
    { title: "Nutrition & Diet Plan", desc: "Personalized diet plans for better health and lifestyle.", icon: <FaAppleAlt />, bgColor: "from-yellow-400 to-yellow-600", iconBg: "bg-yellow-600" },
    { title: "Weight Loss", desc: "Structured programs to help you achieve your ideal weight.", icon: <FaLaptop />, bgColor: "from-teal-400 to-teal-600", iconBg: "bg-teal-600" },
    { title: "Weight Gain", desc: "Healthy strategies to build muscle and increase weight safely.", icon: <FaDumbbell />, bgColor: "from-cyan-400 to-cyan-600", iconBg: "bg-cyan-600" },
  ];

  return (
    <section
      id="fitness"
      className="bg-gradient-to-b from-green-50 to-white py-16 px-6 sm:px-12 lg:px-20"
    >
      <Helmet>
        <title>Fitness Classes in Coimbatore | Yoga, Meditation, Zumba, Diet & Weight Management</title>
        <meta
          name="description"
          content="Join our fitness classes in Coimbatore: online & offline Yoga, Meditation, Zumba, Nutrition plans, Weight Loss & Weight Gain programs. Affordable holistic wellness plan for mind and body."
        />
        <meta
          name="keywords"
          content="Fitness classes Coimbatore, Yoga classes online, Meditation sessions, Zumba workouts, Weight loss program Coimbatore, Weight gain program, Nutrition and diet plan, Holistic health programs, Wellness classes, Online fitness coaching, Personal training, Mind and body wellness, Healthy lifestyle, Exercise programs, Meditation for stress relief, Functional fitness classes, Gym and wellness center"
        />
        <meta name="author" content="Healing Touch Clinic" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Fitness Classes in Coimbatore | Yoga, Meditation, Zumba, Diet & Weight Management" />
        <meta property="og:description" content="Enroll in online & offline fitness classes: Yoga, Meditation, Zumba, Nutrition, Weight Loss & Gain programs at Healing Touch Clinic, Coimbatore." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/fitness" />
        <meta property="og:image" content="https://yourwebsite.com/assets/fitness-banner.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fitness Classes in Coimbatore | Yoga, Meditation, Zumba, Diet & Weight Management" />
        <meta name="twitter:description" content="Join Healing Touch Clinic for holistic fitness: online & offline Yoga, Meditation, Zumba, Nutrition plans, and Weight programs to improve health and wellness." />
        <meta name="twitter:image" content="https://yourwebsite.com/assets/fitness-banner.webp" />
      </Helmet>

      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-900 mb-6">
          Fitness Classes
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto mb-14 text-lg sm:text-xl md:text-2xl leading-relaxed px-4">
          Get{" "}
          <span className="font-extrabold text-green-700">online & offline</span>{" "}
          fitness programs — meditation, yoga, zumba, nutrition, weight loss & gain — all in{" "}
          <span className="text-green-900 font-extrabold">
            one affordable plan!
          </span>
        </p>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {classes.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 bg-gradient-to-br ${item.bgColor} text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer`}
            >
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full mb-6 shadow-xl ${item.iconBg} bg-opacity-90`}
              >
                <div className="text-4xl">{item.icon}</div>
              </div>
              <h3 className="text-2xl font-extrabold mb-3 drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed drop-shadow-sm">
                {item.desc}
              </p>
              <span className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/20 blur-3xl pointer-events-none"></span>
              <span className="absolute bottom-6 left-6 w-16 h-16 rounded-full bg-white/10 blur-xl pointer-events-none"></span>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-10 sm:p-14 mt-20 shadow-2xl border border-green-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-tr from-yellow-400 to-yellow-300 rounded-bl-full opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-tr-full opacity-30 -z-10"></div>

          <div className="inline-block px-6 py-1 bg-yellow-400 text-black font-bold rounded-full text-sm sm:text-base shadow-lg mb-6">
            LIMITED OFFER
          </div>
          <h3 className="text-4xl font-extrabold text-green-900 mb-3">
            All-in-One Plan
          </h3>
          <p className="text-green-700 mb-8 text-lg sm:text-xl">
            Get access to all classes — pay once, join any session!
          </p>
          <div className="flex justify-center items-end gap-3 mb-8">
            <span className="text-gray-400 line-through text-xl sm:text-2xl">
              ₹1500
            </span>
            <span className="text-5xl sm:text-6xl font-extrabold text-green-900">
              ₹777
            </span>
            <span className="text-lg sm:text-xl font-semibold text-green-700">
              / month
            </span>
          </div>

          <a
            href="tel:+919943069678"
            className="block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold py-4 rounded-full shadow-lg text-lg transition duration-300"
          >
            Join Now
          </a>
        </div>

        {/* Class Modes */}
        <div className="mt-16 flex flex-col md:flex-row justify-center gap-8 px-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 bg-green-100 rounded-full px-8 py-5 shadow-md hover:shadow-lg transition-shadow cursor-default">
            <span className="text-green-700 text-3xl">💻</span>
            <div>
              <h4 className="text-green-900 font-extrabold text-xl sm:text-2xl">
                Online Classes
              </h4>
              <p className="text-green-800 text-base sm:text-lg max-w-md">
                Attend from the comfort of your home via Zoom or Google Meet.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-green-100 rounded-full px-8 py-5 shadow-md hover:shadow-lg transition-shadow cursor-default">
            <span className="text-green-700 text-3xl">🏢</span>
            <div>
              <h4 className="text-green-900 font-extrabold text-xl sm:text-2xl">
                Offline Classes
              </h4>
              <p className="text-green-800 text-base sm:text-lg max-w-md">
                Join our in-person sessions at the Healing Touch Clinic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessClasses;
