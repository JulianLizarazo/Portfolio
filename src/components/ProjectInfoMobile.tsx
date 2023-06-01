import { useTranslations } from "next-intl";
import type { IProjectsAPI } from "../interfaces/ProjectsAPI";
import ProjectImage from "./ProjectImage";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { Suspense } from "react";
import { Icon } from "./Icon";

type ProjectInfoMobileProps = {
  project: IProjectsAPI;
  handleShowProjectInfo: () => void;
};

const ProjectInfoMobile = ({
  project,
  handleShowProjectInfo,
}: ProjectInfoMobileProps) => {
  const t = useTranslations("projectsInfo");
  return (
    <section
      className="w-[90%] max-w-[400px] h-[90%] fixed top-1/2 left-1/2 z-30 bg-light-gray dark:bg-dark-gray"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <section className="w-full h-[40%] bg-light-blue relative">
        <div
          className="w-7 h-7 bg-light-brown text-light-blue rounded-3xl absolute top-3 right-4 flex justify-center items-center"
          onClick={handleShowProjectInfo}
        >
          X
        </div>
        <ProjectImage
          imageUrl={project.name}
          className="w-1/2 h-full object-contain my-0 mx-auto"
          alt={project.images.alt}
        />
      </section>
      <h2 className="text-center font-bold text-lg mt-4"> {project.name} </h2>
      <p className="mx-3 mt-2 text-justify">
        {" "}
        {t(project.name.toLowerCase())}{" "}
      </p>
      <section className="mt-4 h-[20.7%] flex">
        <section className="w-1/2 h-full flex flex-col items-center justify-around">
          <a
            href={project.repo}
            target="_blank"
            className="w-[85%] h-12 flex items-center justify-around border rounded-sm border-light-blue "
          >
            <AiFillGithub className="w-7 h-7" />
            <p className="w-20 text-sm"> {t("repo")} </p>
          </a>
          <a
            href={project.website}
            target="_blank"
            className="w-[85%] h-12 flex items-center justify-around border rounded-sm border-light-blue "
          >
            <AiFillEye className="w-7 h-7" />
            <p className="w-20 text-sm"> {t("website")} </p>
          </a>
        </section>
        <section className="w-1/2 h-full">
          <h3 className="text-center font-bold"> {t("technologies")} </h3>
          <div className="w-full h-[80%] flex flex-wrap items-center justify-around px-1 gap-2">
            {project.technologies.map((technologie) => (
              <Suspense fallback={<p>Cargando....</p>}>
                <Icon key={technologie.name} nameIcon={technologie.icon} propsIcon={{ size: 30 }} />
              </Suspense>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default ProjectInfoMobile;
