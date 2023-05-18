import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaReact,FaSass } from "react-icons/fa";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
const FrontendIconsDesktop = () => {
  return (
    <>
      <MouseParallaxContainer className="h-full" globalFactorX={0.2} globalFactorY={0.2}>
        <MouseParallaxChild className="absolute left-48 top-20" factorX={0.5} factorY={0.2}>
          <AiFillHtml5 className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute left-60 top-32" factorX={0.3} factorY={0.3}>
          <DiCss3 className="w-14 h-14"/>
        </MouseParallaxChild>
        <MouseParallaxChild className="absolute left-80 top-44" factorX={0.3} factorY={0.3}>
          <SiJavascript className="w-14 h-14"/>
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.3} factorY={0.3}>
          <FaReact className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.3} factorY={0.3}>
          <FaSass className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.3} factorY={0.3}>
          <SiTailwindcss className="w-14 h-14" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.3} factorY={0.3}>
          <SiTypescript className="w-14 h-14" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </>
  );
};

export default FrontendIconsDesktop;
