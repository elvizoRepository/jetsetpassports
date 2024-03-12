"use client"
import Testimonial from "@/Components/sections/Testimonial";
import Hero from "@/Components/sections/Hero";
import About from "@/Components/sections/About";
import Cta from "@/Components/sections/Cta";
import WhyUs from "@/Components/sections/WhyUs";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main className="home">
      {isLoading ? (
        // Display the loading GIF while the page is still loading
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
          <img src='../../loading.gif' alt="Loading..." className="w-full h-full object-cover" />
        </div>
      ) : (
        <>
        <Hero/>
        <About/>
        <Testimonial/>
        <Cta/>
        <WhyUs/>
        </>
      )}
    </main>
  );
}
