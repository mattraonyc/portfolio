import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="top-0 left-0 right-0 z-50 bg-[#1A1A1A] mb-6">
        <nav className="py-5 flex justify-between items-center dark:text-white flex-col sm:flex-row sm:px-[50px] lg:px-[60px]">
          <a href="./">
            <motion.div>
              <h1 className="text-[32px] font-bold">Matt Rao</h1>
            </motion.div>
          </a>

          <div className="">
            <ul className="flex items-end">
              {/* <li>
        <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-2xl"
          />
        </li> */}
              <li className="flex items-center justify-center gap-7">
                <div>
                  <a href="#my-story">
                    <motion.div
                      whileHover={{
                        boxShadow: "-5px 5px 0 rgba(0, 0, 0, 0.2)",
                        y: -1,
                        x: 1,
                        opacity: 1,
                      }}
                      whileFocus={{
                        boxShadow: "-5px 5px 0 rgba(0, 0, 0, 0.2)",
                        y: -1,
                        x: 1,
                        opacity: 1,
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      initial={{ opacity: 0.8 }}
                      className="text-white text-center text-[18px] px-4 py-2 border-none w-[100px] rounded-xl bg-[#242424]"
                      href="#my-story"
                    >
                      Story
                    </motion.div>
                  </a>
                </div>

                <div>
                  <a href="#projects">
                    <motion.div
                      whileHover={{
                        boxShadow: "-5px 5px 0 rgba(0, 0, 0, 0.2)",
                        y: -1,
                        x: 1,
                        opacity: 1,
                      }}
                      whileFocus={{
                        boxShadow: "-5px 5px 0 rgba(0, 0, 0, 0.2)",
                        y: -1,
                        x: 1,
                        opacity: 1,
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      initial={{ opacity: 0.8 }}
                      className="text-white text-center px-4 py-2 border-none text-[18px] w-[100px] rounded-xl bg-[#242424]"
                      href="#projects"
                    >
                      Projects
                    </motion.div>
                  </a>
                </div>

                <div>
                  <a href="#contact">
                    <motion.div
                      whileHover={{
                        boxShadow: "-5px 5px 0 rgba(0, 0, 0, 0.2)",
                        y: -1,
                        x: 1,
                        opacity: 1,
                      }}
                      whileFocus={{
                        boxShadow: "-5px 5px 0 rgba(0, 0, 0, 0.2)",
                        y: -1,
                        x: 1,
                        opacity: 1,
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      initial={{ opacity: 0.8 }}
                      className="text-white text-center px-4 py-2 border-none text-[18px] w-[100px] rounded-xl bg-[#242424]"
                      href="#contact"
                    >
                      Contact
                    </motion.div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
