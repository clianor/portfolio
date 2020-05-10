import React from "react";
import Scrollspy from "../Scrollspy";
import "./Skills.css";
import Language from "./Language";
import Framework from "./Framework";
import Tools from "./Tools";

const Skills = () => {
  return (
    <div className="Skills">
      <Scrollspy anchor="skills" />
      <h2>Skills</h2>

      <Language />
      <Framework />
      <Tools />
    </div>
  );
};

export default Skills;
