import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Online Marketing Store System",
      description:
        "An Online Marketing Store automates product listings, orders, and customer account management. It handles inventory, sales tracking, payments, and provides notifications and reports to improve marketing and decision-making",
      image: "/images/online.jpg",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      github: "https://github.com/yourusername/online-marketing-store",
      category: "Web",
    },
    {
      title: "Online Property Management System",
      description:
        "Java-based system for landlords to manage tenants, rents, property listings, and maintenance requests in one platform.",
      image: "/images/land.png",
      technologies: ["Java", "MySQL", "JDBC"],
      github: "https://github.com/Naleem-Nabriz/PropertyManagement-OOP",
      category: "Web",
    },
    {
      title: "Cloud Kitchen System",
      description:
        "The Cloud Kitchen System is developed using the MERN stack to manage online food orders and kitchen operations efficiently. It streamlines order processing, delivery tracking, and menu management for a smooth customer experience.",
      image: "/images/cloud.png",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Naleem-Nabriz/CloudKitchen",
      category: "Web",
    },
    {
      title: "Personal Finance Tracker (Mobile)",
      description:
        "Helps users manage expenses, income, and savings with charts and categories using Kotlin and SQLite.",
      image: "/images/money.png",
      technologies: ["Kotlin", "Android Studio", "SQLite"],
      github: "https://github.com/Naleem-Nabriz/Personal-Finance-Tracker-",
      category: "Mobile",
    },
    {
      title: "BLUEWAVE HOTEL",
      description:
        "BlueWave Hotel is a welcoming place where guests can enjoy clean rooms, friendly service, and great facilities. Perfect for travelers looking for comfort and convenience during their stay.",
      image: "/images/hotel.png",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/Naleem-Nabriz/Blue-Wave-hotel",
      category: "Web",
    },
    {
      title: "Rent Car App (Figma)",
      description:
        "An innovative car rental app prototype crafted in Figma, showcasing a clean design and user-centric features to simplify vehicle selection, booking, and payment processes.",
      image: "/images/car.png",
      technologies: ["Figma"],
      github: "https://github.com/yourusername/rent-car-app",
      category: "Design",
    },
    {
      title: "9BEATS Music App",
      description:
        "A sleek music app that lets users stream, search, and enjoy their favorite songs anytime. Built for smooth listening and a personalized audio experience.",
      image: "/images/music.png",
      technologies: ["Figma"],
      github: "https://github.com/yourusername/music-app",
      category: "Design",
    },
    {
      title: "Online Perfume Store",
      description:
        "Our website offers a seamless shopping experience for perfume lovers. Explore a curated collection of premium scents with secure checkout and fast delivery.",
      image: "/images/perfume.png",
      technologies: ["React.js"],
      github: "https://github.com/Naleem-Nabriz/perfume-Store",
      category: "Web",
    },
  ];

  const categories = ["All", "Web", "Mobile", "Design"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-[#2e0500] via-[#0f0f0f] to-black px-6 py-20 text-white"
    >
      <h2 className="text-6xl font-extrabold mb-16 text-[#FFA552] drop-shadow-[0_2px_8px_rgba(255,165,82,0.9)] tracking-widest uppercase text-center w-full max-w-7xl">
        Projects
      </h2>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold border-2 transition-all duration-300 shadow-md
                ${
                  isActive
                    ? "bg-gradient-to-r from-[#FFA552] to-[#FF7F50] text-black border-transparent shadow-[#FFA552]/60"
                    : "bg-transparent text-[#FFA552] border-[#FFA552] hover:bg-[#FFA552] hover:text-black hover:shadow-[#FFA552]/40"
                }`}
            >
              {cat === "Web"
                ? "💻 Web Projects"
                : cat === "Mobile"
                ? "📱 Mobile Apps"
                : cat === "Design"
                ? "🎨 Design Prototypes"
                : "🔄 All"}
            </button>
          );
        })}
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredProjects.map(
          ({ title, description, image, technologies, github }, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border border-[#FFB347]/20 hover:shadow-[#FFA552]/50 transition-transform duration-300 hover:scale-[1.03] flex flex-col"
            >
              <div className="relative group">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-[#FFA552]">
                  {title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 flex-grow">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-[#FFA552]/10 text-[#FFA552] border border-[#FFA552]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#FFB347] hover:text-white transition-colors duration-300"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
