import React from "react";
import Project from "./Project";
import "./ProjectContainer.css";
import data from "../data.js";

const ProjectContainer = () => {
  console.log(data);
  return (
    <div className="project-container row">
      {data.map((item, index) => {
        return (
          <Project
            key={index}
            id={item.id}
            image={item.image}
            link={item.link}
            width={item.width}
            height={item.height}
          />
        );
      })}
    </div>
  );
};

export default ProjectContainer;
