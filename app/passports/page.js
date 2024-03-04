"use client"
import React, { useState, useEffect } from 'react';
import Banner from '@/Components/Banner';
import passports from '@/data/passports';
import CartItem from '@/Components/CartItems';
import Methods from '@/Components/sections/Methods';

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

  return (
    <div>
      <Banner title='Choose Your Dream Passport' />
      <Methods/>
      <section>
        <div className="mb-4 flex justify-between items-center text-sm ">
          <div>
            <label>
              Sort by Price:
              <select
                value={sortingOrder}
                onChange={(e) => setSortingOrder(e.target.value)}
                className='bg-gray-200 rounded-md px-2 py-1'
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
                className='bg-gray-200 text-black ml-1 rounded-md px-2 py-1'
              />
            </label>
          </div>
        </div>

        {/* Display Passports */}
        <div className="grid grid-cols-4 gap-4 p-10">
          {filteredPassports.map((passport, index) => (
            <CartItem
              key={index}
              imageSrc={passport.imageurl}
              passportName={passport.country}
              fees={passport.price}
              id = {passport.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
