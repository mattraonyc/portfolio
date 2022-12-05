import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiTwotoneMail,
    AiFillGithub,
  } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Footer() {
    return <>
    <div className="bg-[#000] pt-[50px]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1,y:0 }}
        transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
        viewport={{ once: true }} 
        className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="mailto:mattraonyc@gmail.com"  target="_blank"><AiTwotoneMail /></a>
            <a href="https://github.com/mattraonyc"  target="_blank"><AiFillGithub /></a>
            <a href="https://linkedin.com/in/mattyrao/"  target="_blank"><AiFillLinkedin /></a>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1,y:0 }}
      transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
      viewport={{ once: true }}>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-center pb-20 pt-8">
      © 2023 Matt Rao
      </p>
      </motion.div>
    </div>
    </>
}