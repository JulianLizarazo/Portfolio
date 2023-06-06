import { useTranslations } from "next-intl";
import {
  SiTailwindcss,
  SiDocker,
  SiFramer,
  SiReactrouter,
  SiVite,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { FaSass, FaGitAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useAnimationContext } from "@/context/animations";
import { useRef } from "react";

const OtherSkills = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const t = useTranslations("skills");
  const { animations } = useAnimationContext();
  const isInView = useInView(ref, {
    margin: "-160px",
  });

  return (
    <section id="other" className="w-full mt-16 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center lg:text-4xl">
        {t("other")}
      </h2>
      <motion.section
        ref={ref}
        className="w-[70%] flex flex-wrap mt-16 justify-between items-center gap-4 lg:text-lg lg:mt-24 lg:gap-7"
        style={animations === "on" ? { opacity: 0 } : { opacity: 1 }}
        animate={animations === "on" && isInView && { opacity: 1 }}
      >
        <article className="w-20 h-24 flex flex-col items-center justify-evenly">
          <SiDocker className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]" />
          <h4>Docker</h4>
        </article>
        <article className="w-20 h-24 flex flex-col items-center justify-evenly">
          <SiFigma className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]" />
          <h4>Figma</h4>
        </article>
        <article className="w-20 h-24 flex flex-col items-center justify-evenly">
          <SiFramer className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]" />
          <h4 className="text-center">Framer Motion</h4>
        </article>
        <article className="w-20 h-24 flex flex-col items-center justify-evenly">
          <FaGitAlt className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]" />
          <h4>GIT</h4>
        </article>
        <article className="w-20 h-24 flex flex-col items-center justify-evenly">
          <SiPostman className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]" />
          <h4>Postman</h4>
        </article>
        <article className="w-20 h-24 flex flex-col items-center justify-evenly">
          <SiReactrouter className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]" />
          <h4 className="text-center">React Router</h4>
        </article>
        <article className="w-20 h-24 flex flex-col items-center justify-evenly">
          <FaSass className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]" />
          <h4>Sass</h4>
        </article>
        <article className="w-20 h-24 flex flex-col items-center justify-evenly">
          <SiTailwindcss className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]" />
          <h4>TailwindCSS</h4>
        </article>
        <article className="w-20 h-24 flex flex-col items-center justify-evenly">
          <SiVite className="w-[35px] h-[35px] lg:w-[45px] lg:h-[45px]" />
          <h4>Vite</h4>
        </article>
      </motion.section>
    </section>
  );
};

export default OtherSkills;
