import Link from 'next/link'
import React from 'react'

export default function Installments() {
  return (
    <section>
        <p className='text-sm p-4 notice'> <span className='font-bold'>Installment Policy:</span> To initiate the processing of our services, a minimum of 50% of the total fee 
            must be paid upfront. This initial payment ensures the commencement of our dedicated efforts 
            towards meeting your requirements. The remaining balance will be expected upon completion or 
            as per the agreed-upon installment plan. Please be aware that services may not proceed until 
            the initial 50% payment is received. For any inquiries or to discuss a personalized installment 
            plan, kindly <Link href='/contact' className='underline'>contact our support team for assistance.</Link></p>
    </section>
  )
}
