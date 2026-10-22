import { useTheme } from "../context/ThemeContext";
import { Github, Linkedin } from "lucide-react";
import LogoLoop from "./bg/LogoLoop";
import { Atom, Server, Database, AppWindow } from "lucide-react";

export default function Hero() {
    const { theme } = useTheme();
    const isMinimal = theme === "minimal";

    const logos = [
        { src: "/logos/javascript.svg", alt: "JavaScript" },
        { src: "/logos/php.svg", alt: "PHP" },
        { src: "/logos/python.svg", alt: "Python" },
        { src: "/logos/react.svg", alt: "React" },
        { src: "/logos/tailwindcss.svg", alt: "Tailwind CSS" },
        { src: "/logos/nodedotjs.svg", alt: "Node.js" },
        { src: "/logos/express.svg", alt: "Express.js" },
        { src: "/logos/laravel.svg", alt: "Laravel" },
        { src: "/logos/mongodb.svg", alt: "MongoDB" },
        { src: "/logos/mysql.svg", alt: "MySQL" },
        { src: "/logos/git.svg", alt: "Git" },
    ];

    const scrollDown = () => {
        const about = document.getElementById("about");
        if (about) about.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section
            id="home"
            className={`relative md:min-h-screen min-h-[85vh] pt-2 sm:pt-24 md:pt-28 lg:pt-0 flex flex-col items-evenly justify-start lg:justify-center px-4 sm:px-6 md:px-8 lg:px-12 pb-12 sm:pb-16 md:pb-20 lg:py-0 transition-all duration-700 overflow-hidden ${isMinimal ? "text-black" : "text-white bg-black/70"
                }`}
        >
            {/* Main layout */}
            <div className="w-full mx-auto flex flex-col lg:flex-row lg:items-center pt-24 lg:pt-0
            justify-around lg:justify-center gap-6 sm:gap-8 md:gap-20">
                {/* Left Content */}
                <div className="max-w-xl space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Mobile profile card — keeps the current hero order */}
                    <div className="flex lg:hidden justify-center mb-6">
                        <div className="relative w-full max-w-[300px] pt-3">
                            <div className={`absolute -top-1 right-1 text-[9px] font-mono tracking-[0.16em] ${isMinimal ? "text-emerald-700" : "text-teal-300"}`}>
                                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-teal-400" /> AVAILABLE
                            </div>
                            <div className="relative mx-auto w-full max-w-[340px] pb-2">
                                <div className={`relative z-10 mx-auto w-full max-w-[280px] overflow-hidden rounded-[1.35rem] border p-1.5 shadow-2xl ${isMinimal ? "border-stone-300 bg-white/90 shadow-stone-900/10" : "border-white/15 bg-[#111522]/95 shadow-violet-950/40"}`}>
                                    <div className={`flex items-center justify-between px-2 py-2 font-mono text-[9px] tracking-[0.16em] ${isMinimal ? "text-stone-400" : "text-slate-500"}`}>
                                        <span>PROFILE / 001</span><span>01 — 03</span>
                                    </div>
                                    <div className="relative overflow-hidden rounded-[1rem]">
                                        <img src="image.webp" alt="Harsh Upadhyay" className="aspect-[4/4.3] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]" />
                                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
                                    </div>
                                    <div className="px-3 pb-3 pt-3 text-left">
                                        <p className={`text-[10px] font-semibold tracking-[0.13em] ${isMinimal ? "text-violet-700" : "text-teal-300"}`}>FULL-STACK DEVELOPER</p>
                                        <p className={`mt-1 text-lg font-medium tracking-tight ${isMinimal ? "text-stone-900" : "text-white"}`}>Harsh Upadhyay <span className={`${isMinimal ? "text-violet-700" : "text-violet-300"}`}>↗</span></p>
                                        <div className={`mt-3 border-t pt-2 font-mono text-[9px] tracking-[0.12em] ${isMinimal ? "border-stone-200 text-stone-400" : "border-white/10 text-slate-500"}`}>DESIGN · CODE · BUILD</div>
                                    </div>
                                </div>
                                {[
                                    { name: "React", Icon: Atom, tone: "text-sky-500", pos: "left-0 top-[22%]", delay: "0s" },
                                    { name: "Node.js", Icon: Server, tone: "text-emerald-500", pos: "right-0 top-[39%]", delay: "-1.5s" },
                                    { name: "MongoDB", Icon: Database, tone: "text-violet-500", pos: "left-0 bottom-[15%]", delay: "-3s" },
                                    { name: "Electron", Icon: AppWindow, tone: "text-amber-500", pos: "right-0 bottom-[2%]", delay: "-4.5s" },
                                ].map(({ name, Icon, tone, pos, delay }) => (
                                    <div key={name} style={{ animation: "skillFloat 6s ease-in-out infinite", animationDelay: delay }} className={`absolute ${pos} z-20 flex items-center gap-1.5 rounded-xl border px-2 py-2 shadow-xl backdrop-blur-xl ${isMinimal ? "border-stone-200 bg-white/95 text-stone-800 shadow-stone-900/10" : "border-white/10 bg-[#111522]/95 text-white shadow-black/30"}`}>
                                        <Icon size={15} className={tone} />
                                        <span className="text-[11px] font-semibold">{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Eyebrow */}
                    <p className={`uppercase reveal delay-1 tracking-widest text-[10px] sm:text-xs md:text-sm ${isMinimal ? "text-gray-500" : "text-violet-300"
                        }`}>
                        // Founder @ CSS-Arena &nbsp;•&nbsp; Full-Stack Developer
                    </p>

                    {/* Name */}
                    <h1 className="font-semibold reveal delay-2 leading-tight">
                        <span className={`text-lg sm:text-xl md:text-2xl ${isMinimal ? "text-black/80" : "text-white/80"
                            }`}>
                            Hi, I'm <br />
                        </span>
                        <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl reveal delay-3 inline-block ${isMinimal
                            ? "text-black"
                            : "bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent"
                            }`}>
                            &lt; Harsh Upadhyay /&gt;
                        </span>
                    </h1>

                    {/* Code block stats */}
                    <div className={`reveal delay-3 max-w-sm rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 font-mono text-[11px] sm:text-xs md:text-sm ${isMinimal
                        ? "bg-gray-50 border border-gray-200"
                        : "bg-white/[0.03] border border-white/[0.08]"
                        }`}>
                        <div className="mb-1">
                            <span className={isMinimal ? "text-violet-600" : "text-violet-400"}>const </span>
                            <span className={isMinimal ? "text-gray-700" : "text-white/70"}>dev </span>
                            <span className={isMinimal ? "text-gray-400" : "text-white/25"}>=</span>
                            <span className={isMinimal ? "text-gray-400" : "text-white/25"}> {"{"}</span>
                        </div>
                        <div className="pl-3 sm:pl-4 space-y-0.5">
                            <div>
                                <span className={isMinimal ? "text-blue-600" : "text-purple-300"}>projects</span>
                                <span className={isMinimal ? "text-gray-400" : "text-white/25"}>: </span>
                                <span className={isMinimal ? "text-green-600" : "text-green-400"}>10+</span>
                                <span className={isMinimal ? "text-gray-400" : "text-white/20"}>,</span>
                            </div>
                            <div>
                                <span className={isMinimal ? "text-blue-600" : "text-purple-300"}>experience</span>
                                <span className={isMinimal ? "text-gray-400" : "text-white/25"}>: </span>
                                <span className={isMinimal ? "text-green-600" : "text-green-400"}>"2+ yrs"</span>
                                <span className={isMinimal ? "text-gray-400" : "text-white/20"}>,</span>
                            </div>
                            <div>
                                <span className={isMinimal ? "text-blue-600" : "text-purple-300"}>clients</span>
                                <span className={isMinimal ? "text-gray-400" : "text-white/25"}>: </span>
                                <span className={isMinimal ? "text-green-600" : "text-green-400"}>5</span>
                            </div>
                        </div>
                        <div className={isMinimal ? "text-gray-400" : "text-white/25"}>{"}"}</div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-3 reveal delay-4">

                        {/* GitHub */}
                        <a
                            href="https://github.com/BugByHarsh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 ${isMinimal
                                ? "border border-black text-black hover:bg-black hover:text-white"
                                : "border border-white/40 hover:bg-white hover:text-black text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                                }`}
                        >
                            <Github size={18} className="sm:w-5 sm:h-5" />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/heyharshu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 ${isMinimal
                                ? "border border-black text-black hover:bg-black hover:text-white"
                                : "border border-white/40 hover:bg-white hover:text-black text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                                }`}
                        >
                            <Linkedin size={18} className="sm:w-5 sm:h-5" />
                        </a>

                        {/* Let's Talk */}
                        <a
                            href="#contact"
                            className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-500 whitespace-nowrap ${isMinimal
                                ? "bg-black text-white hover:opacity-80"
                                : "bg-gradient-to-r from-violet-500 to-purple-400 text-white shadow-[0_0_25px_rgba(139,92,246,0.7)] hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.9)]"
                                }`}
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>

                {/* Right profile card with floating project cards — desktop only */}
                <div className="hidden lg:flex flex-shrink-0 justify-center">
                    <div className="relative w-[440px] xl:w-[500px] py-8">
                        {/* Orbit lines */}
                        <div className={`pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${isMinimal ? "border-stone-300/70" : "border-slate-500/25"}`} />
                        <div className={`pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[470px] -translate-x-1/2 -translate-y-1/2 rotate-[-24deg] rounded-[50%] border ${isMinimal ? "border-violet-200/80" : "border-violet-300/15"}`} />
                        {/* Profile card */}
                        <div className={`relative z-10 mx-auto w-[300px] xl:w-[320px] rotate-[0.5deg] overflow-hidden rounded-[1.6rem] border p-2 shadow-2xl transition-transform duration-500 hover:rotate-0 ${isMinimal ? "border-stone-300 bg-[#fbfaf8]/95 shadow-stone-900/15" : "border-white/15 bg-[#111522]/95 shadow-black/50"}`}>
                            <div className={`flex items-center justify-between px-2 py-2 font-mono text-[9px] tracking-[0.16em] ${isMinimal ? "text-stone-400" : "text-slate-500"}`}>
                                <span>PROFILE / 001</span>
                                <span className={`tracking-normal ${isMinimal ? "text-emerald-700" : "text-teal-300"}`}>● AVAILABLE</span>
                            </div>
                            <div className="relative overflow-hidden rounded-[1.15rem]">
                                <img src="image.webp" alt="Harsh Upadhyay" className="aspect-[4/4.35] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.035]" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
                            </div>
                            <div className="px-2 pb-2 pt-4">
                                <p className={`text-[10px] font-semibold tracking-[0.15em] ${isMinimal ? "text-violet-700" : "text-teal-300"}`}>FULL-STACK DEVELOPER</p>
                                <p className={`mt-1 text-xl font-medium tracking-tight ${isMinimal ? "text-stone-900" : "text-white"}`}>Harsh Upadhyay <span className={`${isMinimal ? "text-violet-700" : "text-violet-300"}`}>↗</span></p>
                                <div className={`mt-3 flex justify-between border-t pt-3 font-mono text-[9px] tracking-[0.14em] ${isMinimal ? "border-stone-200 text-stone-400" : "border-white/10 text-slate-500"}`}>
                                    <span>DESIGN · CODE · BUILD</span><span>INDIA · IST</span>
                                </div>
                            </div>
                        </div>
                        {/* Floating skill cards */}
                        {[
                            { name: "React", type: "Frontend", Icon: Atom, tone: "text-sky-500", pos: "left-[-4px] top-[88px]", delay: "0s" },
                            { name: "Node.js", type: "Backend", Icon: Server, tone: "text-emerald-500", pos: "right-[-2px] top-[190px]", delay: "-1.5s" },
                            { name: "MongoDB", type: "Database", Icon: Database, tone: "text-violet-500", pos: "left-[0px] bottom-[72px]", delay: "-3s" },
                            { name: "Electron", type: "Desktop apps", Icon: AppWindow, tone: "text-amber-500", pos: "right-[12px] bottom-[10px]", delay: "-4.5s" },
                        ].map(({ name, type, Icon, tone, pos, delay }) => (
                            <div key={name} style={{ animation: "skillFloat 6s ease-in-out infinite", animationDelay: delay }} className={`absolute ${pos} z-20 flex items-center gap-2.5 rounded-xl border px-3 py-2.5 shadow-xl backdrop-blur-xl ${isMinimal ? "border-stone-200 bg-white/95 text-stone-800 shadow-stone-900/10" : "border-white/10 bg-[#111522]/95 text-white shadow-black/30"}`}>
                                <Icon size={19} className={tone} />
                                <span>
                                    <span className="block text-xs font-semibold">{name}</span>
                                    <span className={`mt-0.5 block text-[9px] ${isMinimal ? "text-stone-500" : "text-slate-400"}`}>{type}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Technology logo strip — restored while keeping the floating skill cards */}
            <div className={`absolute bottom-0 py-3 sm:py-4 border-t left-0 w-full ${isMinimal
                ? "bg-black/5 border-black/10"
                : "bg-white/5 border-white/10"
                }`}>
                <LogoLoop
                    logos={logos}
                    logoHeight={24}
                    gap={24}
                    className={isMinimal ? "[&_img]:brightness-0" : "[&_img]:invert"}
                />
            </div>

            {/* Mouse scroll cue */}
            <button
                onClick={scrollDown}
                aria-label="Scroll down"
                className={`absolute hidden lg:flex bottom-18 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 cursor-pointer transition-opacity duration-300 ${isMinimal ? "opacity-30 hover:opacity-60" : "opacity-25 hover:opacity-50"
                    }`}
            >
                {/* Mouse body */}
                <div className={`w-5 h-8 rounded-[10px] border flex flex-col items-center pt-1.5 ${isMinimal ? "border-black/50" : "border-white/40"
                    }`}>
                    {/* Scroll wheel */}
                    <div className={`w-[3px] h-[5px] rounded-full ${isMinimal ? "bg-black" : "bg-white"
                        }`}
                        style={{ animation: "scrollWheel 1.2s ease-in-out infinite" }}
                    />
                </div>
            </button>



            <style>{`
                @keyframes scrollWheel {
                    0%   { transform: translateY(0);   opacity: 1; }
                    100% { transform: translateY(6px); opacity: 0; }
                }
                @keyframes skillFloat {
                    0%, 100% { transform: translate3d(0, 0, 0); }
                    50% { transform: translate3d(0, -9px, 0); }
                }
                @media (prefers-reduced-motion: reduce) {
                    [style*="skillFloat"] { animation: none !important; }
                }
                @keyframes revolve {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}