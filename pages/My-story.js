import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Link } from "next/link";

export default function MyStory() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 0.35], ["100%", "0%"]);

  const mouseEnter = () =>
    document.getElementById("pixel").classList.remove("hide");
  const mouseLeave = () =>
    document.getElementById("pixel").classList.add("hide");

  return (
    <div className="pb-5 md:relative md:pt-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
        whileHover={{}}
        viewport={{ once: true }}
        className="rounded-3xl bg-[#212121] p-[20px] md:mr-56"
      >
        <my-story />
        <h3 className="text-3xl font-bold py-1 dark:text-white " id="my-story">
          About Matt 👋
        </h3>
        <p className="text-[19px] py-2 leading-8 text-gray-800 dark:text-gray-200">
          I am a frontend developer with particular interests in React.js,
          Javascript and TailwindCSS. With a background in marketing, I quickly
          discovered my passion for web development through school projects and
          the opportunity to combine technical problem solving with the
          ever-growing technology stacks energizes me to keep actively learn
          about the technologies that make frontend development better. When I
          am not coding or studying, I love to spend my free time going on hikes
          and playing video games.
        </p>
      </motion.div>

      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        target="_blank"
      >
        <motion.div
          initial={{ rotate: 3 }}
          whileInView={{ rotate: 3 }}
          transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
          // style={{ y }}
          viewport={{ once: true }}
          className="md:absolute md:top-0 md:right-0 w-60 md:mt-0 mt-6 mx-auto rotate-2 cursor-pointer"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          whileTap={{ y: -5 }}
          animate={{ y: 5 }}
          // transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
        >
          <img src="/matt-02.jpeg" className="rounded-xl" />
        </motion.div>
      </a>
      <motion.div className="z-10">
        <img
          src="/pixel-glasses.png"
          className="md:absolute md:top-[130px] md:right-[103px] md:mt-0 mt-6 mx-auto rotate-2 w-7 hide"
          id="pixel"
        />
      </motion.div>
    </div>
  );
}
