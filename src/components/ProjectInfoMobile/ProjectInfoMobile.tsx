import { useTranslations } from "next-intl";
import type { IProjectsAPI } from "@/interfaces/ProjectsAPI";
import ProjectImage from "../ProjectImage";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { Suspense } from "react";
import { Icon } from "../Icon";
import { motion } from "framer-motion";
import { useAnimationContext } from "@/context/animations";
import style from "./ProjectInfoMobile.module.css";

type ProjectInfoMobileProps = {
  project: IProjectsAPI;
  handleShowProjectInfo: () => void;
};

const ProjectInfoMobile = ({
  project,
  handleShowProjectInfo,
}: ProjectInfoMobileProps) => {
  const t = useTranslations("projectsInfo");
  const { animations } = useAnimationContext();
  return (
    <motion.section
      key="modal"
      className="w-[90%] max-w-[400px] h-[90%] max-h-[667px] fixed top-1/2 left-1/2 z-30 bg-light-gray dark:bg-dark-gray"
      style={
        animations === "on"
          ? { opacity: 0, transform: "translate(-50%, -50%)" }
          : { opacity: 1, transform: "translate(-50%, -50%)" }
      }
      animate={animations === "on" && { opacity: 1 }}
      exit={animations === "on" ? { opacity: 0 } : undefined}
    >
      <section className="w-full h-[40%]">
        <div
          className="w-7 h-7 bg-light-brown text-light-blue dark:bg-dark-gray dark:text-dark-white rounded-3xl absolute top-3 right-4 flex justify-center items-center z-10"
          onClick={handleShowProjectInfo}
        >
          X
        </div>
        <ProjectImage
          imageUrl={project.name}
          className={`h-[640px] object-cover  ${style.imageClip}`}
          alt={project.images.alt}
        />
      </section>
      <h2 className="font-bold text-xl absolute top-[165px] right-[30px]">
        {project.name}
      </h2>

      <p className="mx-3 text-justify">{t(project.name.toLowerCase())}</p>
      <section className="mt-4 h-[22%] max-h-[30%] flex flex-col items-center">
        <section className="w-full h-full flex items-center justify-around gap-5">
          <a
            href={project.repo}
            target="_blank"
            className="w-[40%] h-12 flex items-center  border rounded-sm justify-evenly  border-light-blue dark:border-dark-white "
          >
            <AiFillGithub className="w-7 h-7" />
            <p className="text-sm"> {t("repo")} </p>
          </a>
          <a
            href={project.website}
            target="_blank"
            className="w-[40%] h-12 flex items-center border rounded-sm justify-evenly  border-light-blue dark:border-dark-white "
          >
            <AiFillEye className="w-7 h-7" />
            <p className="text-sm"> {t("website")} </p>
          </a>
        </section>
        <section className="w-full h-full mt-4">
          <h3 className="text-center text-lg font-bold mb-2"> {t("technologies")} </h3>
          <div className="w-full h-[80%] flex flex-wrap items-center justify-around">
            {project.technologies.map((technologie) => (
              <Suspense fallback={<p>Cargando....</p>}>
                <Icon
                  key={technologie.name}
                  nameIcon={technologie.icon}
                  propsIcon={{ size: 40 }}
                />
              </Suspense>
            ))}
          </div>
        </section>
      </section>
    </motion.section>
  );
};

export default ProjectInfoMobile;
