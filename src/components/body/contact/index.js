import React from 'react'
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact'
import './contact.css'

function Contact() {
  return (
    <div className='contact'>
      <Separator />
      <label className='section-title'>
        Contact
      </label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p className='contact-left-desc'>
            Want to get in touch? Contact me on any of the platform
          </p>
          <SocialContact />
        </div>
        <div className='download'>
          <a href='https://rxresu.me/r/csybK2SJ'>
          <i class="fi fi-rr-download"> </i>
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact