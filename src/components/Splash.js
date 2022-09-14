import Typed from "react-typed";

const Splash = () => {
  return (
    <div className="container p-3 mx-auto mt-5 mb-4">
      <h1 className="heading">let's go</h1>
      <div className="mb-3">
        <Typed
          className="typed-text"
          strings={["React", "Node", "Mongo", "MySQL", "Express", "jQuery"]}
          typeSpeed={100}
          backSpeed={60}
          backDelay={2100}
          showCursor={false}
          loop
        />
      </div>
      <h5 className="subheading">
        Welcome to the Portfolio of Casey Dean Carroll, Full Stack Developer
      </h5>
    </div>
  );
};

export default Splash;
