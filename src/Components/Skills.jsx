import React, { useState } from "react";

function Skills() {
  const softSkills = [
    { name: "Communication", icon: "💬" },
    { name: "Teamwork", icon: "🤝" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Time Management", icon: "⏰" },
    { name: "Adaptability", icon: "🌱" },
    { name: "Creativity", icon: "🎨" },
    { name: "Leadership", icon: "🚀" },
    { name: "Critical Thinking", icon: "🧠" },
    { name: "Attention to Detail", icon: "🔍" },
  ];

  const [activeTab, setActiveTab] = useState("languages");

  const tabData = {
    languages: {
      label: "Languages",
      color: "bg-blue-600",
      skills: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      ],
    },
    frameworks: {
      label: "Frameworks",
      color: "bg-yellow-500",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      ],
    },
    tools: {
      label: "Tools",
      color: "bg-pink-500",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
        { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" },
        { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
      ],
    },
  };

  const active = tabData[activeTab];

  return (
    <section id="skills" className="min-h-screen py-24 px-6 bg-gradient-to-br from-[#2e0500] via-[#0f0f0f] to-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-extrabold mb-16 text-[#FFA552] drop-shadow-[0_2px_8px_rgba(255,165,82,0.9)] tracking-widest uppercase text-center w-full max-w-7xl">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Soft Skills */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#FFA552]/20 shadow-lg">
            <h3 className="text-3xl font-semibold text-center text-[#FFA552] mb-8">
              🌟 Soft Skills
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {softSkills.map(({ name, icon }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-[#ffffff12] border border-[#FFA552]/30 rounded-xl p-5 hover:scale-105 transition duration-300"
                >
                  <div className="text-3xl mb-2">{icon}</div>
                  <p className="text-sm font-medium text-center">{name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#FFA552]/20 shadow-lg">
            <h3 className="text-3xl font-semibold text-center text-[#FFA552] mb-8">
              🧰 Tools & Technologies
            </h3>
            <div className="flex justify-center gap-4 flex-wrap mb-6">
              {Object.keys(tabData).map((key) => {
                const tab = tabData[key];
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-5 py-2 rounded-full font-bold transition duration-300 hover:scale-105 shadow ${
                      isActive ? `${tab.color} text-white` : "bg-white/10 text-white border border-white/20"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5">
              {active.skills.map(({ name, icon }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-white/10 p-4 rounded-xl shadow-md border border-white/10 hover:scale-105 transition"
                >
                  <img src={icon} alt={name} className="w-10 h-10 mb-2" />
                  <p className="text-xs font-medium text-center">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
