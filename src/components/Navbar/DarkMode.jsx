import LightSwitch from "../../assets/light.png";
import DarkSwitch from "../../assets/dark.png";
import { useEffect, useState } from "react";
function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="relative">
      <img
        src={LightSwitch}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
        alt=""
      />
      <img
        src={DarkSwitch}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
        alt=""
      />
    </div>
  );
}

export default DarkMode;
