import { motion } from "framer-motion";
import { React, useState, useEffect } from "react";
import Footer from "../footer";
import Contact from "../Contact";
import Link from "next/link";
import Head from "next/head";
import ProjectDesc from "../../components/projectDesc";
import ProjectHeader from "../../components/projectHeader";
import MoreProjects from "../../components/moreProjects";
import BackBtn from "../../components/backBtn";

export default function movieApp() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Matt Rao | Web Developer</title>
        <meta name="description" content="Matt Rao | Web Developer Portfolio" />
        <link rel="icon" href="/earth-americas-solid.svg" />
      </Head>
      <motion.main>
        <ProjectHeader />
        <div className="max-w-[1390px] mx-auto sm:px-10">
          <ProjectDesc
            projectName={"Personal Portfolio"}
            siteUrl={"https://mattrao.com/"}
            repoUrl={"https://github.com/mattraonyc/portfolio"}
            overview={
              "My personal portfolio is a full design and branding project that was built with React, Tailwind, Framer Motion on a Next.js app."
            }
            tech={"React, Tailwind CSS, Next.js, Framer Motion"}
            year={"2022"}
          />

          <div className="flex items-center justify-between gap-10 mx-16 my-28 flex-col xl:flex-row">
            <div className="w-auto xl:w-80">
              <h3 className="text-3xl mb-5">Animation Observer</h3>
              <p className="text-lg">
                Using Framer Motion, I was able to control the timing of when
                the components come into view and added a hover animation over
                texts that displays a circle with the movement of cursor.
              </p>
            </div>
            <div className="w-[380px] h-[210px] overflow-hidden md:h-auto sm:w-96 lg:w-[840px] sm:h-auto">
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

          <MoreProjects
            projectOne={"Role Playing Game"}
            projectOneImg={"/role-playing-game-iphone.png"}
            projectOneUrl={"/projects/game"}
            projectTwo={"React Movie App"}
            projectTwoImg={"/movie-macbook.png"}
            projectTwoUrl={"/projects/movieApp"}
          />

          <BackBtn />
          <div className="mx-16 mt-6">
            <Contact />
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}
