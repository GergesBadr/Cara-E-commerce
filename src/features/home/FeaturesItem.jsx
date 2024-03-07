import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

function FeaturesItem({ item, index }) {
  const itemRef = useRef();
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end end"],
  });

  const yProgress = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <motion.div
      ref={itemRef}
      className="dark:bg-dark-bg flex flex-col items-center justify-center gap-8 rounded-lg bg-white px-6 py-10 shadow-sm"
      whileHover={{ rotate: isEven ? 3 : -3 }}
      transition={{ type: "spring", stiffness: 750, damping: 12 }}
    >
      <motion.img
        src={item.image}
        alt={item.imageAlt}
        loading="lazy"
        style={{
          y: yProgress,
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      />
      <motion.p
        className={`rounded-lg px-2 py-1 font-medium text-teal-800 ${item.bgColor}`}
      >
        {item.title}
      </motion.p>
    </motion.div>
  );
}

export default FeaturesItem;
