import React from "react";
import "../styles/biocard.css";
import Contact from "./Contact";

function BioCard() {
  return (
    <div className="bio-container">
      <img
        className="bio-photo"
        src="https://res.cloudinary.com/redhero/image/upload/v1649830372/Donuts/avatar_n7lkw8.jpg"
        alt=""
      />
      <br></br>
      <span className="bio-name">Jeff Lyons</span>
      <br></br>

      <Contact />
    </div>
  );
}

export default BioCard;
