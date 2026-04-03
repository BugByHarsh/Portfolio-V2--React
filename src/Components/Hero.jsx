import { useTheme } from "../context/ThemeContext";
import ElectricBorder from "./bg/Electric";
import { Github, Linkedin } from "lucide-react";
import LogoLoop from "./bg/LogoLoop";

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
            className={`min-h-screen relative flex flex-col items-center justify-center px-6 md:px-40 transition-all duration-700 ${
                isMinimal ? "text-black" : "text-white"
            }`}
        >
            {/* Main layout */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 pt-24 pb-32 md:py-0">

                {/* Left Content */}
                <div className="flex-1 w-full space-y-5">

                    {/* Mobile avatar — shown only on small screens */}
                    <div className="flex md:hidden justify-center mb-2">
                        <div className={`w-24 h-24 rounded-full overflow-hidden border-2 flex-shrink-0 ${
                            isMinimal
                                ? "border-black shadow-lg"
                                : "border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                        }`}>
                            <img
                                src="image.png"
                                alt="Harsh Upadhyay"
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Eyebrow */}
                    <p className={`uppercase reveal delay-1 tracking-widest text-xs md:text-sm ${
                        isMinimal ? "text-gray-500" : "text-violet-300"
                    }`}>
                        // Founder @ CSS-Arena &nbsp;•&nbsp; Full-Stack Developer
                    </p>

                    {/* Name */}
                    <h1 className="font-semibold reveal delay-2 leading-tight">
                        <span className={`text-xl md:text-2xl ${
                            isMinimal ? "text-black/80" : "text-white/80"
                        }`}>
                            Hi, I'm <br />
                        </span>
                        <span className={`text-3xl md:text-4xl reveal delay-3 ${
                            isMinimal
                                ? "text-black"
                                : "bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent"
                        }`}>
                            &lt; Harsh Upadhyay /&gt;
                        </span>
                    </h1>

                    {/* Code block stats */}
                    <div className={`reveal delay-3 max-w-md w-md rounded-xl px-4 py-3 font-mono text-xs md:text-sm ${
                        isMinimal
                            ? "bg-gray-50 border border-gray-200"
                            : "bg-white/[0.03] border border-white/[0.08]"
                    }`}>
                        <div className="mb-1">
                            <span className={isMinimal ? "text-violet-600" : "text-violet-400"}>const </span>
                            <span className={isMinimal ? "text-gray-700" : "text-white/70"}>dev </span>
                            <span className={isMinimal ? "text-gray-400" : "text-white/25"}>=</span>
                            <span className={isMinimal ? "text-gray-400" : "text-white/25"}> {"{"}</span>
                        </div>
                        <div className="pl-4 space-y-0.5">
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
                    <div className="flex flex-wrap items-center gap-4 pt-2 reveal delay-4">

                        {/* GitHub */}
                        <a
                            href="https://github.com/BugByHarsh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ${
                                isMinimal
                                    ? "border border-black text-black hover:bg-black hover:text-white"
                                    : "border border-white/40 hover:bg-white hover:text-black text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                            }`}
                        >
                            <Github size={20} />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/upadhyay-harsh9756"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 ${
                                isMinimal
                                    ? "border border-black text-black hover:bg-black hover:text-white"
                                    : "border border-white/40 hover:bg-white hover:text-black text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                            }`}
                        >
                            <Linkedin size={20} />
                        </a>

                        {/* Let's Talk */}
                        <a
                            href="#contact"
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-500 ${
                                isMinimal
                                    ? "bg-black text-white hover:opacity-80"
                                    : "bg-gradient-to-r from-violet-500 to-purple-400 text-white shadow-[0_0_25px_rgba(139,92,246,0.7)] hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.9)]"
                            }`}
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>

                {/* Right Image — desktop only */}
                <div className="hidden md:flex justify-center flex-shrink-0">
                    {isMinimal ? (
                        <div className="relative float-image">
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{ animation: "revolve 20s linear infinite", margin: "-10px" }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black" />
                            </div>
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{ animation: "revolve 20s linear infinite", animationDelay: "-10s", margin: "-10px" }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-neutral-500" />
                            </div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-black shadow-xl">
                                <img
                                    src="image.png"
                                    alt="Harsh Upadhyay"
                                    className="h-full w-full object-cover object-top transition-all hover:scale-105 duration-700"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="transition-all duration-700 ease-in-out opacity-100 scale-100">
                            <ElectricBorder>
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-2 border-violet-400 shadow-[0_0_60px_rgba(139,92,246,0.6)] transition-all duration-700 ease-in-out">
                                    <img
                                        src="image.png"
                                        alt="Harsh Upadhyay"
                                        className="h-full w-full object-cover object-top transition-transform duration-1000 hover:scale-105"
                                    />
                                </div>
                            </ElectricBorder>
                        </div>
                    )}
                </div>
            </div>

            {/* Mouse scroll cue */}
            <button
                onClick={scrollDown}
                aria-label="Scroll down"
                className={`absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer transition-opacity duration-300 ${
                    isMinimal ? "opacity-30 hover:opacity-60" : "opacity-25 hover:opacity-50"
                }`}
            >
                {/* Mouse body */}
                <div className={`w-5 h-8 rounded-[10px] border flex flex-col items-center pt-1.5 ${
                    isMinimal ? "border-black/50" : "border-white/40"
                }`}>
                    {/* Scroll wheel */}
                    <div className={`w-[3px] h-[5px] rounded-full ${
                        isMinimal ? "bg-black" : "bg-white"
                    }`}
                        style={{ animation: "scrollWheel 1.2s ease-in-out infinite" }}
                    />
                </div>
            </button>

            {/* Logo strip */}
            <div className={`absolute bottom-0 py-4 border-t left-0 w-full ${
                isMinimal
                    ? "bg-black/5 border-black/10"
                    : "bg-white/5 border-white/10"
            }`}>
                <LogoLoop
                    logos={logos}
                    className={isMinimal ? "[&_img]:brightness-0" : "[&_img]:invert"}
                />
            </div>

            <style>{`
                @keyframes scrollWheel {
                    0%   { transform: translateY(0);   opacity: 1; }
                    100% { transform: translateY(6px); opacity: 0; }
                }
                @keyframes revolve {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}