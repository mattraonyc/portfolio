import { motion } from "framer-motion";

export default function MyStory() {
    return <div className="pb-10">
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1,y:0 }}
      transition={{ delay: 0, duration: "0.6", ease: "easeOut" }}
      whileHover={{}}
      viewport={{ once: true }} 
      className = "rounded-3xl bg-[#212121] p-[20px]">
      <my-story />
        <h3 className="text-3xl py-1 dark:text-white " id="my-story">Hey, I'm Matt 👋</h3>
        <p className="text-[19px] py-2 leading-8 text-gray-800 dark:text-gray-200">
          Ever since the beginning of my journey as a frontend developer, I have developed particular interests in React.js, Javascript and Framer Motion.
          After graduating with a degree in Marketing Management, I quickly discovered my passion for web development
          and the opportunity to combine technical problem
          solving with the ever-growing technology stacks energizes me to work with designers and businesses to bring their concepts to life.
          When I am not coding or studying, I love to spend my free time playing video games and watching crime TV shows.
        </p>
    </motion.div>
    </div>
}