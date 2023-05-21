"use client"
import { useEffect, useState, useLayoutEffect } from "react";

type Animations = "on" | "off";

const initialState: Animations = "on";

const useAnimations = () => {
  const [animations, setAnimations] = useState<Animations | "">("");

  useLayoutEffect(() => {
    if(typeof window !== 'undefined'){

      const localData = JSON?.parse(
        localStorage.getItem("animations") as string
    ) ?? initialState;
    setAnimations(localData);
  }
  }, []);

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

export default useAnimations;
