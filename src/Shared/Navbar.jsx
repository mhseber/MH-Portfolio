import { Link } from "react-router-dom";
import logo from "../assets/mh-Logo.png";
import { SlFire } from "react-icons/sl";
import { GoProjectSymlink } from "react-icons/go";
import { LuContact } from "react-icons/lu";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  const navOptions = (
    <>
      <li className="transition duration-200 hover:underline hover:decoration-purple-500 hover:underline-offset-4">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="active"
          className="flex items-center gap-2 cursor-pointer"
        >
          <IoHomeOutline />
          Home
        </ScrollLink>
      </li>
      <li className="transition duration-200 hover:underline hover:decoration-purple-500 hover:underline-offset-4">
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="active"
          className="flex items-center gap-2 cursor-pointer"
        >
          <SlFire />
          Skills
        </ScrollLink>
      </li>
      <li className="transition duration-200 hover:underline hover:decoration-purple-500 hover:underline-offset-4">
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="active"
          className="flex items-center gap-2 cursor-pointer"
        >
          <GoProjectSymlink />
          Projects
        </ScrollLink>
      </li>
      <li className="transition duration-200 hover:underline hover:decoration-purple-500 hover:underline-offset-4">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="active"
          className="flex items-center gap-2 cursor-pointer"
        >
          <IoPersonOutline />
          About
        </ScrollLink>
      </li>
      <li className="transition duration-200 hover:underline hover:decoration-purple-500 hover:underline-offset-4">
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="active"
          className="flex items-center gap-2 cursor-pointer"
        >
          <LuContact />
          Contact
        </ScrollLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="fixed z-10 text-black shadow-lg bg-opacity-30 backdrop-blur-md navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="text-xl">
            <img className="pl-5 w-36" src={logo} alt="logo" />
          </a>
        </div>
        <div className="hidden pr-32 font-medium navbar-center lg:flex">
          <ul className="px-1 text-2xl menu menu-horizontal ">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
