import {
  useEffect,
  useState,
  useLayoutEffect,
  createContext,
  useContext,
} from "react";

const initialState: Animations = "on";
const contextInitialState: TAnimationContext = {
  animations: initialState,
  changeAnimations: () => {},
};

const AnimationContext = createContext<TAnimationContext>(contextInitialState);

export const AnimationsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [animations, setAnimations] = useState<Animations>(initialState);

  useLayoutEffect(() => {
    const localData =
      JSON?.parse(localStorage.getItem("animations") as string) ?? initialState;
    setAnimations(localData);
  }, []);

  useEffect(() => {
    localStorage.setItem("animations", JSON.stringify(animations));
  }, [animations]);

  const changeAnimations = () => {
    setAnimations(animations === "on" ? "off" : "on");
  };
  return (
    <AnimationContext.Provider value={{ animations, changeAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => useContext(AnimationContext);
