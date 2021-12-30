import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-tsparticles";
// import particlesOptions from "./particles.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* <Particles 
      // options={particlesOptions}
        params={{
          // fpsLimit: 60,
          background: {
            color: {
              value: "#000",
            },
          },
          particles: {
            number: {
              value: 11,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            size: {
              value: 10,
              random: true,
            },
            move: {
              direction: "bottom",
              outMode: "out",
            },
            links: {
              enable: true,
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "remove",
                },
              },
              modes: {
                remove: {
                  quantity: 10,
                },
              },
            },
          },
        }}
      /> */}
      <Navbar />
      <Header /> 
    </>
  );
}

export default App;
