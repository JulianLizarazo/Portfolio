"use client"
import {
    useEffect,
    useState,
    useLayoutEffect,
    createContext,
    useContext,
  } from "react";
  
  const initialState: Theme = "light";
  const contextInitialState: TThemeContext = {
    theme: initialState,
    changeTheme: () => {},
  };
  
  const ThemeContext = createContext<TThemeContext>(contextInitialState);
  
  export const ThemeContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [theme, setTheme] = useState<Theme>(initialState);

  const changeTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useLayoutEffect(() => {
    const localData: Theme = JSON.parse(localStorage.getItem("theme") as Theme) ?? initialState;
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

 
   return (
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export const useThemeContext = () => useContext(ThemeContext);
  