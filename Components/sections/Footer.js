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
                </nav>
            </div>

            <div className='footer-left-right-links'>
                <h3 className='MainMenu'>Contact Us</h3>
                <nav className='footer-nav '>
                    <p>+1 235 1233 1212</p>
                </nav>
            </div>
        </div>
        <p className='copyright'>© 2024 JetSet Passports | All Right Reserved.</p>
    </section>
  )
}
