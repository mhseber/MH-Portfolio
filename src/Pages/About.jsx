import { motion as Motion } from "framer-motion";
import { IoPersonOutline } from "react-icons/io5";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFutbol,
  FaCode,
  FaPlane,
  FaRobot,
  FaGamepad,
} from "react-icons/fa";

import about from "../assets/about,me.jpg";

const About = () => {
  const personalInfo = [
    { label: "Name", value: "Mahamudul Hasan Seber", icon: <FaUser /> },
    { label: "Email", value: "sebermh@gmail.com", icon: <FaEnvelope /> },
    { label: "Location", value: "Dhaka, Bangladesh", icon: <FaMapMarkerAlt /> },
    { label: "Profession", value: "AI-Augmented Dev", icon: <FaRobot /> },
    { label: "Profession", value: "Dev & Athlete", icon: <FaFutbol /> },
  ];

  const interests = [
    { name: "AI Exploring", icon: <FaRobot /> },
    { name: "Pro Footballer", icon: <FaFutbol /> },
    { name: "Coding", icon: <FaCode /> },
    { name: "Traveling", icon: <FaPlane /> },
    { name: "Gaming", icon: <FaGamepad /> },
  ];

  const stats = [
    { count: "2+", label: "Years Experience" },
    { count: "20+", label: "Projects Done" },
    { count: "100%", label: "Dedication" },
    { count: "High", label: "AI Proficiency" },
  ];

  return (
    <div id="about" className="bg-[#0b031a] py-20 overflow-hidden relative">
      {/* Background Glow Effect */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />

      <div className="px-6 mx-auto max-w-7xl md:px-10">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="flex items-center gap-3 text-4xl font-bold text-white md:text-5xl">
            <IoPersonOutline className="text-purple-500" />
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="w-32 h-1.5 mt-4 bg-gradient-to-r from-purple-600 to-transparent rounded-full" />
        </Motion.div>

        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Left Side: Image Area */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center w-full lg:w-1/2"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 group">
              {/* Rotating Border */}
              <div className="absolute inset-0 border-2 border-dashed border-purple-500/50 rounded-full animate-[spin_10s_linear_infinite] group-hover:pause" />

              <img
                src={about}
                alt="MH Seber"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-gray-800 shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              />

              {/* Floating Badge 1: AI Developer (Top Left) */}
              <div className="absolute -top-4 -left-4 px-4 py-1.5 text-xs font-bold text-white bg-purple-600 border rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] border-purple-400 animate-bounce">
                ✨ AI Enthusiast
              </div>

              {/* Floating Badge 2: Coder (Top Right) */}
              <div className="absolute -top-4 -right-4 px-4 py-1.5 text-xs font-bold text-white bg-blue-600 border rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)] border-blue-400 animate-[bounce_2s_infinite_1s]">
                💻 Coder
              </div>

              {/* Floating Badge 3: Web Architect (Bottom Left) */}
              <div className="absolute -bottom-2 -left-8 px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-gray-800 to-black border rounded-full shadow-lg border-gray-600 animate-[bounce_3s_infinite_0.5s]">
                🚀 Web Architect
              </div>

              {/* Floating Badge 4: Pro Footballer (আগে যেটা ছিল, Bottom Right) */}
              <div className="absolute flex items-center gap-2 px-4 py-2 font-bold text-black transition-transform transform bg-white shadow-xl -right-4 bottom-8 rounded-xl hover:scale-110">
                ⚽ Pro Footballer
              </div>
            </div>
          </Motion.div>

          {/* Right Side: Text & Info */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full text-white lg:w-1/2"
          >
            <h3 className="mb-4 text-2xl font-semibold text-purple-200">
              The Fusion of Logic, Agility & Intelligence
            </h3>

            <p className="mb-6 text-lg leading-relaxed text-gray-400">
              Hi! I’m <span className="font-bold text-white">MH Seber</span>. I
              live a dynamic life driven by three passions—I am a creative{" "}
              <span className="font-bold text-purple-400">
                AI-Augmented Developer
              </span>
              , a dedicated{" "}
              <span className="font-bold text-blue-300">
                Frontend Developer
              </span>
              , and a{" "}
              <span className="font-bold text-green-400">
                Professional Footballer
              </span>
              .
            </p>

            <p className="mb-4 leading-relaxed text-gray-400">
              On the field, I mastered{" "}
              <b>discipline and quick decision-making</b>. In the world of code,
              I take it a step further by integrating
              <span className="italic text-purple-400">
                {" "}
                Artificial Intelligence
              </span>
              . I don't just build websites; I craft smart, high-performance web
              applications leveraging AI tools to optimize every pixel and line
              of code.
            </p>

            <p className="py-2 pl-4 mb-8 italic leading-relaxed text-gray-400 border-l-2 border-purple-500 bg-purple-500/5">
              "My goal is to bridge the gap between human creativity and AI
              efficiency, bringing the same competitive energy from the football
              pitch to the digital world."
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 pb-8 mb-8 border-b border-gray-800">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-3xl font-bold text-purple-500">
                    {stat.count}
                  </h4>
                  <p className="text-xs tracking-wide text-gray-500 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 transition-colors border rounded-lg bg-white/5 border-white/10 hover:border-purple-500/50"
                >
                  <span className="text-xl text-purple-400">{info.icon}</span>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase">
                      {info.label}
                    </span>
                    <span className="text-sm font-medium text-gray-200">
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Passions / Interests */}
            <div>
              <span className="block mb-3 text-sm text-gray-500 uppercase">
                My Passions
              </span>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${index === 0 ? "bg-white text-black border-white" : "bg-purple-900/30 text-purple-300 border-purple-500/30"}`}
                  >
                    {interest.icon} {interest.name}
                  </span>
                ))}
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
