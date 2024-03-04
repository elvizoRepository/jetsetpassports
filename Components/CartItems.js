"use client"
import Link from 'next/link'
import React from 'react'

const CartItem = ({id, imageSrc, passportName, fees }) => {
  return (
    <div className='cart-color w-[280px] overflow-hidden flex flex-col items-center hover:shadow-md text-center'>
        <div className='w-[280px] h-[280px] overflow-hidden'>
            <img src={imageSrc} alt={passportName} className='w-full'/>
        </div>
        <div className='p-6'>
            <p className='font-bold'>{passportName}</p>
            <p className='text-sm'>Processing Fees: {fees}$</p>
            <Link href={`/payment-page/${id}`} className='explore text-sm'>Proceed To Payments</Link>
        </div>
    </div>
  );
};

export default CartItem;
