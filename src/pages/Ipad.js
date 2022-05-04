import React from 'react'
import '../styles/ipad.css'

function Ipad() {

  const ipadPhotoDisplayOne = 'https://res.cloudinary.com/redhero/image/upload/v1651553850/Portfolio/4901906cv11d_bqmbya.jpg'
  const ipadPhotoDisplayTwo = 'https://res.cloudinary.com/redhero/image/upload/v1651555487/Portfolio/4901906_sd_xkhhtp.jpg'
  const ipadPhotoDisplayThree = 'https://res.cloudinary.com/redhero/image/upload/c_scale,h_600,w_420/v1651611959/Portfolio/4901906cv12d_clen58.jpg'
  const ipadPhotoDisplayFour = 'https://res.cloudinary.com/redhero/image/upload/c_scale,h_600,w_420/v1651611953/Portfolio/4901906cv13d_vuah2e.jpg'

  const [ipadPhoto, setIpadPhoto] = React.useState(ipadPhotoDisplayOne)

  const displayImageOne = () => {
    setIpadPhoto(ipadPhotoDisplayOne)
  }

  const displayImageTwo = () => {
    setIpadPhoto(ipadPhotoDisplayTwo)
  }

  const displayImageThree = () => {
    setIpadPhoto(ipadPhotoDisplayThree)
  }

  const displayImageFour = () => {
    setIpadPhoto(ipadPhotoDisplayFour)
  }

  return (
    <div className='ipad-container'>

      <div className='ipad-header'>

        <div className='ipad-company-name'>
        <h1>bestestbuytech.com</h1>
        </div>

        <div className='ipad-link-container'>
        <ul className='ipad-header-links'>
          <li>Home</li>
          <br></br>
          <li>Shop</li>
          <br></br>
          <li>About</li>
          <br></br>
          <li>Contact</li>
        </ul>
        </div>

        <div className='ipad-cart-container'>
          <img className='cart-pic' alt='' src='https://res.cloudinary.com/redhero/image/upload/v1651561676/Portfolio/shopping-cart-empty-side-view_1_vupcty.png'/>
        </div>

      </div>

      <div className='ipad-product-container'>

        <div className='photo-container'>
          <div><img className='ipad-photo-display' src={ipadPhoto} alt=''/></div>
          <div className='photo-btns'>
          <button onClick={() => displayImageOne()} className='ipad-img-one'> </button>
          <button onClick={() => displayImageTwo()} className='ipad-img-two'></button>
          <button onClick={() => displayImageThree()} className='ipad-img-three'></button>
          <button onClick={() => displayImageFour()} className='ipad-img-four'></button>
          </div>
        </div>


        <div className='ipad-product-text'>
          <div>
          <span><h1>Apple iPad Mini 256GB - Space Gray</h1></span>
          <span className='ipad-price'><h1>$549.99</h1></span>
          <span><b>Model:</b> MK7T3LL/A</span>  <span><b>SKU:</b> 4901906</span>
          <br></br>
          <br></br>
          <span className='stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <span>228 Reviews</span>
          <h3>
The new iPad mini. Featuring an all-screen design with an 8.3-inch Liquid Retina display. Powerful A15 Bionic chip with Neural Engine. A 12MP Ultra Wide front camera with Center Stage. USB-C connectivity. Take notes, mark up documents, or capture your biggest ideas with Apple Pencil (2nd generation) that attaches magnetically and charges wirelessly.</h3>
        </div>
        <div className='add-to-cart-container'>
          <button className='add-to-cart-btn'>ADD TO CART</button>
        </div>
        </div>

      </div>

    </div>
  )
}

export default Ipad