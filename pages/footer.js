import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiTwotoneMail,
    AiFillGithub,
  } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Footer() {
    return <>
    <div className="bg-[#000] pt-[50px] flex flex-col sm:flex-row justify-between">
      <div>
      <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1,y:0 }}
      transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
      viewport={{ once: true }}>
          <p className="text-sm py-2 leading-8 text-gray-800 dark:text-gray-500 text-start pl-12 pt-8">
          VERSION
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-start pl-12 pb-10">
          2023 © Edition
          </p>
      </motion.div>
      </div>
      <div>
      <p className="text-sm py-2 leading-8 text-gray-800 dark:text-gray-500 text-start pl-12 pt-8">
          SOCIALS
      </p>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1,y:0 }}
        transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
        viewport={{ once: true }} 
        className="flex flex-col sm:flex-row gap-0 sm:gap-6 pb-10 pr-12">

          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-start pl-12">
          <motion.a 
          initial={{opacity: 0.6}}
          whileHover={{opacity: 1}}
          href="mailto:mattraonyc@gmail.com"  target="_blank">
          Email
          </motion.a>
          </p>

          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-start pl-12">
          <motion.a 
          initial={{opacity: 0.6}}
          whileHover={{opacity: 1}}
          href="https://www.instagram.com/mattyrao/"  target="_blank">
          Instagram
          </motion.a>
          </p>


          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-start pl-12">
          <motion.a
          initial={{opacity: 0.6}}
          whileHover={{opacity: 1}}
          href="https://github.com/mattraonyc"  target="_blank">
          GitHub
          </motion.a>
          </p>

          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-start pl-12">
          <motion.a 
          initial={{opacity: 0.6}}
          whileHover={{opacity: 1}}
          href="https://linkedin.com/in/mattyrao/"  target="_blank">
          LinkedIn
          </motion.a>
          </p>
      </motion.div>
      </div>
    </div>
              
    </>
}