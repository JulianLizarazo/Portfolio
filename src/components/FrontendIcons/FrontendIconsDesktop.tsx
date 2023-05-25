"use client";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaReact, FaSass } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { useAnimationContext } from "@/context/animations";

const variants = {
  show: {
    opacity: 1,
  },

  hidden: {
    opacity: 0,
  },
};

type FrontendIconsDesktopProps = {
  text: number;
};

const FrontendIconsDesktop = ({ text }: FrontendIconsDesktopProps) => {
  const { animations } = useAnimationContext();
  return (
    <motion.section
      initial={false}
      animate={ animations === "off" || text === 0 || text === 2 ? "show" : "hidden"}
      variants={variants}
      className="absolute w-1/2 h-full top-0 left-0 ml-[10%]"
    >
      <MouseParallaxContainer
        className="h-full"
        globalFactorX={0.2}
        globalFactorY={0.2}
      >
        <MouseParallaxChild
          className="absolute left-56 top-20 opacity-60"
          factorX={0.2}
          factorY={0.2}
        >
          <AiFillHtml5 className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild
          className="absolute left-44 top-64 opacity-60"
          factorX={0.5}
          factorY={0.4}
        >
          <DiCss3 className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild
          className="absolute left-80 top-44 opacity-60"
          factorX={0.6}
          factorY={0.1}
        >
          <SiJavascript className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild
          className="absolute left-32 top-96 opacity-60"
          factorX={0.1}
          factorY={0.5}
        >
          <FaReact className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild
          className="absolute left-64 bottom-56 opacity-60"
          factorX={0.4}
          factorY={0.2}
        >
          <FaSass className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild
          className="absolute left-36 bottom-24 opacity-60"
          factorX={0.2}
          factorY={0.1}
        >
          <SiTailwindcss className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild
          className="absolute bottom-16 left-80 opacity-60"
          factorX={0.3}
          factorY={0.4}
        >
          <SiTypescript className="w-14 h-14" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </motion.section>
  );
};

export default FrontendIconsDesktop;
