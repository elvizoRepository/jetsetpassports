"use client"
import Banner from '@/Components/Banner';
import passports from '@/data/passports';
import Installments from '@/Components/sections/Installments';
import React,{ useState } from 'react';
import Testimonial from '@/Components/sections/Testimonial';
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
        <section className='payment-page-container '>
          <div>
              <img src={`.${selectedItem.imageurl}`} alt={`Image of ${selectedItem.country}`} className='passport-payment-page-image'/>
              <p className='text-green-500 font-bold'>Passport Processing Fee: {selectedItem.price}$</p> 
          </div>
          
          <div className="payment-page-box">
              <label htmlFor="currencySelect" className=" label-select-payment-method">Select Payment Method:</label>
                <select id="currencySelect" className="select-payment-method" onChange={handleCurrencyChange} value={selectedCurrency}>
                  <option value="btc">BTC</option>
                  <option value="usdtTRC20">USDT(TRC20)</option>
                  <option value="usdtERC20">USDT(ERC20)</option>
                  <option value="eth">ETH</option>
                </select>

                <div id={`${selectedCurrency}Div`}>
                  {selectedCurrency === 'btc' && (
                    <div className="payment-box">
                      <p>
                        <span className="coin-adress">Bitcoin(BTC) Address:</span>{' '}
                        16hm6gGa7S4UhVuDT9guLS9cLtRvPFPKAm
                        <CopyToClipboard text="16hm6gGa7S4UhVuDT9guLS9cLtRvPFPKAm" onCopy={handleCopy}>
                          <span  title="Copy to Clipboard">
                            <FaCopy className="copy-icon"/>
                          </span>
                        </CopyToClipboard>
                      </p>
                      {copied && <span className="copied-text">Copied!</span>}
                      <img src="../btc.png" className="scan" alt="Bitcoin Logo" />
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
                      <img src="../usdtTRC20.png" className="scan" alt="USDT TRC20 Logo" />
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
                      <img src="../usdtERC20.png" className="scan" alt="USDT ERC20 Logo" />
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
                      <img src="../Eth.png" className="scan" alt="ETH Logo" />
                    </div>
                  )}
                </div>
                <p>After Payment has been processed <button className='border bg-gray-300 p-[2px]' onClick={handleDownload}>download form</button> and send to jetsetpassports@gmail.com</p>
          </div>
        </section>
        <Testimonial/>

      </div>
    );
}

