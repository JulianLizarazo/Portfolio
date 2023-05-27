"use client";
import { SiPostgresql, SiExpress, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import { useAnimationContext } from "@/context/animations";

const animationProps = {
  MARGIN_END: "0px",
  DURATION: 0.7,
};

const StackDesktop = () => {
  const [showText, setShowText] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const { animations } = useAnimationContext();
  const isInView = useInView(ref, {
    margin: "-160px",
  });

  const completeText = () => {
    setShowText(true);
  };

  return (
    <section
      ref={ref}
      className="h-[400px] w-full flex flex-row justify-evenly items-center mt-[40px] overflow-x-hidden "
    >
      <div className="h-36  flex flex-col items-center justify-around">
        <motion.div
          className={animations === "on" ? "opacity-0" : "opacity-100"}
          animate={animations === "on" && showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <SiPostgresql className="w-[70px] h-[70px]" />
        </motion.div>
        <div className="flex items-center text-2xl w-full">
          <motion.span
            className={animations === "on" ? "ml-[500%]" : "ml-0"}
            animate={
              animations === "on" &&
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
            onAnimationComplete={completeText}
          >
            <b className="text-4xl">P</b>
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
      <div className="h-36  flex flex-col items-center justify-around">
        <motion.div
          className={animations === "on" ? "opacity-0" : "opacity-100"}
          animate={animations === "on" && showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <SiExpress className="w-[70px] h-[70px]" />
        </motion.div>
        <div className="flex items-center text-2xl w-full">
          <motion.span
            className={animations === "on" ? "ml-[500%]" : "ml-0"}
            animate={
              animations === "on" &&
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
          >
            <b className="text-4xl">E</b>
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
        className="h-36  flex flex-col items-center justify-around
        "
      >
        <motion.div
          className={animations === "on" ? "opacity-0" : "opacity-100"}
          animate={animations === "on" && showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <FaReact className="w-[70px] h-[70px]" />
        </motion.div>
        <div className="flex items-center text-2xl w-full">
          <motion.span
            className={animations === "on" ? "ml-[500%]" : "ml-0"}
            animate={
              animations === "on" &&
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
          >
            <b className="text-4xl">R</b>
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
        className="h-36  flex flex-col items-center justify-around
        "
      >
        <motion.div
          className={animations === "on" ? "opacity-0" : "opacity-100"}
          animate={animations === "on" && showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <DiNodejs className="w-[70px] h-[70px]" />
        </motion.div>
        <div className="flex items-center text-2xl w-full">
          <motion.span
            className={animations === "on" ? "ml-[500%]" : "ml-0"}
            animate={
              animations === "on" &&
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
          >
            <b className="text-4xl">N</b>
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
        className="h-36  flex flex-col items-center justify-around
        "
      >
        <motion.div
          className={animations === "on" ? "opacity-0" : "opacity-100"}
          animate={animations === "on" && showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <TbBrandNextjs className="w-[70px] h-[70px]" />
        </motion.div>
        <div className="flex items-center text-2xl w-full">
          <motion.span
            className={animations === "on" ? "ml-[500%]" : "ml-0"}
            animate={
              animations === "on" &&
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
          >
            <b className="text-4xl">N</b>
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
            ? "opacity-0 text-bold text-6xl w-12"
            : "opacity-100 text-bold text-6xl w-12"
        }
        animate={animations === "on" && showText && { opacity: 1 }}
        transition={{ duration: animationProps.DURATION }}
      >
        +
      </motion.div>
      <motion.div
        className={
          animations === "on"
            ? "opacity-0 h-36  flex flex-col items-center justify-around"
            : "opacity-100 h-36  flex flex-col items-center justify-around"
        }
        animate={animations === "on" && showText && { opacity: 1 }}
        transition={{ duration: animationProps.DURATION }}
      >
        <SiTypescript className="w-[70px] h-[70px]" />
        <p className="text-2xl w-full text-center">Typescript</p>
      </motion.div>
    </section>
  );
};

export default StackDesktop;
