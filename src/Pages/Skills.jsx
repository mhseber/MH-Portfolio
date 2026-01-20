import React from "react";
import { motion as Motion } from "framer-motion";
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
      { name: "HTML5 & CSS3", level: 99 },
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Next.js", level: 75 },
      { name: "TypeScript", level: 10 },
      { name: "Axios & Fetch API", level: 85 },
    ],
  },
  {
    category: "Backend & Auth",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase (Auth & FireStore)", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "JWT Authentication", level: 65 },
    ],
  },
  {
    category: "Design & Animation",
    items: [
      { name: "Figma", level: 75 },
      { name: "Framer Motion", level: 85 },
      { name: "DaisyUI", level: 95 },
      { name: "Responsive Design", level: 98 },
      { name: "Canva", level: 88 },
    ],
  },
  {
    category: "Tools & Deployment",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Vercel / Netlify", level: 90 },
      { name: "Postman", level: 75 },
      { name: "Vite", level: 90 },
      { name: "NPM / PNPM", level: 95 },
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

const imgTools = [
  {
    name: "HTML",
    src: "https://thumbs.dreamstime.com/b/astana-kazakhstan-july-html-icon-logo-vector-symbol-198641993.jpg",
  },
  {
    name: "CSS",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UbgCQjb0mCUe8Sk7QAz2y4KxOXXe0D-Itg&s",
  },
  {
    name: "VS CODE",
    src: "https://cdn.dribbble.com/userupload/33362890/file/original-e58be49d21e5f722ac142b37172a5409.png",
  },
  {
    name: "GIT",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLnP6OmqDVCPB5Res4-7xWJK6DjMwnHa-HpQ&s",
  },
  {
    name: "GITHUB",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuANvhcmXlP_41PL4VxP38Vcsted42ZY5TBQ&s",
  },
  {
    name: "React",
    src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
  },
  {
    name: "Next.js",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj13DpXfc1_RayzN0ecY0-p_ws7TK3sxpO6w&s",
  },
  {
    name: "JavaScript",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "Tailwind",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "NPM Package",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShkLKIXoV9cqkHD-60xblHWwHPtn3BDpWW4w&s",
  },
  {
    name: "vite",
    src: "https://logowik.com/content/uploads/images/vite-frontend-tool1721420731.logowik.com.webp",
  },
  {
    name: "DaisyUI",
    src: "https://img.daisyui.com/images/daisyui/wallpaper-black.png",
  },
  {
    name: "Node.js",
    src: "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png",
  },
  {
    name: "MongoDB",
    src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    name: "Express.js",
    src: "https://cdn.hashnode.com/res/hashnode/image/upload/v1675637255386/f3a9a38b-116d-4b35-8f46-8d8abb78166f.png",
  },
  {
    name: "Firebase",
    src: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png",
  },
  {
    name: "Postman",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZAPhkIP75IVa4trptoEfFlzk-0KFEm0ibg&s",
  },
  {
    name: "Vercel",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BLa_d1SN9EELEOi0Zy_S6MZbmRtqZpknxA&s",
  },
  {
    name: "Netlify",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInFF3IRKM4H6Intitu6czlku7sokFHtN_MA&s",
  },
  {
    name: "Figma",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Pixso",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROq0YZZapbpmhdHQlAebJ_FGvNcpA1NLliAQ&s",
  },
  {
    name: "Canva",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Hd3tvF7UP4eIcio2C5T1S39R2awdVjNTJQ&s",
  },
  {
    name: "Framer Motion",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPznwv7OeqDgGjrlZfT28XyX4J9oJyZ9TYwg&s",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen px-4 py-20 ">
      <h1 className="flex gap-2 mb-12 text-4xl font-semibold underline">
        <SlFire className="text-purple-900" />
        Skills & Tools
      </h1>

      {/* --- Image Tools Row --- */}
      <div className="flex flex-wrap justify-center gap-10 mb-16">
        {imgTools.map((tool, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.15, rotate: 3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative flex items-center justify-center p-5 transition-all duration-300 border shadow-lg group bg-gray-900/40 rounded-2xl border-purple-500/20 hover:border-purple-500/60"
          >
            {/* লোগো ইমেজ */}
            <img
              src={tool.src}
              alt={tool.name}
              className="object-contain w-12 h-12 transition-all duration-500 md:w-16 md:h-16 filter grayscale group-hover:grayscale-0"
            />

            {/* হোভার করলে টুল এর নাম দেখাবে */}
            <span className="absolute text-xs font-bold tracking-widest text-purple-400 uppercase transition-all duration-300 opacity-0 -bottom-8 group-hover:opacity-100 group-hover:-bottom-6">
              {tool.name}
            </span>
          </Motion.div>
        ))}
      </div>

      {/* Marquee Row 1 */}
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center pt-3 mr-6 space-y-2"
          >
            <Motion.div
              whileHover={{ scale: 1.1 }}
              className="p-4 text-white rounded-full bg-gradient-to-r from-purple-600 via-black to-purple-950"
            >
              {tool.icon}
            </Motion.div>
            <span className="text-sm font-bold text-gray-300">{tool.name}</span>
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
            <Motion.div
              whileHover={{ scale: 1.1 }}
              className="p-4 text-white rounded-full bg-gradient-to-l from-purple-600 via-black to-purple-950"
            >
              {tool.icon}
            </Motion.div>
            <span className="text-sm font-bold text-gray-300">{tool.name}</span>
          </div>
        ))}
      </Marquee>

      {/* Skill Bars */}
      <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, index) => (
          <Motion.div
            key={category.category}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }} // হোভার করলে সামান্য উপরে উঠবে
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:border-purple-500/50 transition-colors"
          >
            <h3 className="mb-8 text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
              {category.category}
            </h3>

            <div className="space-y-6">
              {category.items.map((skill, skillIndex) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-300 transition-colors group-hover:text-purple-400">
                      {skill.name}
                    </span>
                    <span className="font-bold text-purple-500">
                      {skill.level}%
                    </span>
                  </div>

                  {/* মেইন বার */}
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden p-[1px]">
                    <Motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: 0.2 + skillIndex * 0.1, // একেকটি বার একেক সময়ে লোড হবে
                        ease: "circOut",
                      }}
                      className="relative h-full rounded-full bg-gradient-to-r from-purple-600 via-purple-400 to-pink-500"
                    >
                      {/* বার এর ভেতর একটি শাইন ইফেক্ট */}
                      <Motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 w-20 skew-x-12 bg-white/20"
                      />
                    </Motion.div>
                  </div>
                </div>
              ))}
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
