"use client"

import { useTranslation } from "@/app/i18n/client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import i18next from "i18next";


export const Presentation = () => {

  const el = useRef(null);
  const { t } = useTranslation(i18next.language, 'presentation');

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [t('frontend'), t('backend'), t('fullstack')],
      typeSpeed: 100,
      loop: true,
      backDelay: 1500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <h2>JULIAN PINILLA</h2>
      <div>

      <span ref={el} />
      </div>
    </section>
  );
}
export default Presentation;