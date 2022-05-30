import React from "react";
import Project from "./Project";
import "./ProjectContainer.css";
import data from "../data.js";

const ProjectContainer = () => {
  return (
    <div className="project-container row">
      {data.map((item, index) => {
        return (
          <Project
            key={index}
            id={item.id}
            image={item.image}
            alt={`${item.id} image`}
            title={item.title}
            text={item.text}
            link={item.link}
            repo={item.repo}
          />
        );
      })}
    </div>
  );
};

export default ProjectContainer;
