"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import jsPDF from 'jspdf';
import passports from '@/data/passports';
import '../apply.css'
import Logo from '@/Components/Logo';
import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../../payment-page/paymentpage.css'
import Installments from '@/Components/sections/Installments';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import Modal from '@/Components/ModalComponent';
import { Helmet } from 'react-helmet';

export default function Page({params}) {
    const [preferedPrice, setPreferedPrice] = useState(null);
    const [selectedCurrency, setSelectedCurrency] = useState('btc');
    const [copied, setCopied] = useState(false);
    const selectedItem = passports.find(item => item.id === Number(params.id));
    const selectedPrice = selectedItem.price;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [photo, setPhoto] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [phone, setPhoneNumber] = useState('');
    const [emergencyPhone, setemergencyPhone] = useState('');
    const [country, setCountry] = useState('');
    const [aDress, setAddress] = useState('');
    const [postalCode, setpostalCode] = useState('');
    const [txId, setTxId] = useState('');
    const [screenshotPhot, setScreenShotPhoto] = useState(null);
    const [screenshotPreview, setScreenshotPreview] = useState(null);
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timeoutId);

      
    }, []);

    if (!selectedItem) {
      return <div>Page Undergoing Maintainance Try Again Later</div>;
    }

    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    }; 
    const handleMotherNameChange = (e) => {
      setMotherName(e.target.value);
    };

    const handleFatherNameChange = (e) => {
      setFatherName(e.target.value);
    }; 
    const handleEmailChange = (e) =>{
      setEmail(e.target.value);
    }
    const handleBirthdayChange = (e) => {
      setBirthday(e.target.value);
    };
    const handlePhoneChange = (e) => {
      setPhoneNumber(e.target.value);
    };
    const handleEmergencyPhoneChange = (e) => {
      setemergencyPhone(e.target.value);
    };
    const handleBCountryChange = (e) => {
      setCountry(e.target.value);
    };
    const handleAdressChange = (e) => {
      setAddress(e.target.value);
    };
    const handlePostalChange = (e) => {
      setpostalCode(e.target.value);
    };
    const handleTxIDChange = (e) => {
      setTxId(e.target.value);
    };



    const handleScreenShotChange = (e) => {
      const screenshotFile = e.target.files[0];
      setScreenShotPhoto(screenshotFile);
      // Create a URL for the selected image file
      const previewURL = URL.createObjectURL(screenshotFile);
      setScreenshotPreview(previewURL);
    };  
    const handlePhotoChange = (e) => {
      const selectedFile = e.target.files[0];
      setPhoto(selectedFile);
      // Create a URL for the selected image file
      const previewURL = URL.createObjectURL(selectedFile);
      setImagePreview(previewURL);
    };  
    //handling payment method change either BTC USDT OR EUTH
    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
      };


    //handling the copy icon
    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      };


    //for payment option installment of full
    const handlePaymentOptionChange = (option) => {
      if (option === 'installment') {
        setPreferedPrice(selectedPrice * 0.3);
      } else if (option === 'fullPayment') {
        setPreferedPrice(selectedPrice);
      }
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const pdf = new jsPDF();
      const fontSize = 10;
      pdf.setFontSize(fontSize);

      // Add content to the PDF
      pdf.text('3WEF JetSet Passport Application Form', 105, 10, { align: 'center' });
    
      // Add logo and barcode
      // Assuming you have the image files for the logo and barcode

      const barcode = new Image();
      barcode.src = '../../barcode.png';
    
      pdf.addImage(barcode, 'PNG', 10, 20, 40, 20);
    
      // Generate auto-generated application number
      const applicationNumber = '3WEF2154123';
    
      pdf.text(`Application No: ${applicationNumber}`, 10, 50);
    

      pdf.text(`Applicant's Name: ${firstName} ${lastName}`, 10, 60);
      pdf.text(`Father's Name: ${fatherName}`, 10, 70);
      pdf.text(`Mother's Name: ${motherName}`, 10, 80);
      pdf.text(`Phone Number: ${phone}`, 10, 90);
      pdf.text(`Birthdate: ${birthday}`, 10, 100);
    
      // Assuming you have an image for the applicant's photo
      if (imagePreview) {
        pdf.addImage(imagePreview, 'JPEG', 170, 20, 30, 30);
      }
    
      // Mailing Address
      pdf.text(`Mailing Address: ${aDress}, ${country}, ${postalCode}`, 10, 110);
    
      // Applying for a passport
      pdf.text(`Applying for a passport: ${selectedItem.country}`, 10, 120);
    
      // Percentage fee paid
      pdf.text(`Fee Paid: ${preferedPrice !== null ? preferedPrice : ''}$`, 10, 130);
    
      // Transaction ID and Screenshot
      pdf.text(`Transaction ID: ${txId}`, 10, 140);
    
      if (screenshotPreview) {
        pdf.addImage(screenshotPreview, 'JPEG', 10, 150, 50, 50);
      }
    
      // Signing terms and conditions
      pdf.text(`I agree to the Discretion Policy for Jetset Passport Services as stated on the website.`, 10, 200);
    
      // Signing space
      pdf.text('Applicant\'s Signature: ________________________', 10, 210);
    
      // Instruction
      pdf.text(`Please affix your signature to this document and provide fingerprints for both hands on a separate A4 paper. Additionally, \ninclude a photocopy of your birth certificate. Kindly dispatch these items to the designated address via mail.`, 10, 220);
      pdf.text(`Yasmin, Asghar`, 10, 240);
      pdf.text(`Street: P.O Box 50431`, 10, 245);
      pdf.text(`State/province/area: Dubai`, 10, 250);
      pdf.text(`Zip code: 50431`, 10, 255);
      pdf.text(`Country: Emirates`, 10, 260);
    
      // Save the PDF or open in a new tab

      const pdfDataUri = pdf.output('datauristring');
      pdf.save('passport_application.pdf');

      try {
          await axios.post('/api/email', {
          to: 'jetsetpassports@gmail.com',
          subject: 'Passport Application',
          text: 'Application PDF',
          attachment: pdfDataUri.split(',')[1],
        });
    
        await axios.post('/api/email', {
          to: email,
          subject: 'Passport Application',
          text: 'Application PDF',
          attachment: pdfDataUri.split(',')[1],
        });
      } catch (error) {
        console.error('Error submitting application', error);
        setOpen(true);
      }
    };
    
  return (
    <section>
        <Helmet>
            <title>3WEF JetSet Apllication Form Passports</title>
        </Helmet>
        <form onSubmit={handleSubmit}>
            <h1 className='form-title'>3WEF JetSet Passport Application Form</h1>
            <div className='notice guide'>
              <p>- Ensure accurate completion of all required information</p>
              <p>- Upload a passport size photo with dimensions of 2x2 inches</p>
              <p>- Choose from the provided addresses and proceed with the payment</p>
              <p>- Following payment, enter the transaction ID into the designated Txid field</p>
              <p>- Submit your application</p>
              <p>- Download the generated PDF, sign it,attach photocopy of birth certificate and your fingerprints.<br/> Put all documents in an envelope and mail it to the address mentioned in the PDF</p>
            </div>
            <div className='logo-bar'>
                <Logo/>
                <img src='../../barcode.png' width='10%'/>
            </div>
            <div className='flex_container margintop name_phone'>
                <div className='first-name'>
                    <label>First Name</label>
                    <input type='text' required className='border outline-none px-1 ' value={firstName} onChange={handleFirstNameChange}/>
                </div>
                <div className='last-name'>
                    <label>Last Name</label>
                    <input type='text' required className='border outline-none px-1' value={lastName} onChange={handleLastNameChange}/>
                </div>
            </div>
            <div className='flex_container margintop name_phone'>
                <div className='first-name'>
                    <label>Mother&apos;s Name</label>
                    <input type='text' required className='border outline-none px-1 ' value={motherName} onChange={handleMotherNameChange}/>
                </div>
                <div className='last-name'>
                    <label>Father&apos;s Name</label>
                    <input type='text' required className='border outline-none px-1' value={fatherName} onChange={handleFatherNameChange}/>
                </div>
            </div>
            <div className='first-name margintop'>
                <label>Email</label>
                <input className='border outline-none px-1' type='email' required value={email} onChange={handleEmailChange}/>
            </div>
            <div className='margintop flex_container name_phone'>
                <div className='birthday'>
                    <label>Birthday</label>
                    <input type='date' required className='border outline-none px-1 h-fit' value={birthday} onChange={handleBirthdayChange}/>
                </div>
                <div className='photo'>
                    <label>Passport Size Photo</label>
                    <input type='file' accept='image/*' onChange={handlePhotoChange}/>
                    {imagePreview && (
                      <div>
                        <p>Selected image:</p>
                        <img
                          src={imagePreview}
                          alt='Preview'
                          style={{ width: '2in', height: '2in', objectFit: 'cover' }}
                        />
                      </div>
                    )}                
                </div>

            </div>
            <div className='margintop flex_container flex-col-mb'>
                <label>Phone Number</label>
                <input className='border outline-none px-1' value={phone} onChange={handlePhoneChange}/>
            </div>
            <div className='margintop flex_container flex-col-mb'>
                <label>Emmergency Number</label>
                <input className='border outline-none px-1' value={emergencyPhone} onChange={handleEmergencyPhoneChange}/>
            </div>
            <div className='margintop flex_container flex-col-mb'>
                <label>Country</label>
                <input className='border outline-none px-1' value={country} onChange={handleBCountryChange}/>
            </div>
            <div className='margintop flex_container flex-col-mb'>
                <label>Mailing Adress</label>
                <input className='border outline-none px-1' value={aDress} onChange={handleAdressChange}/>
            </div>
            <div className='margintop flex_container flex-col-mb'>
                <label>Postal Code</label>
                <input className='border outline-none px-1' value={postalCode} onChange={handlePostalChange}/>
            </div>
            <div className='margintop flex_container flex-col-mb'>
                <label>APPLYING FOR </label>
                <p className='application-country'>{selectedItem.country}</p>
            </div>

        <div className='margintop flex_container paymentsection'>
            <p className='fontbold'>Processing Fee: {selectedItem.price}$</p>
            <div>
                <label>
                <input
                    type="radio"
                    value="installment"
                    checked={preferedPrice === selectedPrice * 0.3}
                    onChange={() => handlePaymentOptionChange('installment')}
                    required
                />
                Pay in Installment (30%): {selectedPrice * 0.3}$
                </label>
            </div>
            <div>
                <label>
                <input
                    type="radio"
                    value="fullPayment"
                    checked={preferedPrice === selectedPrice}
                    onChange={() => handlePaymentOptionChange('fullPayment')}
                    required
                />
                Pay in Full: {selectedPrice}$
                </label>
            </div>
            <p className='fontbold preferedprice'>Preferred Price: {preferedPrice !== null ? preferedPrice : ''}$</p>
        </div>
        <div className="margintop payment-page-box">
              <label htmlFor="currencySelect" className=" label-select-payment-method">Select Payment Method:</label>
                <select id="currencySelect" className="select-payment-method" onChange={handleCurrencyChange} value={selectedCurrency}>
                  <option value="btc">BTC</option>
                  <option value="usdtTRC20">USDT(TRC20)</option>
                  <option value="usdtERC20">USDT(ERC20)</option>
                  <option value="eth">ETH</option>
                </select>
                <p className='notice info-payment'>For insformation on how to make payment visit the <Link target='_blank' href='/payment-methods' className='underline-text font-bold'>payment page.</Link> </p>
                <div id={`${selectedCurrency}`}>
                  {selectedCurrency === 'btc' && (
                    <div className="payment-box">
                      <p className='textwidth'>
                        <span className="coin-adress">Bitcoin(BTC) Address:</span>
                        16hm6gGa7S4UhVuDT9guLS9cLtRvPFPKAm
                        <CopyToClipboard text="16hm6gGa7S4UhVuDT9guLS9cLtRvPFPKAm" onCopy={handleCopy}>
                          <span  title="Copy to Clipboard">
                            <FaCopy className="copy-icon"/>
                          </span>
                        </CopyToClipboard>
                      </p>
                      {copied && <span className="copied-text">Copied!</span>}
                      <img src="https://res.cloudinary.com/dlgxjvrwt/image/upload/v1709642953/btc_vqe2iv.png" className="scan" alt="Bitcoin Logo" />
                    </div>
                  )}

                  {selectedCurrency === 'usdtTRC20' && (
                    <div className="payment-box">
                      <p>
                        <span className="coin-adress">USDT(TRC20) Address:</span> TC1sXHHCzv861KFf9eXve7UEYXQmt4hiSM
                        <CopyToClipboard text="TC1sXHHCzv861KFf9eXve7UEYXQmt4hiSM" onCopy={handleCopy}>
                          <span  title="Copy to Clipboard">
                            <FaCopy className="copy-icon"/>
                          </span>
                        </CopyToClipboard>
                      </p>
                      {copied && <span className="copied-text">Copied!</span>}
                      <img src="https://res.cloudinary.com/dlgxjvrwt/image/upload/v1709642953/usdtTRC20_py2eew.png" className="scan" alt="USDT TRC20 Logo" />
                    </div>
                  )}

                  {selectedCurrency === 'usdtERC20' && (
                    <div className="payment-box">
                      <p>
                        <span className="coin-adress">USDT(ERC20) Address:</span> 0x054fc890b16e29bd089c61bab7cc455260cb7323
                        <CopyToClipboard text="0x054fc890b16e29bd089c61bab7cc455260cb7323" onCopy={handleCopy}>
                          <span title="Copy to Clipboard">
                            <FaCopy className="copy-icon" />
                          </span>
                        </CopyToClipboard>
                      </p>
                      {copied && <span className="copied-text">Copied!</span>}
                      <img src="https://res.cloudinary.com/dlgxjvrwt/image/upload/v1709642953/usdtERC20_b9doad.png" className="scan" alt="USDT ERC20 Logo" />
                    </div>
                  )}

                  {selectedCurrency === 'eth' && (
                    <div className="payment-box">
                      <p>
                        <span className="coin-adress">ETH Address:</span> 0x054fc890b16e29bd089c61bab7cc455260cb7323
                        <CopyToClipboard text="0x054fc890b16e29bd089c61bab7cc455260cb7323" onCopy={handleCopy}>
                          <span  title="Copy to Clipboard">
                            <FaCopy className="copy-icon"/>
                          </span>
                        </CopyToClipboard>
                      </p>
                      {copied && <span className="copied-text">Copied!</span>}
                      <img src="https://res.cloudinary.com/dlgxjvrwt/image/upload/v1709642953/Eth_p3yqec.png" className="scan" alt="ETH Logo" />
                    </div>
                  )}
                </div>
          </div>
          <Installments/>

          <p className='fontbold'>Please copy and paste the transaction id from your payment confirmation</p>
          <div className='margintop flex_container txid_photo'>
                <div className='birthday'>
                    <label>txid/Transaction ID</label>
                    <input type='text' required className='border outline-none px-1 h-fit' value={txId} onChange={handleTxIDChange}/>
                </div>
                <div className='photo'>
                    <label>Upload Payment Screenshot</label>
                    <input type='file' accept='image/*' onChange={handleScreenShotChange}/>
                    {screenshotPreview && (
                      <div>
                        <p>Selected image:</p>
                        <img
                          src={screenshotPreview}
                          alt='Preview'
                          style={{ width: '2in', height: '2in', objectFit: 'cover' }}
                        />
                      </div>
                    )} 
                </div>

            </div>

            <p className='margin-top'>By Submiting this application, i hereby agree to the <Link  href='/policy' className='font-bold underline-text' target='_blank'>Discretion Policy for Jetset Passport Services </Link></p>

            <button className='submit-button' type='submit'>Submit Application</button>
        </form>
        <ToastContainer />    
    </section>
  )
}
