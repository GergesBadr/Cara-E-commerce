import { Link } from "react-router-dom";
import {
  ABOUT_LIST,
  ACCOUNT_LIST,
  CONTACT_LIST,
  FOLLOW_US_LIST,
} from "../utils/constants";
import { motion } from "framer-motion";
import blobLeft from "../assets/blob-left.svg";
import blobRight from "../assets/blob-right.svg";
import { useRef } from "react";

function Footer() {
  const footerRef = useRef();

  const blobImages = [
    { src: blobLeft, dir: "left" },
    { src: blobRight, dir: "right" },
  ];

  const blobVariants = {
    static: { scale: 1, rotate: 0, x: 0 },
    dynamic: (dir) => ({
      scale: [1, 0.85, 1, 0.75],
      rotate: [90, 45, -45, 90],
      x: dir === "left" ? [300, 50, 400, 100] : [-300, -50, -400, -100],
      y: dir === "left" ? [125, -10, 50, -20] : [125, -10, 50, -20],
      transition: {
        repeat: Infinity,
        duration: 30,
        repeatType: "reverse",
      },
    }),
  };

  return (
    <footer
      className="relative mt-[350px] bg-teal-700 text-white before:absolute
    before:-top-[300px] before:left-0 before:h-[300px] before:w-full before:bg-[url('/src/assets/wave.svg')] before:bg-cover"
    >
      <div className="hidden px-4 text-center text-xl text-gray-200 md:block">
        Drag & Play with the shapes and{" "}
        <span className="uppercase">have fun!</span>
      </div>

      <div
        ref={footerRef}
        className="responsive-container relative grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 overflow-hidden py-14 lg:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]"
      >
        <ul>
          <li>
            <p className="mb-4 text-2xl font-semibold md:text-4xl">Contact</p>
          </li>
          {CONTACT_LIST.map((item) => {
            return (
              <li key={item.contactKey} className="mb-2">
                <span className="mb-1 block font-medium">
                  {item.contactKey}:
                </span>
                <p className="text-sm text-gray-200">{item.value}</p>
              </li>
            );
          })}
        </ul>

        <ul>
          <li>
            <p className="mb-4 text-2xl font-semibold md:text-4xl">About</p>
          </li>
          {ABOUT_LIST.map((item) => {
            return (
              <li key={item.content}>
                <Link
                  to={item.to}
                  className="mb-2 block text-lg text-gray-200 "
                >
                  {item.content}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul>
          <li>
            <p className="mb-4 text-2xl font-semibold md:text-4xl">
              My Account
            </p>
          </li>
          {ACCOUNT_LIST.map((item) => {
            return (
              <li key={item.content}>
                <Link to={item.to} className="mb-2 block text-lg text-gray-200">
                  {item.content}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul>
          <li>
            <p className="mb-4 text-2xl font-semibold md:text-4xl">Follow Us</p>
          </li>
          {FOLLOW_US_LIST.map((item) => {
            return (
              <li key={item.name}>
                <a href="#" className="mb-2 flex items-center gap-2 py-2 ">
                  {item.icon}
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Shapes */}
        {blobImages.map((img) => {
          return (
            <motion.img
              key={img.dir}
              src={img.src}
              alt=""
              className={`absolute top-0 z-[1] hidden max-w-[250px] cursor-grab md:block ${img.dir === "left" ? "left-0" : "right-0"}`}
              drag
              dragConstraints={footerRef}
              dragElastic={0.3}
              dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
              whileDrag={{ cursor: "grabbing" }}
              variants={blobVariants}
              custom={img.dir === "left" ? "left" : "right"}
              initial="static"
              animate="dynamic"
            />
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
