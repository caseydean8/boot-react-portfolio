import React from "react";
import ReactDom from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import Contact from "./routes/Contact";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </HashRouter>
);
