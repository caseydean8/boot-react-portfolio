import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Outlet } from "react-router-dom";
// "Outlet" renders childs route element
import Navbar from "./components/Navbar";
import SimpleMain from "./components/SimpleMain";
import ProjectContainer from "./components/ProjectContainer";
// import Home from "./routes/home";

function App() {
  return (
    // container-fluid p-0 will remove gutters 
    <div className="container-fluid">
      <Navbar />
      <SimpleMain />
      <ProjectContainer />
    </div>
  );
}

export default App;
