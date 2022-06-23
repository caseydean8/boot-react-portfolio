// shortcut rafce
// import React from "react";
import Typed from "react-typed";

const SimpleMain = () => {
  return (
    <div className="container main">
      <h1 className="heading">let's go</h1>
      <div className="typed-container">
        <Typed
          className="typed-text"
          strings={["React", "Node", "Mongo", "MySQL", "Express", "jQuery"]}
          // startDelay={3000}
          typeSpeed={100}
          backSpeed={60}
          backDelay={2100}
          // cursorChar={}
          showCursor={false}
          loop
          // fadeOut={true}
        />
      </div>
      <h5 className="subheading">
        Welcome to the Portfolio of Casey Dean Carroll, Full Stack Developer
      </h5>
    </div>
  );
};

export default SimpleMain;
