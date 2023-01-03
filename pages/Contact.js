import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "smokeWhite",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
        viewport={{ once: true }}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="text-center mb-5"
      >
        {/* <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        /> */}
        <h3 className="text-5xl font-bold  py-1 dark:text-white " id="contact">
          Get In Touch
        </h3>
        <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200">
          Like what you see? I would love to get in touch with you!{" "}
        </p>
      </motion.div>
    </section>
  );
}
