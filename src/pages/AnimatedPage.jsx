import { motion } from "framer-motion";

function AnimatedPage({ children }) {
  const opacityAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.main
      className="min-h-screen"
      variants={opacityAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut", type: "tween" }}
    >
      {children}
    </motion.main>
  );
}

export default AnimatedPage;
