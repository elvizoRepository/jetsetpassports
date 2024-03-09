"use client"
import React from 'react'
import { FaGlobe } from "react-icons/fa";
import { RiCoinsFill } from "react-icons/ri";
import { FaFileDownload } from "react-icons/fa";
import Link from 'next/link';
import Title from '../Title';
import './Cta.css'
function Cta() {
  return (
    <section className='cta-section'>
        <Title title='How To Get A Passport'/>
        <p>The following methods for obtaining a passport are provided as follows</p>
        <p className='cta-notice'><span className='note'>Note:</span> The processing time typically ranges from 6 to 9 weeks from the date of form submission. 
          Kindly note that occasional delays may occur due to the discreet operations involving our 
          confidential collaboration with government agencies. This unique approach adds an extra layer 
          of security, reminiscent of a covert black-market process. You can monitor your passport's 
          progress through our <Link href='/tracking' className='underline-text'>tracking system</Link>. For any additional inquiries, please reach out to us 
          via <Link href='/' className='underline-text'>email</Link> or call-us.</p>

        <div className='procedure'>
            <div className='procedure-box'>
                <FaGlobe className='icons-cta'/>
                 <p>Choose from the <Link href='/passports' className='underline-text'>list of available passports</Link></p>
            </div>
            <div className='procedure-box'>
                <RiCoinsFill className='icons-cta'/>
                 <p>Upon selection click on the apply button, fill the necesary information and pay the processing fee.<Link href='/payment-methods' className='underline-text'>For information on payment methods visit</Link></p>
            </div>
            <div className='procedure-box'>
                <FaFileDownload className='icons-cta'/>
                <p>Upon successful payment, download the generated PDF file, sign it, and follow the subsequent instructions outlined in the document.</p>
            </div>
        </div>
    </section>
  )
}

export default Cta