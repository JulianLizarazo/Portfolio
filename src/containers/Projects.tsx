"use client";

import projects from "../projectsAPI.json";

import Project from "@/components/Project";

type ProjectsProps = {
  title: string;
 
};

const Projects = ({ title}: ProjectsProps) => {
  return (
    <section className="w-full flex flex-col justify-center mt-16">
      <h2 className="text-2xl font-bold text-center lg:text-4xl">{title}</h2>
      <section className="w-[80%] m-auto flex flex-wrap justify-center">
        {projects.frontend.map((project) => (
          <Project key={project.name} project={project}/>
        ))}
      </section>
    </section>
  );
};

export default Projects;
