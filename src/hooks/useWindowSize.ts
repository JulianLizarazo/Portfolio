import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const changeWidth = (): void => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [width]);

  return {width};
};