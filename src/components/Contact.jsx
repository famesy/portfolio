import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section id="contacts" className="mb-8">
      <ul className="flex gap-8 justify-center items-center">
        <li className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/kittitouch-lelapiyamit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="mr-1" icon={faLinkedin} size="xl" />
            <span className="hidden lg:inline">LinkedIn</span>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a
            href="https://github.com/famesy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="mr-1" icon={faGithub} size="xl" />
            <span className="hidden lg:inline">Github</span>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a href="mailto:kittitouch.fame@gmail.com">
            <FontAwesomeIcon className="mr-1" icon={faEnvelope} size="xl" />
            <span className="hidden lg:inline">kittitouch.fame@gmail.com</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
