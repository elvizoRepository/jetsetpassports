import React from 'react'

export default function Title({title,className}) {
  return (
<div className={`text-4xl font-bold mb-4 ${className}`}>{title}</div>
  )
}
