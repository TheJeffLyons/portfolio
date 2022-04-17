import React from 'react'
import Header from './Header'
import '../styles/portfolio.css'

function Portfolio() {
  return (
    <div className='port-container'>

    {/* <div className="top-left">
     <Header />
   </div> */}

   <div className='port-body'>

<div className='port-title'>
   <h1>Portfolio</h1>
</div>

<div className='port-photos'>

<div className='project-card'>
    <div className='project-data'>
    <h3><u>Local Donuts</u></h3>
    <p>A make-believe e-commerce donut shop. It is a full stack web application that allows users to create an account managed securely through Auth0, add and remove items from a cart, create pickup and delivery orders, and make card payments using the Stripe payment system. Hosted on Heroku.</p>
    <h3><u>Tech</u></h3>
    <p>React, Javascript, Node.js, PostgreSQL, Express, Auth0, Stripe Payments, HTML5, CSS3</p>
    <div className='project-links'>
    <a className='card-link' rel='noopener noreferrer' target='_blank' href='https://github.com/TheJeffLyons/Local-Donuts-Capstone'><span>Github</span></a>
    <a className='card-link' rel='noopener noreferrer' target='_blank' href='https://local-donuts.herokuapp.com/'><span>View Website</span></a>
    </div>
    </div>
    <div>
    <iframe className='port-youtube-video' width="400" height="250" src="https://www.youtube.com/embed/r9R_IJ1w_FU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
</div>

<br></br>

<div className='project-card'>
    <div className='project-data'>
    <h3><u>All Aboard!</u></h3>
    <p>This is the very first project that I have ever created. It is a type of social media platform for people in the cryptocurrency community. Users can go and chat in discussion boards, get live updated cryptocurrency prices, and updated news related to cryptocurrency.</p>
    <h3><u>Tech</u></h3>
    <p>Javascript, Node.js, Express, HTML5, CSS3, JSON, BCRYPT, CoinGecko API, NewsData.io API</p>
    <div className='project-links'>
    <a className='card-link' rel='noopener noreferrer' target='_blank' href='https://github.com/TheJeffLyons/foundations-capstone'><span>Github</span></a>
    </div>
    </div>
    <div>
    <iframe className='port-youtube-video' width="400" height="250" src="https://www.youtube.com/embed/13JFfBdFNcM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
</div>


</div>
</div>

</div>
  )
}

export default Portfolio