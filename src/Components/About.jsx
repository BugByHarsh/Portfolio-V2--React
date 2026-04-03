import { useTheme } from "../context/ThemeContext";
import TiltedCard from "./bg/Tiltcard";

const About = () => {
    const { theme } = useTheme();
    const isCosmos = theme === "cosmos";

    const philosophyTags = [
        "Clean architecture",
        "Scalable systems",
        "Great UX",
        "Readable code",
        "Fast APIs",
        "Mobile-first",
    ];

    const skills = [
        "React", "Node.js", "Express", "MongoDB",
        "MySQL", "Laravel", "PHP", "JavaScript",
        "Tailwind", "Git",
    ];

    return (
        <section
            id="about"
            className={`w-full py-24 px-10 transition-colors duration-500 ${isCosmos ? "bg-black/70 text-white" : "bg-white text-gray-900"
                }`}
        >
            {/* Title */}
            <div className="flex items-end justify-between mb-10">
  <h1 className={`text-lg font-semibold ${isCosmos ? "text-purple-400" : "text-black"}`}>
    // About
  </h1>
  <p className={`text-xs hidden sm:block ${isCosmos ? "text-white/30" : "text-gray-400"}`}>
    Code & curiosity
  </p>
</div>
            <div className="max-w-7xl mx-auto md:px-10 ">

                <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">

                    {/* Left — Image */}
                    <div className="flex justify-center lg:justify-start">
                        {/* Desktop: TiltedCard */}
                        <div className="hidden md:block">
                            <TiltedCard
                                imageSrc="/about.png"
                                altText="Harsh Upadhyay"
                                captionText="Harsh Upadhyay"
                                containerHeight="420px"
                                containerWidth="340px"
                                imageHeight="420px"
                                imageWidth="340px"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={false}
                            />
                        </div>

                        {/* Mobile: flat image, no tilt */}
                        <div className="block md:hidden w-full max-w-sm rounded-2xl overflow-hidden">
                            <img
                                src="/about.png"
                                alt="Harsh Upadhyay"
                                className="w-full h-56 object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div className="flex flex-col gap-8">

                        {/* Bio */}
                        <div>
                            <p className={`text-xs uppercase tracking-widest font-semibold mb-3  ${isCosmos ? "text-purple-400" : "text-gray-400"
                                }`}>
                                // Who I Am
                            </p>
                            <p className={`text-base leading-relaxed ${isCosmos ? "text-white/70" : "text-gray-600"
                                }`}>
                                Full-stack developer and founder of{" "}
                                <span className={`font-semibold ${isCosmos ? "text-violet-400" : "text-black"
                                    }`}>
                                    Weblum
                                </span> and &nbsp;
                                <span className={`font-semibold ${isCosmos ? "text-violet-400" : "text-black"
                                    }`}>
                                    CSS Arena
                                </span>
                                . I build modern web platforms, scalable APIs, and cross-platform
                                mobile apps — always with clean code and great UX in mind.
                            </p>
                        </div>

                        {/* Philosophy pills */}
                        <div>
                            <p className={`text-xs uppercase tracking-widest font-semibold mb-3 ${isCosmos ? "text-purple-400" : "text-gray-400"
                                }`}>
                                // I care about
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {philosophyTags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`text-xs px-3 pa py-1.5 rounded-full border transition-all duration-300 hover:-translate-y-0.5 ${isCosmos
                                                ? "bg-violet-500/10 border-violet-400/25 text-violet-200 hover:bg-violet-500/20"
                                                : "bg-gray-100 border-gray-200 text-gray-800 hover:bg-gray-200"
                                            }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Stack */}
                        <div>
                            <p className={`text-xs uppercase tracking-widest font-semibold mb-3 ${isCosmos ? "text-purple-400" : "text-gray-400"
                                }`}>
                                // Stack
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-3 pa py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 hover:-translate-y-0.5 ${isCosmos
                                                ? "border-white/20 text-white/80 hover:border-purple-400 hover:text-white"
                                                : "border-gray-200 text-gray-800 hover:bg-black hover:text-white hover:border-black"
                                            }`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Resume button */}
                        <div>
                            <a
                                href="/resume.pdf"
                                download
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 ${isCosmos
                                        ? "bg-purple-500 hover:bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                                        : "bg-black hover:bg-gray-800 text-white"
                                    }`}
                            >
                                Download Resume
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;   