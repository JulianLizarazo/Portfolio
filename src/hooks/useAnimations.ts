import { useEffect, useState } from "react";

type Animations = "on" | "off";

const initialState: Animations = "on";

export const useAnimations = () => {
  const [animations, setAnimations] = useState<Animations>(initialState);

  const changeAnimations = (): void => {
    setAnimations(animations === "on" ? "off" : "on");
  };

  useEffect(() => {
    const localData: Animations = JSON.parse(
      localStorage.getItem("animations") as Animations
    );
    setAnimations(localData);
  }, []);

  useEffect(() => {
    localStorage.setItem("animations", JSON.stringify(animations));
  }, [animations]);

  return {
    animations,
    changeAnimations,
  };
};
