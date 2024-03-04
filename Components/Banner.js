import React from 'react'
import Title from './Title'

export default function Banner({title}) {
  return (
    <section className='about-page'>
        <Title title={title} className='bg-white w-fit p-4'/>
    </section>
  )
}
