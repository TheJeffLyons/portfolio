import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <div className="header-container">
      <img
        className="profile-pic"
        src="https://res.cloudinary.com/redhero/image/upload/v1649819797/Donuts/11IMG_2794_lqemay.jpg"
        alt=""
      />
      <ul>
        <Link className="header-link" to="/">
          <li>Home</li>
        </Link>
        <br></br>

        <Link className="header-link" to="/aboutme">
          <li>About Me</li>
        </Link>
        <br></br>

        <Link className="header-link" to="/education">
          <li>Education</li>
        </Link>
        <br></br>

        <Link className="header-link" to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <br></br>

        <Link className="header-link" to="/contact">
          <li>Contact</li>
        </Link>
        <br></br>
      </ul>
    </div>
  );
}

export default Header;
