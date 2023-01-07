import { motion } from "framer-motion";

const ProjectHeader = () => {
  return (
    <div className="top-0 left-0 right-0 z-50">
      <nav className="py-6 flex justify-between items-center flex-col sm:flex-row sm:px-[50px] lg:px-[60px]">
        <a href="../">
          <motion.div>
            <h1 className="text-[32px] font-bold">Zhiwei Rao</h1>
          </motion.div>
        </a>
      </nav>
    </div>
  );
};

export default ProjectHeader;
