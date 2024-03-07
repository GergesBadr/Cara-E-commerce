import { motion } from "framer-motion";

function Spinner() {
  return (
    <motion.div
      className="mx-auto my-14 h-14 w-14 rounded-full border-4 border-teal-700 border-b-transparent bg-transparent"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "easeOut",
        type: "tween",
      }}
    ></motion.div>
  );
}

export default Spinner;
