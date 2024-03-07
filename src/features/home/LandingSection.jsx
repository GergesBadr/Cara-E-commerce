import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

function LandingSection() {
  const parallaxSectionRef = useRef();

  // Disable parallax animation when user is in reduce motion mode
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: parallaxSectionRef,
    offset: ["start start", "end start"],
  });

  const bgYProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textYProgress = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section
      ref={parallaxSectionRef}
      className="relative flex h-dvh flex-col items-start justify-center overflow-hidden bg-[#e3e6f3] pb-[275px]
      duration-300 dark:bg-[#1B2430] sm:pb-0"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-[url('/src/assets/hero-section.png')] bg-cover bg-[top_25%_right_40%] bg-no-repeat"
        style={{ y: shouldReduceMotion ? 0 : bgYProgress }}
      />

      {/* Text */}
      <motion.div
        className="responsive-container z-[1]"
        style={{ y: shouldReduceMotion ? 0 : textYProgress }}
      >
        <p className="text-lg font-medium tracking-wider md:text-xl">
          Trade-in-offer
        </p>

        <h1 className="heading-1 my-4 tracking-wider">
          Super value deals
          <span className="mt-2 block text-teal-700 dark:text-teal-500">
            On all products
          </span>
        </h1>

        <p className="sec-text mb-4 text-lg md:text-xl">
          Save more with coupons & up to 70% off!
        </p>

        <Link
          to="/shop"
          className="flex h-[50px] w-[230px] items-center justify-center bg-[url('/src/assets/button-background.png')]
          bg-no-repeat text-lg font-medium text-teal-700 dark:text-teal-500"
        >
          Shop more
        </Link>
      </motion.div>
    </section>
  );
}

export default LandingSection;
