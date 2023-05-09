import { MouseEventHandler, useState } from "react";
import LightSelectedSwitch from "./LightSelectedSwitch/LightSelectedSwitch";
import DarkSelectedSwitch from "./DarkSelectedSwitch/DarkSelectedSwitch";
import { useTheme } from "@/hooks/useTheme";

const ThemeSwitch = () => {
  const { theme, changeTheme } = useTheme();
  return (
    <section onClick={changeTheme} className="cursor-pointer">
      {theme === 'light' ? <LightSelectedSwitch /> : <DarkSelectedSwitch />}
    </section>
  );
};

export default ThemeSwitch;
