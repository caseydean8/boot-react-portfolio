// shortcut rafce
import React from "react";
import Typed from "react-typed";

const SimpleMain = () => {
  return (
    <div className="simple-main-wrapper container">
      <h1>
        Hello{" "}
        <Typed
          className="typed-text"
          strings={["React", "Node", "Mongo", "SQL", "Express"]}
          // startDelay={3000}
          typeSpeed={100}
          backSpeed={60}
          backDelay={2500}
          // cursorChar={}
          showCursor={false}
          loop
          // fadeOut={true}
        />
      </h1>
      <h5>
        Welcome to the folio of Casey Dean Carroll, Full Stack Web Developer
      </h5>
    </div>
  );
};

export default SimpleMain;
