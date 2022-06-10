import { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const navigate = useNavigate();
  const activeStyle = {
    color: "#00b4e2",
  };
  const urls = [
    ["/", "home"],
    ["/about", "about"],
    ["/contact", "contact"],
  ];
  let routes = [];
  urls.forEach((route, index) => {
    isDesktop
      ? routes.push(
          <li key={index} className="nav-item">
            <NavLink
              className="nav-link"
              to={route[0]}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              {route[1]}
            </NavLink>
          </li>
        )
      : routes.push(
          <li
            key={index}
            className="nav-item"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            onClick={() => navigate(route[0])}
          >
            <NavLink
              className="nav-link"
              to={route[0]}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              {route[1]}
            </NavLink>
          </li>
        );
  });

  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-light">
      <div className="container">
        <h2 id="cdc">Casey Dean Carroll</h2>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">{routes}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
