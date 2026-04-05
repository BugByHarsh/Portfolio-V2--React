import { useTheme } from "../context/ThemeContext";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isMinimal = theme === "minimal";

  const navItems = ["home", "about", "services", "projects", "contact"];

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);

  const containerRef = useRef(null);
  const indicatorRef = useRef(null);

  // Wait for fonts before positioning indicator
  useEffect(() => {
    document.fonts.ready.then(() => setFontsReady(true));
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      navItems.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActive(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reposition indicator whenever active changes or fonts become ready
  useEffect(() => {
    if (!fontsReady) return;
    const activeElement = document.getElementById(`nav-${active}`);
    if (activeElement && indicatorRef.current && containerRef.current) {
      const { offsetLeft, offsetWidth } = activeElement;
      indicatorRef.current.style.width = `${offsetWidth}px`;
      indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
    }
  }, [active, fontsReady]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      {/* Main Bar */}
      <div
        className={`border-y transition-all duration-500 ${
          isMinimal
            ? "bg-white/30 backdrop-blur-xl border-gray-500 shadow-sm"
            : "bg-black/30 backdrop-blur-xl border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className={`font-semibold rounded-sm py-1 px-2 text-sm ${
                isMinimal ? "bg-black text-white" : "bg-violet-400 text-black"
              }`}
            >
              HU
            </div>
            <h1
              className={`font-semibold text-xl tracking-wide ${
                isMinimal ? "text-black" : "text-violet-400"
              }`}
            >
              Harsh Upadhyay
            </h1>
          </div>

          {/* Desktop Nav Links */}
          <div
            ref={containerRef}
            className={`relative hidden md:flex items-center gap-10 text-sm font-medium ${
              isMinimal ? "text-gray-700" : "text-white"
            }`}
          >
            {/* Sliding Indicator */}
            <span
              ref={indicatorRef}
              className={`absolute bottom-0 h-[2px] transition-all duration-300 ${
                fontsReady ? "opacity-100" : "opacity-0"
              } ${isMinimal ? "bg-black" : "bg-violet-400"}`}
            />

            {navItems.map((item) => (
              <button
                id={`nav-${item}`}
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize relative py-1 transition duration-300 ${
                  active === item
                    ? isMinimal ? "text-black" : "text-violet-400"
                    : isMinimal ? "hover:text-black" : "hover:text-violet-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right side: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            {/* Theme Toggle — shows current theme as a dot indicator */}
            <p className="md:block hidden">
            theme : 
            </p>
            <button
              onClick={toggleTheme}
              className={`hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isMinimal
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white/10 backdrop-blur-md text-white border border-violet-200 hover:bg-white/20"
              }`}
              >
              {/* Active theme dot */}
              <span
                className={`w-2 h-2 rounded-full ${
                  isMinimal ? "bg-white" : "bg-violet-400"
                }`}
              />
              {isMinimal ? "Minimal" : "Cosmos"}
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md transition-all duration-300 ${
                isMinimal
                  ? "hover:bg-gray-100"
                  : "hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 origin-center ${
                  isMinimal ? "bg-black" : "bg-white"
                } ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
              />
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 ${
                  isMinimal ? "bg-black" : "bg-white"
                } ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 origin-center ${
                  isMinimal ? "bg-black" : "bg-white"
                } ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${
          isMinimal
            ? "bg-white/50 backdrop-blur-xl border-y border-gray-700"
            : "bg-black/80 backdrop-blur-xl border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize text-left py-3 px-2 text-sm font-medium ztransition-all duration-200 border-b last:border-b-0 ${
                isMinimal
                  ? "border-gray-700 text-gray-700 hover:bg-gray-50 hover:text-black"
                  : "border-white/90 text-white/80 hover:bg-white/5 hover:text-violet-400"
              } ${
                active === item
                  ? isMinimal
                    ? "text-black font-semibold"
                    : "text-violet-400 font-semibold"
                  : ""
              }`}
            >
              {active === item && (
                <span
                  className={`inline-block w-1.5 h-1.5 rounded-full mr-2 mb-0.5 ${
                    isMinimal ? "bg-black": "bg-violet-400"
                  }`}
                />
              )}
             {item}
            </button>
          ))}

          {/* Theme toggle inside mobile menu */}
          <button
            onClick={toggleTheme}
            className={`mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isMinimal
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white/10 text-white border border-violet-300/30 hover:bg-white/20"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isMinimal ? "bg-white" : "bg-violet-400"
              }`}
            />
            Switch to {isMinimal ? "Cosmos" : "Minimal"}
          </button>
        </div>
      </div>
    </nav>
  );
}