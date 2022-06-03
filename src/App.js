import "./App.css";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import ProjectContainer from "./components/ProjectContainer";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Splash />
      <ProjectContainer />
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
