import React from "react";
import { FiPhone } from "react-icons/fi"; // Using react-icons for phone icon

const CallNowSection = () => {
  return (
    <section className="bg-green-600 py-10 sm:py-12 flex justify-center items-center">
      <a
        href="tel:+919943069678"
        className="flex items-center gap-2 sm:gap-3 bg-white text-green-600 font-bold 
                   px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl 
                   transition transform hover:scale-105"
      >
        <FiPhone className="text-xl sm:text-2xl md:text-3xl" />
        <span className="text-lg sm:text-xl md:text-2xl">Call Us Now</span>
      </a>
    </section>
  );
};

export default CallNowSection;
