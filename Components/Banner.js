import React from 'react'
import Title from './Title'
import './Banner.css'

export default function Banner({title}) {
  return (
    <section className='about-page'>
        <Title title={title} className='banner'/>
    </section>
  )
}
