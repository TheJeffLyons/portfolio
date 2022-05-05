import React from "react";
import "../styles/home.css";
import Header from "./Header";

function Home() {
  return (
    <div className="home-container">
      <div className="home-banner">
        <Header />
        <div className="banner-container">
          <div className="avatar-container">
            <img
              className="avatar"
              src="https://res.cloudinary.com/redhero/image/upload/v1651095087/Portfolio/avatar_izcjci.png"
              alt=""
            />
          </div>
          <div className="banner-text">
            <h1 className="banner-text-one">"Hi, I'm Jeff Lyons." </h1>
            <h2 className="banner-text-two">
              "I'm a Full-Stack Web Developer who enjoys Front-End Development,
              and creating awesome user experiences."
            </h2>
            <div className="banner-buttons-container">
              <a
                className="banner-link"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/TheJeffLyons"
              >
                <img
                  className="banner-icons"
                  src="https://res.cloudinary.com/redhero/image/upload/v1649823150/Donuts/github_c6dcvt.png"
                  alt=""
                />
              </a>

              <a
                className="resume-button"
                rel="noopener noreferrer"
                target="_blank"
                href="https://docs.google.com/document/d/1wqVjjmi7OiCiGTX84reWLHtHZHv2wRIURqr33gh0O_Y/edit?usp=sharing"
              >
                <span className="resume-text">R&#xe9;sum&#xe9;</span>
              </a>

              <a
                className="banner-link"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/jeff-lyons-710584233"
              >
                <img
                  className="banner-icons"
                  src="https://res.cloudinary.com/redhero/image/upload/v1650182144/Donuts/104493_linkedin_icon_rhilcq.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
