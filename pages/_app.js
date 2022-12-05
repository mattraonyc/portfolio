import '../styles/globals.css';
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
        <AnimatePresence>
          <div
            className='base-page-size'>
          <Component {...pageProps} />
          </div>
        </AnimatePresence>
  );
}

export default MyApp
