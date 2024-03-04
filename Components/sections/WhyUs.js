"use client"
import React from 'react'
import CountUp from 'react-countup';
import Link from 'next/link';
import { FaPassport } from "react-icons/fa";
import Title from '../Title';


function WhyUs() {
  return (
    <section>
        <Title title='Why Choose JetSet Passports'/>
        <div className='flex '>
            <div className='w-1/2 cta-div-left p-6 text-2xl flex flex-col justify-center '>
                <h3><CountUp end={10} duration={5} className='font-bold '/>+ Years Experience</h3>
                <h3><CountUp end={100} duration={5} className='font-bold'/>% Security Measures</h3>
                <h3><CountUp end={100} duration={5} className='font-bold'/>% Efficiency Processing</h3>
            </div>
            <div className='w-1/2 cta-div-right flex flex-col gap-4 p-6 hover:shadow-md'>
                <h3 className='text-sm'>Dive into the intricacies of our passport services, where precision meets personalization. 
                    Whether you seek the elegance of European passports, the cultural richness of Asian passports, 
                    or the adventurous spirit of those from the Americas – we have curated a selection that 
                    transcends borders.</h3>
                <Link href='/passports' className='explore w-fit flex items-center gap-2'>Explore Various Passports <FaPassport/></Link>
            </div>
        </div>
    </section>
  )
}

export default WhyUs