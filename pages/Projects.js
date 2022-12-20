import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

      <motion.div className="flex flex-col sm:flex-row justify-center items-between py-8 gap-8">
        <motion.div
          whileHover={{
            boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
            y: -3,
            x: -3,
          }}
          className="flex flex-col justify-between mx-[-30px] rounded-2xl sm:mx-0 bg-[#242424]"
        >
          <div className="lg:w-[500px] w-[100%]">
            <img className="rounded-xl" src="/movie-macbook.png" />
          </div>
          <div className="flex flex-col text-center sm:text-start justify-center lg:w-[500px] w-[100%] p-4">
            <h3 className="font-bold text-[21px] py-1 dark:text-white">
              React Movie Site
            </h3>
            <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
              A movie database web app built with React that uses TMDb API with
              search function and favourites list.
            </p>
          </div>
          <Link href="/projects/movieApp">
            <motion.div whileTap={{ scale: 0.9 }}>
              <p className="text-white text-lg text-center p-2 m-4 bg-[rgba(255,255,255,0.1)] rounded-xl cursor-pointer">
                Learn More
              </p>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{
            boxShadow: "-10px 10px 0 rgba(0, 0, 0, 0.2)",
            y: -3,
            x: 3,
          }}
          className="flex flex-col justify-between mx-[-30px] rounded-2xl sm:mx-0 bg-[#242424]"
        >
          <div className="lg:w-[500px] w-[100%]">
            <img className="rounded-xl" src="/portfolio-macbook.png" />
          </div>
          <div className="flex flex-col text-center sm:text-start justify-center lg:w-[500px] w-[100%] p-4">
            <h3 className="font-bold text-[21px] py-1 dark:text-white">
              Personal Portfolio
            </h3>
            <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
              My personal portfolio is a full design and branding project that
              was built with React, Tailwind, Framer Motion on a Next.js app.
            </p>
          </div>
          <Link href="/projects/personalPortfolio">
            <motion.div whileTap={{ scale: 0.9 }}>
              <p className="text-white text-lg text-center p-2 m-4 bg-[rgba(255,255,255,0.1)] rounded-xl cursor-pointer">
                Learn More
              </p>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div className="flex flex-col sm:flex-row justify-center items-between py-8 gap-8">
        <motion.div
          whileHover={{
            boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
            y: -3,
            x: -3,
          }}
          className="flex flex-col justify-between mx-[-30px] rounded-2xl sm:mx-0 bg-[#242424]"
        >
          <div className="lg:w-[500px] w-[100%]">
            <img className="rounded-xl" src="/plant-imac.png" />
          </div>
          <div className="flex flex-col text-center sm:text-start justify-center lg:w-[500px] w-[100%] p-4">
            <h3 className="font-bold text-[21px] py-1 dark:text-white">
              The Plant Site
            </h3>
            <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
              A site built using WordPress and WooCommerce that allows users to
              purchase items and view catalog based on categories.
            </p>
          </div>
          <Link href="/projects/gardensOfBabylon">
            <motion.div whileTap={{ scale: 0.9 }}>
              <p className="text-white text-lg text-center p-2 m-4 bg-[rgba(255,255,255,0.1)] rounded-xl cursor-pointer">
                Learn More
              </p>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{
            boxShadow: "-10px 10px 0 rgba(0, 0, 0, 0.2)",
            y: -3,
            x: 3,
          }}
          className="flex flex-col justify-between mx-[-30px] rounded-2xl sm:mx-0 bg-[#242424]"
        >
          <div className="lg:w-[500px] w-[100%]">
            <img className="rounded-xl" src="role-playing-game-iphone.png" />
          </div>
          <div className="flex flex-col text-center sm:text-start justify-center lg:w-[500px] w-[100%] p-4">
            <h3 className="font-bold text-[21px] py-1 dark:text-white">
              Role Playing Game
            </h3>
            <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
              A javascript game that with every click, it generates a random
              damage for the opponent till one of them wins.
            </p>
          </div>
          <Link href="/projects/game">
            <motion.div
              whileTap={{
                scale: 0.9,
              }}
            >
              <p className="text-white text-lg text-center p-2 m-4 bg-[rgba(255,255,255,0.1)] rounded-xl cursor-pointer">
                Learn More
              </p>
            </motion.div>
          </Link>
        </motion.div>

        {/* <div className="basis-1/3 flex-1">
      <Image
        className="rounded-lg object-cover"
        width={"100%"}
        height={"100%"}
        layout="responsive"
        src={web3}
      />
    </div>

    <div className="basis-1/3 flex-1">
      <Image
        className="rounded-lg object-cover"
        width={"100%"}
        height={"100%"}
        layout="responsive"
        src={web4}
      />
    </div>

    <div className="basis-1/3 flex-1">
      <Image
        className="rounded-lg object-cover"
        width={"100%"}
        height={"100%"}
        layout="responsive"
        src={web5}
      />
    </div>

    <div className="basis-1/3 flex-1">
      <Image
        className="rounded-lg object-cover"
        width={"100%"}
        height={"100%"}
        layout="responsive"
        src={web6}
      />
    </div> */}
      </motion.div>
    </div>
  );
}
