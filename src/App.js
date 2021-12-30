import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from "react-tsparticles";
// import particlesOptions from "./particles.json";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Header />
    </div>
  );
}

export default App;
