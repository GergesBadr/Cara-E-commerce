import { NavLink } from "react-router-dom";
import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { NAV_LINKS } from "../utils/constants";
import Logo from "./Logo";
import SwitchTheme from "./SwitchTheme";

function Header() {
  const [isOpenNav, setIsOpenNav] = useState(true);
  const [activeTab, setActiveTab] = useState("/home");
  const navRef = useRef(null);

  function openNav() {
    setIsOpenNav(true);
  }

  function closeNav() {
    setIsOpenNav(false);
  }

  const listVariants = {
    hidden: {
      x: 800,
      transition: {
        when: "acterChildren",
        staggerChildren: 0.05,
        duration: 0.5,
      },
    },
    visible: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "tween" } },
  };

  return (
    <header className="header-height sticky left-0 top-0 z-10 bg-gray-100 shadow-sm duration-300 dark:bg-dark-bg">
      <nav className="responsive-container flex h-full items-center justify-between overflow-hidden">
        <Logo />

        {/* Button to open navbar, showed on mobile screens */}
        <button
          onClick={openNav}
          aria-label="open navbar"
          className="font-medium md:hidden"
        >
          <HiOutlineBars3BottomRight className="h-10 w-10" />
        </button>

        <motion.ul
          ref={navRef}
          className={`fixed right-0 top-0 z-10 flex h-dvh w-[60%] flex-col items-start gap-2 bg-slate-200 p-8 dark:bg-dark-bg md:relative md:h-auto md:w-fit
        md:flex-row md:items-center md:justify-end md:bg-transparent md:p-0`}
          variants={listVariants}
          initial="visible"
          animate={isOpenNav ? "visible" : "hidden"}
        >
          {/* Button to close navbar */}
          <button
            onClick={closeNav}
            aria-label="close navbar"
            className="mb-4 font-medium md:hidden"
          >
            <HiOutlineXMark className="h-6 w-6" />
          </button>

          {NAV_LINKS.map((link) => {
            return (
              <motion.li
                key={link.name}
                onClick={() => setActiveTab(link.to)}
                className="relative"
                variants={itemVariants}
              >
                <NavLink
                  to={link.to}
                  className={`relative z-[1] block px-4 py-2 font-medium tracking-wide duration-300 ${activeTab === link.to ? "text-white" : ""}`}
                >
                  {link.name}
                </NavLink>
                {activeTab === link.to && (
                  <motion.span
                    className="absolute inset-0 bg-teal-700"
                    style={{ borderRadius: 999 }}
                    layoutId="bubble"
                    transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
                  ></motion.span>
                )}
              </motion.li>
            );
          })}

          <SwitchTheme />
        </motion.ul>
      </nav>
    </header>
  );
}

export default Header;
