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
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center transition duration-300"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppChatButton;
