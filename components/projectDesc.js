import { motion } from "framer-motion";
import { React, useState, useEffect } from "react";

const ProjectDesc = ({
  projectName,
  siteUrl,
  repoUrl,
  overview,
  tech,
  year,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-36 mb-16 mx-16">
        <motion.h1 className="md:text-7xl text-3xl">{projectName}</motion.h1>
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
              className="text-white text-center text-[18px] px-4 py-2 border-none w-[100px] bg-[#242424]"
              href={siteUrl}
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
              className="text-white text-center text-[18px] px-4 py-2 border-none w-[100px] bg-[#242424]"
              href={repoUrl}
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
          <h3 className="text-2xl pt-6">{overview}</h3>
        </div>

        <div>
          <h2 className="pb-6 text-lg border-b-[1px] border-[gray] text-gray-400">
            Technologies
          </h2>
          <h3 className="text-2xl pt-6">{tech}</h3>
        </div>

        <div>
          <h2 className="pb-6 text-lg border-b-[1px] border-[gray] text-gray-400">
            Year
          </h2>
          <h3 className="text-2xl pt-6">{year}</h3>
        </div>
      </div>
    </>
  );
};

export default ProjectDesc;
