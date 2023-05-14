import { useEffect, useState } from "react";

type Animations = "on" | "off";

const initialState: Animations = "on";

export const useAnimations = () => {
  const [animations, setAnimations] = useState<Animations>(() => {
    const localData: Animations = localStorage.getItem(
      "animations"
    ) as Animations;
    return localData ? JSON.parse(localData) : initialState;
  });

  const changeAnimations = (): void => {
    setAnimations(animations === "on" ? "off" : "on");
  };

  useEffect(() => {
    localStorage.setItem("animations", JSON.stringify(animations));
  }, [animations]);

  return {
    animations,
    changeAnimations,
  };
};
