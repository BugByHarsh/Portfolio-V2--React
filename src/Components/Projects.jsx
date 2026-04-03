import { useTheme } from "../context/ThemeContext";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import TiltedCard from "./bg/Tiltcard";

export default function Projects() {
    const { theme } = useTheme();
    const isCosmos = theme === "cosmos";

    const [showTooltip, setShowTooltip] = useState(false);

    const handleCodeClick = () => {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2500);
    };

    const allProjects = [
        {
            title: "Ezzstar Social",
            desc: "A Web3-powered social platform for manga enthusiasts, featuring NFT-based ownership, a dynamic social feed, tokenized interactions, and seamless crypto wallet integration for a decentralized fan experience.",
            tech: ["React", "Web3", "Node.js", "MongoDB", "Wagmi"],
            image: "/projects/social.png",
            github: null,
            live: "https://ezzstar.com",
            featured: true,
        },
        {
            title: "My Schedule App",
            desc: "A mobile app to help you organize tasks, track events, and manage your day efficiently. Built with React Native and Expo for smooth cross-platform performance.",
            tech: ["React Native", "Expo"],
            image: "/projects/schedule.png",
            github: "https://github.com/BugByHarsh/Tasks-app--React-Native",
            live: "https://tasks-app-react-native.vercel.app/",
        },
        {
            title: "Ezzstar Presale",
            desc: "The platform for participating in the SPCA token presale, allowing users to securely buy SPCA coins, track allocations, and engage with the token ecosystem before public launch.",
            tech: ["React", "Web3", "Wagmi", "Ethers.js"],
            image: "/projects/presale.png",
            github: null,
            live: "https://ezzstar.space",
            featured: true,
        },
        {
            title: "CSS Arena",
            desc: "A real-time competitive platform where developers battle using pure CSS—featuring live rendering, instant scoring, multiplayer rooms, and daily design challenges to test creativity and precision.",
            tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express",],
            image: "/projects/cssarena.png",
            github: "https://github.com/BugByHarsh/css-arena",
            live: "https://css-arena.vercel.app",
        },
        {
            title: "Weblum",
            desc: "A modern digital photo album that preserves your most precious memories—securely store, organize, and instantly share photos in a beautiful, accessible format with lifetime access and no risk of fading or loss.",
            tech: ["React", "Node.js", "Tailwind"],
            image: "/projects/weblum.png",
            github: "https://github.com/BugByHarsh/weblum",
            live: "https://weblum.vercel.app/",
        },
        {
            title: "Convo",
            desc: "A scalable real-time chat application featuring secure JWT authentication, multi-room conversations, and live user presence—delivering fast and seamless communication.",
            tech: ["React", "Node", "MongoDB", "Socket.io", "Express"],
            image: "/projects/convo.png",
            github: "https://github.com/BugByHarsh/Chat-app-Frontend",
            live: "https://we-convo.vercel.app/",
        },
    ];
    const pillBase = `text-xs pa px-2.5 py-1 rounded-full border transition-all duration-200 ${isCosmos
        ? "border-purple-400/40 text-purple-300 bg-purple-500/10"
        : "border-gray-200 text-gray-600 bg-gray-50"
        }`;

    const linkBase = `flex items-center gap-1.5 text-sm transition-all duration-300 hover:underline ${isCosmos ? "text-white/55 hover:text-white" : "text-gray-400 hover:text-black"
        }`;

    const dividerClass = isCosmos
        ? "border-t border-white/[0.06]"
        : "border-t border-gray-500";

    return (
        <section
            id="projects"
            className={`w-full py-10 px-6 md:px-10 scroll-mt-14 transition-colors duration-300 ${isCosmos ? "bg-black/70 text-white" : "bg-white text-gray-900"
                }`}
        >
            <div className="flex items-end justify-between">
                <h2 className={`text-lg font-semibold tracking-widest ${isCosmos ? "text-purple-400" : "text-blac"

                    }`}>
    // Projects
                </h2>

                <p className={`text-xs hidden sm:block ${isCosmos ? "text-white/30" : "text-gray-400"
                    }`}>
                    Things I’ve built.
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-5">


                {/* Alternating rows */}
                <div className="flex flex-col">
                    {allProjects.map((project, index) => {
                        const imageLeft = index % 2 === 0;

                        return (
                            <div key={index}>

                                {/* Row */}
                                <div className={`flex flex-col md:flex-row items-stretch gap-0 py-10 md:py-12 ${!imageLeft ? "md:flex-row-reverse" : ""
                                    }`}>

                                    {/* Image */}
                                    <div className={`w-full md:w-2/5 rounded-xl relative"
                                        }`}>
                                        <TiltedCard imageSrc={project.image}
                                            altText={project.title}
                                            containerHeight="288px"
                                            imageHeight="288px"
                                            imageWidth="100%"
                                            rotateAmplitude={12}
                                            scaleOnHover={1.05}
                                            showMobileWarning={false}
                                            showTooltip={false}
                                        />

                                        {/* Featured badge */}
                                        {project.featured && (
                                            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold backdrop-blur-sm bg-black/50 border border-yellow-400/40 text-yellow-400">
                                                ★ Featured
                                            </div>
                                        )}

                                        {/* TG Bot badge */}
                                        {project.badge && (
                                            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-green-500/20 border border-green-400/30 text-green-400 backdrop-blur-sm">
                                                {project.badge}
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className={`flex-1 flex flex-col justify-center gap-4 pt-2 md:pt-0 ${imageLeft ? "md:pl-12 lg:pl-16" : "md:pr-12 lg:pr-16"
                                        }`}>

                                        {/* Number */}
                                        <div className="flex gap-2 items-center">

                                            <span className={`font-mono text-md font-bold ${isCosmos ? "text-purple-400/70" : "text-gray-300"}`}>
                                                0{index + 1}
                                            </span>
                                            {/* Title */}
                                            <h3 className={`font-semibold leading-tight ${project.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                                                {project.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className={`text-sm leading-relaxed max-w-md ${isCosmos ? "text-white/55" : "text-gray-500"
                                            }`}>
                                            {project.desc}
                                        </p>

                                        {/* Tech pills */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, i) => (
                                                <span key={i} className={pillBase}>{tech}</span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-5 relative">
                                            {project.github === null ? (
                                                <>
                                                    <button
                                                        onClick={handleCodeClick}
                                                        className={linkBase}
                                                    >
                                                        <Github size={15} />
                                                        Code
                                                    </button>
                                                    {showTooltip && (
                                                        <div className="absolute top-7 left-0 text-xs bg-black text-white px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap z-10">
                                                            Source code is confidential
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={linkBase}
                                                >
                                                    <Github size={15} />
                                                    Code
                                                </a>
                                            )}

                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={linkBase}
                                            >
                                                <ExternalLink size={15} />
                                                {project.featured ? "Visit Website" : "Live"}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider — not after last item */}
                                {index < allProjects.length - 1 && (
                                    <div className={dividerClass} />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}