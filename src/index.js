// Don't forget brackets for import variables or . . .
// TypeError: react_dom__WEBPACK_IMPORTED_MODULE_1___default(...) is not a function

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/home";
import About from "./routes/about";
import Portfolio from "./routes/portfolio";
const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      {/* yyp to duplicate line in vim normal mode*/}
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      {/* </Route> */}
    </Routes>
  </BrowserRouter>,
  rootElement
);
