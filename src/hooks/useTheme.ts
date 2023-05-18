import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const initialState: Theme = "light";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(initialState);

  const changeTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const localData: Theme = JSON.parse(localStorage.getItem("theme") as Theme);
    setTheme(localData);
  }, []);

  useEffect(() => {
    const className: string = "dark";
    const bodyClasses: DOMTokenList = window.document.body.classList;

    localStorage.setItem("theme", JSON.stringify(theme));

    if (theme === "dark") {
      bodyClasses.add(className);
    } else {
      bodyClasses.remove(className);
    }
  }, [theme]);

  return {
    theme,
    changeTheme,
  };
};
