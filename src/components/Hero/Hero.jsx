import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className='left-h'>
        <Header/>

        {/* The best add  */}
        <div className='the-best-ad'>
          <div></div>
          <span>The best fitness club in town</span>
        </div>

        {/* Hero Heading  */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>In here we will help you shape and build your ideal body and live up your life to the fullest</span>
          </div>
        </div>

      </div>
      <div className='right-h'>Right Side</div>
    </div>
  )
}

export default Hero