import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <section className='footer'>
        <div className='text-sm flex flex-col items-center '>
            <div className='flex items-center '>
                <h3 ><span className='font-bold'>Main Menu</span> | </h3>
                <nav className='flex gap-2 '>
                    <Link href='/'>Home</Link>
                    <Link href=''>About</Link>
                    <Link href=''>Passport</Link>
                    <Link href=''>Contact</Link>
                </nav>
            </div>
            <div className='flex items-center '>
                <h3 ><span className='font-bold'>Contact Us</span> | </h3>
                <nav className='flex gap-2 '>
                    <p>+1 235 1233 1212</p>
                </nav>
            </div>
        </div>
        <p className='text-sm text-center'>© 2024 JetSet Passports | All Right Reserved.</p>
    </section>
  )
}
