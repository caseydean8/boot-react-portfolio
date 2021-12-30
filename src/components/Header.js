// shortcut rafce
import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>full stack web development</h1>

        <Typed
          className="typed-text"
          strings={["react node mongo sql JS express C#"]}
          startDelay={2000}
          typeSpeed={100}
          // backSpeed={60}
          // backDelay={800}
          // cursorChar={}
          showCursor={false}
          // loop
          // fadeOut={true}
        />
      </div>
    </div>
  );
};

export default Header;

/* <svg viewBox="0 0 450 50">
  <text y="50">Scalable Title</text>
</svg> */
