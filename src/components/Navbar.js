import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
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
          <ul className="navbar-nav ml-auto">
            <li
              className="nav-item"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              onClick={() => navigate("/")}
            >
              <Link className="nav-link" to="/">
                home
              </Link>
            </li>
            <li
              className="nav-item"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              onClick={() => navigate("/about")}
            >
              <Link className="nav-link" to="/about">
                about
              </Link>
            </li>
            <li
              className="nav-item"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              onClick={() => navigate("/contact")}
            >
              <Link className="nav-link" to="/contact">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
