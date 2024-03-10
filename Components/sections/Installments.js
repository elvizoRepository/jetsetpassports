import Link from 'next/link'
import React from 'react'
import './Installements.css'

export default function Installments() {
  return (
    <section>
        <p className='installments notice'> <span className='InstallmentPolicy'>Installment Policy:</span> To initiate the processing of our services, a minimum of 30% of the total fee 
            must be paid upfront. This initial payment ensures the commencement of our dedicated efforts 
            towards meeting your requirements. The remaining balance will be expected upon completion or 
            as per the agreed-upon installment plan. Please be aware that services may not proceed until 
            the initial 30% payment is received. For any inquiries or to discuss a personalized installment 
            plan, kindly <Link href='/contact' className='underline-text' target='_blank'>contact our support team for assistance.</Link></p>
    </section>
  )
}
