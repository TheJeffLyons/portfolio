import React from "react";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="landing-container" >
      <div>
        <h1 className="landing-title">&#8681; Have a look at my most recent projects below &#8681;</h1>
      </div>

      <div className="featured-container" id="landing">
      <div className="video-container">
          <iframe
            className="youtube-video"
            width="600"
            height="500"
            src="https://www.youtube.com/embed/r9R_IJ1w_FU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="landing-text">
        
          <span className="title">
            Local Donuts
          </span>
          <br></br>
          <span className="landing-p">
            A make-believe e-commerce donut shop. It is a full stack web
            application that allows users to create an account managed securely
            through Auth0, add and remove items from a cart, create pickup and
            delivery orders, and make card payments using the Stripe payment
            system. Hosted on Heroku.
          </span>
      <br></br>
      <br></br>
          <span className="title">
            Tech
          </span>
          <br></br>
          <span className="landing-p">
            React, Javascript, Node.js, PostgreSQL, Express, Auth0, Stripe
            Payments, HTML5, CSS3
          </span>

          <div className="project-links">
                <a
                  className="card-link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/TheJeffLyons/Local-Donuts-Capstone"
                >
                  <span>Github</span>
                </a>
                <a
                  className="card-link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://local-donuts.herokuapp.com/"
                >
                  <span>View Website</span>
                </a>
              </div>

        </div>
         </div>

         <div className="featured-container">
      <div className="video-container">
      <iframe
                className="youtube-video"
                width="600"
                height="500"
                src="https://www.youtube.com/embed/13JFfBdFNcM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> 
        </div>
        <div className="landing-text">
        
          <span className="title">
          All Aboard!
          </span>
          <br></br>
          <span className="landing-p">
          It is a social media platform for people in the
                cryptocurrency community. Users can go and chat in discussion
                boards, get live updated cryptocurrency prices, and updated news
                related to cryptocurrency.
          </span>
      <br></br>
      <br></br>
          <span className="title">
            Tech
          </span>
          <br></br>
          <span className="landing-p">
          Javascript, Node.js, Express, HTML5, CSS3, JSON, BCRYPT,
                CoinGecko API, NewsData.io API
          </span>

          <div className="project-links">
                <a
                  className="card-link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/TheJeffLyons/foundations-capstone"
                >
                  <span>Github</span>
                </a>
              </div>
              
        </div>
         </div>

    </div>
  );
}

export default Landing;

