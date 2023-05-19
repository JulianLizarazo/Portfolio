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
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const animationTime = (time: number): void => {
      setTimeout(() => {
        setShow(!show);
      }, time);
    };

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
  }, [show]);
  return (
    <motion.section
      initial={false}
      animate={show ? "show" : "hidden"}
      variants={variants}
      className="absolute w-full h-1/5 bottom-0"
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
