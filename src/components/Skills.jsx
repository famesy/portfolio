import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faGit,
  faGithub,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <section id="skills" className="font-semibold mb-8">
      <h2 className="text-2xl mb-8 text-center lg:text-start">My Skills</h2>
      <div>
        <ul className="flex flex-wrap justify-center gap-x-14 gap-y-6">
          <li className="flex justify-items-center items-center gap-1">
            <FontAwesomeIcon icon={faHtml5} size="xl" />
            <p className="text-md">HTML</p>
          </li>
          <li className="flex justify-items-center items-center gap-1">
            <FontAwesomeIcon icon={faCss3Alt} size="xl" />
            <p className="text-md">CSS</p>
          </li>
          <li className="flex justify-items-center items-center gap-1">
            <FontAwesomeIcon icon={faJs} size="xl" />
            <p className="text-md">JavaScript</p>
          </li>
          <li className="flex justify-items-center items-center gap-1">
            <FontAwesomeIcon icon={faReact} size="xl" />
            <p className="text-md">React</p>
          </li>
          <li className="flex justify-items-center items-center gap-1">
            <FontAwesomeIcon icon={faNodeJs} size="xl" />
            <p className="text-md">Node.js</p>
          </li>
          <li className="flex justify-items-center items-center gap-1">
            <FontAwesomeIcon icon={faPython} size="xl" />
            <p className="text-md">Python</p>
          </li>
          <li className="flex justify-items-center items-center gap-1">
            <FontAwesomeIcon icon={faDatabase} size="xl" />
            <p className="text-md">SQL</p>
          </li>
          <li className="flex justify-items-center items-center gap-1">
            <FontAwesomeIcon icon={faGit} size="xl" />
            <p className="text-md">Git</p>
          </li>
          <li className="flex justify-items-center items-center gap-1">
            <FontAwesomeIcon icon={faGithub} size="xl" />
            <p className="text-md">GitHub</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
