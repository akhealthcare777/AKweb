import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const FloatingActionButtons = () => {
  const phoneNumber = "919943069678"; // +91 99430 69678
  const message = "Hello, I’m interested in your services!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const callLink = `tel:+${phoneNumber}`;

  return (
    <div
      className="
        fixed 
        bottom-4 right-4 
        sm:bottom-6 sm:right-6 
        md:bottom-8 md:right-8 
        flex flex-col gap-4 
        z-50
      "
    >
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-500 hover:bg-green-600 
          text-white 
          rounded-full 
          p-3 sm:p-4 md:p-5 
          shadow-lg 
          flex items-center justify-center 
          transition duration-300
          animate-bounce
        "
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
      </a>

     
    </div>
  );
};

export default FloatingActionButtons;
