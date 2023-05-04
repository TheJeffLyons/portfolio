import React from 'react'
import '../styles/comingsoon.css'

function ComingSoon() {
  return (
      <div className='comingsoon-container'>
    <div className='comingsoon'>
        <div><h1>Jeff Lyons - Software Engineer</h1></div>
        <div><h2>Portfolio coming soon...</h2></div>
        <div><h2>
Thank you for visiting my website. I am excited to announce that I am currently working on a redesign to improve the user experience and showcase my skills and achievements more effectively. As a result, my website is temporarily unavailable, but I can't wait to share the new design with you soon. In the meantime, feel free to check out my LinkedIn profile for more information or to contact me. You can also use the chatbot below to send me a message. Thank you for your patience and understanding.</h2></div>
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