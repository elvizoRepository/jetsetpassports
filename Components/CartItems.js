"use client"
import Link from 'next/link'
import React from 'react'
import './CartItems.css'

const CartItem = ({id, imageSrc, passportName, fees, availabillty}) => {
  const isAvailable = availabillty === 'Available';

  const cartBottomStyle = isAvailable ? '' : 'unavailable';
  const imageStyle = isAvailable ? '' : 'grayscale';

  return (
    <div className={`cart-container ${cartBottomStyle}`}>
        <div className={`cart-image-container ${imageStyle}`}>
            <img src={imageSrc} alt={passportName} className='cart-image-container-img'/>
        </div>
        <div className='cart-bottom'>
            <p className='passport-name'>{passportName}</p>
            <p className='passport-availability'>{availabillty}</p>
            <p className='processing-fee'>Processing Fees: {fees}$</p>
            {isAvailable ? (
              <Link href={`/payment-page/${id}`} className='explore processing-fee'>Proceed To Payments</Link>
            ) : (
              <span className='unavailable-text'>Not Available</span>
            )}
        </div>
    </div>
  );
};

export default CartItem;
