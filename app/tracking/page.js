"use client"
import Banner from '@/Components/Banner'
import React, { useEffect, useState } from 'react'

export default function Page() {
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
            <img src='../../loading.gif' alt="Loading..." className="w-full h-full object-cover" />
            </div>
        ) : (
          <>
          <Banner title='Tracking System'/>
          <section>Tracking system is currently down check again later Thank You.</section>
          </>
        )}

    </div>

  )
}
