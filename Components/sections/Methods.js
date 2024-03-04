import Link from 'next/link'
import React from 'react'

export default function Methods() {
  return (
    <section>
        <p className='text-sm p-4 notice'> <span className='font-bold'>Payment Mothod:</span>Concerning our payment methods, visit our <Link href='/payment-methods' className='underline'>payment page.</Link></p>
    </section>
  )
}
