import React from "react";
// import style from "./Layout.module.css";
import PropTypes from "prop-types";
import "../App.css";

export default function Layout({ header, main, footer }) {
  return (
    <div className="Container">
      <header>{header}</header>
      <main>{main}</main>
      <footer>{footer}</footer>
    </div>
  );
}

Layout.propTypes = {
  main: PropTypes.element.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
};
