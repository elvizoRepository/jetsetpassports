"use client"
import React from 'react'
import { FaPassport } from "react-icons/fa6";
import './Logo.css'

function Logo() {
  return (
    <div className='logo'><span className='jetset'>JetSet</span><span className='passport flex items-center'>Passports<FaPassport/></span> </div>
  )
}

export default Logo