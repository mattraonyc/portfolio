import { AiFillLinkedin, AiTwotoneMail, AiFillGithub } from "react-icons/ai";
import avatar from "../public/avatar.png";
import Image from "next/image";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { React, useEffect, useState } from "react";
import { duration } from "moment";

export default function Intro() {
  return (
    <div className="text-center px-10 pt-[140px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div>
          <h2 className="text-5xl py-2 text-white font-medium dark:text-white md:text-6xl flex justify-center items-center">
            Matt Rao
          </h2>

          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Web Developer.
          </h3>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ y: 15 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
          whileHover={{}}
          className="flex justify-center mx-auto bg-gradient-to-b from-teal-500 rounded-full w-52 h-52 overflow-hidden relative mt-32 md:h-96 md:w-96 sm:w-80 sm:h-80"
        >
          <Image src={avatar} layout="fill" objectFit="cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}
