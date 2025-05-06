import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { SlFire } from "react-icons/sl";
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiDaisyui,
} from "react-icons/si";
import { RiPixelfedFill, RiVercelFill } from "react-icons/ri";
import { DiFirebase } from "react-icons/di";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 95 },
      { name: "React", level: 90 },
      { name: "JavaScript", level: 70 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Next.js", level: 50 },
      { name: "Firebase", level: 80 },
      { name: "React Router", level: 80 },
      { name: "React Hook Form", level: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 60 },
      { name: "MongoDB", level: 75 },
      { name: "Firebase Auth", level: 70 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 80 },
      { name: "Axios", level: 50 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 },
      { name: "React Toastify", level: 90 },
      { name: "Vite", level: 85 },
      { name: "Sweetalert2", level: 75 },
    ],
  },
  {
    category: "DevOps & Hosting",
    items: [
      { name: "Netlify", level: 70 },
      { name: "Vercel", level: 85 },
      { name: "Surge", level: 70 },
      { name: "GitHub Actions", level: 80 },
      { name: "Firebase", level: 90 },
    ],
  },
];

const tools = [
  { name: "React", icon: <FaReact size={32} /> },
  { name: "Node.js", icon: <FaNodeJs size={32} /> },
  { name: "HTML", icon: <FaHtml5 size={32} /> },
  { name: "CSS", icon: <FaCss3Alt size={32} /> },
  { name: "Git", icon: <FaGitAlt size={32} /> },
  { name: "JavaScript", icon: <FaJs size={32} /> },
  { name: "Nextjs", icon: <SiNextdotjs size={32} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={32} /> },
  { name: "Express", icon: <SiExpress size={32} /> },
  { name: "MongoDB", icon: <SiMongodb size={32} /> },
  { name: "Figma", icon: <FaFigma size={32} /> },
  { name: "DaisyUi", icon: <SiDaisyui size={32} /> },
  { name: "Pixso", icon: <RiPixelfedFill size={32} /> },
  { name: "Firebase", icon: <DiFirebase size={32} /> },
  { name: "Vercel", icon: <RiVercelFill size={32} /> },
];

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen px-4 py-20 bg-gray-50">
      <h1 className="flex gap-2 mb-12 text-4xl font-semibold underline">
        <SlFire className="text-red-500" />
        Skills & Tools
      </h1>

      {/* Marquee Row 1 */}
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center pt-3 mr-6 space-y-2"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-4 text-white rounded-full bg-gradient-to-r from-purple-600 via-black to-purple-950"
            >
              {tool.icon}
            </motion.div>
            <span className="text-sm font-medium text-gray-700">
              {tool.name}
            </span>
          </div>
        ))}
      </Marquee>

      {/* Marquee Row 2 */}
      <Marquee
        direction="right"
        speed={50}
        gradient={false}
        pauseOnHover={true}
        className="mt-12"
      >
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center pt-2 mr-6 space-y-2"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-4 text-white rounded-full bg-gradient-to-l from-purple-600 via-black to-purple-950"
            >
              {tool.icon}
            </motion.div>
            <span className="text-sm font-medium text-gray-700">
              {tool.name}
            </span>
          </div>
        ))}
      </Marquee>

      {/* Skill Bars */}
      <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
        {skills.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-500">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-950">
                      <i>{skill.name}</i>
                    </span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-2 bg-purple-800 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
