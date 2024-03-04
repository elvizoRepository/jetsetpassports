"use client"
import React from 'react'
import Link from 'next/link'
import Banner from '@/Components/Banner'
export default function page() {
  return (
    <div>
        <Banner title='Payment Methods'/>
        <section>
            <p className='text-sm'>We exclusively accept payments in cryptocurrencies to ensure a secure and confidential transaction process. Embracing the future of financial technology, we welcome payments in various cryptocurrencies for a seamless and discreet experience. During payment, you will be allowed to choose a cryptocurrency of your preference for your payment. If you have any questions or need assistance, feel free to reach out to our <Link href='/contact' className='underline'>support team</Link>.</p>
        </section>
  
    </div>
  )
}
