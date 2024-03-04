"use client"
import Link from 'next/link'
import React from 'react'
import './CartItems.css'

const CartItem = ({id, imageSrc, passportName, fees }) => {
  return (
    <div className='cart-container'>
        <div className='cart-image-container'>
            <img src={imageSrc} alt={passportName} className='cart-image-container-img'/>
        </div>
        <div className='cart-bottom'>
            <p className='passport-name'>{passportName}</p>
            <p className='processing-fee'>Processing Fees: {fees}$</p>
            <Link href={`/payment-page/${id}`} className='explore processing-fee '>Proceed To Payments</Link>
        </div>
    </div>
  );
};

export default CartItem;
