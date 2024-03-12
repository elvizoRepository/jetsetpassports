"use client"
import Banner from '@/Components/Banner';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [applicationNumber, setApplicationNumber] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleApplicationCheck = () => {
    // Simulate API call to check application status
    // Replace this with your actual API call
    if (applicationNumber === '3WEF2154123') {
      setStatus('Application Undergoing Review...');
    } else {
      setStatus('This application is not registered in our system.');
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
          <img src="../../loading.gif" alt="Loading..." className="w-full h-full object-cover" />
        </div>
      ) : (
        <>
          <Helmet>
            <title>Jetset Passports - Track Your Application</title>
          </Helmet>
          <Banner title="Tracking System" />
          <section>
            <div className="container mx-auto mt-8 p-4">
              <div>
                <h1>Tracking Stages</h1>
                <div className='flex stages'>
                  <p className='border p-4'>Reviewing</p>
                  <p className='border p-4'>Processing</p>
                  <p className='border p-4'>Shipping</p>
                  <p className='border p-4'>Complete</p>
                </div>
              </div>
              <label htmlFor="applicationNumber" className="block font-semibold text-lg mb-2 mt-4">
                Enter Application Number:
              </label>
              <input
                type="text"
                id="applicationNumber"
                className="border p-2 w-full"
                value={applicationNumber}
                onChange={(e) => setApplicationNumber(e.target.value)}
              />
              <button
                className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-700 cursor-pointer"
                onClick={handleApplicationCheck}
              >
                Check Application Status
              </button>
              {status && (
                <div className="mt-4 text-lg font-semibold">
                  Application Status: {status}
                </div>
              )}
              {/* Add the application procedure here with appropriate CSS styling */}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
