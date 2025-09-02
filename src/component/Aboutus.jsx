import React from "react";

// Import images from assets folder
import therapy1 from "../assets/therapy1.jpg";
import therapy2 from "../assets/therapy2.jpg";
import therapy3 from "../assets/therapy3.jpg";
import therapy4 from "../assets/therapy4.jpg";
import Best from "../assets/beststudent.webp";

const AboutAndServices = () => {
  const elements = [
    { name: "Air", icon: "💨" },
    { name: "Water", icon: "💧" },
    { name: "Earth", icon: "🌍" },
    { name: "Fire", icon: "🔥" },
    { name: "Space", icon: "✨" },
  ];

  return (
    <>
      {/* About Us Section */}
      <section
        id="about"
        className="bg-gradient-to-br from-green-50 via-white to-green-100 py-16 sm:py-24 px-4 sm:px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-900 leading-snug mb-6">
              Healing Through <span className="text-green-600">Ancient Wisdom</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
              Agasthiyas Kathir Health Care Centre is where tradition meets modern wellness.
              With expertise in authentic Varma and Acupuncture treatments, we are dedicated 
              to enhancing physical, emotional, and spiritual well-being.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
              Rooted in Siddha practices and supported by modern anatomy, our therapies aim 
              to restore harmony using drug-free, non-invasive techniques.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Each treatment is delivered by experienced professionals committed 
              to guiding you on your healing journey.
            </p>

            {/* Contact Us Button */}
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105 text-sm sm:text-base md:text-lg"
            >
              Contact Us
            </a>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <img
              src={therapy1}
              alt="Therapy 1"
              className="rounded-2xl sm:rounded-3xl object-cover w-full max-w-full aspect-square shadow-lg hover:scale-105 transition duration-300"
            />
            <img
              src={therapy2}
              alt="Therapy 2"
              className="rounded-2xl sm:rounded-3xl object-cover w-full max-w-full aspect-square shadow-lg hover:scale-105 transition duration-300 mt-2 sm:mt-4"
            />
            <img
              src={therapy3}
              alt="Therapy 3"
              className="rounded-2xl sm:rounded-3xl object-cover w-full max-w-full aspect-square shadow-lg hover:scale-105 transition duration-300"
            />
            <img
              src={therapy4}
              alt="Therapy 4"
              className="rounded-2xl sm:rounded-3xl object-cover w-full max-w-full aspect-square shadow-lg hover:scale-105 transition duration-300 mt-2 sm:mt-4"
            />
            <img
              src={Best}
              alt="Best Student"
              className="rounded-2xl sm:rounded-3xl object-cover w-full max-w-full aspect-video shadow-lg hover:scale-105 transition duration-300 mt-2 sm:mt-4 col-span-2"
            />
          </div>
        </div>

        {/* Elements Section */}
        <div className="mt-16 sm:mt-24 max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-green-800 mb-8 sm:mb-12">
            The Five Elements of Nature
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 text-center">
            {elements.map((el) => (
              <div
                key={el.name}
                className="transition transform hover:scale-110 bg-white border border-green-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl cursor-pointer"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{el.icon}</div>
                <h4 className="text-lg sm:text-xl font-semibold text-green-900">{el.name}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Element of Nature</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAndServices;
