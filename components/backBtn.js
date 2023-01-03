import { motion } from "framer-motion";

const BackBtn = () => {
  return (
    <p className="text-md py-2 leading-8 text-start mx-16">
      <motion.a
        whileHover={{
          boxShadow: "-5px 5px 0 rgba(0, 0, 0, 0.2)",
          y: -1,
          x: 1,
          opacity: 1,
        }}
        whileFocus={{
          boxShadow: "-5px 5px 0 rgba(0, 0, 0, 0.2)",
          y: -1,
          x: 1,
          opacity: 1,
        }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
        className="text-white text-center text-[18px] px-4 py-2 border-none w-[100px] rounded-xl bg-[#242424]"
        href="../"
      >
        ←Back
      </motion.a>
    </p>
  );
};

export default BackBtn;
