"use client"
import React, { useState, useEffect } from 'react';
import Banner from '@/Components/Banner';
import passports from '@/data/passports';
import CartItem from '@/Components/CartItems';
import Methods from '@/Components/sections/Methods';
import './passportspage.css'
import { Helmet } from 'react-helmet';

export default function Page() {
  const [sortingOrder, setSortingOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPassports, setFilteredPassports] = useState(passports);

  useEffect(() => {
    // Filter passports based on search query
    const filteredResults = passports.filter(passport =>
      passport.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort filtered results by price
    const sortedResults = filteredResults.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return sortingOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

    setFilteredPassports(sortedResults);
  }, [searchQuery, sortingOrder]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
        {isLoading ? (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
            <img src='../../../loading.gif' alt="Loading..." className="w-full h-full object-cover" />
            </div>
        ) : (
          <>
      <Helmet>
            <title>Jetset Passports - Passports</title>
      </Helmet>
      <Banner title='Choose Your Dream Passport' />
      <Methods/>
      <section>
        <div className="filters">
          <div>
            <label>
              Sort by Price:
              <select
                value={sortingOrder}
                onChange={(e) => setSortingOrder(e.target.value)}
                className='select-class'
              >
                <option value="asc">Lowest to Highest</option>
                <option value="desc">Highest to Lowest</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Search by Name:
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='search-class'
              />
            </label>
          </div>
        </div>

        {/* Display Passports */}
        <div className="grid-layout">
          {filteredPassports.map((passport, index) => (
            <CartItem
              key={index}
              imageSrc={passport.imageurl}
              passportName={passport.country}
              fees={passport.price}
              id = {passport.id}
              availabillty={passport.availability}
            />
          ))}
        </div>
      </section>
          </>
        )}
      
    </div>
  );
}
