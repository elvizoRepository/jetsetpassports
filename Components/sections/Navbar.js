'use client'
import Link from 'next/link'
import React,{useRef,useState,useEffect} from 'react'
import Logo from '../Logo'
import './Navbar.css'
import { RiMenu4Line } from 'react-icons/ri'
import {IoMdClose} from 'react-icons/io'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function OPenNav(){
    setNavbarOpen(true); //set to true
  }
  function CloseNav(){
    setNavbarOpen(false); //set to false
  }
  const handleLinkClick = () => {
    closeNav();
  };
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (
        navbarOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
      return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      };

  }, [navbarOpen]);


  return (
    <section className='navbar'>
        <Logo/>
        <nav className='navbar-links'>
            <Link href='/' className=''>Home</Link>
            <Link href='/about-us' className=''>About Us</Link>
            <Link href='/passports' className=''>Passports</Link>
            <Link href='/contact' className=''>Contact Us</Link>
        </nav>
        <RiMenu4Line className='menu' onClick={OPenNav}/>

        <div ref={ref} className={`side-nav ${navbarOpen ? ' show-side-nav' : ''}`}>
            <IoMdClose className='menu' onClick={CloseNav}/>
            <Link href='/' onClick={handleLinkClick}>Home</Link>
            <Link href='/about-us' onClick={handleLinkClick}>About Us</Link>
            <Link href='/passports' onClick={handleLinkClick}>Passports</Link>
            <Link href='/contact' onClick={handleLinkClick}>Contact Us</Link>
        </div>
    </section>
  )
}

export default Navbar