import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-title">
        <h1>
          <span className="myName">
            <u>Jeff Lyons</u>
          </span>{" "}
          &#8594; Full Stack Web Developer
        </h1>
        <p></p>
      </div>

      <div className="home-icon-container">
        <div className="home-card">
          <Link to="/">
            <img
              className="home-icon"
              src="https://res.cloudinary.com/redhero/image/upload/v1650183655/Donuts/home_ps2act.png"
              alt=""
            />
          </Link>
          <span className="home-tag">Home</span>
        </div>

        <div className="home-card">
          <Link to="/aboutme">
            <img
              className="home-icon"
              src="https://res.cloudinary.com/redhero/image/upload/v1649830372/Donuts/avatar_n7lkw8.jpg"
              alt=""
            />
          </Link>
          <span className="home-tag">About Me</span>
        </div>

        <div className="home-card">
          <Link to="/portfolio">
            <img
              className="home-icon"
              src="https://res.cloudinary.com/redhero/image/upload/v1649829418/Donuts/portfolio_mmce9s.png"
              alt=""
            />
          </Link>
          <span className="home-tag">Portfolio</span>
        </div>

        <div className="home-card">
          <Link to="/education">
            <img
              className="home-icon"
              src="https://res.cloudinary.com/redhero/image/upload/v1649829418/Donuts/open-book_i786ji.png"
              alt=""
            />
          </Link>
          <span className="home-tag">Education</span>
        </div>

        <div className="home-card">
          <Link to="/contact">
            <img
              className="home-icon"
              src="https://res.cloudinary.com/redhero/image/upload/v1649829418/Donuts/contact_wgvl6a.png"
              alt=""
            />
          </Link>
          <span className="home-tag">Contact</span>
        </div>

        <div className="home-card">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.google.com/document/d/1wqVjjmi7OiCiGTX84reWLHtHZHv2wRIURqr33gh0O_Y/edit?usp=sharing"
          >
            <img
              className="home-icon"
              src="https://res.cloudinary.com/redhero/image/upload/v1650182251/Donuts/cv_ysjpta.png"
              alt=""
            />
          </a>
          <span className="home-tag">R&#xe9;sum&#xe9;</span>
        </div>

        <div className="home-card">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jeff-lyons-710584233"
          >
            <img
              className="home-icon"
              src="https://res.cloudinary.com/redhero/image/upload/v1650182144/Donuts/104493_linkedin_icon_rhilcq.png"
              alt=""
            />
          </a>
          <span className="home-tag">LinkedIn</span>
        </div>

        <div className="home-card">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/TheJeffLyons"
          >
            <img
              className="home-icon"
              src="https://res.cloudinary.com/redhero/image/upload/v1649823150/Donuts/github_c6dcvt.png"
              alt=""
            />
          </a>
          <span className="home-tag">Github</span>
        </div>
      </div>


    </div>
  );
}

export default Home;
