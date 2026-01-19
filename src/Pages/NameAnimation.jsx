import { motion as Motion } from "framer-motion";

const name = "Mahamudul Hasan Seber";

const NameAnimation = () => {
  return (
    <div className="flex flex-wrap pt-4 font-extrabold text-purple-800 lg:text-5xl">
      {name.split("").map((char, index) => (
        <Motion.span
          key={index}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: index * 0.05,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </Motion.span>
      ))}
    </div>
  );
};

export default NameAnimation;
