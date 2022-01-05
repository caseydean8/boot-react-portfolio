import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-tsparticles";
// import particlesOptions from "./particles.json";
import { Outlet } from "react-router-dom";
// "Outlet" renders childs route element
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import Home from "./routes/home";


function App() {
  return (
    <div>
      <Navbar />
      {/* <Outlet /> */}
      <Main />
      {/* <Home /> */}
    </div>
  );
}

export default App;
