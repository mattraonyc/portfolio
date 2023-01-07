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
        <title>Zhiwei Rao | Software Developer</title>
        <meta name="description" content="Matt Rao | Web Developer Portfolio" />
        <link rel="icon" href="/earth-americas-solid.svg" />
      </Head>
      <motion.main>
        <ProjectHeader />
        <div className="max-w-[1390px] mx-auto sm:px-10">
          <ProjectDesc
            projectName={"React Movie App"}
            siteUrl={"https://dune-movie-app.vercel.app/dune"}
            repoUrl={"https://github.com/mattraonyc/dune-movie-app"}
            overview={
              "A movie database web app built with React that uses TMDb API with search function and favourites list."
            }
            tech={"Html, Javascript, Sass, React, Redux"}
            year={"2022"}
          />

          <div className="flex items-center justify-between gap-10 mx-16 my-28 flex-col xl:flex-row">
            <div className="w-auto xl:w-80">
              <h3 className="text-3xl mb-5">Search Function</h3>
              <p className="text-lg">
                The search bar in the navigation menu lets users input a query
                to search for movies by title. They query is used to fetch data
                from the search endpoint of the Movie Database's (TMDB) API,
                which returns a paginated list of matching movies.
              </p>
            </div>
            <div className="w-96 h-auto overflow-hidden md:h-auto sm:w-96 lg:w-[840px] sm:h-auto">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/782352906?h=f1870f0d73&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1"
                className="w-[380px] h-[280px] md:w-[400px] md:h-[300px] lg:w-[840px] lg:h-[450px]"
                frameborder="0"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </div>

            {/* width="840" height="525" */}
          </div>

          <div className="flex items-center justify-between gap-10 mx-16 my-28 flex-col-reverse xl:flex-row">
            <div className="w-[380px] h-[210px] overflow-hidden md:h-auto sm:w-96 lg:w-[840px] sm:h-auto">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/782352399?h=28839c76b7&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1"
                className="w-[380px] h-[210px] md:w-[400px] md:h-[300px] lg:w-[840px] lg:h-[450px]"
                frameborder="0"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </div>
            <div className="w-auto xl:w-80">
              <h3 className="text-3xl mb-5">Favourite List</h3>
              <p className="text-lg">
                This feature allows users to add any movies to their favourites
                list by pressing on the heart icon on the home page, single
                movie page, or favourites page. Favourited movies are stored in
                a Redux global state that allows dynamic rendering on the
                favourites page when movies are added or removed. The list is
                saved in the local storage.
              </p>
            </div>
          </div>
          <div className="mx-16">
            <h3 className="text-3xl mb-5">Takeaways</h3>
            <p className="text-lg">
              The most challenging part about this project was the add to
              favourite feature. It involved use react-redux and going into
              local storage to add, remove, or retrieve movies for the
              favourites list. Through developing this project, I learned more
              about the foundation of React and Sass, as well as state
              management.
            </p>
          </div>

          <MoreProjects
            projectOne={"Personal Portfolio"}
            projectOneImg={"/portfolio-macbook.png"}
            projectOneUrl={"/projects/personalPortfolio"}
            projectTwo={"Role Playing Game"}
            projectTwoImg={"/role-playing-game-iphone.png"}
            projectTwoUrl={"/projects/game"}
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
