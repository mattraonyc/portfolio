import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiTwotoneMail,
  AiFillGithub,
} from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-[#000] pt-[50px] flex flex-col sm:flex-row justify-center">
        {/* <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>
        </div> */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-0 sm:gap-6 pb-10 pr-12"
          >
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-start pl-12">
              <motion.a
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
                href="https://github.com/mattraonyc"
                target="_blank"
              >
                <FaGithubSquare className="w-10 h-10" />
              </motion.a>
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-start pl-12">
              <motion.a
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
                href="https://linkedin.com/in/mattyrao/"
                target="_blank"
              >
                <FaLinkedin className="w-10 h-10" />
              </motion.a>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
