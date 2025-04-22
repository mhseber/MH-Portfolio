import { FaDownload } from "react-icons/fa";
import me from "../assets/seber.png";
import NameAnimation from "./NameAnimation";

const MHIntro = () => {
  return (
    <div id="home" className="flex justify-around pt-40">
      {/* text */}
      <div className="pt-20">
        <h1 className="text-5xl font-extrabold">
          <span className="text-gray-500">Hi I'am</span> <br />
          <NameAnimation />
        </h1>
        <h1 className="pt-6 text-3xl font-bold">
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
      </div>

      {/* img */}
      <div>
        <img
          src={me}
          class="animate-gradient-x rounded-full border-4 border-dashed border-purple-950 shadow-[0_0_25px_5px_rgba(128,0,128,0.5)] bg-gradient-to-br from-purple-800 via-black to-purple-500"
        />
      </div>
    </div>
  );
};

export default MHIntro;
