"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

import FrontendIconsDesktop from "@/components/FrontendIcons/FrontendIconsDesktop";
import { useWindowSize } from "@/hooks/useWindowSize";
import FrontendIconsMobile from "@/components/FrontendIcons/FrontendIconsMobile";
import BackendIconsMobile from "@/components/BackendIcons/BackendIconsMobile";
import BackendIconsDesktop from "@/components/BackendIcons/BackendIconsDesktop";
import { useTranslations } from "next-intl";

export const Presentation = () => {
  const { width } = useWindowSize();
  const el = useRef(null);
  const t = useTranslations("presentation");

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [t("frontend"), t("backend"), t("fullstack")],
      typeSpeed: 100,
      loop: true,
      backDelay: 1500,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="w-full h-[91.6vh] flex flex-col justify-center items-center relative">
      {width < 1023 ? <FrontendIconsMobile /> : <FrontendIconsDesktop />}
      <div className="text-center align-middle">
        <h2 className="text-xl">JULIAN PINILLA</h2>
        <div className="text-xl">
          <span ref={el} />
        </div>
      </div>
      {width < 1023 ? <BackendIconsMobile /> : <BackendIconsDesktop />}
    </section>
  );
};
export default Presentation;
