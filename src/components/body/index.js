import React from 'react'
import About from './about/index'
import './body.css'
import Contact from './contact/index'
import Project from './projects/index'
import Skill from './skills/index'
import Work from './work/index'

function Body() {
  return (
    <div className='body'>
      <section id='about'>
        <About /> 
      </section>
      <section id='projects'>
        <Project />
      </section>
      <section id='skills'>
        <Skill />
      </section>
      <section id='work'>
        <Work />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </div>
  )
}

export default Body