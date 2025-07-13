import React, { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("education");
  const tabs = ["education", "experience", "achievements"];

  const languages = [
    { flag: "🇬🇧", language: "English", level: "Fluent", bar: "w-[90%]" },
    { flag: "🇱🇰", language: "Tamil", level: "Native", bar: "w-[100%]" },
    { flag: "🌀", language: "Sinhalese", level: "Intermediate", bar: "w-[60%]" },
  ];

  const tabContent = {
    education: [
      {
        icon: "🎓",
        title: "BSc (Hons) in Information Technology",
        subtitle: "SLIIT – Sri Lanka Institute of Information Technology",
        extra: "📊 GPA: 2.72 | 3rd Year, 1st Semester",
      },
      {
        icon: "📘",
        title: "GCE A/L – 2021",
        subtitle: "Muslim Madhya Maha Vidyalaya",
        extra: "🧪 Technology Stream | Passed all subjects in one sitting",
      },
      {
        icon: "💻",
        title: "Computer Application Assistant",
        subtitle: "Vocational Training Authority – NVQ Level 3",
      },
      {
        icon: "📗",
        title: "GCE O/L",
        subtitle: "✅ Passed all subjects in one sitting",
      },
    ],
    
    achievements: [
      // Leadership & Participation
      {
        icon: "🏅",
        title: "Certificate of Participation – LEADERSTEP 2.0",
        subtitle: "Leo Club of SLIIT | Leoistic Year 23/24",
      },
      {
        icon: "🏆",
        title: "Certificate of Leadership Award",
        subtitle: "Board of Discipline",
      },
      {
        icon: "🧠",
        title: "Certificate of Participation – Leadership & Personality Development",
        subtitle: "All Island Training Programs | Thames College",
      },
      // Sports
      {
        icon: "⚽",
        title: "Football Champion – Divisional Meet",
        subtitle: "National Youth Sports Festival | 2017",
      },
      {
        icon: "🏐",
        title: "Netball Champion – Divisional Meet",
        subtitle: "National Youth Sports Festival | 2019",
      },
      {
        icon: "🥇",
        title: "Kabbadi Champion – Eastern Province",
        subtitle: "Department of Sports | 2015",
      },
    ],
    experience: [
      {
        icon: "🛠️",
        title: "Internship at Tech Solutions",
        subtitle: "Software Development Intern | Jun 2023 - Aug 2023",
        extra:
          "Worked on frontend features using React and improved UI responsiveness.",
      },
      {
        icon: "💼",
        title: "Freelance Web Developer",
        subtitle: "Jan 2022 - Present",
        extra:
          "Design and development of small business websites using React and Tailwind CSS.",
      },
    ],
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center px-6 py-20 bg-gradient-to-br from-[#3B0000] via-[#1A0000] to-[#000000]"
    >
      <h2 className="text-6xl font-extrabold mb-16 text-[#FFA552] drop-shadow-[0_2px_8px_rgba(255,165,82,0.9)] tracking-widest uppercase text-center w-full max-w-7xl">
        About Me
      </h2>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* WHO I AM */}
          <div className="bg-[#1f1f1f] border border-[#FFA552] rounded-xl p-8 shadow-lg text-[#FFF5E1]">
            <h3 className="text-2xl font-extrabold text-[#FFA552] mb-4">
              Profile
            </h3>
            <p className="text-lg leading-relaxed">
              I'm a third-year Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), passionate about building innovative and impactful digital solutions. With solid hands-on experience in full-stack development and mobile app design, I specialize in crafting efficient, user-friendly applications using modern technologies like React, Node.js, PHP, and Kotlin.
              I love working in collaborative environments, solving real-world problems, and continuously exploring new tools, frameworks, and design patterns. Whether it’s web or mobile, frontend or backend, I approach every project with passion, creativity, and a strong growth mindset—always striving to stay ahead in the fast-evolving tech world.
            </p>
          </div>

          {/* LANGUAGES */}
          <div className="bg-[#1f1f1f] border border-[#FFA552] rounded-xl p-8 shadow-lg text-[#FFF5E1]">
            <h3 className="text-2xl font-extrabold text-[#FFA552] mb-6">
              🌐 Languages
            </h3>
            <div className="space-y-6">
              {languages.map(({ flag, language, level, bar }, i) => (
                <div key={i}>
                  <div className="flex items-center gap-4 mb-1">
                    <span className="text-2xl">{flag}</span>
                    <div>
                      <p className="font-semibold text-lg">{language}</p>
                      <p className="text-sm text-[#FFD7A5]">{level}</p>
                    </div>
                  </div>
                  <div className="h-2 bg-[#4D2C14] rounded-full overflow-hidden">
                    <div className={`h-full bg-[#FFA552] ${bar}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-2 flex flex-col">
          <div className="bg-[#1f1f1f] border border-[#FFA552] rounded-xl shadow-lg text-[#FFF5E1] p-8">
            {/* TABS */}
            <div className="flex justify-center flex-wrap gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-lg border-2 transition-colors duration-300 ${
                    activeTab === tab
                      ? "bg-[#FFA552] text-black border-[#FFA552] shadow-md"
                      : "bg-transparent text-[#FFA552] border-[#D88400] hover:bg-[#FF8C42] hover:text-black hover:border-[#FF8C42]"
                  }`}
                >
                  <span className="text-xl">
                    {tab === "education"
                      ? "🎓"
                      : tab === "experience"
                      ? "💼"
                      : "🏆"}
                  </span>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* TAB CONTENT */}
            {tabContent[activeTab].map(({ icon, title, subtitle, extra }, i) => (
              <div
                key={i}
                className="flex items-start mb-10 relative last:mb-0"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFA552] text-black flex justify-center items-center absolute left-0 top-1 text-2xl font-bold shadow">
                  {icon}
                </div>
                <div className="pl-16">
                  <p className="font-extrabold text-lg text-[#FFA552]">{title}</p>
                  <p>{subtitle}</p>
                  {extra && (
                    <p className="mt-1 text-[#FFA552] font-semibold">{extra}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
