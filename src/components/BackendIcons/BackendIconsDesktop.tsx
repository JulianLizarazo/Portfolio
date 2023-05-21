"use client";
import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiTypescript,
  SiDocker,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { BsFillTerminalFill } from "react-icons/bs";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { useState, useEffect } from "react";
import useAnimations from "@/hooks/useAnimations";
import { useWindowSize } from "@/hooks/useWindowSize";

const variants = {
  show: {
    opacity: 1,
  },

  hidden: {
    opacity: 0,
  },
};
let counter = 1;
const BackendIconsDesktop = () => {
  const [show, setShow] = useState<boolean>(false);
  const { animations } = useAnimations();
 
  console.log(animations)

  const animationTime = (time: number): void => {
    setTimeout(() => {
      setShow(!show);
    }, time);
  };
  useEffect(() => {
    if (animations === "on") {
      if (counter > 2) {
        counter = 1;
      }

      switch (counter) {
        case 1:
          counter++;

          animationTime(5000);
          break;
        case 2:
          counter++;

          animationTime(5800);
          break;
      }
    }
  }, [show, animations]);
  return (
    <motion.section
      initial={false}
      animate={show ? "show" : "hidden"}
      variants={animations === "on" ? variants : undefined}
      className="absolute w-1/2 h-full top-0 right-0 mr-[10%]"
    >
      <MouseParallaxContainer className="h-full" globalFactorX={0.2} globalFactorY={0.2}>
        <MouseParallaxChild className="absolute right-24 top-48 opacity-60" factorX={0.2} factorY={0.2}>
          <FaNodeJs className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute right-72 top-72 opacity-60" factorX={0.1} factorY={0.4}>
          <SiExpress className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute right-64 top-24 opacity-60" factorX={0.3} factorY={0.1}>
          <SiPostgresql className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute right-36 bottom-36 opacity-60" factorX={0.5} factorY={0.3}>
          <TbSql className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute right-32 bottom-80 opacity-60" factorX={0.1} factorY={0.4}>
          <SiTypescript className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute right-64 bottom-20 opacity-60" factorX={0.2} factorY={0.5}>
          <BsFillTerminalFill className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute right-72 bottom-52 opacity-60" factorX={0.4} factorY={0.3}>
          <SiDocker className="w-14 h-14" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </motion.section>
  );
};

export default BackendIconsDesktop;
