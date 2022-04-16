import "./components/font.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-tsparticles";
// import particlesOptions from "./particles.json";
// import { Outlet } from "react-router-dom";
// "Outlet" renders childs route element
import Navbar from "./components/Navbar";
import SimpleMain from "./components/SimpleMain";
import ProjectContainer from "./components/ProjectContainer";
// import Main from "./components/Main";
// import Home from "./routes/home";

function App() {
  return (
    // container-fluid p-0 will remove gutters 
    <div className="container-fluid">
      <Navbar />
      <SimpleMain />
      <ProjectContainer />
      {/* <Main /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
