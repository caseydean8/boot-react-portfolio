import React from "react";

function Project(props) {
  return (
    <div id={props.id} className="project">
      <a href={props.link}>
        <img
          className="project-image"
          src={props.image}
          alt={props.alt}
          width=""
          height=""
        />
      </a>
    </div>
  );
}

export default Project;
