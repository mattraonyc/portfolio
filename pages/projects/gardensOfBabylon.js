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

export default function gardensOfBabylon() {
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
            projectName={"The Plant Shop"}
            siteUrl={"https://jovial-sprinkles-93cc45.netlify.app/"}
            repoUrl={"https://github.com/mattraonyc/gardens-of-babylon"}
            overview={
              "The Gardens of Babylon plant shop is a site built using WordPress and WooCommerce that allows users to purchase items and view catalog based on categories."
            }
            tech={"Html, SCSS, php, WordPress, WooCommerce"}
            year={"2022"}
          />

          <div className="flex items-center justify-between gap-10 mx-16 my-28 flex-col xl:flex-row">
            <div className="w-auto xl:w-80">
              <h3 className="text-3xl mb-5">Dynamic Catalog</h3>
              <p className="text-lg">
                The products are categorized within their own tab with the help
                of WooCommerce shortcodes, each product has its dedicated
                product Page and the products are defined in the WordPress
                backend for ease of managing and updating.
              </p>
            </div>
            <div className="rounded-3xl w-[380px] h-[240px] overflow-hidden border-4 border-black md:h-auto lg:w-[840px] ">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/779770094?h=d6ce2f908f&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1"
                className="w-[380px] h-[240px] md:w-[400px] md:h-[300px] lg:w-[840px] lg:h-[525px]"
                frameborder="0"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </div>

            {/* width="840" height="525" */}
          </div>

          <div className="flex items-center justify-between gap-10 mx-16 my-28 flex-col-reverse xl:flex-row">
            <div className="rounded-3xl w-[380px] h-[212px] overflow-hidden border-4 border-black md:h-auto sm:w-96 lg:w-[840px] sm:h-auto">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/779770078?h=c18a0a2ad2&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1"
                className="w-[380px] h-[212px] md:w-[400px] md:h-[300px] lg:w-[840px] lg:h-[450px]"
                frameborder="0"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </div>
            <div className="w-auto xl:w-80">
              <h3 className="text-3xl mb-5">Responsive sales management</h3>
              <p className="text-lg">
                Sales are fast and simple with customized plugins, the final
                checkout process can be customized to suit best design
                practices.
              </p>
            </div>
          </div>
          <div className="mx-16">
            <h3 className="text-3xl mb-5">Takeaways</h3>
            <p className="text-lg">
              The development process for this project involves implementing all
              the plugins and outputting the plugins correctly onto the
              application. The process helped me gain experience checking for
              proper semantics and making sure the functions work.
            </p>
          </div>

          <MoreProjects
            projectOne={"Role Playing Game"}
            projectOneImg={"/role-playing-game-iphone.png"}
            projectOneUrl={"/projects/game"}
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
