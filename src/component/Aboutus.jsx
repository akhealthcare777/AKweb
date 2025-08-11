import React from "react";

// Import images from assets folder
import therapy1 from "../assets/therapy1.jpg";
import therapy2 from "../assets/therapy2.jpg";
import therapy3 from "../assets/therapy3.jpg";
import therapy4 from "../assets/therapy4.jpg";

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
        className="bg-gradient-to-br from-green-50 via-white to-green-100 py-28 px-6"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Content */}
          <div>
            <h2 className="text-5xl font-extrabold text-green-900 leading-snug mb-8">
              Healing Through <span className="text-green-600">Ancient Wisdom</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Agasthiyas Kathir Health Care Centre is where tradition meets modern wellness.
              With expertise in authentic Varma and Acupuncture treatments, we are dedicated 
              to enhancing physical, emotional, and spiritual well-being.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Rooted in Siddha practices and supported by modern anatomy, our therapies aim 
              to restore harmony using drug-free, non-invasive techniques.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Each treatment is delivered by experienced professionals committed 
              to guiding you on your healing journey.
            </p>

            {/* Contact Us Button */}
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={therapy1}
              alt="Therapy 1"
              className="rounded-3xl object-cover h-100 w-full shadow-lg hover:scale-105 transition duration-300"
            />
            <img
              src={therapy2}
              alt="Therapy 2"
              className="rounded-3xl object-cover h-100 w-full shadow-lg hover:scale-105 transition duration-300 mt-10"
            />
            <img
              src={therapy3}
              alt="Therapy 3"
              className="rounded-3xl object-cover h-100 w-full shadow-lg hover:scale-105 transition duration-300"
            />
            <img
              src={therapy4}
              alt="Therapy 4"
              className="rounded-3xl object-cover h-100 w-full shadow-lg hover:scale-105 transition duration-300 mt-10"
            />
          </div>
        </div>

        {/* Elements Section */}
        <div className="mt-24 max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-green-800 mb-12">
            The Five Elements of Nature
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {elements.map((el) => (
              <div
                key={el.name}
                className="transition transform hover:scale-110 bg-white border border-green-100 p-8 rounded-2xl shadow-md hover:shadow-xl cursor-pointer"
              >
                <div className="text-4xl mb-4">{el.icon}</div>
                <h4 className="text-xl font-semibold text-green-900">{el.name}</h4>
                <p className="text-gray-600 text-sm">Element of Nature</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAndServices;
