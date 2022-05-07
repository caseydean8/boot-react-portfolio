import React from "react";
import "./Project.css";
// need to add project modal, for description and github repository links
import ProjectModal from "./ProjectModal";

function Project(props) {
  return (
    <div id={props.id} className="project col-md-6 col-lg-4 p-0">
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img
          className="project-image"
          src={props.image}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </button>
      <ProjectModal />
    </div>
  );
}

export default Project;
