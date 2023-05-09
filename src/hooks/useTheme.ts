import { MouseEventHandler, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

const initialState: Theme = 'light' ;

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(initialState);

  const changeTheme = (): MouseEventHandler<HTMLElement> => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const className: string = 'dark';
    const bodyClasses: DOMTokenList = window.document.body.classList;

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