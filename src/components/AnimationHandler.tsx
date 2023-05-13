import type { TFunction } from "i18next";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  left: {
    transform: "translateX(-5%)",
  },

  right: {
    transform: "translateX(100%)",
  },
};

type AnimationHandlerProps = {
  t: TFunction<string, undefined, string>;
};

const AnimationHandler = ({ t }: AnimationHandlerProps) => {
  const [animations, setAnimations] = useState<boolean>(true);
  return (
    <section>
      <h3>{t("animation")}</h3>
      <div className="w-12 h-2.5 rounded-xl relative bg-dark-black cursor-pointer" onClick={() => setAnimations(!animations)}>

      <motion.div
        className="w-6 h-6 rounded-full absolute -bottom-2 flex justify-center items-center bg-dark-red"
        initial={false}
        animate={!animations ? "left" : "right"}
        variants={variants}
        >
        
          <span className="text-[10px] text-center align-middle">
            {animations ? 'ON' : 'OFF'}
          </span>
     
      </motion.div>
        </div>
    </section>
  );
};

export default AnimationHandler;
