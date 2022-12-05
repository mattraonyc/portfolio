import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    return <div className={darkMode ? "dark" : ""}>
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]">
    <nav className="py-5 flex justify-between items-center dark:text-white flex-col sm:flex-row sm:px-[50px] lg:px-[160px]">
      <a href="./">
      <motion.div>
        <h1 className="text-xl">Matt Rao</h1>
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
            whileHover={{scale: 1.1, opacity: 1}}
            whileFocus={{ scale: 0.9, opacity: 1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 10}}
            initial={{opacity: 0.8}}
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white text-center px-4 py-2 border-none rounded-md w-[100px]"
            href="#my-story"
            >
              Story
            </motion.div>
            </a>
          </div>

          <div>
          <a href="#projects">
            <motion.div 
            whileHover={{scale: 1.1, opacity: 1}}
            whileFocus={{ scale: 0.9, opacity: 1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 10}}
            initial={{opacity: 0.8}}
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white text-center px-4 py-2 border-none rounded-md w-[100px]"
            href="#projects"
          >
            Projects</motion.div>
          </a>
          </div>

          <div>
          <a href="#contact">
            <motion.div 
            whileHover={{scale: 1.1, opacity: 1}}
            whileFocus={{ scale: 0.9, opacity: 1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 10}}
            initial={{opacity: 0.8}}
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white text-center px-4 py-2 border-none rounded-md w-[100px]"
            href="#contact"
          >
            Contact</motion.div>
          </a>
          </div>
        </li>
      </ul>
      </div>
    </nav>
    </div>
  </div>
}