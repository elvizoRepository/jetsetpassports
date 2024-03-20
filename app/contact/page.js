"use client"
import React from 'react'
import Banner from '@/Components/Banner'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Helmet } from 'react-helmet';

export default function Page() {
  return (
    <div>
        <Helmet>
            <title>Jetset Passports - Contact Us</title>
        </Helmet>
        <Banner title='Contact Us'/>
        <section>
            <div>
                <p>For inquiries and more information, feel free to Email Us <span className='text-green-500'>support@jetsetpassports.com</span> or call us at +1 249 444 2961</p>
            </div>
        </section>
    </div>
  )
}
