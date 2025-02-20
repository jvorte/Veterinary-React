// Import necessary dependencies 
import React, { useState } from 'react';
// Import icons we'll use for our navbar
import { FaBars, FaTimes, FaGitSquare, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
// Import Link for smooth scrolling between sections
import { Link } from 'react-scroll';

const Navbar = () => {
  // State to handle mobile menu toggle (open/closed)
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // Main navbar container - fixed at top, full width
    <div className='fixed w-full h-20 flex justify-between items-center px-4 text-lg text-gray-800'>
      {/* Your logo or brand name */}
      <div>
        {/* <h1 className='font-thin text-2xl italic font-serif'></h1> */}
      </div>

      {/* Desktop Menu - hidden on mobile, flex on medium screens and up */}
      <ul className='hidden md:flex gap-x-8 text-white'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to='servises' smooth={true} duration={500}>
           Our Servises
          </Link>
        </li>
        <li>
          <Link to='appointments' smooth={true} duration={500}>
          Appointments
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon - visible only on mobile */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu - full screen overlay */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
      </ul>

     
    </div>
  );
};

export default Navbar;
