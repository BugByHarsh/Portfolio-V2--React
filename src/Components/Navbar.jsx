import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function ThemeIcon({ minimal }) {
  return minimal ? (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M20.2 15.2A8.6 8.6 0 0 1 8.8 3.8 8.7 8.7 0 1 0 20.2 15.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m16.5 3 .5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5Z" fill="currentColor" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <span className="relative block h-5 w-5" aria-hidden="true">
      <span className={`absolute left-0 top-1 block h-px w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
      <span className={`absolute left-0 top-[10px] block h-px w-5 bg-current transition-all duration-300 ${open ? "scale-x-0 opacity-0" : ""}`} />
      <span className={`absolute left-0 top-4 block h-px w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
    </span>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isMinimal = theme === "minimal";
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(id);
    setMenuOpen(false);
  };

  useEffect(() => {
    let ticking = false;

    const updateNavigation = () => {
      setScrolled(window.scrollY > 16);

      const marker = window.scrollY + window.innerHeight * 0.32;
      let current = "home";

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });

      setActive(current);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavigation);
        ticking = true;
      }
    };

    updateNavigation();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const shell = isMinimal
    ? "border border-stone-200/90 bg-[#fbfaf8]/90 text-stone-800 shadow-[0_12px_40px_rgba(28,25,23,0.08)]"
    : "border border-white/[0.12] bg-[#0b0913]/80 text-white shadow-[0_12px_44px_rgba(0,0,0,0.25),0_0_32px_rgba(139,92,246,0.07)]";
  const accent = isMinimal ? "text-violet-700" : "text-violet-300";
  const activeLink = isMinimal
    ? "bg-stone-900/[0.06] text-stone-950"
    : "bg-violet-400/[0.12] text-violet-200";
  const mutedLink = isMinimal
    ? "text-stone-500 hover:bg-stone-900/[0.04] hover:text-stone-900"
    : "text-white/60 hover:bg-white/[0.06] hover:text-white";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          aria-label="Main navigation"
          className={`relative mx-auto max-w-6xl rounded-2xl backdrop-blur-2xl transition-all duration-300 sm:rounded-full ${shell} ${scrolled ? "py-0" : ""}`}
        >
          <div className="flex min-h-[62px] items-center justify-between gap-3 px-3 sm:px-5">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              aria-label="Harsh Upadhyay — home"
              className="group flex min-w-0 items-center gap-2.5 rounded-full text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4"
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold tracking-tight transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-105 ${isMinimal ? "bg-stone-900 text-white" : "bg-violet-300 text-[#100b1b] shadow-[0_0_22px_rgba(167,139,250,0.22)]"}`}>
                HU<span className="text-[8px]">.</span>
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold tracking-[-0.035em] sm:text-[15px]">Harsh Upadhyay</span>
                <span className={`hidden text-[10px] tracking-[0.12em] sm:block ${isMinimal ? "text-stone-500" : "text-white/45"}`}>DEVELOPER & BUILDER</span>
              </span>
            </button>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  aria-current={active === id ? "location" : undefined}
                  className={`relative rounded-full px-3 py-2 text-[12px] font-medium transition-all duration-200 lg:px-3.5 lg:text-[13px] ${active === id ? activeLink : mutedLink}`}
                >
                  {label}
                  {active === id && (
                    <span className={`absolute bottom-[4px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full ${isMinimal ? "bg-violet-600" : "bg-violet-300"}`} />
                  )}
                </button>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${isMinimal ? "Cosmic" : "Minimal"} theme`}
                title={`Switch to ${isMinimal ? "Cosmic" : "Minimal"} theme`}
                className={`flex h-10 items-center gap-2 rounded-full border px-3 text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${isMinimal ? "border-stone-200 bg-white/80 text-stone-700 hover:border-violet-300 hover:text-violet-700" : "border-white/10 bg-white/[0.05] text-white/80 hover:border-violet-300/40 hover:bg-violet-400/10 hover:text-violet-200"}`}
              >
                <ThemeIcon minimal={isMinimal} />
                <span className="hidden sm:inline">{isMinimal ? "Minimal" : "Cosmic"}</span>
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${isMinimal ? "hover:bg-stone-900/[0.06]" : "hover:bg-white/[0.07]"}`}
              >
                <MenuIcon open={menuOpen} />
              </button>
            </div>
          </div>

          <div
            id="mobile-navigation"
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${menuOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"}`}
            aria-hidden={!menuOpen}
          >
            <div className="overflow-hidden">
              <div className={`mx-3 mb-3 rounded-xl border p-2 ${isMinimal ? "border-stone-200 bg-white/70" : "border-white/[0.08] bg-black/20"}`}>
                {navItems.map(({ id, label }, index) => (
                  <button
                    key={id}
                    type="button"
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => scrollToSection(id)}
                    aria-current={active === id ? "location" : undefined}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition-colors ${active === id ? activeLink : mutedLink}`}
                  >
                    <span className={`w-5 font-mono text-[10px] ${accent}`}>{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1">{label}</span>
                    {active === id && <span className={`h-1.5 w-1.5 rounded-full ${isMinimal ? "bg-violet-600" : "bg-violet-300"}`} />}
                  </button>
                ))}
                <div className={`mx-3 my-1 border-t ${isMinimal ? "border-stone-200" : "border-white/10"}`} />
                <button
                  type="button"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => scrollToSection("contact")}
                  className={`mt-1 flex w-full items-center justify-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold transition-colors ${isMinimal ? "bg-stone-900 text-white hover:bg-violet-700" : "bg-violet-300 text-[#100b1b] hover:bg-violet-200"}`}
                >
                  Let's talk <span aria-hidden="true">↗</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu overlay"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 cursor-default bg-black/20 backdrop-blur-[2px] md:hidden"
        />
      )}
    </>
  );
}
