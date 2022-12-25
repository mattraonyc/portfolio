import { motion } from "framer-motion";
import { React, useState, useEffect } from "react";
import Footer from "../footer";
import Contact from "../Contact";
import Link from "next/link";
import Head from "next/head";

export default function movieApp() {
  const [darkMode, setDarkMode] = useState(true);

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
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Matt Rao | Web Developer</title>
        <meta name="description" content="Matt Rao | Web Developer Portfolio" />
        <link rel="icon" href="/earth-americas-solid.svg" />
      </Head>
      <motion.main className=" text-white">
        <div className="top-0 left-0 right-0 z-50 bg-[#1A1A1A]">
          <nav className="py-6 flex justify-between items-center text-white flex-col sm:flex-row sm:px-[50px] lg:px-[60px]">
            <a href="../">
              <motion.div>
                <h1 className="text-[32px] font-bold">Matt Rao</h1>
              </motion.div>
            </a>
          </nav>
        </div>

        <div className="max-w-[1390px] mx-auto sm:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-36 mb-16 mx-16">
            <motion.div
              className="cursor"
              variants={variants}
              animate={cursorVariant}
            />
            <motion.h1
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="md:text-7xl text-3xl"
            >
              Personal Portfolio
            </motion.h1>
            <div>
              <p className="text-md py-2 leading-8 text-start pl-12">
                <motion.a
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
                  className="text-white text-center text-[18px] px-4 py-2 border-none w-[100px] rounded-xl bg-[#242424]"
                  href="https://mattrao.com"
                  target="_blank"
                >
                  Live Site ↗︎
                </motion.a>
              </p>
              <p className="text-md py-2 leading-8 text-start pl-12">
                <motion.a
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
                  className="text-white text-center text-[18px] px-4 py-2 border-none w-[100px] rounded-xl bg-[#242424]"
                  href="https://github.com/mattraonyc/portfolio"
                  target="_blank"
                >
                  GitHub Repository
                </motion.a>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mx-16 mb-16 gap-16">
            <div>
              <h2 className="pb-6 text-lg border-b-[1px] border-[gray] text-gray-400">
                Overview
              </h2>
              <h3 className="text-2xl pt-6">
                My personal portfolio is a full design and branding project that
                was built with React, Tailwind, Framer Motion on a Next.js app.
              </h3>
            </div>

            <div>
              <h2 className="pb-6 text-lg border-b-[1px] border-[gray] text-gray-400">
                Technologies
              </h2>
              <h3 className="text-2xl pt-6">
                React, Tailwind CSS, Next.js, Framer Motion
              </h3>
            </div>

            <div>
              <h2 className="pb-6 text-lg border-b-[1px] border-[gray] text-gray-400">
                Year
              </h2>
              <h3 className="text-2xl pt-6">2022</h3>
            </div>
          </div>

          <div className="flex items-center justify-between gap-10 mx-16 my-28 flex-col xl:flex-row">
            <div className="w-auto xl:w-80">
              <h3 className="text-3xl mb-5">Animation Observer</h3>
              <p className="text-lg">
                Using Framer Motion, I was able to control the timing of when
                the components come into view and added a hover animation over
                texts that displays a circle with the movement of cursor.
              </p>
            </div>
            <div className="rounded-3xl w-[380px] h-[210px] overflow-hidden border-4 border-black md:h-auto sm:w-96 lg:w-[840px] sm:h-auto">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/782393003?h=f6a1636316&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1"
                className="w-[380px] h-[210px] md:w-[400px] md:h-[300px] lg:w-[840px] lg:h-[450px]"
                frameborder="0"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </div>

            {/* width="840" height="525" */}
          </div>
          <div className="mx-16">
            <h3 className="text-3xl mb-5">Takeaways</h3>
            <p className="text-lg">
              Portfolio website was developed to showcase my skills as a
              developer in a straight-forward and concise style, I learn how to
              work with Tailwind CSS which makes styling easier by keeping them
              alongside javascript and I had fun playing with Framer Motion and
              Vimeo plugins.
            </p>
          </div>

          <div className="flex items-center justify-between gap-10 mt-28 mb-12 flex-col">
            <div>
              <h3 className="text-3xl mb-5">More Projects</h3>
            </div>

            <div className="flex flex-col gap-8 mx-16 md:flex-row">
              <div>
                <Link href="/projects/game">
                  <div className="rounded-3xl w-96 h-auto overflow-hidden border-4 border-black md:h-auto lg:w-auto sm:w-96 sm:h-auto cursor-pointer hover:opacity-80">
                    <img src="/role-playing-game-iphone.png" />
                  </div>
                </Link>
                <h2 className="text-center font-bold text-xl mt-3">
                  Role Playing Game
                </h2>
              </div>

              <div>
                <Link href="/projects/movieApp">
                  <div className="rounded-3xl w-96 h-auto overflow-hidden border-4 border-black md:h-auto lg:w-auto sm:w-96 sm:h-auto cursor-pointer hover:opacity-80">
                    <img src="/movie-macbook.png" />
                  </div>
                </Link>
                <h2 className="text-center font-bold text-xl mt-3">
                  React Movie App
                </h2>
              </div>
            </div>
          </div>

          <p className="text-md py-2 leading-8 text-start mx-16">
            <motion.a
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
              className="text-white text-center text-[18px] px-4 py-2 border-none w-[100px] rounded-xl bg-[#242424]"
              href="../"
            >
              ←Back
            </motion.a>
          </p>
          <div className="mx-16 mt-6">
            <Contact />
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}
