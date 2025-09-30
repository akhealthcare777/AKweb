import React from "react";
import { Helmet } from "react-helmet";

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
    const section = document.getElementById("contact"); // 👈 target Contact section
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Academy Programs | Acupuncture, Varmam, Cupping & Reflexology Training in Coimbatore</title>
        <meta 
          name="description" 
          content="Enroll in Agasthiyas Kathir Health Care Academy in Coimbatore for professional courses in Acupuncture, Varmam, Cupping Therapy, Foot Reflexology, and holistic healing. Diploma, Master Diploma, and MD programs available with hands-on training and certification." 
        />
        <meta 
          name="keywords" 
          content="Acupuncture Academy Coimbatore, Varmam Therapy Training, Cupping Therapy Course, Reflexology Training, Diploma in Acupuncture, Master Diploma Acupuncture, MD Acupuncture, Holistic Healing Courses, Pain Relief Therapy Training, Alternative Medicine Academy, Natural Healing Programs, Wellness Education Center, Traditional Therapy Training, Certified Acupuncture Courses, Foot Reflexology Certification, Panchakarma Courses, Healing Therapy Academy, Integrative Health Training, Drug-Free Healing Courses"
        />
        <meta name="author" content="Agasthiyas Kathir Health Care Centre" />
        <meta property="og:title" content="Academy Programs | Acupuncture, Varmam, Cupping & Reflexology Training in Coimbatore" />
        <meta 
          property="og:description" 
          content="Join Agasthiyas Kathir Health Care Academy in Coimbatore to learn Acupuncture, Varmam, Reflexology, and Cupping Therapy. Hands-on training and certification for holistic healing professionals." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/programs" />
        <meta property="og:image" content="https://yourwebsite.com/assets/therapy1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta 
          name="twitter:title" 
          content="Academy Programs | Acupuncture, Varmam, Cupping & Reflexology Training in Coimbatore" 
        />
        <meta 
          name="twitter:description" 
          content="Enroll in professional courses at Agasthiyas Kathir Health Care Academy: Acupuncture, Varmam, Cupping Therapy, Reflexology, Diploma, Master Diploma, MD programs, and holistic healing certification." 
        />
        <meta name="twitter:image" content="https://yourwebsite.com/assets/therapy1.jpg" />
      </Helmet>

      {/* ✅ Section UI */}
      <section id="Programs" className="relative py-20 bg-gradient-to-b from-green-50 via-white to-green-50 overflow-hidden">
        
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
    </>
  );
}
