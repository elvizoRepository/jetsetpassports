import React from 'react'
import './Title.css'
export default function Title({title,className}) {
  return (
<div className={`title ${className}`}>{title}</div>
  )
}
