import React from "react";
import "../styles/aboutme.css";
import Contact from "./Contact";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-body" id="about">
        <div className="about-me-title">
          <h1>Let's Connect</h1>
        </div>

        <div className="about-me-box">
          <div className="text-container">
            <h1 className="about-title">About me</h1>
            <p className="about-text">
              My name is Jeff Lyons, and I currently reside in Pittsburgh,
              Pennsylvania. I am a US Army veteran (2008-2013) and I spent 10
              years working as an electronics technician and mechanical
              technician before making a change to Web Development. My coding
              journey began at Dev Mountain, where I completed an intense course
              and professional training, to gain the necessary skills to become
              a full stack web developer. I am also pursuing a Software
              Development degree, at Bellevue University. I take pride in being
              a fast learner and I can adapt to any situation. The analytical
              thinking skills I gained as an electronics and mechanical tech
              helps when it comes to coding because reading and writing code is
              like reading and writing electrical diagrams as they both require
              detailed problem-solving skills and critical thinking.
            </p>
            {/* <p>
              I have an amazing wife and two awesome children, a 5-year-old son
              and 4-year-old daughter, who I couldn’t live without. I am a huge
              football fan, and I enjoy participating in a fantasy football
              league with some of my closest friends (3X champ out of 8
              seasons). Video games are my kryptonite, they get my blood flowing
              and keep me up late at night. If you need some friendly
              competition, I am always ready to pick up the sticks and game.
              Rocket League and Apex Legends are my go-to.
            </p> */}
          </div>
          
          <div className="contact-container">
          <Contact/>
          </div>
          {/* <div className="about-photos">
            <img
              className="my-photos"
              src="https://res.cloudinary.com/redhero/image/upload/v1649833955/Donuts/picanime_moz6uw.jpg"
              alt=""
            />
            <img
              className="my-photos"
              src="https://res.cloudinary.com/redhero/image/upload/v1649833955/Donuts/newIMG_2333_vhcqwz.jpg"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
