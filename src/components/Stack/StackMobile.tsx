import { SiPostgresql, SiExpress, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";



const StackMobile = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    margin: "-160px",
    once: true,
  });


  return (
    <section ref={ref} className="h-[600px] flex flex-col justify-evenly items-center mt-[40px] ">
      <motion.div className="flex items-center justify-center gap-4"
      initial={{x: "200%"}}
        animate={isInView && {x: "0%"}}
        transition={{ duration: 1}}
      >
        <SiPostgresql className="w-[50px] h-[50px] " />
        <p className="text-xl w-12">
          <b>P</b>ostgreSQL
        </p>
      </motion.div>
      <div className="flex items-center justify-center gap-4
      ">
        <SiExpress className="w-[50px] h-[50px] " />
        <p className="text-xl w-12">
          <b>E</b>xpress
        </p>
      </div>
      <div className="flex items-center justify-center gap-4
      ">
        <FaReact className="w-[50px] h-[50px] " />
        <p className="text-xl w-12">
          <b>R</b>eact
        </p>
      </div>
      <div className="flex items-center justify-center gap-4
      ">
        <DiNodejs className="w-[50px] h-[50px] " />
        <p className="text-xl w-12">
          <b>N</b>odeJS
        </p>
      </div>
      <div className="flex items-center justify-center gap-4
      ">
        <TbBrandNextjs className="w-[50px] h-[50px] " />
        <p className="text-xl w-12">
          <b>N</b>extJS
        </p>
      </div>
      <div className="text-bold text-4xl w-12">+</div>
      <div className="flex items-center justify-center gap-4
      ">
        <SiTypescript className="w-[50px] h-[50px] " />
        <p className="text-xl w-12">Typescript</p>
      </div>
    </section>
  );
};

export default StackMobile;
