import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const { theme } = useTheme();
  const isCosmos = theme === "cosmos";
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xbljrrqv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (response.ok) {
        setShowModal(true);
        setData({ name: "", email: "", message: "" });
      } else {
        alert('Failed to send message. Try again.');
      }
    } catch (error) {
      alert('Error sending message');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Styling helpers
  const inputBase = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 border ${isCosmos
      ? "bg-white/[0.03] border-white/[0.08] text-white placeholder:text-white/30 focus:border-purple-400/40 focus:bg-white/[0.05]"
      : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gray-400"
    }`;

  const buttonBase = `px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${isCosmos
      ? "bg-purple-500 hover:bg-purple-400 text-white disabled:opacity-50"
      : "bg-black text-white hover:bg-gray-800 disabled:opacity-50"
    }`;

  const linkBase = `flex items-center gap-2 text-sm transition ${isCosmos
      ? "text-white/40 hover:text-white"
      : "text-gray-500 hover:text-black"
    }`;

  return (
    <>
      <section
        id="contact"
        className={`w-full py-24 px-6 md:px-10 transition-colors duration-300 ${isCosmos ? "bg-black/70 text-white" : " text-gray-900"
          }`}
      >
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex items-end justify-between mb-12">
            <h2
              className={`text-lg font-semibold tracking-widest ${isCosmos ? "text-purple-400" : "text-gray-400"
                }`}
            >
              // Contact
            </h2>
            <p
              className={`text-xs hidden sm:block ${isCosmos ? "text-white/30" : "text-gray-400"
                }`}
            >
              Let's build something great.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12 px-5 mx-5 bg-white/1 py-10 rounded-2xl">

            {/* Left — Contact Info */}
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold">Get in touch</h3>

              <p
                className={`text-sm leading-relaxed ${isCosmos ? "text-white/50" : "text-gray-500"
                  }`}
              >
                Have a project idea, collaboration, or just want to say hi?
                Feel free to reach out. I'm always open to discussing new work.
              </p>

              {/* Links */}
              <div className="flex flex-col gap-3 mt-2">
                <a href="mailto:your@email.com" className={linkBase}>
                  <Mail size={16} /> harsh9756416665@email.com
                </a>
                <a href="https://github.com/BugByHarsh" target="_blank" className={linkBase}>
                  <Github size={16} /> GitHub
                </a>
                <a href="https://linkedin.com/in/upadhyay-harsh9756" target="_blank" className={linkBase}>
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Construct a message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className={`block text-sm mb-2 ${isCosmos ? "text-white/60" : "text-gray-600"}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={inputBase}
                    value={data.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className={`block text-sm mb-2 ${isCosmos ? "text-white/60" : "text-gray-600"}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={inputBase}
                    value={data.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className={`block text-sm mb-2 ${isCosmos ? "text-white/60" : "text-gray-600"}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    className={inputBase}
                    value={data.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`${buttonBase} px-6 py-2 mt-2`}
                >
                  {loading ? 'Sending...' : 'Assemble & Transmit →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className={`fixed inset-0 flex items-center justify-center p-4 transition-all duration-300 ${isCosmos ? "bg-black/50" : "bg-black/20"}`}>
          <div
            className={`rounded-2xl p-8 max-w-sm w-md shadow-lg transition-all duration-300 ${
              isCosmos
                ? "bg-black/80 border border-white/10 text-white"
                : "bg-white border border-gray-200 text-gray-900"
            }`}
          >
            <div className="flex flex-col items-center gap-4">
              {/* Success Icon */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isCosmos ? "bg-purple-500/20" : "bg-green-100"}`}>
                <svg
                  className={`w-6 h-6 ${isCosmos ? "text-purple-400" : "text-green-600"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Message */}
              <h2 className="text-xl font-semibold text-center">Message sent!</h2>
              <p className={`text-sm text-center ${isCosmos ? "text-white/60" : "text-gray-600"}`}>
                Thanks for reaching out. I'll get back to you soon.
              </p>

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className={`w-full mt-4 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isCosmos
                    ? "bg-purple-500 hover:bg-purple-400 text-white"
                    : "bg-black hover:bg-gray-800 text-white"
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}