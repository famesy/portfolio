import React from "react";
import { getRandomColor, getImageURL } from "../utils";
import placeHolder from '../assets/project-place-holder.jpg'

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
      <div
        className="flex flex-col md:flex-row gap-4 p-4 rounded-lg shadow-lg mx-8 my-4"
        key={project.id}
      >
        <img
          src={project.img}
          className="max-w-full md:max-w-[50%] rounded-lg"
          alt={`${project.name} example image`}
        />
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
          <p className="mb-4">{project.details}</p>
          <ul className="flex flex-wrap gap-3">
            {project.skillsUsed.map((skill) => {
              return (
                <li
                  className="px-2 py-1 rounded-md font-semibold"
                  style={{
                    backgroundColor: getRandomColor(),
                  }}
                  key={skill}
                >
                  {skill}
                </li>
              );
            })}
          </ul>
          <div className="flex mt-auto justify-center">
            <a
              className="font-semibold hover:underline underline-offset-4 mt-auto text-center px-4 py-2"
              href={project.githubLink}
            >
              Live Demo
            </a>
            <a
              className="flex justify-center flex-wrap gap-1 font-semibold hover:underline underline-offset-4 mt-auto text-center px-4 py-2"
              href={project.githubLink}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
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
