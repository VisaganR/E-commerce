import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "D:/frontend/React_E-Commerce/src/carouselStyles.css"; // Make sure to import your updated CSS here

const Home = () => {
  
  return (
    <div className="hero border-1 pb-3">
      <div className="card bg-dark text-white border-0 mx-3">
        <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="./assets/main1.jpg" alt="Slide 1" height={500} />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./assets/main2.jpg" alt="Slide 2" height={500} />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./assets/main3.jpg" alt="Slide 3" height={500} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
