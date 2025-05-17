import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { GoProjectSymlink } from "react-icons/go";
import { X, ExternalLink, Github } from "lucide-react";
import project1 from "../assets/projects 1.PNG";
import project2 from "../assets/projects 2.PNG";
import project3 from "../assets/projects 3.PNG";
import project4 from "../assets/projects 4.PNG";
import project5 from "../assets/projects 5.PNG";

const projects = [
  {
    id: 1,
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
      "TMDB API",
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
    id: 2,
    title: "ProHand",
    image: project3,
    brief:
      "Fast and reliable repair services for all your electronics, from TVs to computers, ACs, and more.",
    description:
      "ProHand Electronics Repair is your one-stop solution for professional and affordable repair services. We specialize in fixing TVs, computers, PCs, air conditioners, and a wide range of electronic appliances. Our expert technicians ensure quality service and customer satisfaction with every repair job.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
    challenges:
      "Building customer trust online, managing real-time service updates, and handling a wide variety of electronics models from different brands were major challenges.",
    improvements:
      "In the future, we plan to add instant booking systems, real-time tracking of repair status, customer feedback integration, and a mobile app to make service requests even easier.",
    liveLink: "https://prohand-f1b91.web.app/",
    githubLink: "https://github.com/mhseber/ProHand-client",
  },
  {
    id: 3,
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
    id: 4,
    title: "ECO Tr@vel",
    image: project2,
    brief:
      "Discover eco-friendly travel destinations and book sustainable trips effortlessly.",
    description:
      "ECO Tr@vel is a travel booking platform focused on promoting sustainable tourism. Users can explore eco-friendly destinations, plan trips, and book accommodations that prioritize environmental responsibility. With a smooth and intuitive UI, travelers can find curated eco-tours, budget plans, and adventure activities, all with a few clicks.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    challenges:
      "Implementing real-time booking availability and integrating maps for destination highlights was challenging. Also ensuring that the platform remains lightweight and SEO-optimized required careful optimization strategies.",
    improvements:
      "Future improvements include adding user reviews, integrating payment gateways for instant booking, and expanding the platform to include carbon footprint calculators to help users travel more responsibly.",
    liveLink: "https://eco-travel-72b99.web.app/",
    githubLink: "https://github.com/mhseber/ECO-Travel",
  },

  {
    id: 5,
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
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const raf = () => {
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-indigo-400 to-black "
    >
      <div ref={container} className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="flex gap-2 text-4xl font-bold text-gray-900">
            <GoProjectSymlink className="text-red-500" />
            Projects
          </h2>
          <div className="w-48 h-1 mt-2 bg-black rounded-full" />
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-56 p-3 rounded-lg"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-gray-500">
                  {project.brief}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs text-blue-700 bg-blue-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black bg-opacity-60"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-6 bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h3>
                  <button onClick={() => setSelectedProject(null)}>
                    <X size={28} className="text-gray-700" />
                  </button>
                </div>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="object-cover w-full h-64 mb-6 rounded-lg"
                />

                <div className="space-y-5">
                  <div>
                    <h4 className="font-extrabold text-purple-800">
                      Description
                    </h4>
                    <p className="text-gray-500">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-purple-800">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 mt-3 text-sm text-gray-500 bg-gray-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-purple-800">
                      Challenges
                    </h4>
                    <p className="text-gray-500">
                      {selectedProject.challenges}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-purple-800">
                      Future Improvements
                    </h4>
                    <p className="text-gray-500">
                      {selectedProject.improvements}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-6 ">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-white transition rounded bg-gradient-to-r from-blue-700 to-black"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 transition border border-gray-400 rounded hover:bg-gray-100"
                  >
                    <Github size={18} /> View Code
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
