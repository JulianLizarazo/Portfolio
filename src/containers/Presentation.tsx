"use client";

import { useTranslation } from "@/app/i18n/client";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import i18next from "i18next";
import FrontendIconsDesktop from "@/components/FrontendIcons/FrontendIconsDesktop";
import { useWindowSize } from "@/hooks/useWindowSize";
import FrontendIconsMobile from "@/components/FrontendIcons/FrontendIconsMobile";
import BackendIconsMobile from "@/components/BackendIcons/BackendIconsMobile";
import BackendIconsDesktop from "@/components/BackendIcons/BackendIconsDesktop";

export const Presentation = () => {
  const [typed, setTyped] = useState<Typed | null>(null);
  const { width } = useWindowSize();
  const el = useRef(null);
  const { t } = useTranslation(i18next.language, "presentation");

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [t("frontend"), t("backend"), t("fullstack")],
      typeSpeed: 100,
      loop: true,
      backDelay: 1500,
    });
    setTyped(typed);
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    console.log("typed",typed?.arrayPos);
  })



  return (
    <section className="w-full h-[91.6vh] flex flex-col justify-center relative">
      {width < 1023 ? <FrontendIconsMobile /> : <FrontendIconsDesktop />}
      <div className="text-center align-middle">
        <h2 className="text-xl">JULIAN PINILLA</h2>
        <div className="text-xl">
          <span ref={el} />
        </div>
      </div>
      {width < 1023 ? <BackendIconsMobile/> : <BackendIconsDesktop/>}
    </section>
  );
};
export default Presentation;
