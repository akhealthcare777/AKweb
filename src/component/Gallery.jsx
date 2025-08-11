import React from "react";
import backAcupuncture from "../assets/backAcupuncture.jpg";
import facialAcupuncture from "../assets/facialAcupuncture.jpg";
import neckVarma from "../assets/neckVarma.jpg";
import handAcupuncture from "../assets/handAcupuncture.jpg";
import traditionalVarma from "../assets/traditionalVarma.jpg";
import stressRelief from "../assets/stressRelief.jpg";

const ServicesAndGallery = () => {
  const services = [
    {
      title: "Varmam Maruthuvam",
      desc: "Ancient healing technique using vital energy points for pain relief and wellness.",
      icon: <span className="text-3xl">🌀</span>,
    },
    {
      title: "Needle Acupuncture",
      desc: "Precise needle therapy to balance internal energy and treat ailments naturally.",
      icon: <span className="text-3xl">🧬</span>,
    },
    {
      title: "Nadi Sugam (Chiropractic)",
      desc: "Spinal and joint adjustments to improve posture and restore body alignment.",
      icon: <span className="text-3xl">💫</span>,
    },
  ];

  const treatmentsGallery = [
  {
    title: "Acupuncture",
    img: backAcupuncture,
    desc: "Precise needle therapy to relieve pain, balance energy, and treat chronic conditions naturally.",
  },
  {
    title: "Varmam",
    img: traditionalVarma,
    desc: "Ancient Siddha-based energy point therapy to stimulate healing and restore vital balance.",
  },
  {
    title: "Chiropractic",
    img: neckVarma,
    desc: "Spinal and joint manipulation to improve mobility, relieve back pain, and align posture.",
  },
  {
    title: "Panchakarma",
    img: handAcupuncture,
    desc: "Ayurvedic detox and rejuvenation process that cleanses the body through five powerful actions.",
  },
  {
    title: "Cupping",
    img: facialAcupuncture,
    desc: "Suction-based therapy to increase blood flow, relieve muscle knots, and promote natural healing.",
  },
  {
    title: "Detoxing",
    img: stressRelief,
    desc: "Deep cleansing treatments that flush out toxins and rejuvenate your body and mind.",
  },
];


  const BackgroundSVG = () => (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      <path
        d="M 0,50 Q 50,10 100,50 T 200,50"
        stroke="url(#lineGradient)"
        strokeWidth="0.4"
        fill="none"
      />
    </svg>
  );

  return (
    <>
      {/* Services */}
      <section className="relative py-20 bg-slate-50 w-full overflow-hidden">
        <BackgroundSVG />
        <div className="relative w-full px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Special Treatments</h2>
          <div className="w-full flex flex-wrap justify-center gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[300px] bg-white p-6 rounded-xl shadow hover:shadow-lg text-center transition"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Gallery */}
      <section className="relative py-20 bg-white w-full overflow-hidden">
        <BackgroundSVG />
        <div className="relative w-full px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Treatments Gallery</h2>
          <div className="w-full flex flex-wrap justify-center gap-8">
            {treatmentsGallery.map(({ title, desc, img }) => (
              <div
                key={title}
                className="w-full sm:w-[300px] bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <img src={img} alt={title} className="w-full h-60 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stepper */}
      <section className="relative py-12 bg-slate-50 w-full overflow-hidden">
        <BackgroundSVG />
        <div className="relative w-full px-6">
          <ul className="flex flex-row justify-center items-center gap-4">
            {[1, 2, 3].map((step) => (
              <li key={step} className="flex items-center gap-2 group transition hover:scale-105">
                <span className="w-8 h-8 flex items-center justify-center bg-green-600 text-white font-bold rounded-full">
                  {step}
                </span>
                {step < 3 && (
                  <div className="w-16 h-1 bg-green-200 group-hover:bg-green-500 transition"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ServicesAndGallery;
