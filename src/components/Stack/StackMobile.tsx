import { SiPostgresql, SiExpress, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const animationProps = {
  MARGIN_START: "350px",
  MARGIN_END: "0px",
  DURATION: 0.7,
};

const StackMobile = () => {
  const [showText, setShowText] = useState<boolean>(false);
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
          initial={{ opacity: 0 }}
          animate={showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <SiPostgresql className="w-[50px] h-[50px] " />
        </motion.div>
        <div className="flex items-center text-xl w-12">
          <motion.span
          
            initial={{ marginInlineStart: animationProps.MARGIN_START }}
            animate={
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
            onAnimationComplete={completeText}
          >
            <b className="text-3xl">P</b>
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={showText && { opacity: 1 }}
            transition={{ duration: animationProps.DURATION }}
          >
            ostgreSQL
          </motion.p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <SiExpress className="w-[50px] h-[50px] " />
        </motion.div>
        <div className="flex items-center text-xl w-12">
          <motion.span
            initial={{ marginInlineStart: animationProps.MARGIN_START }}
            animate={
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
          >
            <b className="text-3xl">E</b>
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={showText && { opacity: 1 }}
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
          initial={{ opacity: 0 }}
          animate={showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <FaReact className="w-[50px] h-[50px] " />
        </motion.div>
        <div className="flex items-center text-xl w-12">
          <motion.span
            initial={{ marginInlineStart: animationProps.MARGIN_START }}
            animate={
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
          >
            <b className="text-3xl">R</b>
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={showText && { opacity: 1 }}
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
          initial={{ opacity: 0 }}
          animate={showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <DiNodejs className="w-[50px] h-[50px] " />
        </motion.div>
        <div className="flex items-center text-xl w-12">
          <motion.span
            initial={{ marginInlineStart: animationProps.MARGIN_START }}
            animate={
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
          >
            <b className="text-3xl">N</b>
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={showText && { opacity: 1 }}
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
          initial={{ opacity: 0 }}
          animate={showText && { opacity: 1 }}
          transition={{ duration: animationProps.DURATION }}
        >
          <TbBrandNextjs className="w-[50px] h-[50px] " />
        </motion.div>
        <div className="flex items-center text-xl w-12">
          <motion.span
            initial={{ marginInlineStart: animationProps.MARGIN_START }}
            animate={
              isInView && { marginInlineStart: animationProps.MARGIN_END }
            }
            transition={{ duration: animationProps.DURATION }}
          >
            <b className="text-3xl">N</b>
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={showText && { opacity: 1 }}
            transition={{ duration: animationProps.DURATION }}
          >
            extJS
          </motion.p>
        </div>
      </div>
      <motion.div
        className="text-bold text-4xl w-12"
        initial={{ opacity: 0 }}
        animate={showText && { opacity: 1 }}
        transition={{ duration: animationProps.DURATION }}
      >
        +
      </motion.div>
      <motion.div
        className="flex items-center justify-center gap-4
      "
        initial={{ opacity: 0 }}
        animate={showText && { opacity: 1 }}
        transition={{ duration: animationProps.DURATION }}
      >
        <SiTypescript className="w-[50px] h-[50px] " />
        <p className="text-xl w-12">Typescript</p>
      </motion.div>
    </section>
  );
};

export default StackMobile;
