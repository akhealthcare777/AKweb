import React, { useState } from "react";
import { 
  MapPin, Phone, Clock, 
  CheckCircle2, AlertCircle, ArrowRight 
} from "lucide-react";

const ContactSection = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(event.target);
    // Replace with your actual Web3Forms Access Key
    formData.append("access_key", "739dd0e6-3904-4615-be3f-29878e3dd49e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setStatus("success");
        event.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-24 bg-stone-50 overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-64 bg-emerald-900/5 -skew-y-3 origin-top-left transform -translate-y-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Split Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
          
          {/* LEFT SIDE: Contact Information (Dark Theme) */}
          <div className="lg:w-5/12 bg-emerald-900 text-white p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden">
            {/* Abstract Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-100 text-xs font-bold tracking-widest uppercase mb-6">
                Get in Touch
              </span>
              <h2 className="text-4xl font-serif font-bold mb-6 leading-tight">
                Ready to start your healing journey?
              </h2>
              <p className="text-emerald-100/80 text-lg mb-12">
                Visit our clinic or send us a message. We are here to guide you towards a balanced life.
              </p>

              {/* Info List */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Visit Us</h4>
                    <p className="text-emerald-100/70 text-sm leading-relaxed mt-1">
                      No 36, Subramaniyam Palayam Road,
Back Side Priya Ladies Hostel, Bharathi Nagar 1st Street,
Subramaniyam Palayam, Gn Mills <br/>
                      Coimbatore, Tamil Nadu -641029
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-emerald-100/70 text-sm mt-1">+91 99430 69678</p>
                    <p className="text-emerald-100/70 text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Clinic Hours</h4>
                    <p className="text-emerald-100/70 text-sm mt-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-emerald-100/70 text-sm">Sun: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Decoration */}
            <div className="mt-12 lg:mt-0 pt-8 border-t border-emerald-800/50">
               <p className="text-xs text-emerald-500 font-medium uppercase tracking-wider">
                 Agasthiyas Kathir Health Care
               </p>
            </div>
          </div>

          {/* RIGHT SIDE: Booking Form (Light Theme) */}
          <div className="lg:w-7/12 p-10 lg:p-16 bg-white relative">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Book an Appointment</h3>
            
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">How can we help?</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your symptoms or preferred appointment time..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2"
              >
                {loading ? (
                   <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-green-50 text-green-700 border border-green-200 flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">Message sent! We will contact you shortly.</span>
                </div>
              )}
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center gap-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Full Width Map Container */}
        <div className="mt-8 h-80 w-full rounded-[2rem] overflow-hidden shadow-lg border border-slate-200 relative group">
          <div className="absolute inset-0 pointer-events-none group-hover:pointer-events-none border-[10px] border-white/50 rounded-[2rem] z-10"></div>
          <iframe
            title="Clinic Location"
            src="https://maps.google.com/maps?q=Coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="grayscale group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
          
          {/* Map Overlay Badge */}
          <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-sm font-bold text-slate-800">Locate Us on Map</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;