import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChatButton = () => {
  const phoneNumber = "919943069678"; // +91 99430 69678
  const message = "Hello, I’m interested in your services!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-4 right-4 
        sm:bottom-6 sm:right-6 
        md:bottom-8 md:right-8
        bg-green-500 hover:bg-green-600 
        text-white 
        rounded-full 
        p-3 sm:p-4 md:p-5 
        shadow-lg 
        z-50 
        flex items-center justify-center 
        transition duration-300
      "
      title="Chat with us on WhatsApp"
    >
      {/* Bigger Icon */}
      <FaWhatsapp className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12" />
    </a>
  );
};

export default WhatsAppChatButton;
