import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    return <div className={darkMode ? "dark" : ""}>
    <nav className="py-10 mb-12 flex justify-between items-center dark:text-white flex-col sm:flex-row">
    <div>
      <h1 className="text-xl">Matt Rao</h1>
    </div>
    <div className="">
    <ul className="flex items-end">
      {/* <li>
      <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className=" cursor-pointer text-2xl"
        />
      </li> */}
      <li className="flex items-center justify-center">
        <div >
        <a><motion.div whileHover={{scale: 1.1}}
          whileTap={{ scale: 0.9 }}
          className="hover:bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
          href="#my-story"
          >Story</motion.div>
          </a>
        </div>

        <div>
        <a href="#projects"><motion.div whileHover={{scale: 1.1}}
          whileTap={{ scale: 0.9 }}
          className="hover:bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
          href="#projects"
        >
          Projects</motion.div>
        </a>
        </div>

        <div>
        <a href="#contact"><motion.div whileHover={{scale: 1.1}}
          whileTap={{ scale: 0.9 }}
          className="hover:bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
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
}