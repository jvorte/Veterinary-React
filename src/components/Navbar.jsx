// Import necessary dependencies 
import React, { useState } from 'react';
// Import icons we'll use for our navbar
import { FaBars, FaTimes, FaArrowUp } from 'react-icons/fa';

// Import Link for smooth scrolling between sections
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  // State to handle mobile menu toggle (open/closed)
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    // Main navbar container - fixed at top, full width
    <div className='w-full h-20 flex justify-between items-center bg-gray-800 px-4 text-lg text-gray-800'>
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
          <Link to='services' smooth={true} duration={500}>
            Our Services
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
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='services' smooth={true} duration={500}>
            Our Services
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='appointments' smooth={true} duration={500}>
            Appointments
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Arrow to scroll to the top */}
      <div onClick={scrollToTop} className='fixed bottom-4 right-4 z-10 cursor-pointer bg-gray-800 p-2 rounded-full text-white'>
        <FaArrowUp size={20} />
      </div>
    </div>
  );
};

export default Navbar;
