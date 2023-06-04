import { useAnimationContext } from "@/context/animations";
import { IProjectsAPI } from "@/interfaces/ProjectsAPI";
import { motion } from "framer-motion";
import ProjectImage from "../ProjectImage";
import style from "./ProjectInfoDesktop.module.css";
import { useTranslations } from "next-intl";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { Suspense } from "react";
import { Icon } from "../Icon";

type ProjectInfoDesktopProps = {
  project: IProjectsAPI;
  handleShowProjectInfo: () => void;
};

const ProjectInfoDesktop = ({
  project,
  handleShowProjectInfo,
}: ProjectInfoDesktopProps) => {
  const { animations } = useAnimationContext();
  const t = useTranslations("projectsInfo");
  return (
    <motion.section
      key="modal"
      className="w-[80%] max-w-[1270px] h-[80%] max-h-[768px] fixed top-1/2 left-1/2 z-30 bg-light-gray dark:bg-dark-gray"
      style={
        animations === "on"
          ? { opacity: 0, transform: "translate(-50%, -50%)" }
          : { opacity: 1, transform: "translate(-50%, -50%)" }
      }
      animate={animations === "on" && { opacity: 1 }}
      exit={animations === "on" ? { opacity: 0 } : undefined}
    >
      <div
        className="w-10 h-10 text-xl  text-light-blue dark:text-dark-white  absolute top-3 right-4 flex justify-center items-center z-10"
        onClick={handleShowProjectInfo}
      >
        X
      </div>
      <ProjectImage
        imageUrl={project.name}
        className={`h-full object-cover ${style.imageClip}`}
        alt={project.images.alt}
      />
      <section className="w-[80%] h-full absolute flex flex-col justify-evenly items-end top-0 right-0">
        <h2 className="w-[60%] font-bold text-3xl text-center">
          {project.name}
        </h2>
        <p className="w-[70%] text-justify text-xl pl-[4%] pr-3 indent-[10%]">
          {" "}
          {t(project.name.toLowerCase())}
        </p>
        <section className="w-[70%]  flex items-center justify-evenly gap-5">
          {project.repo !== "" && (
            <a
              href={project.repo}
              target="_blank"
              className="w-[30%] h-14 flex items-center  border rounded-sm justify-evenly  border-light-blue dark:border-dark-white hover:bg-light-blue hover:text-light-gray dark:hover:bg-dark-white dark:hover:text-dark-gray "
            >
              <AiFillGithub className="w-9 h-9" />
              <p className="text-lg"> {t("repo")} </p>
            </a>
          )}
          <a
            href={project.website}
            target="_blank"
            className="w-[30%] h-14 flex items-center border rounded-sm justify-evenly  border-light-blue dark:border-dark-white hover:bg-light-blue hover:text-light-gray dark:hover:bg-dark-white dark:hover:text-dark-gray "
          >
            <AiFillEye className="w-9 h-9" />
            <p className="text-lg"> {t("website")} </p>
          </a>
        </section>
        <section className="w-[90%]">
          <h3 className="text-center text-2xl font-bold mb-5">
            {" "}
            {t("technologies")}{" "}
          </h3>
          <div className="w-full h-[80%] flex flex-wrap items-center justify-around">
            {project.technologies.map((technologie) => (
              <Suspense fallback={<p>Cargando....</p>}>
                <Icon
                  key={technologie.name}
                  nameIcon={technologie.icon}
                  propsIcon={{ size: 50 }}
                />
              </Suspense>
            ))}
          </div>
        </section>
      </section>
    </motion.section>
  );
};

export default ProjectInfoDesktop;
