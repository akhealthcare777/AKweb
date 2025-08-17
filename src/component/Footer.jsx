import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-tr from-green-50 via-emerald-100 to-white text-gray-800 border-t border-green-200">
      {/* Main Footer Content */}
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 py-14 sm:py-20 lg:py-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-14 lg:gap-20">
        
        {/* Logo & Address */}
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-7 sm:leading-8">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-800">
            Healing Touch Clinic
          </div>
          <p>
            No 36, Subramaniyam Palayam Road,<br />
            Back Side Priya Ladies Hostel, Bharathi Nagar 1st Street,<br />
            Subramaniyam Palayam, Gn Mills-641029
          </p>
          <p>Phone: <a href="tel:+919943069678" className="hover:text-green-600">+91 99430 69678</a></p>
          <p>Email: <a href="mailto:akhealthcarecentre@gmail.com" className="hover:text-green-600">akhealthcare777@gmail.com</a></p>
        </div>

        {/* Treatments */}
        <div className="text-base sm:text-lg leading-7 sm:leading-8">
          <h4 className="text-green-800 font-bold text-xl sm:text-2xl mb-4 sm:mb-6">Treatments</h4>
          <ul className="space-y-2 sm:space-y-3">
            <li><a href="#" className="hover:text-green-600">Acupuncture</a></li>
            <li><a href="#" className="hover:text-green-600">Varma Therapy</a></li>
            <li><a href="#" className="hover:text-green-600">Pain Management</a></li>
            <li><a href="#" className="hover:text-green-600">Migraine Relief</a></li>
          </ul>
        </div>

        {/* Yoga & Wellness */}
        <div className="text-base sm:text-lg leading-7 sm:leading-8">
          <h4 className="text-green-800 font-bold text-xl sm:text-2xl mb-4 sm:mb-6">Yoga & Wellness</h4>
          <ul className="space-y-2 sm:space-y-3">
            <li><a href="#" className="hover:text-green-600">Therapeutic Yoga</a></li>
            <li><a href="#" className="hover:text-green-600">Breathing Exercises</a></li>
            <li><a href="#" className="hover:text-green-600">Meditation Classes</a></li>
            <li><a href="#" className="hover:text-green-600">Stress Management</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-green-800 font-bold text-xl sm:text-2xl mb-4 sm:mb-6">Connect with Us</h4>
          <div className="flex gap-4 sm:gap-6 text-3xl sm:text-4xl text-green-700">
            {/* <a
              href="https://www.facebook.com/YourPageName"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-green-900 transition" />
            </a> */}
            <a
              href="https://www.instagram.com/agasthiyas_kathir_health_care/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-600 transition" />
            </a>
            <a
              href="https://wa.me/919943069678"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-600 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-100 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 py-6 sm:py-8 flex flex-col md:flex-row justify-between items-center text-sm sm:text-base text-gray-500 gap-4 md:gap-0">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Agasthiyas Kathir Health Care Centre. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
