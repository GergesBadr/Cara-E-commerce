import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

function SwitchTheme() {
  const { theme, handleThemeSwitch } = useTheme();
  const isLightMode = theme === "light";

  return (
    <button
      onClick={handleThemeSwitch}
      aria-label={isLightMode ? "apply dark mode" : "apply light mode"}
      className="relative flex w-20 items-center justify-evenly rounded-full border-2 border-teal-700 py-2"
    >
      <HiOutlineMoon className="h-6 w-6  " />
      <HiOutlineSun className="h-6 w-6 " />

      {/* Toggle */}
      <motion.div
        className={`absolute h-6 w-6 rounded-full bg-teal-700 ${isLightMode ? "right-2" : "left-2.5"}`}
        layout
      ></motion.div>
    </button>
  );
}

export default SwitchTheme;
