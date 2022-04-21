import React from "react";
import "../styles/education.css";

function Education() {
  return (
    <div className="education-container">
      <div className="edu-body-container">
        <div className="education-title">
          <h1>Education</h1>
        </div>

        <div className="education-body">
          <div className="edu-left">
            <div className="edu-card">
              <h2>
                <u>DevMountain</u>
              </h2>
              <img
                className="edu-icon"
                src="https://res.cloudinary.com/redhero/image/upload/v1649837640/Donuts/original_jj95ch.png"
                alt=""
              />
            </div>
            <div className="edu-text">
              <h3>Student - Full Stack Web Developer</h3>

              <p>
                <b>Stack:</b> React, Javascript, Node.js, PostgreSQL, Express,
                REST API, HTML5, CSS3, Heroku, Git, Github
              </p>

              <p>
                <b>All Aboard:</b> First project I created for cryptocurrency
                users to find live prices for coins, get latest news both using
                API’s, and users chat on message boards
              </p>

              <p>
                <b>Local Donuts:</b> Local Donuts is a make-believe e-commerce
                donut shop. It is a full stack web application that allows users
                to create an account managed securely through Auth0, add and
                remove items from a cart, create pickup and delivery orders, and
                make card payments using the Stripe payment system.
              </p>
            </div>
          </div>
          
          <div className="edu-right">
            <div className="edu-card">
              <h2>
                <u>Bellevue University</u>
              </h2>
              <img
                className="edu-icon1"
                src="https://res.cloudinary.com/redhero/image/upload/v1649837940/Donuts/958647C2-B7F7-DFD6-6B22D08B58BE6908_rzfubu.png"
                alt=""
              />
            </div>
            <div className="edu-text">
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
