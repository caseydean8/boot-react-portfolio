import React from "react";
import Project from "./Project";
import "./ProjectContainer.css";
import data from "../data.js";

const ProjectContainer = () => {
  console.log(data[0]);
  return (
    <div className="project-container">
      <Project
        id={data[0].id}
        image={data[0].image}
        link={data[0].link}
        width={data[0].width}
        height={data[0].height}
      />
    </div>
  );
};

export default ProjectContainer;
