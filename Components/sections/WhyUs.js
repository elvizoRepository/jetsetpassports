"use client"
import React from 'react'
import CountUp from 'react-countup';
import Link from 'next/link';
import { FaPassport } from "react-icons/fa";
import Title from '../Title';
import './Whyus.css'

function WhyUs() {
  return (
    <section className='whyus-section'>
        <Title title='Why Choose JetSet Passports'/>
        <div className='why-us-container '>
            <div className='why-us-container-left'>
                <h3><CountUp end={10} duration={5} className='font-bold '/>+ Years Experience</h3>
                <h3><CountUp end={100} duration={5} className='font-bold'/>% Security Measures</h3>
                <h3><CountUp end={100} duration={5} className='font-bold'/>% Efficiency Processing</h3>
            </div>
            <div className='why-us-container-right'>
                <h3 className='why-us-container-right-text'>Dive into the intricacies of our passport services, where precision meets personalization. 
                    Whether you seek the elegance of European passports, the cultural richness of Asian passports, 
                    or the adventurous spirit of those from the Americas – we have curated a selection that 
                    transcends borders.</h3>
                <Link href='/passports' className='explore whyus-cta'>Explore Various Passports <FaPassport/></Link>
            </div>
        </div>
    </section>
  )
}

export default WhyUs