import React from "react";
import Project from "./Project";
import Submarine from "../images/Submarine.png";

const ProjectContainer = (props) => {
  return (
    <div className="project-container">
      <Project id={"#"} image={Submarine} />
    </div>
  );
};

export default ProjectContainer;
