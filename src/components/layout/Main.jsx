import React from "react";
import Hero from "../Hero";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";

const Main = () => {
  return (
    <main className="container mx-auto max-w-screen-md">
      <Hero />
      <Contact />
      <Skills />
      <Projects />
    </main>
  );
};

export default Main;
