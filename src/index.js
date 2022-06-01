import { render } from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import Contact from "./routes/Contact";
const rootElement = document.getElementById("root");

render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </HashRouter>,
  rootElement
);
