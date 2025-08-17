import React from "react";
import { FiPhone } from "react-icons/fi"; // Using react-icons for phone icon

const CallNowSection = () => {
  return (
    <section className="bg-green-600 py-12 flex justify-center items-center">
      <a
        href="tel:+919943069678" // Replace with your phone number
        className="flex items-center gap-3 bg-white text-green-600 font-bold px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105"
      >
        <FiPhone className="text-2xl" />
        <span className="text-xl">Call Us Now</span>
      </a>
    </section>
  );
};

export default CallNowSection;
