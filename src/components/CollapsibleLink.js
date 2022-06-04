import React from "react";
import { useNavigate, Link } from "react-router-dom";

const CollapsibleLink = (props) => {
  const navigate = useNavigate();

  return (
    <li
      className="nav-item"
      onClick={() => navigate(props.url)}
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
    >
      <Link className="nav-link"to={props.url} >{props.page}</Link>
    </li>
  );
};

export default CollapsibleLink;
