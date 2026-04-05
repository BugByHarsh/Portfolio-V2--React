import { useTheme } from "../context/ThemeContext";
import { Globe, Smartphone, Zap, Rocket } from "lucide-react";

export default function Services() {
  const { theme } = useTheme();
  const isCosmos = theme === "cosmos";

  const process = [
    {
      step: "01",
      title: "Understand",
      desc: "Deep dive into your goals, requirements, and target audience.",
    },
    {
      step: "02",
      title: "Plan",
      desc: "Define the architecture, tech stack, and a clear timeline.",
    },
    {
      step: "03",
      title: "Build",
      desc: "Write clean, scalable code with regular progress updates.",
    },
    {
      step: "04",
      title: "Deploy & Support",
      desc: "Launch to production and provide post-delivery support.",
    },
  ];

  const services = [
    {
      title: "Web Development",
      desc: "Modern responsive websites with fast and scalable architecture and clean UI.",
      icon: Globe,
      stack: ["MongoDB", "Express", "React", "Node.js", "Laravel", "MySQL"]
    },
    {
      title: "App Development",
      desc: "Cross-platform mobile apps with smooth performance and modern UI.",
      icon: Smartphone,
      stack: ["React Native", "Expo", "Firebase", "REST APIs"]
    },
    {
      title: "API Development",
      desc: "Secure and scalable backend APIs for modern web and mobile apps.",
      icon: Zap,
      stack: ["Node.js", "Express", "Laravel", "JWT", "REST API"]
    },
    {
      title: "Hosting & Deployment",
      desc: "Reliable deployment pipelines and optimized production hosting.",
      icon: Rocket,
      stack: ["Vercel", "AWS", "Nginx", "Cpanel"]
    }
  ];

  return (
    <section
      id="services"
      className={`w-full scroll-mt-22 lg:px-10 px-4 transition-colors duration-300 ${isCosmos ? "text-white bg-black/70" : "text-gray-900"
        }`}
    >
      <div className="flex items-end justify-between mb-10">
        <h1 className={`text-lg font-semibold ${isCosmos ? "text-purple-400" : "text-black"}`}>
    // Services
        </h1>
        <p className={`text-xs hidden sm:block ${isCosmos ? "text-white/30" : "text-gray-400"}`}>
          Fast. Clean. Reliable.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-1 md:px-5">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* SERVICES */}
          <div className="grid sm:grid-cols-2 gap-6">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-300 group
                  hover:-translate-y-2 hover:scale-[1.01]
                  ${isCosmos
                      ? "border-white/20 bg-white/5 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
                      : "border-gray-300 bg-gray-100 hover:shadow-xl"
                    }`}
                >
                  {/* ICON + TITLE */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-2 rounded-md ${isCosmos
                        ? "bg-purple-500/20"
                        : "bg-gray-200"
                        }`}
                    >
                      <Icon
                        size={18}
                        className={`${isCosmos ? "text-purple-400" : "text-gray-700"
                          }`}
                      />
                    </div>

                    <h3
                      className={`font-semibold text-lg ${isCosmos ? "text-white" : "text-gray-900"
                        }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-sm opacity-80 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.stack.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-xs pa px-3 py-1 rounded-full border transition-all duration-300
                        ${isCosmos
                            ? "border-purple-500/40 text-gray-300 bg-white/10 hover:bg-purple-500/20"
                            : "border-gray-300 text-gray-700 bg-white hover:bg-gray-200"
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col px-2 gap-10">

            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isCosmos ? "text-white" : "text-gray-900"
                }`}>
                // How I work
              </h3>
              <p className={`text-sm leading-relaxed ${isCosmos ? "text-white/55" : "text-gray-500"
                }`}>
                Every project I take on follows a clear, transparent process —
                so you always know what's happening and why.
              </p>
            </div>

            {/* Process steps */}
            <div className="flex flex-col gap-6">
              {process.map((item, index) => (
                <div key={index} className="flex gap-5 items-start group">

                  {/* Step number + connector line */}
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <span className={`text-sm font-bold font-mono ${isCosmos ? "text-purple-400" : "text-gray-900"
                      }`}>
                      {item.step}
                    </span>
                    {index < process.length - 1 && (
                      <div className={`w-px flex-1 min-h-6 ${isCosmos ? "bg-white/10" : "bg-gray-400"
                        }`} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <h4 className={`font-semibold text-base mb-1 ${isCosmos ? "text-white" : "text-gray-900"
                      }`}>
                      {item.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${isCosmos ? "text-white/50" : "text-gray-500"
                      }`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}