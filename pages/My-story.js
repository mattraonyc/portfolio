import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Link } from "next/link";

export default function MyStory() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 0.35], ["100%", "0%"]);

  return (
    <div className="pb-5 md:relative md:pt-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
        whileHover={{}}
        viewport={{ once: true }}
        className="rounded-3xl p-[20px] "
      >
        <my-story />
        <h3 className="text-3xl font-bold py-1 dark:text-white " id="my-story">
          About Me
        </h3>
        <p className="text-[19px] py-2 leading-8 dark:text-gray-200">
          I am a developer with particular interests in Javascript, React.js,
          Python and Node.js. With a background in marketing, I quickly
          discovered my passion for web development through school projects. The
          opportunity to combine technical problem solving with the technology
          energizes me to keep actively learning frontend development as well as
          the backend. When I am not coding or studying, I love to spend my free
          time going on hikes and watching movies.
        </p>
      </motion.div>
    </div>
  );
}
