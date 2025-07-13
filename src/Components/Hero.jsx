import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import NabrisImage from "../assets/face.png";

function Hero() {
  const roles = [
    "UI/UX Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "MERN Stack Developer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, typingSpeed / 2);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roles, currentRoleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-10"
      style={{
        background: "linear-gradient(135deg, #3B0000, #000000)",
      }}
    >
      {/* Text Container */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFDBAC] via-[#FFA552] to-[#FF9472] drop-shadow-2xl animate-pulse">
          Hi, I'm Nabris
        </h1>

        <p className="text-3xl md:text-4xl mb-4 leading-snug font-extrabold tracking-wide min-h-[3rem] text-[#FFF5E1]">
          I'm a{" "}
          <span
            className="font-extrabold animate-text bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 bg-clip-text text-transparent"
            style={{
              animationDuration: "4s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}
          >
            {displayedText}
          </span>
          <span className="inline-block w-1 h-8 bg-yellow-300 animate-blink ml-1" />
        </p>

        <p className="text-[#FFF5E1] text-lg md:text-xl mb-8 leading-relaxed font-light font-serif tracking-wide">
          My goal is to further develop my skills and experience in a dynamic work
          environment. I aim to secure a challenging career opportunity where I
          can utilize my skills, education, and knowledge in IT, while working as
          part of a team. I am motivated, dependable, and enjoy contributing
          positively in public-facing roles.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-8">
          <a
            href="https://github.com/Naleem-Nabriz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#FFF5E1] hover:text-[#FFA552] transition font-medium"
          >
            <FaGithub size={24} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#FFF5E1] hover:text-[#FFA552] transition font-medium"
          >
            <FaLinkedin size={24} /> LinkedIn
          </a>

          {/* ✅ Working Resume Download Link */}
          <a
            href="public/pdf/Nabris_Professional_Resume.pdf"
            download
            className="inline-block text-black bg-[#FFA552] font-semibold px-5 py-2 rounded-full shadow hover:bg-[#FF9472] transition"
          >
            📄 Download CV
          </a>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex-1 flex justify-center items-center px-4">
        <div className="relative group bg-gradient-to-br from-[#FFA55233] to-[#FF947220] p-[2px] rounded-[30px] transition-transform duration-500 hover:scale-105">
          <div className="bg-[#1f1f1f] backdrop-blur-lg rounded-[26px] p-4 shadow-[0_10px_60px_rgba(255,165,82,0.2)]">
            <img
              src={NabrisImage}
              alt="Nabris"
              className="rounded-2xl w-72 h-80 object-cover border-2 border-[#FFF5E1] shadow-inner transition duration-500 group-hover:shadow-[#FFA552]"
            />
            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold text-[#FFF5E1]">Naleem Nabris</h3>
              <p className="text-[#FFA552] text-sm mt-1">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }

        @keyframes textGradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-text {
          background-size: 200% 200%;
          animation-name: textGradient;
          animation-duration: 4s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </section>
  );
}

export default Hero;
