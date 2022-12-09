import { motion } from "framer-motion";
import { React, useState, useEffect } from "react";
import Footer from "../footer";

export default function gardensOfBabylon () {
    const [darkMode, setDarkMode] = useState(true);

    const [mousePosition, setMousePosition] = useState ({
    x: 0,
    y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
    const mouseMove = e => {
        setMousePosition({
        x: e.clientX,
        y: e.clientY
        })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
        window.removeEventListener("mousemove", mouseMove);
    }
    }, []);

    const variants = {
    default: {
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
    },
    text: {
        height: 150,
        width: 150,
        x: mousePosition.x - 75,
        y: mousePosition.y - 75,
        backgroundColor: "smokeWhite",
        mixBlendMode: "difference"
    }
    };
    
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");


    return <div className={darkMode ? "dark" : ""}>
    <motion.main
    className=" text-white"
    >
        <div className="top-0 left-0 right-0 z-50 bg-[#1A1A1A]">
            <nav className="py-5 flex justify-between items-center text-white flex-col sm:flex-row sm:px-[50px] lg:px-[60px]">
            <a href="../">
            <motion.div>
                <h1 className="text-xl">Matt Rao</h1>
            </motion.div>
            </a>
            </nav>
        </div>

        <div className="max-w-[1390px] mx-auto px-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-36 mb-16 mx-16">
                <motion.div 
                    className="cursor"
                    variants={variants}
                    animate={cursorVariant}

                />
                <motion.h1 
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="md:text-7xl text-3xl">Gardens of Babylon</motion.h1>
                <div>
                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-start pl-12">
                        <motion.a 
                        initial={{opacity: 0.6}}
                        whileHover={{opacity: 1}}
                        href="https://jovial-sprinkles-93cc45.netlify.app/"  target="_blank">
                        Live Site ↗︎
                        </motion.a>
                    </p>
                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-start pl-12">
                        <motion.a 
                        initial={{opacity: 0.6}}
                        whileHover={{opacity: 1}}
                        href="https://github.com/mattraonyc/gardens-of-babylon"  target="_blank">
                        GitHub Repository
                        </motion.a>
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mx-16 mb-16 gap-16">
                <div>
                <h2 className="pb-6 text-lg border-b-[1px] border-[gray] text-gray-400">Overview</h2>
                <h3 className="text-2xl pt-6">The Gardens of Babylon plant shop is a site built using WordPress and WooCommerce 
                that allows users to purchase items and view catalog based on categories.</h3>
                </div>

                <div>
                <h2 className="pb-6 text-lg border-b-[1px] border-[gray] text-gray-400">Technologies</h2>
                <h3 className="text-2xl pt-6">Html, SCSS, php, WordPress, WooCommerce</h3>
                </div>

                <div>
                <h2 className="pb-6 text-lg border-b-[1px] border-[gray] text-gray-400">Year</h2>
                <h3 className="text-2xl pt-6">2022</h3>
                </div>
            </div>

            <div className="flex items-center justify-between gap-10 mx-16 my-28 flex-col lg:flex-row">

                <div className="w-auto lg:w-80">
                    <h3 className="text-3xl mb-5">Dynamic Catalog</h3>
                    <p className="text-lg">The products are categorized within their own tab with the help of WooCommerce shortcodes, each product has its dedicated product Page 
                    and the products are defined in the WordPress backend for ease of managing and updating.</p>
                </div>
                <div 
                className="rounded-3xl w-96 h-auto overflow-hidden border-4 border-black md:h-auto md:w-[840px] sm:w-96 sm:h-auto">
                    <video autoPlay loop muted>
                        <source src='/projectOne.mp4' type='video/mp4' />
                    </video> 
                </div>

            </div>

            <div className="flex items-center justify-between gap-10 mx-16 my-28 flex-col-reverse lg:flex-row">

                <div 
                className="rounded-3xl w-96 h-auto overflow-hidden border-4 border-black md:h-auto md:w-[840px] sm:w-96 sm:h-auto">
                    <video autoPlay loop muted>
                        <source src='/projectOneTwo.mp4' type='video/mp4' />
                    </video> 
                </div>
                <div className="w-auto lg:w-80">
                    <h3 className="text-3xl mb-5">Responsive sales management</h3>
                    <p className="text-lg">Sales are fast and simple with customized plugins, the final checkout process can be customized to suit best design practices.</p>
                </div>

            </div>

            <div className="flex items-center justify-between gap-10 my-28 flex-col">

                <div>
                    <h3 className="text-3xl mb-5">More Projects</h3>
                </div>
                
                <div className="flex flex-col gap-8 mx-16 md:flex-row">
                    <div 
                    className="rounded-3xl w-96 h-auto overflow-hidden border-4 border-black md:h-auto lg:w-auto sm:w-96 sm:h-auto">
                        <img src="/283.jpg" />
                    </div>
                    <div 
                    className="rounded-3xl w-96 h-auto overflow-hidden border-4 border-black md:h-auto lg:w-auto sm:w-96 sm:h-auto">
                        <img src="/283.jpg" />
                    </div>
                </div>

            </div>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-start mx-16">
                        <motion.a 
                        initial={{opacity: 0.6}}
                        whileHover={{opacity: 1}}
                        href="../">
                        ←Back
                        </motion.a>
            </p>

        </div>
    </motion.main>
    <Footer />
    </div>
}