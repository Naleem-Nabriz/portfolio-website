import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact /> {/* 👈 Add this */}
      <Footer />
    </div>
  );
}
export default App;