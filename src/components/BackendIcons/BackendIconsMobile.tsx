"use client";
import { useState, useEffect } from "react";
import { FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiTypescript,
  SiDocker,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { BsFillTerminalFill } from "react-icons/bs";
import { motion } from "framer-motion";
import useAnimations from "@/hooks/useAnimations";

const variants = {
  show: {
    opacity: 1,
  },

  hidden: {
    opacity: 0,
  },
};

let counter = 1;

export const BackendIconsMobile = () => {
  const { animations } = useAnimations();
  const [show, setShow] = useState<boolean>(false);

  const animationTime = (time: number): void => {
    setTimeout(() => {
      setShow(!show);
    }, time);
  };
  useEffect(() => {
    console.log(show, animations);

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
    } else if (counter === 1 && animations === ("on" as string)) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [show]);
  return (
    <motion.section
      initial={false}
      animate={show ? "show" : "hidden"}
      variants={animations === "on" ? variants : undefined}
      className="absolute w-full h-1/5 bottom-0 max-w-md"
    >
      <FaNodeJs className="absolute w-8 h-8 bottom-44 left-20 opacity-60" />
      <SiExpress className="absolute w-8 h-8 bottom-28 left-8 opacity-60" />
      <SiPostgresql className="absolute w-8 h-8 bottom-32 left-36 opacity-60" />
      <TbSql className="absolute w-8 h-8 bottom-20 right-16 opacity-60" />
      <SiTypescript className="absolute w-8 h-8 bottom-40 right-10 opacity-60" />
      <BsFillTerminalFill className="absolute w-8 h-8 left-24  bottom-12 opacity-60" />
      <SiDocker className="absolute w-8 h-8 bottom-[198px] right-[100px] opacity-60" />
    </motion.section>
  );
};

export default BackendIconsMobile;
