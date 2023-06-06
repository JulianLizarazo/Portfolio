import { IProjectsAPI } from "@/interfaces/ProjectsAPI";
import ProjectImage from "./ProjectImage";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsEyeFill } from "react-icons/bs";
import ProjectInfoDesktop from "./ProjectInfoDesktop/ProjectInfoDesktop";

type ProjectMobileProps = {
  project: IProjectsAPI;
};

const ProjectDesktop = ({ project }: ProjectMobileProps) => {
  const [showProjectInfo, setShowProjectInfo] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const hoverVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
  };

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.article
      className="w-[50%] flex relative cursor-pointer"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={() => {
        setShowProjectInfo(!showProjectInfo);
        handleHoverEnd();
      }}
    >
      <ProjectImage
        imageUrl={project.name}
        className=""
        alt={project.images.alt}
      />
      <motion.div
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        variants={hoverVariants}
        className="bg-dark-black absolute w-full h-full top-0 left-0 flex justify-center items-center"
      >
        <BsEyeFill className="w-1/4 h-1/4 text-dark-white" />
      </motion.div>
      <AnimatePresence>
        {showProjectInfo && (
          <>
            <ProjectInfoDesktop
              key="modal"
              project={project}
              handleShowProjectInfo={setShowProjectInfo}
            />

            <div className="fixed bg-dark-black w-full h-full opacity-30 top-0 left-0  z-[5]"></div>
          </>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default ProjectDesktop;
