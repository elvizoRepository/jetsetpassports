"use client"
import React from 'react'
import { FaGlobe } from "react-icons/fa";
import { RiCoinsFill } from "react-icons/ri";
import { FaFileDownload } from "react-icons/fa";
import Link from 'next/link';
import Title from '../Title';

function Cta() {
  return (
    <section>
        <Title title='How To Get A Passport'/>
        <p>The following methods for obtaining a passport are provided as follows</p>
        <p className='text-sm '><span className='font-bold'>Note:</span> The processing time typically ranges from 6 to 9 weeks from the date of form submission. 
          Kindly note that occasional delays may occur due to the discreet operations involving our 
          confidential collaboration with government agencies. This unique approach adds an extra layer 
          of security, reminiscent of a covert black-market process. You can monitor your passport's 
          progress through our <Link href='/' className='underline'>tracking system</Link>. For any additional inquiries, please reach out to us 
          via <Link href='/' className='underline'>email</Link> or call-us.</p>
        <div className='flex justify-between text-center gap-4 text-sm '>
            <div className='flex gap-4 flex-col items-center border w-[400px] p-6 rounded-md hover:shadow-md'>
                <FaGlobe className='icons-cta'/>
                 <p>Choose from the <Link href='/passports' className='underline'>list of available passports</Link></p>
            </div>
            <div className='flex gap-4 flex-col items-center border w-[400px] p-6 rounded-md hover:shadow-md'>
                <RiCoinsFill className='icons-cta'/>
                 <p>Make payment using the <Link href='/payment-methods' className='underline'>available payment methods</Link></p>
            </div>
            <div className='flex gap-4 flex-col items-center border w-[400px] p-6 rounded-md hover:shadow-md'>
                <FaFileDownload className='icons-cta'/>
                 <p>After Payment method a form will be sent to your email.Download the Form, Fill and attatch a 2x2 inches passport photo
                    then submit to <Link href='mailto:jetsetpassports@gmail.com' className='underline'>jetsetpassports@gmail.com</Link></p>
            </div>
        </div>
    </section>
  )
}

export default Cta