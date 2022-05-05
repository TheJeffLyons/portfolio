import React from "react";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Landing from "../components/Landing";
import Home from "../components/Home";
import "../App.css";

function Main() {
  return (
    <div className="app-container">
      <div>
        <Home />
        <Landing />
        <Education />
        <AboutMe />
      </div>

      <div></div>
    </div>
  );
}

export default Main;
