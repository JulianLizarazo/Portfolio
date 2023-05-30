"use client"
import { useEffect, useState, useLayoutEffect } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState<number>(0);

  const changeWidth = (): void => {
    setWidth(window.innerWidth);
  };

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, [])

  useEffect(() => {
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [width]);

  return {width};
};