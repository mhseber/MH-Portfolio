const Footer = () => {
  return (
    <footer className="px-6 py-10 mt-20 text-white bg-gray-800">
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        {/* About */}
        <div>
          <h4 className="mb-2 text-xl font-semibold">About Me</h4>
          <p className="text-sm text-gray-400">
            I’m Mahamudul Hasan Seber — a passionate developer & marketer. I
            love building beautiful web experiences and solving business
            problems with tech.
          </p>
          <p className="pt-5 text-2xl font-extrabold">
            "Never miss your Prayers."
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-2 text-xl font-semibold">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-2 text-xl font-semibold">Contact</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Email: sebermh@gmail.com</li>
            <li>Phone: 01799894176</li>
            <li>Location: Gandaria, Dhaka</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Mahamudul Hasan Seber. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
