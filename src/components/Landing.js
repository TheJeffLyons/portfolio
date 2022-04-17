import React from 'react'
import '../styles/landing.css'

function Landing() {
  return (
    <div className='landing-container'>
        <div>
            <h1>Check out my latest project below!</h1>
        </div>

<div className='featured-container'>
        <div>
        <h3><u>Local Donuts</u></h3>
    <p>A make-believe e-commerce donut shop. It is a full stack web application that allows users to create an account managed securely through Auth0, add and remove items from a cart, create pickup and delivery orders, and make card payments using the Stripe payment system. Hosted on Heroku.</p>
    <h3><u>Tech</u></h3>
    <p>React, Javascript, Node.js, PostgreSQL, Express, Auth0, Stripe Payments, HTML5, CSS3</p>
        </div>

        <div>
    <iframe className='youtube-video' width="500" height="350" src="https://www.youtube.com/embed/r9R_IJ1w_FU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>

        </div>

    </div>
  )
}

export default Landing