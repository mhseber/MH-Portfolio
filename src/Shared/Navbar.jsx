import { SlFire } from "react-icons/sl";
import { GoProjectSymlink } from "react-icons/go";
import { LuContact } from "react-icons/lu";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navOptions = (
    <>
      <li className="relative group">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="text-purple-500 !font-bold"
          className="flex items-center gap-2 px-3 py-2 transition duration-300 cursor-pointer hover:text-purple-400"
        >
          <IoHomeOutline className="text-xl lg:text-lg" />
          <span className="text-lg lg:text-base">Home</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </ScrollLink>
      </li>
      <li className="relative group">
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="text-purple-500 !font-bold"
          className="flex items-center gap-2 px-3 py-2 transition duration-300 cursor-pointer hover:text-purple-400"
        >
          <SlFire className="text-xl lg:text-lg" />
          <span className="text-lg lg:text-base">Skills</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </ScrollLink>
      </li>
      <li className="relative group">
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="text-purple-500 !font-bold"
          className="flex items-center gap-2 px-3 py-2 transition duration-300 cursor-pointer hover:text-purple-400"
        >
          <GoProjectSymlink className="text-xl lg:text-lg" />
          <span className="text-lg lg:text-base">Projects</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </ScrollLink>
      </li>
      <li className="relative group">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="text-purple-500 !font-bold"
          className="flex items-center gap-2 px-3 py-2 transition duration-300 cursor-pointer hover:text-purple-400"
        >
          <IoPersonOutline className="text-xl lg:text-lg" />
          <span className="text-lg lg:text-base">About</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </ScrollLink>
      </li>
      <li className="relative group">
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="text-purple-500 !font-bold"
          className="flex items-center gap-2 px-3 py-2 transition duration-300 cursor-pointer hover:text-purple-400"
        >
          <LuContact className="text-xl lg:text-lg" />
          <span className="text-lg lg:text-base">Contact</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </ScrollLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 z-50 w-full px-4 pt-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto navbar bg-[#0b031a]/70 backdrop-blur-lg border border-white/10 shadow-2xl rounded-2xl md:px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="p-0 mr-2 text-white btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-4 mt-4 shadow-2xl menu menu-sm dropdown-content bg-[#0b031a] border border-white/10 rounded-xl z-[1] w-64 text-white space-y-2"
            >
              {navOptions}
            </ul>
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-white md:text-3xl">
            MH<span className="text-purple-600">.</span>SEBER
          </h1>
        </div>

        <div className="hidden navbar-center lg:flex">
          <ul className="flex items-center gap-4 px-1 font-medium text-gray-300 menu-horizontal">
            {navOptions}
          </ul>
        </div>

        <div className="navbar-end">
          <ScrollLink
            to="contact"
            smooth={true}
            className=" font-bold  border-none md:flex btn btn-sm md:btn-md  hover:scale-105 flex items-center gap-2 bg-gradient-to-r from-purple-700 to-black text-white px-6 py-2 rounded-lg hover:shadow-[0_0_20px_rgba(128,0,128,0.6)] transition-all duration-300 transform hover:-translate-y-1 group"
          >
            Hire Me
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
