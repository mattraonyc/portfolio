import { motion } from "framer-motion";


export default function projectFour () {
    return <motion.main
    initial={{ y: "100%" }}
    animate={{ y: "0%" }}
    transition={{ duration: 0.75, ease: "easeOut" }}
    exit={{ opacity: 1 }}
    className="bg-black text-gray-500"
    >
    <div>
    <h1>Hello</h1>
    </div>
    </motion.main>
}