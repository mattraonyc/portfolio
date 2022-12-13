import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Home } from "./index";

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
        className="sm:w-[30rem]"
      >
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
        <h3 className="text-5xl font-bold  py-1 dark:text-white " id="contact">
          Contact Me!
        </h3>
        <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200">
          If you have enjoyed reading about and reviewing my work and you would
          like to contact me, then please reach out to me by email:{" "}
          <span className="block pt-6 text-white pb-10">
            <a href="mailto:mattraonyc@gmail.com" target="_blank">
              mattraonyc@gmail.com
            </a>
          </span>
        </p>
      </motion.div>
      {/* <div className="lg:flex gap-10">
      <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
        <Image src={design} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2  ">
          Beautiful Designs
        </h3>
        <p className="py-2">
          Creating elegant designs suited for your needs following core
          design theory.
        </p>
        <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Indesign</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image src={code} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2 ">
          Code your dream project
        </h3>
        <p className="py-2">
          Do you have an idea for your next great website? Let's make it a
          reality.
        </p>
        <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Indesign</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image src={consulting} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
        <p className="py-2">
          Are you interested in feedback for your current project? I can
          give you tips and tricks to level it up.
        </p>
        <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Indesign</p>
      </div>
    </div> */}
    </section>
  );
}
