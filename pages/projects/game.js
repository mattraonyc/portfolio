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

export default function game() {
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
            projectName={"Role Playing Game"}
            siteUrl={"https://inquisitive-florentine-710ec6.netlify.app/"}
            repoUrl={"https://github.com/mattraonyc/role-playing-game"}
            overview={
              "A javascript game that with every click, it generates a random damage for the opponent till one of them wins."
            }
            tech={"Html, CSS, Javascript"}
            year={"2022"}
          />

          <div className="flex items-center justify-between gap-10 mx-16 lg:mx-60 my-28 flex-col xl:flex-row">
            <div className="w-auto xl:w-96">
              <h3 className="text-3xl mb-5">Generate opponents</h3>
              <p className="text-lg">
                Using Object.assign function, I was able to generate hero and
                opponents' html via template strings, and replace opponents with
                an if function, the width of the indicative health bar also
                changes with the health level, for better user experience, there
                is a second delay between changing opponents.
              </p>
            </div>
            <div className="w-[200px] h-[350px] overflow-hidden md:h-auto sm:w-[300px] lg:w-[360px] sm:h-auto">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/782724674?h=f12e9aee68&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1"
                className="w-[200px] h-[350px] md:w-[300px] md:h-[500px] lg:w-[360px] lg:h-[625px]"
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
              This project challenged my javascript skills with some advanced
              methods, but I was able to make sense of smaller pieces of the
              problem and have a chain of logic to help make this app functional
              and user friendly.
            </p>
          </div>

          <MoreProjects
            projectOne={"React Movie App"}
            projectOneImg={"/movie-macbook.png"}
            projectOneUrl={"/projects/movieApp"}
            projectTwo={"Personal Portfolio"}
            projectTwoImg={"/portfolio-macbook.png"}
            projectTwoUrl={"/projects/personalPortfolio"}
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
