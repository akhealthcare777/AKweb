import React from "react";
import { Star, CheckCircle, Quote, User, PenTool } from "lucide-react";

const Review = () => {
  const reviews = [
    {
      name: "அருண் குமார்",
      initial: "அ",
      date: "July 10, 2023",
      verified: true,
      stars: 5,
      text: "நான் பல வருடங்களாக முதுகு வலி கொண்டு தவித்தேன். இங்கு அகுபங்சர் சிகிச்சை பெற்ற பின் மிகுந்த நிம்மதி கிடைத்தது. மருத்துவர்கள் மிகவும் கனிவாக நடந்து கொண்டனர்.",
      color: "bg-blue-100 text-blue-700"
    },
    {
      name: "John Peter",
      initial: "J",
      date: "Sept 20, 2023",
      verified: true,
      stars: 5,
      text: "I had severe migraine issues for years. After the acupuncture sessions here, my pain reduced drastically. The facility is spotless and the vibe is very healing.",
      color: "bg-emerald-100 text-emerald-700"
    },
    {
      name: "மாலதி ராஜேஷ்",
      initial: "மா",
      date: "Aug 02, 2023",
      verified: true,
      stars: 5,
      text: "சிகிச்சை மிகுந்த பயனுள்ளதாக இருந்தது. தூக்கமின்மை பிரச்சினையும் தீர்ந்தது. நன்றி! இங்குள்ள சூழல் மனதிற்கு அமைதி தருகிறது.",
      color: "bg-rose-100 text-rose-700"
    },
    {
      name: "Priya Suresh",
      initial: "P",
      date: "Oct 12, 2023",
      verified: false,
      stars: 4,
      text: "Good experience overall. The clinic is clean and the staff is very friendly. I would recommend this to anyone looking for natural healing methods.",
      color: "bg-purple-100 text-purple-700"
    },
    {
      name: "சந்தோஷ் வெங்கடேஷ்",
      initial: "ச",
      date: "Aug 15, 2023",
      verified: false,
      stars: 4,
      text: "சிகிச்சை முறைகள் சுத்தமாகவும் தொழில்நுட்ப ரீதியாகவும் இருந்தது. இன்னும் சில அமர்வுகள் எடுக்க விரும்புகிறேன்.",
      color: "bg-amber-100 text-amber-700"
    },
    {
      name: "Sarah Williams",
      initial: "S",
      date: "Nov 05, 2023",
      verified: true,
      stars: 5,
      text: "Amazing detox therapy! I felt lighter and more energetic immediately after the session. Best wellness center in Coimbatore.",
      color: "bg-teal-100 text-teal-700"
    }
  ];

  return (
    <section className="bg-stone-50 py-24 px-4 sm:px-6 lg:px-12 font-sans relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#166534 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= HEADER DASHBOARD ================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left: Title & Call to Action */}
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Loved by <span className="text-green-700">Thousands.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-lg leading-relaxed">
              Real stories from patients who found relief through our holistic treatments. We are proud to maintain a 98% satisfaction rate.
            </p>
            <button className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium transition hover:bg-slate-700 hover:shadow-lg">
              <PenTool className="w-4 h-4" /> Write a Review
            </button>
          </div>

          {/* Right: The Stats Box */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col sm:flex-row items-center gap-8">
            {/* Big Score */}
            <div className="text-center sm:text-left">
              <div className="text-6xl font-extrabold text-slate-900 leading-none">4.8</div>
              <div className="flex text-yellow-400 my-2 text-xl justify-center sm:justify-start">
                 {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
              </div>
              <div className="text-sm text-slate-400 font-medium">Based on 2,418 reviews</div>
            </div>

            {/* Progress Bars */}
            <div className="flex-1 w-full space-y-2">
               {[5, 4, 3, 2, 1].map((star, i) => (
                  <div key={star} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                    <span className="w-3">{star}</span>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-400 rounded-full" 
                        style={{ width: `${[85, 25, 10, 5, 2][i]}%` }}
                      ></div>
                    </div>
                  </div>
               ))}
            </div>
          </div>
        </div>

        {/* ================= MASONRY REVIEWS GRID ================= */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 group-hover:text-green-50 transition-colors" fill="currentColor" />

              {/* User Profile */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-inner ${review.color}`}>
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-slate-400">{review.date}</span>
                    {review.verified && (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-700 border border-green-100">
                        <CheckCircle className="w-3 h-3" /> Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star 
                    key={idx} 
                    size={14} 
                    fill={idx < review.stars ? "currentColor" : "none"} 
                    className={idx < review.stars ? "text-yellow-400" : "text-slate-200"}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Review;