import { motion } from "framer-motion";

function Button({ children, onClick, variation, extraClasses }) {
  return (
    <motion.button
      onClick={onClick}
      className={`rounded-md px-4 py-3 font-medium shadow-sm 
      ${variation === "sec" ? "border-2 border-teal-700 bg-transparent" : "bg-teal-700 text-white"} ${extraClasses}`}
      // Animations
      whileHover={{ scale: 1.075, rotate: 2 }}
      whileTap={{ scale: 0.95, rotate: 0 }}
    >
      {children}
    </motion.button>
  );
}

export default Button;
