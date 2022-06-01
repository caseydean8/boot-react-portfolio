import React from "react";
import "../App.css";
import Layout from "../components/Layout";
// import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Portfolio = () => {
  return (
    // <h1>Portfolio</h1>
    <Layout
      header={<Navbar />}
      main={
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="images/ahoy.jpg"
                alt="First slide"
              ></img>
              <div class="carousel-caption">
                <h5>Ahoy</h5>
                <p>...</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="images/hippies.jpg"
                alt="Second slide"
              ></img>
              <div class="carousel-caption">
                <h5>Crystal Persuasion</h5>
                <p>...</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="images/Submarine.png"
                alt="Third slide"
              ></img>
              <div class="carousel-caption">
                <h5>Submarine</h5>
                <p>...</p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      }
    />
  );
};

export default Portfolio;
