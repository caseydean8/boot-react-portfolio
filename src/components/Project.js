import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div id={props.id} className="project">
      <a href={props.link}>
        <img
          className="project-image"
          src={props.image}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </a>
    </div>
  );
}

export default Project;
