import { useEffect, useState } from "react";

type Theme = 'light' | 'dark';

const initialState: Theme = 'light' ;

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => {
      const localData: Theme = localStorage.getItem("theme") as Theme;
      return localData ? JSON.parse(localData) : initialState;
    });

  const changeTheme = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const className: string = 'dark';
    const bodyClasses: DOMTokenList = window.document.body.classList;

    localStorage.setItem("theme", JSON.stringify(theme));

    if(theme === 'dark') {
        bodyClasses.add(className);
    } else {
        bodyClasses.remove(className);
    }
  }, [theme])

  return{
    theme,
    changeTheme,
  }
}