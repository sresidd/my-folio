import React from 'react'
import Social from '../../common/social-contact/index'
import './about.css'

function About() {
  return (
    <div className='aobut'>
      <div className='about-top'>
        <div className='about-info'>
          Hello, I'm
          <br />
          <span className='info-name'>Siddhartha Shrestha.</span>
          <br />Game Developer. 
          <br />Game Designer. 
          <br />Digital Artist.
        </div>
        <div className='about-photo'>
          <img src={require('../../../assets/coding.png')} className='picture'/>
        </div>
      </div>
      <div className='about-bottom'>
        <Social />
      </div>
    </div>
  )
}

export default About