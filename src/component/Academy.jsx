import React from "react";

// Academy Courses Data
const courses = [
  { 
    title: "Diploma in Acupuncture", 
    duration: "1 Year Course", 
    desc: "Learn the fundamentals of acupuncture with hands-on practice and theory.", 
    img: "https://images.unsplash.com/photo-1740689580128-9173edce303f?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    title: "Master Diploma in Acupuncture", 
    duration: "1 Year Course", 
    desc: "Advanced diploma program for a deeper understanding and expertise.", 
    img: "https://images.unsplash.com/photo-1664422542989-cdb441bec285?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    title: "MD (Acupuncture)", 
    duration: "3 Years Course", 
    desc: "Specialized program focusing on in-depth research and clinical practice.", 
    img: "https://images.unsplash.com/photo-1719550371336-7bb64b5cacfa?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    title: "Cupping Therapy", 
    duration: "6 Months Course", 
    desc: "Master the art and science of cupping therapy for holistic healing.", 
    img: "https://images.unsplash.com/photo-1745327883389-17150e99dcf7?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    title: "Foot Reflexology", 
    duration: "6 Months Course", 
    desc: "Hands-on training in reflexology to promote wellness and relaxation.", 
    img: "https://plus.unsplash.com/premium_photo-1661274102571-b58fab96be9d?w=500&auto=format&fit=crop&q=60" 
  },
  { 
    title: "Varmam", 
    duration: "1 Year Course", 
    desc: "Traditional therapy course focusing on energy points and healing.", 
    img: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=500&auto=format&fit=crop&q=60" 
  },
];

export default function AcademySection() {
  const handleRedirect = () => {
    const section = document.getElementById("#programs");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="Programs" className="relative py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#22c55e"
            d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,138.7C672,149,768,203,864,213.3C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-14">
          Our Academy Programs
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-2xl overflow-hidden border border-green-200 hover:shadow-2xl hover:scale-105 transform transition duration-300"
            >
              <img
                src={course.img}
                alt={course.title}
                className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="p-8 text-left">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-green-700">
                  {course.title}
                </h3>
                <p className="mt-3 text-green-600 font-medium">{course.duration}</p>
                <p className="mt-5 text-gray-600 leading-relaxed text-sm">
                  {course.desc}
                </p>
                <button 
                  onClick={handleRedirect}
                  className="mt-8 w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
