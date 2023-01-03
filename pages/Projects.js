import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projectList = [
  {
    name: "React Movie Site",
    desc: "A movie database web app built with React that uses TMDb API with search function and favourites list.",
    url: "/projects/movieApp",
    img: "/movie-macbook.png",
  },
  {
    name: "Personal Portfolio",
    desc: "My personal portfolio is a full design and branding project that was built with React, Tailwind, Framer Motion on a Next.js app.",
    url: "/projects/personalPortfolio",
    img: "portfolio-macbook.png",
  },
  {
    name: "The Plant Site",
    desc: "A site built using WordPress and WooCommerce that allows users to purchase items and view catalog based on categories.",
    url: "/projects/gardensOfBabylon",
    img: "/plant-imac.png",
  },
  {
    name: "Role Playing Game",
    desc: "A javascript game that with every click, it generates a random damage for the opponent till one of them wins.",
    url: "/projects/game",
    img: "role-playing-game-iphone.png",
  },
];

export default function Projects() {
  return (
    <div className="md:my-10">
      <h3
        className="text-3xl font-bold dark:text-white lg:mt-24 mt-10"
        id="projects"
      >
        Projects
      </h3>
      <p className="text-md lg:py-1 leading-8 text-gray-800 dark:text-gray-200"></p>

      <motion.div className="flex flex-col flex-wrap sm:flex-row justify-center items-between py-8 gap-8">
        {projectList.map((project) => {
          return (
            <motion.div
              whileHover={{
                boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                y: -3,
                x: -3,
              }}
              className="flex flex-col justify-between mx-[-30px] sm:mx-0 bg-[#ffffff]"
            >
              <div className="lg:w-[500px] w-[100%]">
                <img src={project.img} />
              </div>
              <div className="flex flex-col text-center sm:text-start justify-center lg:w-[500px] w-[100%] p-4">
                <h3 className="font-bold text-[21px] py-1 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
                  {project.desc}
                </p>
              </div>
              <motion.div>
                <p className="text-[#000000] text-lg text-center underline p-2 m-4 border-2">
                  <Link href={project.url}>Learn More</Link>
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
