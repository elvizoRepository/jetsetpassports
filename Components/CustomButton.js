import React from 'react'
import './CustomButton.css'
export default function CustomButton({name,type,onclick}) {
  return (
    <button onClick={onclick} type={type} className='custom-btn'>{name}</button>
  )
}
