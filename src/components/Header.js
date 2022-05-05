import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div className="header-container" id="header">
      <a href="#about" className="header-link">
        <p>About</p>
      </a>
      <br></br>
      <a href="#education" className="header-link">
        <p>Education</p>
      </a>
      <br></br>
      <a href="#landing" className="header-link">
        <p>Portfolio</p>
      </a>
      <br></br>
      <a href="#contact" className="header-link">
        <p>Contact</p>
      </a>
    </div>
  );
}

export default Header;
