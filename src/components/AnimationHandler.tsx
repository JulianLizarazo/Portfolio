"use client"
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useAnimationContext } from "@/context/animations";

const variants = {
  left: {
    transform: "translateX(0%)",
  },

  right: {
    transform: "translateX(121%)",
  },
};



const AnimationHandler = () => {
  const t = useTranslations("header");
  const { animations , changeAnimations } = useAnimationContext();

  return (
    <section className="text-light-blue dark:text-dark-white h-full flex flex-col items-center justify-evenly">
      <h3 className="text-sm">{t("animations")}</h3>
      <div
        className="w-12 h-6 rounded-xl relative bg-light-brown dark:bg-dark-gray cursor-pointer border-2"
        onClick={changeAnimations}
      >
        <motion.div
          className="w-5 h-5 rounded-full absolute bottom-0 flex justify-center items-center bg-light-blue dark:bg-dark-white"
          initial={false}
          animate={animations === "off" ? "left" : "right"}
          variants={variants}
        >
          <span className="text-[8px] text-center align-middle mt-0.5 text-light-white dark:text-dark-black">
            {animations && animations.toUpperCase()}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimationHandler;
