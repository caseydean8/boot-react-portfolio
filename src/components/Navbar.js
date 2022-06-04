import React from "react";
import "./Navbar.css";
import CollapsibleLink from "./CollapsibleLink";

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
            <CollapsibleLink url={"/"} page={"home"} />
            <CollapsibleLink url={"/about"} page={"about"} />
            <CollapsibleLink url={"/contact"} page={"contact"} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
