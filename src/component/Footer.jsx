import React from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaYoutube 
} from "react-icons/fa";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ChevronRight 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-slate-300 font-sans overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* ✅ INCREASED WIDTH HERE: max-w-[1600px] */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Top Section: Newsletter CTA */}
        <div className="py-12 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Join our Wellness Community</h3>
            <p className="text-slate-400 text-sm">Get holistic health tips and exclusive offers delivered to your inbox.</p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
             <input 
               type="email" 
               placeholder="Enter your email" 
               className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-green-500 text-white w-full sm:w-72 transition-colors"
             />
             <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
               Subscribe <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-white tracking-wide">Agasthiyas Kathir</span>
              <span className="text-xs font-bold text-green-500 uppercase tracking-[0.2em]">Health Care Centre</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Restoring balance through the ancient wisdom of Siddha, Varma, and Acupuncture. Your journey to natural healing starts here.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, url: "https://www.facebook.com/AKHealthcare777" },
                { icon: <FaInstagram />, url: "https://www.instagram.com/agasthiyaskathir_healthcare/" },
                { icon: <FaWhatsapp />, url: "https://wa.me/919943069678" },
                { icon: <FaYoutube />, url: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Academy', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="group flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors">
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-green-500 transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Treatments</h4>
            <ul className="space-y-3">
              {['Acupuncture', 'Varma Therapy', 'Chiropractic', 'Detox Therapy', 'Yoga & Meditation'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors">
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-green-500 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  No 36, Subramaniyam Palayam Road, <br/>
                  Back Side Priya Ladies Hostel, <br/>
                  Gn Mills, Coimbatore - 641029
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919943069678" className="text-sm text-slate-400 hover:text-white transition">+91 99430 69678</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="mailto:akhealthcare777@gmail.com" className="text-sm text-slate-400 hover:text-white transition">
                  akhealthcare777@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Agasthiyas Kathir Health Care Centre. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;