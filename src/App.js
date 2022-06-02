import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
