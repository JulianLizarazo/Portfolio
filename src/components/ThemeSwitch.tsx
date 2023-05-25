"use client"
import LightSelectedSwitch from "./LightSelectedSwitch/LightSelectedSwitch";
import DarkSelectedSwitch from "./DarkSelectedSwitch/DarkSelectedSwitch";
import { useThemeContext } from "@/context/theme";


const ThemeSwitch = () => {
  const { theme, changeTheme } = useThemeContext();
  return (
    <section onClick={changeTheme} className="cursor-pointer">
      {theme === 'light' ? <LightSelectedSwitch /> : <DarkSelectedSwitch />}
    </section>
  );
};

export default ThemeSwitch;
