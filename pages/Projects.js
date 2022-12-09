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
    className="flex flex-col justify-center items-between py-10">

    <Link href="projects/gardensOfBabylon">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 0.8, scale: 1,y:0, padding: "30px" }}
      transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
      whileHover={{opacity: 1, paddingLeft: "20px", paddingRight: "20px"}}
      viewport={{ once: true }}
      className="flex flex-col justify-between gap-10 border-b-2 border-[gray] lg:flex-row cursor-pointer">
        <div className="w-[350px]">
        <img className='rounded-xl'
        src='/283.jpg' />
        </div>
        <div className='flex flex-col justify-center w-[500px]'>
            <h3 className="text-3xl py-1 dark:text-white">Gardens of Babylon</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            The Gardens of Babylon plant shop is a site built using WordPress and WooCommerce 
                that allows users to purchase items and view catalog based on categories.</p>
        </div>
    </motion.div>
    </Link>

    <Link href="/projects/projectTwo">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 0.8, scale: 1,y:0, padding: "30px" }}
      transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
      whileHover={{opacity: 1, paddingLeft: "20px", paddingRight: "20px"}}
      viewport={{ once: true }}
      className="flex flex-col justify-between gap-10 border-b-2 border-[gray] lg:flex-row cursor-pointer">
        <div className="w-[350px]">
        <img className='rounded-xl'
        src='/283.jpg' />
        </div>
        <div className='flex flex-col justify-center w-[500px]'>
            <h3 className="text-3xl py-1 dark:text-white">Gardens of Babylon</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            The Gardens of Babylon plant shop is a site built using WordPress and WooCommerce 
                that allows users to purchase items and view catalog based on categories.</p>
        </div>
    </motion.div>
    </Link>

    <Link href="/projects/projectThree">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 0.8, scale: 1,y:0, padding: "30px" }}
      transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
      whileHover={{opacity: 1, paddingLeft: "20px", paddingRight: "20px"}}
      viewport={{ once: true }}
      className="flex flex-col justify-between gap-10 border-b-2 border-[gray] lg:flex-row cursor-pointer">
        <div className="w-[350px]">
        <img className='rounded-xl'
        src='/283.jpg' />
        </div>
        <div className='flex flex-col justify-center w-[500px]'>
            <h3 className="text-3xl py-1 dark:text-white">Personal Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            My personal portfolio is a full design and branding project that was built with React, Tailwind, Framer Motion on a Next.js app.</p>
        </div>
    </motion.div>
    </Link>

    <Link href="/projects/projectFour">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 0.8, scale: 1,y:0, padding: "30px" }}
      transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
      whileHover={{opacity: 1, paddingLeft: "20px", paddingRight: "20px"}}
      viewport={{ once: true }}
      className="flex flex-col justify-between gap-10 border-b-2 border-[gray] lg:flex-row cursor-pointer">
        <div className="w-[350px]">
        <img className='rounded-xl'
        src='/283.jpg' />
        </div>
        <div className='flex flex-col justify-center w-[500px]'>
            <h3 className="text-3xl py-1 dark:text-white">Gardens of Babylon</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            The Gardens of Babylon plant shop is a site built using WordPress and WooCommerce 
                that allows users to purchase items and view catalog based on categories.</p>
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