import { SiPostgresql, SiExpress, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useAnimationContext } from "@/context/animations";

const animationProps = {
  MARGIN_END: "0px",
  DURATION: 0.7,
};

const StackMobile = () => {
  const [showText, setShowText] = useState<boolean>(false);
  const { animations } = useAnimationContext();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    margin: "-160px",
    once: true,
  });

  const completeText = () => {
    setShowText(true);
  };

  return (
    <section
      ref={ref}
      className="h-[600px] flex flex-col justify-evenly items-center mt-[40px] overflow-x-hidden "
    >
      <div className="flex items-center justify-center gap-4">
        <motion.div
          className={animations === "on" ? "opacity-0" : "opacity-100"}
          animate={animations === "on" && showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <SiPostgresql className="w-[50px] h-[50px] " />
        </motion.div>
        <div className="flex items-center text-xl w-12">
          <motion.span
            className={animations === "on" ? "ml-[350px]" : "ml-0"}
            animate={
              animations === "on" &&
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
            onAnimationComplete={completeText}
          >
            <b className="text-3xl">P</b>
          </motion.span>
          <motion.p
            className={animations === "on" ? "opacity-0" : "opacity-100"}
            animate={animations === "on" && showText && { opacity: 1 }}
            transition={{ duration: animationProps.DURATION }}
          >
            ostgreSQL
          </motion.p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <motion.div
          className={animations === "on" ? "opacity-0" : "opacity-100"}
          animate={animations === "on" && showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <SiExpress className="w-[50px] h-[50px] " />
        </motion.div>
        <div className="flex items-center text-xl w-12">
          <motion.span
            className={animations === "on" ? "ml-[350px]" : "ml-0"}
            animate={
              animations === "on" &&
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
          >
            <b className="text-3xl">E</b>
          </motion.span>
          <motion.p
            className={animations === "on" ? "opacity-0" : "opacity-100"}
            animate={animations === "on" && showText && { opacity: 1 }}
            transition={{ duration: animationProps.DURATION }}
          >
            xpress
          </motion.p>
        </div>
      </div>
      <div
        className="flex items-center justify-center gap-4
      "
      >
        <motion.div
          className={animations === "on" ? "opacity-0" : "opacity-100"}
          animate={animations === "on" && showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <FaReact className="w-[50px] h-[50px] " />
        </motion.div>
        <div className="flex items-center text-xl w-12">
          <motion.span
            className={animations === "on" ? "ml-[350px]" : "ml-0"}
            animate={
              animations === "on" &&
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
          >
            <b className="text-3xl">R</b>
          </motion.span>
          <motion.p
            className={animations === "on" ? "opacity-0" : "opacity-100"}
            animate={animations === "on" && showText && { opacity: 1 }}
            transition={{ duration: animationProps.DURATION }}
          >
            eact
          </motion.p>
        </div>
      </div>
      <div
        className="flex items-center justify-center gap-4
      "
      >
        <motion.div
          className={animations === "on" ? "opacity-0" : "opacity-100"}
          animate={animations === "on" && showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <DiNodejs className="w-[50px] h-[50px] " />
        </motion.div>
        <div className="flex items-center text-xl w-12">
          <motion.span
            className={animations === "on" ? "ml-[350px]" : "ml-0"}
            animate={
              animations === "on" &&
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
          >
            <b className="text-3xl">N</b>
          </motion.span>
          <motion.p
            className={animations === "on" ? "opacity-0" : "opacity-100"}
            animate={animations === "on" && showText && { opacity: 1 }}
            transition={{ duration: animationProps.DURATION }}
          >
            odeJS
          </motion.p>
        </div>
      </div>
      <div
        className="flex items-center justify-center gap-4
      "
      >
        <motion.div
          className={animations === "on" ? "opacity-0" : "opacity-100"}
          animate={animations === "on" && showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <TbBrandNextjs className="w-[50px] h-[50px] " />
        </motion.div>
        <div className="flex items-center text-xl w-12">
          <motion.span
            className={animations === "on" ? "ml-[350px]" : "ml-0"}
            animate={
              animations === "on" &&
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
          >
            <b className="text-3xl">N</b>
          </motion.span>
          <motion.p
            className={animations === "on" ? "opacity-0" : "opacity-100"}
            animate={animations === "on" && showText && { opacity: 1 }}
            transition={{ duration: animationProps.DURATION }}
          >
            extJS
          </motion.p>
        </div>
      </div>
      <motion.div
        className={
          animations === "on"
            ? "opacity-0 text-bold text-4xl w-12"
            : "opacity-100 text-bold text-4xl w-12"
        }
        animate={animations === "on" && showText && { opacity: 1 }}
        transition={{ duration: animationProps.DURATION }}
      >
        +
      </motion.div>
      <motion.div
        className={
          animations === "on"
            ? "opacity-0 flex items-center justify-center gap-4"
            : "opacity-100 flex items-center justify-center gap-4"
        }
        animate={animations === "on" && showText && { opacity: 1 }}
        transition={{ duration: animationProps.DURATION }}
      >
        <SiTypescript className="w-[50px] h-[50px] " />
        <p className="text-xl w-12">Typescript</p>
      </motion.div>
    </section>
  );
};

export default StackMobile;
