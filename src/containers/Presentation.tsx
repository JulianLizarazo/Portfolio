"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

import FrontendIconsDesktop from "@/components/FrontendIcons/FrontendIconsDesktop";
import { useWindowSize } from "@/hooks/useWindowSize";
import FrontendIconsMobile from "@/components/FrontendIcons/FrontendIconsMobile";
import BackendIconsMobile from "@/components/BackendIcons/BackendIconsMobile";
import BackendIconsDesktop from "@/components/BackendIcons/BackendIconsDesktop";
import { useTranslations } from "next-intl";
import useAnimations from "@/hooks/useAnimations";

export const Presentation = () => {
  const [positionString, setPositionString] = useState<number>(0);
  const { width } = useWindowSize();
  const { animations } = useAnimations();
  const el = useRef<HTMLDivElement | null>(null);
  const t = useTranslations("presentation");

  useEffect(() => {
    if (animations === "on") {
      const typed = new Typed(el.current, {
        strings: [t("frontend"), t("backend"), t("fullstack")],
        typeSpeed: 50,
        loop: true,
        backDelay: 2500,
        onStringTyped: () => {
          setPositionString(typed.arrayPos);
        },
      });
      
      return () => {
        typed.destroy();
      };
    }
  }, [animations]);

  return (
    <section className="w-full h-[91.6vh] flex flex-col justify-center items-center relative">
      {width < 1023 ? <FrontendIconsMobile text={positionString}/> : <FrontendIconsDesktop text={positionString} />}
      <div className="text-center align-middle">
        <h2 className="text-xl md:text-4xl">JULIAN PINILLA</h2>
        <div className="text-xl md:text-3xl">
          {animations === "on" ? (
            <span ref={el} />
          ) : (
            <span>{t("fullstack")}</span>
          )}
        </div>
      </div>
      {width < 1023 ? <BackendIconsMobile text={positionString} /> : <BackendIconsDesktop text={positionString}  />}
    </section>
  );
};
export default Presentation;
