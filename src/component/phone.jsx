import React from "react";
import { FiPhone } from "react-icons/fi"; // Using react-icons for phone icon

const CallNowFloatingButton = () => {
  return (
    <a
      href="tel:+919943069678"
      className="
        fixed 
        bottom-20 right-4 sm:bottom-24 sm:right-6 md:bottom-28 md:right-8
        bg-blue-600 hover:bg-blue-700 
        text-white 
        rounded-full 
        p-4 sm:p-5 md:p-6 
        shadow-lg 
        z-50 
        flex items-center justify-center 
        transition duration-300 
        animate-bounce
      "
      title="Call Us Now"
    >
      <FiPhone className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />
    </a>
  );
};

export default CallNowFloatingButton;
