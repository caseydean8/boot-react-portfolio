import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="pt-4">
        <div className="container-fluid px-4">
          <div className="row text-center">
            <ul className="social-icons">
              <li>
                <a
                  href="https://github.com/caseydean8"
                  aria-label="Casey Carroll github page"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/caseydean8/"
                  aria-label="Casey Carroll linkedin page"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="mailto:caseydean8@gmail.com" aria-label="send email">
                  <IoMailOutline />
                </a>
              </li>
            </ul>
          </div>
          <div className="row pb-5">
            <div className="copyright text-center">
              <p>
                <small>Copyright 2023. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
