import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-gradient-to-tr from-[#3B0000] via-[#1A0000] to-[#000000]"
    >
      <h2 className="text-6xl font-extrabold mb-16 text-[#FFA552] drop-shadow-[0_2px_8px_rgba(255,165,82,0.9)] tracking-widest uppercase text-center w-full max-w-7xl">
        Contact Me
      </h2>

      <div className="max-w-7xl w-full flex gap-12 animate-slideUp">

        {/* LEFT SIDE - Contact Information */}
        <div
          className="w-1/2 p-8 bg-[#1a1a1a] rounded-3xl shadow-xl text-[#FFE9B0] flex flex-col gap-8"
          style={{ boxShadow: "0 0 20px rgba(255, 165, 82, 0.6)" }}
        >
          {/* Title without underline */}
          <h3 className="text-3xl font-extrabold mb-8">
            Contact Information
          </h3>

          {/* Cards container */}
          <div className="flex flex-col gap-6">

            {/* Location card */}
            <div className="flex items-center gap-5 bg-[#FFB870]/10 rounded-lg p-5 shadow-md hover:bg-[#FFB870]/20 transition cursor-default">
              <FaMapMarkerAlt className="text-[#FFB870] text-3xl" />
              <div>
                <p className="text-lg font-semibold">Location</p>
                <p className="text-sm text-[#FFDDA0]">Colombo, Sri Lanka</p>
              </div>
            </div>

            {/* Email card */}
            <div className="flex items-center gap-5 bg-[#FFB870]/10 rounded-lg p-5 shadow-md hover:bg-[#FFB870]/20 transition cursor-default">
              <FaEnvelope className="text-[#FFB870] text-3xl" />
              <div>
                <p className="text-lg font-semibold">Email</p>
                <p className="text-sm text-[#FFDDA0]">naleemnabris2002@gmail.com</p>
              </div>
            </div>

            {/* Phone card */}
            <div className="flex items-center gap-5 bg-[#FFB870]/10 rounded-lg p-5 shadow-md hover:bg-[#FFB870]/20 transition cursor-default">
              <FaPhoneAlt className="text-[#FFB870] text-3xl" />
              <div>
                <p className="text-lg font-semibold">Phone</p>
                <p className="text-sm text-[#FFDDA0]">+94 768 679 150</p>
              </div>
            </div>

            {/* Socials card */}
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold mb-2"></p>
              <div className="flex gap-6 text-3xl text-[#FFB870]">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFA552] transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFA552] transition"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFA552] transition"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFA552] transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-1/2 bg-white/10 backdrop-blur-lg rounded-3xl border border-[#FFA552]/60 shadow-xl p-8 flex flex-col gap-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-5 rounded-xl bg-transparent border border-[#FFA552]/40 text-[#FFF5E1] placeholder-[#FFB870] focus:border-[#FFA552] focus:ring-2 focus:ring-[#FFB870] focus:outline-none transition"
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-5 rounded-xl bg-transparent border border-[#FFA552]/40 text-[#FFF5E1] placeholder-[#FFB870] focus:border-[#FFA552] focus:ring-2 focus:ring-[#FFB870] focus:outline-none transition"
              autoComplete="email"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="p-5 rounded-xl bg-transparent border border-[#FFA552]/40 text-[#FFF5E1] placeholder-[#FFB870] focus:border-[#FFA552] focus:ring-2 focus:ring-[#FFB870] focus:outline-none transition md:col-span-2"
              autoComplete="tel"
            />
          </div>

          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full p-5 rounded-xl bg-transparent border border-[#FFA552]/40 text-[#FFF5E1] placeholder-[#FFB870] resize-none focus:border-[#FFA552] focus:ring-2 focus:ring-[#FFB870] focus:outline-none transition"
          />

          <button
            type="submit"
            className="self-start bg-gradient-to-r from-[#FFB870] to-[#FFA552] text-black font-extrabold px-16 py-4 rounded-full shadow-xl hover:brightness-110 active:scale-95 transition transform"
          >
            Send Message
          </button>
        </form>
      </div>

      <style>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.7s ease forwards;
        }
      `}</style>
    </section>
  );
}

export default Contact;
