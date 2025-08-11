import React from "react";

const ContactSection = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "739dd0e6-3904-4615-be3f-29878e3dd49e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("✅ Message Sent Successfully!");
      event.target.reset();
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white py-28 px-6"
    >
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 lg:p-14 border border-green-100">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Book a <span className="text-green-700">Consultation</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help you heal naturally. Schedule an appointment or ask us a question.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-green-200 p-4 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full rounded-xl border border-green-200 p-4 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full rounded-xl border border-green-200 p-4 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              className="w-full rounded-xl border border-green-200 p-4 focus:ring-2 focus:ring-green-400 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
