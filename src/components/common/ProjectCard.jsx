import React from "react";
import { getRandomColor } from "../../utils";

function ProjectCard({ img, title, details, skills, githubLink, demoLink }) {
  return (
    <div className="flex flex-col border md:flex-row gap-4 rounded-lg overflow-hidden shadow-lg mx-8 my-4">
      <img
        src={img}
        className="max-w-full md:max-w-[50%] rounded-lg"
        alt={`${title} example image`}
      />
      <div className="flex flex-col p-3">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{details}</p>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => {
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
            href={githubLink}
          >
            Live Demo
          </a>
          <a
            className="flex justify-center flex-wrap gap-1 font-semibold hover:underline underline-offset-4 mt-auto text-center px-4 py-2"
            href={githubLink}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
