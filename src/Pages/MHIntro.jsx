import {
  FaDownload,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import me from "../assets/p-mh3.png";
import NameAnimation from "./NameAnimation";
import { FiGithub } from "react-icons/fi";
import bgImage from "../assets/intro-bg.jpg";

const MHIntro = () => {
  return (
    <div
      id="home"
      className="relative justify-around w-full min-h-screen pb-10 bg-center bg-no-repeat bg-cover pt-28 lg:flex"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* text container */}
      <div className="pt-20 pb-4 ml-6 lg:pl-0 lg:pb-0">
        <h1 className="text-3xl font-extrabold lg:text-5xl">
          <span className="text-gray-400">Hi I'am</span> <br />
          <NameAnimation />
        </h1>
        <h1 className="pt-6 text-xl font-bold lg:text-3xl">
          <span className="text-purple-400">Frontend Developer</span> || Web
          Enthusiast
        </h1>
        <p className="max-w-xl pt-6 font-light leading-relaxed text-gray-400 lg:text-lg md:text-xl">
          Specializing in crafting{" "}
          <span className="italic font-semibold text-purple-500">
            high-performance
          </span>
          , visually stunning, and{" "}
          <span className="italic font-semibold text-purple-500">
            user-centric
          </span>{" "}
          web experiences. I bridge the gap between{" "}
          <span className="text-white border-b border-purple-800">
            complex logic
          </span>{" "}
          and elegant design with clean, scalable code.
        </p>
        {/* btn Container */}
        <div className="flex flex-wrap items-center gap-4 pt-6 pl-2">
          {/* resume btn */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/MH-Resume-Frontend.pdf";
              link.download = "MH_Seber_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="relative px-6 py-2 overflow-hidden text-sm text-gray-300 border border-purple-500 rounded-md sm:text-base md:text-lg lg:text-xl group"
          >
            <span className="relative z-10 flex hover:text-white">
              <FaDownload className="pt-2 mr-2" />
              DOWNLOAD RESUME
            </span>
            <span className="absolute top-0 left-0 z-0 w-full h-full transition-all duration-700 ease-in-out opacity-0 bg-gradient-to-r from-purple-700 to-black group-hover:opacity-100"></span>
          </button>

          {/* Contact Me Button */}
          <a href="#contact">
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-700 to-black text-white px-6 py-2 rounded-lg hover:shadow-[0_0_20px_rgba(128,0,128,0.6)] transition-all duration-300 transform hover:-translate-y-1 group">
              <span>Contact Me</span>
              <FaPaperPlane className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </a>
        </div>
        {/* social icons */}
        <div className="flex justify-center gap-4 p-4 shadow-lg shadow-gray-200 bg-gradient-to-r from-black via-purple-700 to-gray-800 rounded-2xl mt-7  bg-[length:200%_200%] animate-gradient-x">
          <a
            href="https://www.facebook.com/mh.seber.9/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 transition-transform duration-300 bg-white rounded-full hover:scale-110"
          >
            <FaFacebook className="text-2xl text-blue-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/mahamudul-hasan-seber-9280072a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 transition-transform duration-300 bg-white rounded-full hover:scale-110"
          >
            <FaLinkedinIn className="text-2xl text-blue-700" />
          </a>

          <a
            href="https://www.instagram.com/mh_seber?igsh=MTh3M2o0NjZ6dXBjYw=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 transition-transform duration-300 bg-white rounded-full hover:scale-110"
          >
            <FaInstagram className="text-2xl text-pink-600" />
          </a>
          <a
            href="https://github.com/mhseber"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 transition-transform duration-300 bg-white rounded-full hover:scale-110"
          >
            <FiGithub className="text-2xl text-gray-800" />
          </a>
        </div>
      </div>

      {/* img - Updated Section */}
      <div className="flex items-center justify-center pt-10 lg:pt-0 lg:w-1/2">
        <div className="relative">
          {/* Background Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/10 rounded-full blur-3xl"></div>

          <img
            src={me}
            className="w-[500px] h-auto object-contain image-rendering-auto contrast-[1.05] brightness-[1.05] saturate-[1.1]"
            alt="MH Seber"
          />
        </div>
      </div>
    </div>
  );
};

export default MHIntro;
