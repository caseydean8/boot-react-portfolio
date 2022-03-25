// import React from "react";
import "./Navbar.css";
import {
  //moved Outlet to App.js
  // Outlet,
  Link,
} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        {/* <Link className="navbar-brand" to="">
          <img src={logo} className="logo" alt="logo" />
        </Link> */}
        <h1 id="cdc">
          Casey Dean <br></br>Carroll
        </h1>
        {/* <h2>Full Stack Web Development</h2> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span></span>
          <span></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                contact
              </Link>
            </li>
          </ul>
          {/* <Button>Portfolio</Button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
