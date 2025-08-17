import React, { useState } from "react";

const ContactSection = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(event.target);
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
        setStatus("✅ Message Sent Successfully!");
        event.target.reset();
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("⚠️ Network error. Please try again later.");
    }

    setLoading(false);
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
              className="w-full rounded-xl border border-green-200 p-4 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Your Phone Number"
              className="w-full rounded-xl border border-green-200 p-4 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-green-200 p-4 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message (Optional)"
              className="w-full rounded-xl border border-green-200 p-4 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 bg-green-600 text-white py-4 rounded-xl font-semibold transition duration-300 shadow-md hover:bg-green-700 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></span>
            ) : (
              "Send Message"
            )}
          </button>

          {/* Status message */}
          {status && (
            <p
              className={`mt-4 text-center font-medium ${
                status.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
