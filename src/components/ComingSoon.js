import React from 'react'
import '../styles/comingsoon.css'

function ComingSoon() {
  return (
      <div className='comingsoon-container'>
    <div className='comingsoon'>
        <div><h1>Jeff Lyons - Software Engineer</h1></div>
        <div><h2>Portfolio coming soon...</h2></div>
        <div><h2>Thank you for stopping by. I am currently in the process of updating and will have it up soon. Please see my LinkedIn for more information or to contact me; you can also message me in the chatbot down below.</h2></div>
        <div className='soon-icons'>      
            
            <div>
            <a
                className="banner-link"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/jeff-lyons-710584233"
              >
                <img
                  className="banner-icons"
                  src="https://res.cloudinary.com/redhero/image/upload/v1650182144/Donuts/104493_linkedin_icon_rhilcq.png"
                  alt=""
                />
              </a>
              </div>
              <div>
              <a
                className="banner-link"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/TheJeffLyons"
              >
                <img
                  className="banner-icons"
                  src="https://res.cloudinary.com/redhero/image/upload/v1649823150/Donuts/github_c6dcvt.png"
                  alt=""
                />
              </a>
              </div>
              </div>
    </div>
    </div>
  )
}

export default ComingSoon