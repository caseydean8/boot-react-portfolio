// shortcut rafce
import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>full stack web development</h1>
        {/* <svg viewBox="0 0 450 50">
        <text y="50">full stack web development</text>
        </svg> */}
        <Typed
          className="typed-text"
          strings={["full", "stack", "web", "development"]}
        />
      </div>
    </div>
  );
};

export default Header;

/* <svg viewBox="0 0 450 50">
  <text y="50">Scalable Title</text>
</svg> */
