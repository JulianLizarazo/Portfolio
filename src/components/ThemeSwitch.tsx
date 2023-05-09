import { MouseEventHandler, useState } from "react";
import LightSelectedSwitch from "./LightSelectedSwitch/LightSelectedSwitch";
import DarkSelectedSwitch from "./DarkSelectedSwitch/DarkSelectedSwitch";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<boolean>(true);

  const changeTheme = (): MouseEventHandler<HTMLElement> => {
    setTheme(!theme);
  };
  return (
    <section onClick={changeTheme}>
      {theme ? <LightSelectedSwitch /> : <DarkSelectedSwitch />}
    </section>
  );
};

export default ThemeSwitch;
