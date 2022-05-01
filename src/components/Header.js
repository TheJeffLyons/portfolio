import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div className="header-container">
      
      {/* <Link className="header-link" to="/">
        <p>Home</p>
      </Link>
      <br></br> */}

      {/* <Link className="header-link" to="/aboutme">
        <p>About</p>
      </Link>
      <br></br> */}
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
      <br></br>

      {/* <Link className="header-link" to="/portfolio">
        <p>Portfolio</p>
      </Link>
      <br></br> */}

      {/* <a
        className="header-link"
        rel="noopener noreferrer"
        target="_blank"
        href="https://docs.google.com/document/d/1wqVjjmi7OiCiGTX84reWLHtHZHv2wRIURqr33gh0O_Y/edit?usp=sharing"
      >
        <p>R&#xe9;sum&#xe9;</p>
      </a>
      <br></br> */}

      {/* <a
        className="header-link"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/TheJeffLyons"
      >
        <p>Github</p>
      </a>
      <br></br> */}

      {/* <a
        className="header-link"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/jeff-lyons-710584233"
      >
        <p>LinkedIn</p>
      </a> */}
      <br></br>
    </div>
  );
}

export default Header;
