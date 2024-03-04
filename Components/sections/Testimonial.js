"use client"
import React from 'react'
import TestimonialCarousel from '../TestimonialCarousel'
import Title from '../Title'
import './Testimonial.css'
function Testimonial() {
  return (
    <section className='testimonial-section'>
        <div className='testimonial-left'>
            <Title title="Testimonials"/>
            <p className='testimonial-intro'>Discover the whispered success stories of global travelers who entrusted their 
                passport needs to Jetset Passports. Our satisfied clients share their firsthand 
                experiences, highlighting the discreet excellence and seamless journeys crafted 
                by our dedicated team. Join us in exploring the testimonials that speak volumes 
                about our decade-strong legacy in delivering top-notch passport services worldwide.</p>
                <img src='../passport.gif' />
              

        </div>
        <div className='testimonial-right'>
            <TestimonialCarousel/>
        </div>
    </section>
  )
}

export default Testimonial