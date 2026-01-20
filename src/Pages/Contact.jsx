import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { LuContact, LuPhoneCall } from "react-icons/lu";
import { Send } from "lucide-react";
import { motion as Motion } from "framer-motion"; // motion ছোট হাতের ইমপোর্ট করা হয়েছে
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
        "service_yykk84q", // আপনার সার্ভিস আইডি
        "template_aj43s4u", // আপনার টেমপ্লেট আইডি
        e.target,
        "6YTaUaYdLqSAnNsFt", // আপনার ইউজার আইডি
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        () => {
          setStatus("error");
        },
      );

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div id="contact" className="bg-[#0b031a] py-20 relative overflow-hidden">
      {/* Background Decor (Glow Effects) */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl md:px-10">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="flex items-center gap-3 text-4xl font-bold text-white md:text-5xl">
            <LuContact className="text-purple-500" />
            Contact <span className="text-purple-500">Me</span>
          </h2>
          <div className="w-32 h-1.5 mt-4 bg-gradient-to-r from-purple-600 to-transparent rounded-full" />
        </Motion.div>

        {/* Info Cards Row */}
        <section className="grid grid-cols-1 gap-6 mb-20 md:grid-cols-2 lg:grid-cols-3">
          {/* Phone Card */}
          <Motion.a
            href="tel:+8801799894176"
            whileHover={{ y: -10 }}
            className="flex flex-col items-center p-8 transition-all border cursor-pointer group bg-white/5 border-white/10 rounded-2xl backdrop-blur-sm hover:border-purple-500/50"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 text-purple-400 transition-all rounded-full bg-purple-500/10 group-hover:bg-purple-500 group-hover:text-white">
              <LuPhoneCall size={28} />
            </div>
            <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-2 font-bold">
              Call Me
            </p>
            <p className="text-lg font-semibold tracking-wide text-white">
              +8801799894176
            </p>
          </Motion.a>

          {/* Email Card */}
          <Motion.a
            href="mailto:sebermh@gmail.com"
            whileHover={{ y: -10 }}
            className="flex flex-col items-center p-8 transition-all border cursor-pointer group bg-white/5 border-white/10 rounded-2xl backdrop-blur-sm hover:border-purple-500/50"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 text-purple-400 transition-all rounded-full bg-purple-500/10 group-hover:bg-purple-500 group-hover:text-white">
              <IoIosMail size={28} />
            </div>
            <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-2 font-bold">
              Mail Me
            </p>
            <p className="text-lg font-semibold tracking-wide text-white">
              sebermh@gmail.com
            </p>
          </Motion.a>

          {/* Location Card */}
          <Motion.div
            whileHover={{ y: -10 }}
            className="flex flex-col items-center p-8 transition-all border group bg-white/5 border-white/10 rounded-2xl backdrop-blur-sm hover:border-purple-500/50"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 text-purple-400 transition-all rounded-full bg-purple-500/10 group-hover:bg-purple-500 group-hover:text-white">
              <FaLocationDot size={28} />
            </div>
            <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-2 font-bold">
              Location
            </p>
            <p className="text-lg font-semibold tracking-wide text-center text-white">
              Gandaria, Dhaka
            </p>
          </Motion.div>
        </section>

        {/* Form & Animation Container */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-14 backdrop-blur-md shadow-2xl">
          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="mb-3 text-3xl font-bold text-white">
              Let's Create Something Great!
            </h3>
            <p className="mb-10 leading-relaxed text-gray-400">
              Whether you have a question about football or a project idea, drop
              me a message and I'll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <label className="block mb-2 text-sm font-semibold text-gray-500 transition-colors group-focus-within:text-purple-400">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-5 py-4 bg-[#030014]/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
                  placeholder="e.g. MH Seber"
                  required
                />
              </div>

              <div className="relative group">
                <label className="block mb-2 text-sm font-semibold text-gray-500 transition-colors group-focus-within:text-purple-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="form_email"
                  className="w-full px-5 py-4 bg-[#030014]/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-600"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="relative group">
                <label className="block mb-2 text-sm font-semibold text-gray-500 transition-colors group-focus-within:text-purple-400">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-5 py-4 bg-[#030014]/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none placeholder:text-gray-600"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <Motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "sending"}
                className=" justify-center w-full btn btn-xl font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 bg-gradient-to-r from-purple-700 to-black text-white px-6 py-2 rounded-lg hover:shadow-[0_0_20px_rgba(128,0,128,0.6)] transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={20} />
              </Motion.button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="font-bold text-center text-green-400 animate-pulse">
                  ✓ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="font-bold text-center text-red-400">
                  ✕ Error occurred. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Lottie Animation Section */}
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="relative w-full max-w-sm">
              {/* Background Aura for Animation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-[80px]" />
              <div className="relative z-10 scale-110">
                <Lottie animationData={animation} loop={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
