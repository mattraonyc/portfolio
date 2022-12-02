import {
    AiFillLinkedin,
    AiTwotoneMail,
    AiFillGithub,
  } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
    return <div className="text-center p-10 py-10 min-h-screen">
    <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
      Matt Rao
    </h2>
    <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
      I am a Web Developer.
    </h3>
    <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
      Freelancer providing services for programming and design content
      needs. Join me down below and let's get cracking!
    </p>
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a href="mailto:mattraonyc@gmail.com"  target="_blank"><AiTwotoneMail /></a>
        <a href="https://github.com/mattraonyc"  target="_blank"><AiFillGithub /></a>
        <a href="https://linkedin.com/in/mattyrao/"  target="_blank"><AiFillLinkedin /></a>
    </div>
    <div
     className="flex justify-center mx-auto bg-gradient-to-b from-teal-500 rounded-full w-52 h-52 overflow-hidden relative mt-20 md:h-96 md:w-96 sm:w-80 sm:h-80">
      <Image src={deved} layout="fill" objectFit="cover"/>
    </div>
  </div>
}