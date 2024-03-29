import Link from 'next/link'
import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <section className='footer'>
        <div className='footer-container'>
            <div className='footer-left-right-links'>
                <h3 className='MainMenu'>Main Menu</h3>
                <nav className='footer-nav'>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/passports'>Passport</Link>
                    <Link href='/contact'>Contact</Link>
                    <Link href='/payment-methods'>Payment Methods</Link>
                    <Link href='/tracking'>Track Progress</Link>
                    <Link href='/policy'>Privacy & Policy</Link>
                </nav>
            </div>

            <div className='footer-left-right-links'>
                <h3 className='MainMenu'>Contact Us</h3>
                <nav className='footer-nav '>
                    <p>support@jetsetpassports.com</p>
                    <p>+1 249 444 2961</p>
                </nav>
            </div>
        </div>
        <p className='copyright'>© 2024 JetSet Passports | All Right Reserved.</p>
    </section>
  )
}
