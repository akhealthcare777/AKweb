import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { 
  Clock, 
  BookOpen, 
  ChevronRight, 
  Award, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

// Categorized Data
const courses = [
  { 
    id: 1,
    category: "Diploma",
    title: "Diploma in Acupuncture", 
    duration: "1 Year", 
    tags: ["Best Seller", "Govt Reg"],
    desc: "The foundational course. Learn the complete meridian system, 5-element theory, and needle techniques.", 
    img: "https://images.pexels.com/photos/6193364/pexels-photo-6193364.jpeg" 
  },
  { 
    id: 2,
    category: "Advanced",
    title: "Master Diploma (MD)", 
    duration: "1 Year", 
    tags: ["Advanced", "Clinical"],
    desc: "Expert-level diagnosis, pulse reading, and treating chronic ailments. Designed for existing practitioners.", 
    img: "https://images.pexels.com/photos/6094073/pexels-photo-6094073.jpeg" 
  },
  { 
    id: 3,
    category: "Advanced",
    title: "Doctorate (MD Acu)", 
    duration: "3 Years", 
    tags: ["Research", "Thesis"],
    desc: "The highest level of academic excellence in Acupuncture with a focus on research and hospital management.", 
    img: "https://images.pexels.com/photos/8313196/pexels-photo-8313196.jpeg" 
  },
  { 
    id: 4,
    category: "Short Term",
    title: "Cupping Therapy (Hijama)", 
    duration: "6 Months", 
    tags: ["Hands-on", "Wet & Dry"],
    desc: "Master the ancient art of suction cup therapy for detoxification, pain relief, and blood flow stimulation.", 
    img: "https://images.pexels.com/photos/8312866/pexels-photo-8312866.jpeg" 
  },
  { 
    id: 5,
    category: "Short Term",
    title: "Foot Reflexology", 
    duration: "6 Months", 
    tags: ["Relaxation", "No Tools"],
    desc: "Learn to heal internal organs by stimulating specific pressure points on the feet.", 
    img: "https://plus.unsplash.com/premium_photo-1661274102571-b58fab96be9d?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    id: 6,
    category: "Diploma",
    title: "Varmam Therapy", 
    duration: "1 Year", 
    tags: ["Traditional", "Energy"],
    desc: "A rare martial art based healing therapy focusing on the body's vital energy points (Varmam).", 
    img: "https://images.pexels.com/photos/275768/pexels-photo-275768.jpeg" 
  },
];

const categories = ["All", "Diploma", "Advanced", "Short Term"];

export default function AcademySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  const handleRedirect = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Academy Programs | Agasthiyas Kathir Health Care</title>
      </Helmet>

      <section id="Programs" className="relative py-24 bg-slate-50 overflow-hidden font-sans">
        
        {/* Subtle Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-200/30 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-green-100 shadow-sm text-green-700 text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
              <Sparkles className="w-3 h-3 text-yellow-500" />
              World Class Curriculum
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Shape Your Future in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-teal-600">
                Alternative Medicine
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              Select a program below to begin your journey. All courses include practical training, study materials, and government-recognized certification.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-green-700 text-white shadow-lg shadow-green-700/20 scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-green-300 hover:text-green-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-green-900/10 hover:-translate-y-2"
              >
                {/* Image Area */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <img
                    src={course.img}
                    alt={course.title}
                    className="h-full w-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                  />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="bg-white/95 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-green-800 shadow-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {course.duration}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {/* Tags Row */}
                  <div className="flex gap-2 mb-3">
                    {course.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-green-700 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 border-l-2 border-green-100 pl-3">
                    {course.desc}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                       <Award className="w-4 h-4 text-yellow-500" />
                       Certificate Included
                    </div>
                    <button 
                      onClick={handleRedirect}
                      className="text-sm font-bold text-green-700 flex items-center gap-1 group/btn"
                    >
                      Syllabus 
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Bottom colored line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-green-400 to-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Quick Stats / Trust Builders */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-200">
            {[
              { label: "Students Trained", val: "5,000+" },
              { label: "Expert Faculties", val: "12+" },
              { label: "Years Excellence", val: "15+" },
              { label: "Job Assistance", val: "100%" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center p-4">
                <span className="text-3xl font-bold text-green-800">{stat.val}</span>
                <span className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}