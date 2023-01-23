import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const list = [
    { name: "Story", link: "#my-story" },
    { name: "projects", link: "#projects" },
    { name: "contact", link: "#contact" },
  ];
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="top-0 left-0 right-0 z-50 bg-[#ffffff] mb-6">
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
                {list.map((item) => {
                  return (
                    <div>
                      <a href={item.link}>
                        <motion.div
                          whileHover={{
                            opacity: 0.7,
                          }}
                          whileFocus={{
                            opacity: 1,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          initial={{ opacity: 1 }}
                          className="text-black text-center text-[18px] underline"
                          href={item.link}
                        >
                          {item.name}
                        </motion.div>
                      </a>
                    </div>
                  );
                })}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
