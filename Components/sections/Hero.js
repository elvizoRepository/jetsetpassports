"use client"
import React from 'react'
import Carousel from '../Carousel'
import Title from '../Title'

function Hero() {
  return (
    <section>
        <Title title='Welcome To JetSet Passports'/>
        <h1>Your Trusted Partner in International Passport Services with Over a Decade of Excellence.</h1>
        <p className='small-title-text'>Acquire a passport seamlessly and elevate your status to automatic citizenship through our extensive network and reliable connections.Our commitment is rooted in providing unparalleled service, ensuring a smooth and confidential experience for all your international travel needs.</p> 
        <Carousel/>
    </section>
  )
}

export default Hero