import React from "react";
import { Helmet } from "react-helmet"; // ✅ SEO Head Manager
import { Wind, Droplets, Globe, Flame, Sparkles } from "lucide-react"; // ✅ Icons

// Import images from assets folder
import therapy1 from "../assets/therapy1.jpg";
import therapy2 from "../assets/therapy2.jpg";
import therapy3 from "../assets/therapy3.jpg";
import therapy4 from "../assets/therapy4.jpg";
import Best from "../assets/beststudent.webp";

const AboutAndServices = () => {
  const elements = [
    { name: "Air", icon: <Wind className="w-10 h-10 text-green-600" /> },
    { name: "Water", icon: <Droplets className="w-10 h-10 text-green-600" /> },
    { name: "Earth", icon: <Globe className="w-10 h-10 text-green-600" /> },
    { name: "Fire", icon: <Flame className="w-10 h-10 text-green-600" /> },
    { name: "Space", icon: <Sparkles className="w-10 h-10 text-green-600" /> },
  ];

  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>About Us | Agasthiyas Kathir Health Care Centre</title>
        <meta
          name="description"
          content="Discover holistic healing at Agasthiyas Kathir Health Care Centre. Specializing in Acupuncture, Varma, Reflexology, and Cupping Therapy with drug-free, natural treatments."
        />
        <meta
          name="keywords"
          content="Acupuncture, Varma Therapy, Reflexology, Cupping Therapy, Natural Healing, Siddha Medicine, Holistic Health, Traditional Therapy, Drug-Free Healing, Agasthiyas Kathir"
        />
      </Helmet>

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
              alt="Acupuncture therapy session"
              className="rounded-2xl sm:rounded-3xl object-cover w-full aspect-square shadow-lg hover:scale-105 transition duration-300"
            />
            <img
              src={therapy2}
              alt="Varma therapy"
              className="rounded-2xl sm:rounded-3xl object-cover w-full aspect-square shadow-lg hover:scale-105 transition duration-300 mt-2 sm:mt-4"
            />
            <img
              src={therapy3}
              alt="Reflexology treatment"
              className="rounded-2xl sm:rounded-3xl object-cover w-full aspect-square shadow-lg hover:scale-105 transition duration-300"
            />
            <img
              src={therapy4}
              alt="Cupping therapy"
              className="rounded-2xl sm:rounded-3xl object-cover w-full aspect-square shadow-lg hover:scale-105 transition duration-300 mt-2 sm:mt-4"
            />
            <img
              src={Best}
              alt="Awarded best student in healthcare"
              className="rounded-2xl sm:rounded-3xl object-cover w-full aspect-video shadow-lg hover:scale-105 transition duration-300 mt-2 sm:mt-4 col-span-2"
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
                <div className="flex justify-center mb-3 sm:mb-4">{el.icon}</div>
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
