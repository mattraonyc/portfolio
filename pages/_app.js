import '../styles/globals.css';
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0.5
              },
              animateState: {
                opacity: 1
              },
              exitState: {
                opacity:1
              },
            }}
            className='base-page-size'>
          <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
  );
}

export default MyApp
