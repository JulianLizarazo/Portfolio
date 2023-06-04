"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import projects from "../projectsAPI.json";

import ProjectMobile from "@/components/ProjectMobile";
import ProjectDesktop from "@/components/ProjectDesktop";

type ProjectsProps = {
  title: string;
  area: "frontend" | "backend";
};

const Projects = ({ title, area }: ProjectsProps) => {
  const { width } = useWindowSize();
  return (
    <section className="w-full flex flex-col justify-center mt-16">
      <h2 className="text-2xl font-bold text-center lg:text-4xl">{title}</h2>
      <section className="w-[80%] m-auto flex flex-wrap justify-center mt-16 lg:relative">
        {projects[area].map((project) => {
          return width < 1023 ? (
            <ProjectMobile key={project.name} project={project} />
          ) : (
            <ProjectDesktop
              key={project.name}
              project={project}
             
            />
          );
        })}
      </section>
    </section>
  );
};

export default Projects;
