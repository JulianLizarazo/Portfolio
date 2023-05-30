"use client";

import projects from "../projectsAPI.json";

import ProjectImage from "@/components/ProjectImage";

type ProjectsProps = {
  title: string;
};

const Projects = ({ title }: ProjectsProps) => {
  return (
    <section className="w-full flex flex-col justify-center mt-16">
      <h2 className="text-2xl font-bold text-center lg:text-4xl">{title}</h2>
      <section className="w-[80%]">
        {projects.frontend.map((project) => {
          return (
            <article key={project.name} className="w-full h-28">
              <ProjectImage
                imageUrl={project.name}
                className="w-20 h-20"
                alt={project.images.alt}
              />
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Projects;
