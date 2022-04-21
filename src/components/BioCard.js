import React from 'react'
import '../styles/biocard.css'
import Contact from './Contact'
import OpenToWork from './OpenToWork'

function BioCard() {
  return (
    <div className='bio-container'>
        <img className='bio-photo' src='https://res.cloudinary.com/redhero/image/upload/v1649830372/Donuts/avatar_n7lkw8.jpg' />
        <br></br>
    <span className='bio-name'>Jeff Lyons</span>

    <OpenToWork/>
    
    <Contact/>
    </div>
  )
}

export default BioCard
