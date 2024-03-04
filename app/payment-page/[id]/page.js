"use client"
import Banner from '@/Components/Banner';
import passports from '@/data/passports';
import Installments from '@/Components/sections/Installments';
import React,{ useState } from 'react';
import Testimonial from '@/Components/sections/Testimonial';
import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { saveAs } from 'file-saver';

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
    console.log(selectedItem);
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
        <section className='flex gap-4'>
          <div>
              <img src={`.${selectedItem.imageurl}`} alt={`Image of ${selectedItem.country}`} className='w-[280px] h-[280px] border'/>
              <p className='text-green-500 font-bold'>Passport Processing Fee: {selectedItem.price}$</p> 
          </div>
          
          <div class="border border-gray-100 rounded-md p-4 text-sm shadow-md">
              <label for="currencySelect" className=" mb-2">Select Payment Method:</label>
                <select id="currencySelect" className="border mb-4 ml-2" onChange={handleCurrencyChange} value={selectedCurrency}>
                  <option value="btc">BTC</option>
                  <option value="usdtTRC20">USDT(TRC20)</option>
                  <option value="usdtERC20">USDT(ERC20)</option>
                  <option value="eth">ETH</option>
                </select>

                <div id={`${selectedCurrency}Div`}>
                  {selectedCurrency === 'btc' && (
                    <div className="mb-2 payment-box p-2">
                      <p>
                        <span className="font-bold">Bitcoin(BTC) Address:</span>{' '}
                        16hm6gGa7S4UhVuDT9guLS9cLtRvPFPKAm
                        <CopyToClipboard text="16hm6gGa7S4UhVuDT9guLS9cLtRvPFPKAm" onCopy={handleCopy}>
                          <span className="copy-icon" title="Copy to Clipboard">
                            <FaCopy className='text-lg cursor-pointer'/>
                          </span>
                        </CopyToClipboard>
                      </p>
                      {copied && <span className="copied-text">Copied!</span>}
                      <img src="../btc.png" className="mt-4" alt="Bitcoin Logo" />
                    </div>
                  )}

                  {selectedCurrency === 'usdtTRC20' && (
                    <div className="mb-2 payment-box p-2">
                      <p>
                        <span className="font-bold">USDT(TRC20) Address:</span> TC1sXHHCzv861KFf9eXve7UEYXQmt4hiSM
                        <CopyToClipboard text="TC1sXHHCzv861KFf9eXve7UEYXQmt4hiSM" onCopy={handleCopy}>
                          <span className="copy-icon" title="Copy to Clipboard">
                            <FaCopy className='text-lg cursor-pointer'/>
                          </span>
                        </CopyToClipboard>
                      </p>
                      {copied && <span className="copied-text">Copied!</span>}
                      <img src="../usdtTRC20.png" className="mt-4" alt="USDT TRC20 Logo" />
                    </div>
                  )}

                  {selectedCurrency === 'usdtERC20' && (
                    <div className="mb-2 payment-box p-2">
                      <p>
                        <span className="font-bold">USDT(ERC20) Address:</span> 0x054fc890b16e29bd089c61bab7cc455260cb7323
                        <CopyToClipboard text="0x054fc890b16e29bd089c61bab7cc455260cb7323" onCopy={handleCopy}>
                          <span className="copy-icon" title="Copy to Clipboard">
                            <FaCopy className='text-lg cursor-pointer'/>
                          </span>
                        </CopyToClipboard>
                      </p>
                      {copied && <span className="copied-text">Copied!</span>}
                      <img src="../usdtERC20.png" className="mt-4" alt="USDT ERC20 Logo" />
                    </div>
                  )}

                  {selectedCurrency === 'eth' && (
                    <div className="mb-2 payment-box p-2">
                      <p>
                        <span className="font-bold">ETH Address:</span> 0x054fc890b16e29bd089c61bab7cc455260cb7323
                        <CopyToClipboard text="0x054fc890b16e29bd089c61bab7cc455260cb7323" onCopy={handleCopy}>
                          <span className="copy-icon" title="Copy to Clipboard">
                            <FaCopy className='text-lg cursor-pointer'/>
                          </span>
                        </CopyToClipboard>
                      </p>
                      {copied && <span className="copied-text">Copied!</span>}
                      <img src="../Eth.png" className="mt-4" alt="ETH Logo" />
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

