import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Projects() {

    return <div className="py-10">
    <h3 className="text-3xl py-1 dark:text-white pt-24" id="projects">Projects</h3>
    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
    </p>
    
    <motion.div 
    className="flex flex-col justify-center py-10">

    <Link href="/projectOne">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1,y:0 }}
      transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
      whileHover={{opacity: 1}}
      viewport={{ once: true }}
      className="flex gap-10 border-b-2 p-[30px] lg:flex-wrap cursor-pointer">
        <div className="">
        <Image
            className="rounded-lg object-cover"
            width={"200px"}
            height={"200px"}
            src={web1}
        />
        </div>
        <div className="w-[50%]">
            <h3 className="text-3xl py-1 dark:text-white " id="my-story">MattRao.com</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                A personal portfolio website build using React, Tailwind and Next.js.</p>
        </div>
    </motion.div>
    </Link>

    <Link href="/projectTwo">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1,y:0 }}
      transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex gap-10 border-b-2 p-[30px] lg:flex-wrap cursor-pointer">
        <div className="">
        <Image
            className="rounded-lg object-cover"
            width={"200px"}
            height={"200px"}
            // layout="responsive"
            src={web1}
        />
        </div>
        <div className="w-[50%]">
            <h3 className="text-3xl py-1 dark:text-white " id="my-story">MattRao.com</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                A personal portfolio website build using React, Tailwind and Next.js.</p>
        </div>
    </motion.div>
    </Link>

    <Link href="/projectThree">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1,y:0 }}
      transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex gap-10 border-b-2 p-[30px] lg:flex-wrap cursor-pointer">
        <div className="">
        <Image
            className="rounded-lg object-cover"
            width={"200px"}
            height={"200px"}
            src={web1}
        />
        </div>
        <div className="w-[50%]">
            <h3 className="text-3xl py-1 dark:text-white " id="my-story">MattRao.com</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                A personal portfolio website build using React, Tailwind and Next.js.</p>
        </div>
    </motion.div>
    </Link>

    <Link href="/projectFour">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1,y:0 }}
      transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex gap-10 p-[30px] lg:flex-wrap cursor-pointer">
        <div className="">
        <Image
            className="rounded-lg object-cover"
            width={"200px"}
            height={"200px"}
            src={web1}
        />
        </div>
        <div className="w-[50%]">
            <h3 className="text-3xl py-1 dark:text-white " id="my-story">MattRao.com</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                A personal portfolio website build using React, Tailwind and Next.js.</p>
        </div>
    </motion.div>
    </Link>

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
}