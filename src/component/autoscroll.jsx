import React from "react";

const treatments = [
  "Acupuncture",
  "Varma Therapy",
  "Panchakarma",
  "Chiropractic Care",
  "Cupping Therapy",
  "Detoxing",
  "Pain Relief",
  "Migraine Treatment",
  "Yoga Classes",
  "Meditation",
  "Zumba Fitness",
  "Weight Loss Therapy",
  "Stress Management",
  "Herbal Medicine",
  "Physiotherapy",
];

const AutoScrollTreatments = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-green-50 to-emerald-100 py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...treatments, ...treatments].map((item, index) => (
          <span
            key={index}
            className="mx-6 text-lg md:text-xl font-semibold text-green-700 hover:text-green-900 transition duration-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Extra overlay for smooth edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-green-50 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-emerald-100 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default AutoScrollTreatments;
