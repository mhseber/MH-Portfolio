import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { LuContact, LuPhoneCall } from "react-icons/lu";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import animation from "../assets/Animation.json";
import Lottie from "lottie-react";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_yykk84q",
        "template_aj43s4u",
        e.target,
        "6YTaUaYdLqSAnNsFt"
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        () => {
          setStatus("error");
        }
      );

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div id="contact">
      <section className="pt-10 pl-10">
        <h2 className="flex gap-2 text-4xl font-bold text-gray-900">
          <LuContact className="text-red-500" />
          Contact Me
        </h2>
        <div className="w-[245px] h-1 mt-2 bg-black rounded-full" />
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 gap-6 ml-12 lg:grid-cols-3 md:grid-cols-2 pt-28">
        {/* Phone */}
        <div className="mb-4 transition-transform duration-300 card bg-neutral text-neutral-content w-96 hover:scale-105">
          <div className="items-center text-center card-body">
            <div className="w-20 h-16 p-2 text-2xl bg-white rounded-full btn">
              <LuPhoneCall />
            </div>
            <p className="text-gray-400">Contact Me</p>
            <p>
              <i>Mahamudul Hasan Seber</i>
            </p>
            <p>01799894176</p>
          </div>
        </div>

        {/* Email */}
        <div className="mb-4 transition-transform duration-300 card bg-neutral text-neutral-content w-96 hover:scale-105">
          <div className="items-center text-center card-body">
            <div className="w-20 h-16 p-2 text-2xl bg-white rounded-full btn">
              <IoIosMail />
            </div>
            <p className="text-gray-400">Mail Me</p>
            <p>
              <i>sebermh@gmail.com</i>
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="transition-transform duration-300 card bg-neutral text-neutral-content w-96 hover:scale-105">
          <div className="items-center text-center card-body">
            <div className="w-20 h-16 p-2 text-2xl bg-white rounded-full btn">
              <FaLocationDot />
            </div>
            <p className="text-gray-400">My Location</p>
            <p>
              <i>44 No S K Dash Road, GANDARIA, Dhaka</i>
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse items-center justify-between gap-10 px-6 py-12 mt-2 bg-sky-200 md:flex-row md:items-start md:gap-20 lg:px-20">
        {/* Form */}
        <section className="w-full max-w-xl">
          <h1 className="mb-6 text-3xl font-bold text-black">Get in Touch</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 "
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full p-3 mt-1 text-gray-900 bg-white rounded-md shadow-sm input input-primary "
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="form_email"
                className="block w-full p-3 mt-1 text-gray-900 bg-white rounded-md shadow-sm input input-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full p-3 mt-1 text-gray-900 bg-white rounded-md shadow-sm textarea textarea-primary"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors rounded-md bg-gradient-to-r from-blue-700 to-black"
              disabled={status === "sending"}
            >
              <Send className="w-5 h-5 mr-2" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <p className="text-green-600">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </section>

        {/* Animation */}
        <section className="flex justify-center w-full max-w-md pt-10 ">
          <div className="w-full max-w-xs">
            <Lottie animationData={animation} loop={true} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
