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
                <p>For inquiries and more information, feel free to give us a call on +1(123)4545 45454</p>
                <p>Email Us jetsetpassports@gmail.com</p>
            </div>
        </section>
    </div>
  )
}
