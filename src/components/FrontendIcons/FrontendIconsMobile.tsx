import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaReact, FaSass } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  show: {
    opacity: 1,
  },

  hidden: {
    opacity: 0,
  },
};
let counter: number = 1;
const FrontendIconsMobile = () => {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {

    const animationTime = (time: number): void => {
      setTimeout(() => {
        setShow(!show);
      }, time);
    };

    if (counter > 3) {
      counter = 2;
    }

    switch (counter) {
      case 1:
        counter++;
       
        animationTime(5000);
        break;
      case 2:
        counter++;
      
        animationTime(2800);
        break;
      case 3:
        counter++;
       
        animationTime(7800);
        break;
    }
  }, [show]);
  return (
    <motion.section
      initial={false}
      animate={show ? "show" : "hidden"}
      variants={variants}
      className="absolute w-full h-1/5 top-0"
    >
      <AiFillHtml5 className="absolute left-24 top-14 w-8 h-8 opacity-60" />

      <DiCss3 className="absolute left-40 top-24 w-8 h-8 opacity-60" />

      <SiJavascript className="absolute left-14 top-44 w-8 h-8 opacity-60" />

      <FaReact className="absolute right-24 top-40 w-8 h-8 opacity-60" />

      <FaSass className="absolute right-24 top-7 w-8 h-8 opacity-60" />

      <SiTailwindcss className="absolute right-6 top-24 w-8 h-8 opacity-60" />

      <SiTypescript className="absolute left-5 top-24 w-8 h-8 opacity-60" />
    </motion.section>
  );
};

export default FrontendIconsMobile;
