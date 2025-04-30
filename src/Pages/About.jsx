import { IoPersonOutline } from "react-icons/io5";
import about from "../assets/about.png";
const About = () => {
  return (
    <div id="about">
      <section className="pt-10 pl-10">
        <h2 className="flex gap-2 text-4xl font-bold text-gray-900">
          <IoPersonOutline className="text-red-500" />
          About Me
        </h2>
        <div className="w-56 h-1 mt-2 bg-black rounded-full" />
      </section>
      {/* about */}
      <section>
        <div className="min-h-screen hero bg-base-200">
          <div className="flex-col hero-content lg:flex-row">
            <img src={about} className="w-[400px] rounded-lg shadow-2xl" />
            <div>
              <p className="py-6 text-xl font-bold text-gray-500">
                Hi! I’m a passionate Frontend Developer with a strong focus on
                creating responsive, user-friendly, and visually appealing web
                applications. I specialize in modern frontend technologies like
                React, TypeScript, and Tailwind CSS, and I love bringing designs
                to life with clean, maintainable code. With a deep understanding
                of UI/UX principles, I aim to build seamless digital experiences
                that not only look great but also perform efficiently across all
                devices. Whether it's turning complex ideas into interactive
                interfaces or optimizing performance, I enjoy every step of the
                development process. Beyond coding, I’m constantly exploring new
                technologies, contributing to open-source projects, and learning
                new ways to improve my craft. I'm driven by curiosity,
                creativity, and a desire to solve real-world problems through
                code.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
