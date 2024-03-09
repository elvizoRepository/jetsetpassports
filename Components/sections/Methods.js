import Link from 'next/link'
import React from 'react'
import './Methods.css'
export default function Methods() {
  return (
    <section>
        <p className='method notice'> <span className='payment-font'>Payment Method:</span>Concerning our payment methods, visit our <Link target='_blank' href='/payment-methods' className='underline-text'>payment page.</Link></p>
    </section>
  )
}
