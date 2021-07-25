import React from 'react'

import Nav from '../Nav'
import Footer from '../Footer'
import imageOne from '../../images/wales/IMG_0001.jpg'
import imageTwo from '../../images/wales/IMG_0002.jpg'
import imageThree from '../../images/wales/IMG_0003.jpg'

function Gallery2021() {

  let walesImages = [imageOne, imageTwo, imageThree]

  const randomImage = Math.floor(Math.random() * walesImages.length)

  function changeImage() {
    setInterval(() => {
      return walesImages = walesImages[randomImage]
    }, 1000)
  }

  changeImage()
  console.log(randomImage)

  return (
    <section>
      <Nav />
      <div className="gallery-content">
        <h1 className="gallery-header">Gallery 2021 - Wales</h1>
        <h5>Slide to view gallery</h5>
          {/* <img className='hello' src={changeImage} alt='imageOne'/> */}
      </div>
      <Footer />
    </section>
  );
}

export default Gallery2021