import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaFutbol,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 text-white bg-black border-t border-white/5">
      <div className="px-6 mx-auto max-w-7xl md:px-10">
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <h4 className="mb-4 text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">
              MH SEBER
            </h4>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              A unique blend of{" "}
              <span className="font-medium text-purple-400">
                Logic & Agility
              </span>
              . Frontend Developer by day and Professional Footballer by
              passion.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/mhseber"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all border rounded-full bg-white/5 hover:bg-purple-600 hover:text-white border-white/10"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mhseber"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all border rounded-full bg-white/5 hover:bg-blue-600 hover:text-white border-white/10"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all border rounded-full bg-white/5 hover:bg-pink-600 hover:text-white border-white/10"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all border rounded-full bg-white/5 hover:bg-blue-700 hover:text-white border-white/10"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="relative inline-block mb-6 text-lg font-bold">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-purple-500"></span>
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#home"
                  className="transition-colors hover:text-purple-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-purple-400"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="transition-colors hover:text-purple-400"
                >
                  Technical Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="transition-colors hover:text-purple-400"
                >
                  Recent Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-purple-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="relative inline-block mb-6 text-lg font-bold">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-purple-500"></span>
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                Email:{" "}
                <span className="font-medium text-white">
                  sebermh@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                Phone:{" "}
                <span className="font-medium text-white">+8801799894176</span>
              </li>
              <li className="flex items-center gap-2 text-center md:text-left">
                Location:{" "}
                <span className="font-medium text-white">Gandaria, Dhaka</span>
              </li>
            </ul>
          </div>

          {/* Quote & Athlete Status */}
          <div className="p-6 border bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border-white/5">
            <p className="mb-4 text-xl italic font-bold leading-tight text-purple-300">
              "Never miss your Prayers."
            </p>
            <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-gray-400 uppercase">
              <FaFutbol className="animate-bounce" />
              Professional Athlete
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-white/5 md:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-300">MH SEBER</span>. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-[10px] tracking-[4px] uppercase font-bold">
            Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
