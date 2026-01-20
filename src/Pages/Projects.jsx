import { useRef, useState } from "react";
import { GoProjectSymlink } from "react-icons/go";
import {
  motion as Motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import project1 from "../assets/projects 1.PNG";
import project2 from "../assets/projects 2.PNG";
import project3 from "../assets/projects 3.PNG";
import project4 from "../assets/projects 4.PNG";
import project5 from "../assets/projects 5.PNG";
import project6 from "../assets/projects 6.PNG";
import project7 from "../assets/projects 7.PNG";

const projects = [
  {
    id: 1,
    title: "Haya Mart",
    image: project6,
    brief:
      "A premium E-commerce platform dedicated to modest and Islamic fashion, featuring a seamless shopping experience.",
    description:
      "Haya Mart is a full-stack e-commerce solution built for an Islamic clothing brand. It features a clean, user-friendly interface for browsing modest wear, a robust product filtering system, secure authentication, and an intuitive checkout flow. The goal was to blend traditional values with modern technology.",
    technologies: [
      "React",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Express",
      "Firebase Auth",
      "MongoDB",
      "Framer Motion",
      "Vercel",
    ],
    challenges:
      "Implementing a highly efficient multi-category filtering system for different sizes and colors of modest attire while maintaining fast load times was the primary challenge. Handling secure user data and real-time inventory updates required careful backend architecture.",
    improvements:
      "Planned updates include integrating an automated payment gateway (SSLCommerz/Stripe), implementing a user-driven review and rating system, and an AI-based recommendation engine for personalized styling suggestions.",
    liveLink: "https://haya-mart-phi.vercel.app",
    githubLink: "https://github.com/mhseber/Haya-Mart",
  },
  {
    id: 2,
    title: "PH Newspaper",
    image: project7,
    brief:
      "A dynamic, real-time news portal delivering breaking news and global updates across various categories.",
    description:
      "PH Newspaper is a comprehensive news aggregation platform that provides users with up-to-the-minute information from around the world. It features a clean, journalistic layout with categories like Politics, Tech, Sports, and Entertainment. Built with Next.js for superior SEO and performance, it ensures a fast reading experience even on slow connections.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "MongoDB",
      "Framer Motion",
      "Vercel",
    ],
    challenges:
      "The main challenge was managing complex data structures from multiple news sources while ensuring fast server-side rendering (SSR) for SEO. Implementing a robust search and category-based filtering system required optimized database queries to keep the performance high.",
    improvements:
      "I plan to integrate a user subscription model (Newsletter), a dark/light mode toggle for better readability, and an AI-based news summarizer to provide quick highlights of long articles.",
    liveLink: "https://ph-newspaper.vercel.app",
    githubLink: "https://github.com/mhseber/PH-NewsPaper-NextJs",
  },
  {
    id: 3,
    title: "Movies World",
    image: project5,
    brief:
      "A dynamic movie exploration website showcasing posters and details across multiple categories.",
    description:
      "Movies World is a visually engaging web application where users can explore movies by category, view posters, and dive into detailed information including synopsis, release year, cast, ratings, and more. The site offers a smooth and interactive user experience, making it easy to find and discover new or popular films.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "React Router",
      "Firebase Auth",
      "MongoDB",
    ],
    challenges:
      "Implementing a responsive and fast-loading gallery with category-based filtering was challenging. Fetching and displaying large sets of data from external APIs while maintaining performance and user experience also required optimization.",
    improvements:
      "Future improvements include adding user authentication, watchlist functionality, trailer previews, and a review system. Enhancing search filters and supporting dark mode are also planned.",
    liveLink: "https://auth-more-add-page.web.app",
    githubLink: "https://github.com/mhseber/Movies-World-client",
  },
  {
    id: 4,
    title: "TechAid",
    image: project3,
    brief:
      "Fast and reliable repair services for all your electronics, from TVs to computers, ACs, and more.",
    description:
      "TechAid Electronics Repair is your one-stop solution for professional and affordable repair services. We specialize in fixing TVs, computers, PCs, air conditioners, and a wide range of electronic appliances. Our expert technicians ensure quality service and customer satisfaction with every repair job.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
    challenges:
      "Building customer trust online, managing real-time service updates, and handling a wide variety of electronics models from different brands were major challenges.",
    improvements:
      "In the future, we plan to add instant booking systems, real-time tracking of repair status, customer feedback integration, and a mobile app to make service requests even easier.",
    liveLink: "https://prohand-f1b91.web.app",
    githubLink: "https://github.com/mhseber/ProHand-client",
  },
  {
    id: 5,
    title: "Gadget Heaven",
    image: project1,
    brief:
      "A one-stop destination for the latest gadgets including smartphones, headphones, keyboards, and more.",
    description:
      "Gadget Heaven is an e-commerce styled platform dedicated to showcasing and selling the newest tech gadgets. From cutting-edge smartphones to high-quality audio devices and advanced keyboards, this site provides detailed product views, smooth UI animations, and a user-friendly browsing experience. It’s designed to appeal to tech enthusiasts looking for modern devices at their fingertips.",
    technologies: ["React", "Tailwind CSS", "NodeJs", "React Router"],
    challenges:
      "Managing a diverse range of product categories with optimized performance was challenging. Ensuring fast image loading, smooth scrolling animations, and maintaining a clean UI across devices required careful planning.",
    improvements:
      "Future plans include integrating a real-time search functionality, user reviews, and setting up a shopping cart with a secure checkout system to enhance the user experience even further.",
    liveLink: "https://useful-mhsebermeeting.surge.sh/",
    githubLink: "https://github.com/mhseber/Gadget-Heaven",
  },
  {
    id: 6,
    title: "ECO Tr@vel",
    image: project2,
    brief:
      "Discover eco-friendly travel destinations and book sustainable trips effortlessly.",
    description:
      "ECO Tr@vel is a travel booking platform focused on promoting sustainable tourism. Users can explore eco-friendly destinations, plan trips, and book accommodations that prioritize environmental responsibility. With a smooth and intuitive UI, travelers can find curated eco-tours, budget plans, and adventure activities, all with a few clicks.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    challenges:
      "Implementing real-time booking availability and integrating maps for destination highlights was challenging. Also ensuring that the platform remains lightweight and SEO-optimized required careful optimization strategies.",
    improvements:
      "Future improvements include adding user reviews, integrating payment gateways for instant booking, and expanding the platform to include carbon footprint calculators to help users travel more responsibly.",
    liveLink: "https://eco-travel-72b99.web.app/",
    githubLink: "https://github.com/mhseber/ECO-Travel",
  },

  {
    id: 7,
    title: "Peddy",
    image: project4,
    brief:
      "Buy your favorite pets and explore detailed information about pet care and maintenance.",
    description:
      "Peddy is an online platform where pet lovers can easily find and purchase a wide variety of pets, including cats, dogs, birds, and more. We also offer rich educational content about pet health, grooming, training, and daily care to help you become the best pet owner possible. Our goal is to build a trusted pet community where love for animals thrives.",
    technologies: ["NodeJs", "DaisyUi", "Firebase", "Tailwind CSS"],
    challenges:
      "Managing real-time inventory updates for pets, ensuring secure online transactions, and providing accurate, up-to-date pet care information were some key challenges.",
    improvements:
      "In the future, we plan to add live chat with veterinarians, real-time adoption events, pet insurance options, and a mobile app to enhance user convenience.",
    liveLink: "https://voiceless-teeth.surge.sh/",
    githubLink: "https://github.com/mhseber/Peddy",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const targetRef = useRef(null);

  // Horizontal Scroll Setup
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // এই ভ্যালুটি প্রজেক্টের সংখ্যার ওপর নির্ভর করে।
  // -75% মানে কার্ডগুলো বাম দিকে সরে যাবে।
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#030014]">
      {/* Sticky Container */}
      <div className="sticky top-0 flex flex-col justify-center h-screen overflow-hidden">
        {/* Section Header */}
        <div className="px-10 mb-10">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h2 className="flex items-center gap-3 text-5xl font-black text-white md:text-6xl">
              <GoProjectSymlink className="text-purple-500" />
              My <span className="text-purple-500">Works</span>
            </h2>
            <div className="w-32 h-1.5 mt-4 bg-gradient-to-r from-purple-600 to-transparent rounded-full" />
          </Motion.div>
        </div>

        {/* Horizontal Moving Track */}
        <div className="flex items-center">
          <Motion.div style={{ x }} className="flex gap-8 px-10">
            {projects.map((project) => (
              <Motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group relative h-[450px] w-[350px] md:w-[450px] overflow-hidden bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm cursor-pointer shrink-0"
              >
                <div className="relative overflow-hidden h-2/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-80" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-purple-400">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm italic text-gray-400 line-clamp-2">
                    {project.brief}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[10px] font-bold text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>

      {/* --- Modal Window (Updated Dark UI) --- */}
      <AnimatePresence>
        {selectedProject && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <Motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-[2rem] p-8 bg-[#0b031a] border border-purple-500/30 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-black">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <img
                src={selectedProject.image}
                className="w-full h-auto mb-8 border rounded-2xl border-white/10"
              />

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 text-sm font-bold tracking-widest text-purple-400 uppercase">
                      Description
                    </h4>
                    <p className="leading-relaxed text-gray-300">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-bold tracking-widest text-purple-400 uppercase">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-md bg-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 text-sm font-bold tracking-widest text-purple-400 uppercase">
                      Challenges
                    </h4>
                    <p className="text-sm text-gray-400">
                      {selectedProject.challenges}
                    </p>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      className="flex items-center justify-center flex-1 gap-2 px-6 py-3 font-bold transition-all bg-purple-600 rounded-xl hover:bg-purple-700 bg-gradient-to-r from-purple-700 to-black text-white  hover:shadow-[0_0_20px_rgba(128,0,128,0.6)]  duration-300 transform hover:-translate-y-1 group"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      className="flex items-center justify-center flex-1 gap-2 px-6 py-3 font-bold transition-all bg-white/10 rounded-xl hover:bg-white/20"
                    >
                      <Github size={18} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
