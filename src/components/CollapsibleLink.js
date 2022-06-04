import React from "react";
import { useNavigate } from "react-router-dom";

const CollapsibleLink = (props) => {
  const navigate = useNavigate();

  return (
    <li
      className="nav-item"
      onClick={() => navigate(props.url)}
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
    >
      <div className="nav-link">{props.page}</div>
    </li>
  );
};

export default CollapsibleLink;
