import React from "react";

const Header = () => {
  return (
    <header className="container max-w-screen-md mx-auto flex p-8">
      <nav className="ml-auto flex gap-4">
        <li>
          <a
            className="text-xl hover:underline underline-offset-8 "
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="text-xl hover:underline underline-offset-8"
            href="#contacts"
          >
            Contact
          </a>
        </li>
      </nav>
    </header>
  );
};

export default Header;
