"use client"
import React from 'react'
import Banner from '@/Components/Banner'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function page() {
  return (
    <div>
        <Banner title='Contact Us'/>
        <section>
            <div>
                <p className='flex'>For inquiries and more information, feel free to give us a call on <span className='flex items-center text-green-500'><FaPhone/>+1 123 4545 45454</span></p>
                <p className='flex'>Email Us <span className='flex items-center text-green-500'><MdEmail/>jetsetpassports@gmail.com</span></p>
            </div>
        </section>
    </div>
  )
}
