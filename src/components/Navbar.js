import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <li className="nav-item">
              <Link className="nav-link" to="/">
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Alternate dropdown menu */}
        {/* <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-target="#dropdown-links"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/">
                about
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                contact
              </Link>
            </li>
          </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
