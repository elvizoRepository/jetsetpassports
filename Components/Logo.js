"use client"
import React from 'react'
import { FaPassport } from "react-icons/fa6";


function Logo() {
  return (
    <div className='logo flex items-center gap-2 '><span className='font-bold'>JetSet</span><span className='passport flex items-center'>Passports<FaPassport/></span> </div>
  )
}

export default Logo