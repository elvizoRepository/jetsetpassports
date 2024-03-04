"use client"
import React from 'react'

function CarouselImage({image}) {
  return (
    <div className='carousel-image'>
        <img src={image} width="100%" height='200'/>
    </div>
  )
}

export default CarouselImage