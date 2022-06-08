import React from "react";
import Typed from "react-typed";

export default function About() {
  return (
    <div className="form-container container">
      <Typed
        className="contact-header"
        strings={["about"]}
        typeSpeed={100}
        showCursor={false}
      />
      <p>
        I build dynamic user experiences and robust applications for any of your
        web development needs, utilizing the most cutting edge technologies and
        frameworks as well as classic web architectures when necessary to bring
        your project to life. From div to database to deployed, I've got you
        covered.
      </p>
    </div>
  );
}
