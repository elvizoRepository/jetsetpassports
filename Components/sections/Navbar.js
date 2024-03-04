import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'

function Navbar() {
  return (
    <section className='flex justify-between items-center'>
        <Logo/>
        <nav className='flex gap-5 text-sm'>
            <Link href='/' className=''>Home</Link>
            <Link href='/about-us' className=''>About Us</Link>
            <Link href='/passports' className=''>Passports</Link>
            <Link href='/contact' className=''>Contact Us</Link>
        </nav>
    </section>
  )
}

export default Navbar