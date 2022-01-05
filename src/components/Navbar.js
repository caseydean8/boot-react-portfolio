import React from "react";
import logo from "../logo3.png";
import {
  //moved Outlet to App.js
  // Outlet,
  Link,
} from "react-router-dom";
// clean up: shift+option f
// React fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      .
      <div className="container">
        <Link className="navbar-brand" to="">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
              <Link className="nav-link" to="portfolio">
                Portfolio
              </Link>
            </li>
          </ul>
          <Button>Portfolio</Button>
          {/* <button type="button" class="btn btn-light">Light</button> */}
          {/* <Button variant="light">Light</Button> */}
         
          {/* <Button /> */}
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
        </div>
        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
