import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Head from "next/head";
import Navbar from "./Navbar";
import Intro from "./Intro";
import MyStory from "./My-story";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Matt Rao | Web Developer</title>
        <meta name="description" content="Matt Rao | Web Developer Portfolio" />
        <link rel="icon" href="/earth-americas-solid.svg" />
      </Head>
      <main className="box-border overflow-hidden">
        <Navbar />
        <div className="max-w-[1390px] mx-auto bg-white px-10 dark:bg-[#1A1A1A] w-[100%] md:px-20 lg:px-40">
          <MyStory />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}
