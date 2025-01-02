import React from "react";
import ProjectCard from "./common/ProjectCard";
import placeHolder from "../assets/project-place-holder.jpg";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    details:
      "A portfolio website showcasing my projects and skills, with responsive design. I'll enhance it later with a vibrant color palette!",
    skillsUsed: ["React", "Tailwind CSS"],
    img: placeHolder,
    githubLink: "https://github.com/famesy/portfolio",
    demoLink: "https://famesy.github.io/portfolio/",
  },
  {
    id: 2,
    name: "E-commerce Platform",
    details:
      "An e-commerce platform with user authentication and payment integration.",
    skillsUsed: ["Node.js", "Express", "MongoDB", "React"],
    img: placeHolder,
    githubLink: "https://github.com/famesy/portfolio",
    demoLink: "https://famesy.github.io/portfolio/",
  },
  {
    id: 3,
    name: "Blog Application",
    details:
      "A blog application with CRUD functionality and user authentication.",
    skillsUsed: ["Python", "Django", "SQLite"],
    img: placeHolder,
    githubLink: "https://github.com/famesy/portfolio",
    demoLink: "https://famesy.github.io/portfolio/",
  },
];

function Projects() {
  const projectList = projects.map((project) => {
    return (
      <ProjectCard
        img={project.img}
        title={project.name}
        details={project.details}
        skills={project.skillsUsed}
        githubLink={project.githubLink}
        demoLink={project.demoLink}
      />
    );
  });

  return (
    <section id="projects" className="mb-8">
      <h2 className="text-2xl font-semibold mb-8 text-center lg:text-start">
        Projects
      </h2>
      {projectList}
    </section>
  );
}

export default Projects;
