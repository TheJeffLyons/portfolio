import React from "react";
import "../styles/education.css";

function Education() {
  return (
    <div className="education-container">
      <div className="edu-body-container">
        <div className="education-title">
          <h1>Education</h1>
        </div>

        <div className="education-body" id="education">
          <div className="edu-left">
            <div className="edu-card1">
              <h2>
                <u>DevMountain</u>
              </h2>
              <img
                className="edu-icon"
                src="https://res.cloudinary.com/redhero/image/upload/v1649837640/Donuts/original_jj95ch.png"
                alt=""
              />
            </div>
            <div className="edu-text1">
              <h3>Student - Full Stack Web Developer</h3>

              <p>
                <b>Stack:</b> React, Javascript, Node.js, PostgreSQL, Express,
                REST API, HTML5, CSS3, Heroku, Git, Github
              </p>

              
            </div>
          </div>
          
          <div className="edu-right">
            <div className="edu-card2">
              <h2>
                <u>Bellevue University</u>
              </h2>
              <img
                className="edu-icon1"
                src="https://res.cloudinary.com/redhero/image/upload/v1649837940/Donuts/958647C2-B7F7-DFD6-6B22D08B58BE6908_rzfubu.png"
                alt=""
              />
            </div>
            <div className="edu-text2">
            <h3>Current Student - Pursuing Software Development Degree</h3>
            <p>Currently taking a course in Python</p>
            <p>Photoshop</p>
            <p>Adobe Premiere Pro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
