import { useState } from "react";
import ProjectImage from "@/components/ProjectImage";
import { BsEyeFill } from "react-icons/bs";
import ProjectInfoMobile from "./ProjectInfoMobile/ProjectInfoMobile";
import type { IProjectsAPI } from "@/interfaces/ProjectsAPI";
import { AnimatePresence } from "framer-motion";


type ProjectMobileProps = {
  project: IProjectsAPI;
};

const ProjectMobile = ({ project }: ProjectMobileProps) => {
  const [showProjectInfo, setShowProjectInfo] = useState<boolean>(false);

  const handleShowProjectInfo = () => {
    setShowProjectInfo(!showProjectInfo);
  };
  return (
    <article
      className="w-40 h-[360px] relative"
      onClick={handleShowProjectInfo}
    >
      <ProjectImage
        imageUrl={project.name}
        className="w-full h-full object-cover"
        alt={project.images.alt}
      />
      <div className="absolute w-full h-1/6 bottom-0 bg-light-blue/40 flex justify-center items-center dark:bg-dark-white/40">
        <BsEyeFill className="w-[40px] h-[40px] text-light-brown dark:text-dark-gray" />
      </div>
      <AnimatePresence>
        {showProjectInfo && (
          <>
            <ProjectInfoMobile
              key="modal"
              project={project}
              handleShowProjectInfo={handleShowProjectInfo}
            />

            <div className="fixed bg-dark-black w-full h-full opacity-30 top-0 left-0 z-20"></div>
          </>
        )}
      </AnimatePresence>
    </article>
  );
};

export default ProjectMobile;
