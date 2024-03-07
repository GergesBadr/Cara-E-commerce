import logoImage from "../assets/logo.png";
import { useTheme } from "../contexts/ThemeContext";

function Logo() {
  const { theme } = useTheme();

  return theme === "light" ? (
    <div>
      <img src={logoImage} alt="Cara, company logo." loading="lazy" />
    </div>
  ) : (
    <p className="text-2xl font-bold tracking-wider md:text-4xl">Cara</p>
  );
}

export default Logo;
