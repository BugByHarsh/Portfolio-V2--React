import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Particles from "./Components/bg/Particles";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* Cosmos Background Layer */}
      {theme === "cosmos" && (
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Particles />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-10 scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}