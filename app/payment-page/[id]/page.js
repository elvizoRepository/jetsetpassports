"use client"
import Banner from '@/Components/Banner';
import passports from '@/data/passports';
import Installments from '@/Components/sections/Installments';
import React,{ useState } from 'react';
import Testimonial from '@/Components/sections/Testimonial';
import Link from 'next/link';
import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { saveAs } from 'file-saver';
import '../paymentpage.css' 

export default function Page({ params }) {
  const [selectedCurrency, setSelectedCurrency] = useState('btc');
  const [copied, setCopied] = useState(false);
  
  const handleDownload = () => {
    const pdfFilePath = '../application-forms.pdf';
    saveAs(pdfFilePath, 'jetset-passport-form.pdf');

  };
  
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };
    const selectedItem = passports.find(item => item.id === Number(params.id));
    // Check if the item is found
    if (!selectedItem) {
      return <div>Item not found</div>;
    }


  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
    return (
      <div>
        <Banner title={selectedItem.country} />
        <Installments/>
        <section className='payment-page-container'>
              <img src={`.${selectedItem.imageurl}`} alt={`Image of ${selectedItem.country}`} className='passport-payment-page-image'/>
              <p className='country-pass-name'>{selectedItem.country}</p>
              <p className='visa-free-info'>For infomation about {selectedItem.country} and list of visa-free countries visit <Link className='underline-text' target='_blank' rel='noopener noreferrer' href={selectedItem.link}>visaindex.com</Link></p>
              <p className='text-green-500 font-bold'>Passport Processing Fee: {selectedItem.price}$</p> 
              <p className='processing-time'>Processing Time : {selectedItem.pocessingTime} Months</p>
              <Link href={`/apply-now/${selectedItem.id}`} className='apply-button'>Apply Now</Link>
        </section>
        <Testimonial/>

      </div>
    );
}

