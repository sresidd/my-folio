import React from 'react'
import Body from '../body/index'
import Footer from '../footer/index'
import Header from '../header/index'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home