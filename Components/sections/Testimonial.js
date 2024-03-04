"use client"
import React from 'react'
import TestimonialCarousel from '../TestimonialCarousel'
import Title from '../Title'
function Testimonial() {
  return (
    <section className='flex justify-between testimonial-bg items-center'>
        <div className='w-1/2'>
            <Title title="Testimonials"/>
            <p className='mt-4 text-sm'>Discover the whispered success stories of global travelers who entrusted their 
                passport needs to Jetset Passports. Our satisfied clients share their firsthand 
                experiences, highlighting the discreet excellence and seamless journeys crafted 
                by our dedicated team. Join us in exploring the testimonials that speak volumes 
                about our decade-strong legacy in delivering top-notch passport services worldwide.</p>
                <img src='../passport.gif'/>
        </div>
        <div className='w-1/2'>
            <TestimonialCarousel/>
        </div>
    </section>
  )
}

export default Testimonial