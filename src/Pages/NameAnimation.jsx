import { motion } from "framer-motion";

const name = "Mahamudul Hasan Seber";

const NameAnimation = () => {
  return (
    <div className="flex flex-wrap font-extrabold lg:text-5xl text-purple-950">
      {name.split("").map((char, index) => (
        <motion.span
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
        </motion.span>
      ))}
    </div>
  );
};

export default NameAnimation;
