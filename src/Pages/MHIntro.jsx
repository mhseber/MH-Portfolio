import {
  FaDownload,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import me from "../assets/seber.png";
import NameAnimation from "./NameAnimation";
import { FiGithub } from "react-icons/fi";

const MHIntro = () => {
  return (
    <div id="home" className="justify-around pt-40 lg:flex">
      {/* text */}
      <div className="pt-20 pb-4 pl-5 lg:pl-0 lg:pb-0">
        <h1 className="text-4xl font-extrabold lg:text-5xl">
          <span className="text-gray-500">Hi I'am</span> <br />
          <NameAnimation />
        </h1>
        <h1 className="pt-6 text-xl font-bold lg:text-3xl">
          <span className="text-purple-500">Frontend Developer</span> || Web
          Enthusiast
        </h1>
        <p className="max-w-md pt-4 text-lg text-gray-600">
          I love turning ideas into beautiful, user-friendly websites.
          Passionate about clean code, responsive design, and bringing
          creativity to every project I build.
        </p>
        {/* btn */}
        <div className="pt-6 pl-4 space-x-2">
          <button className="relative px-6 py-2 overflow-hidden text-sm text-black border border-purple-500 rounded-md sm:text-base md:text-lg lg:text-xl group">
            <span className="relative z-10 flex">
              {" "}
              <FaDownload className="pt-2" />
              DOWNLOAD RESUME
            </span>
            <span className="absolute top-0 left-0 z-0 w-full h-full transition-all duration-700 ease-in-out opacity-0 bg-gradient-to-r from-purple-700 via-pink-500 to-black group-hover:opacity-100"></span>
          </button>
          <button className="border-l-4 border-r-4 border-black btn btn-soft btn-primary">
            Contact Me
          </button>
        </div>
        {/* social icons */}
        <div className="flex justify-center gap-4 p-4 shadow-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-700 rounded-2xl mt-7  bg-[length:200%_200%] animate-gradient-x">
          <a
            href="https://www.facebook.com/mh.seber.9/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 transition-transform duration-300 bg-white rounded-full hover:scale-110"
          >
            <FaFacebook className="text-2xl text-blue-600" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 transition-transform duration-300 bg-white rounded-full hover:scale-110"
          >
            <FaLinkedinIn className="text-2xl text-blue-700" />
          </a>

          <a
            href=""
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

      {/* img */}
      <div className="pl-20 lg:pl-0">
        <img
          src={me}
          class="animate-gradient-x rounded-full border-4 border-dashed border-purple-950 shadow-[0_0_25px_5px_rgba(128,0,128,0.5)] bg-gradient-to-br from-purple-800 via-black to-purple-500"
        />
      </div>
    </div>
  );
};

export default MHIntro;
