import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const navigate = useNavigate();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='w-full h-20 flex justify-between items-center bg-gray-800 px-4 text-lg text-gray-800'>
      <div>
        {/* <h1 className='font-thin text-2xl italic font-serif'></h1> */}
      </div>

      <ul className='hidden md:flex gap-x-8 text-white'>
        <li>
          <Link to='home' smooth={true} duration={500} onClick={() => navigate('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} onClick={() => navigate('/about')}>
            About Us
          </Link>
        </li>
        <li>
          <Link to='services' smooth={true} duration={500} onClick={() => navigate('/services')}>
            Our Services
          </Link>
        </li>
        <li>
          <Link to='appointments' smooth={true} duration={500} onClick={() => navigate('/appointments')}>
            Appointments
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500} onClick={() => navigate('/contact')}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500} onClick={() => navigate('/')}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500} onClick={() => navigate('/about')}>
            About Us
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='services' smooth={true} duration={500} onClick={() => navigate('/services')}>
            Our Services
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='appointments' smooth={true} duration={500} onClick={() => navigate('/appointments')}>
            Appointments
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500} onClick={() => navigate('/contact')}>
            Contact
          </Link>
        </li>
      </ul>

      {/* <div onClick={scrollToTop} className='fixed bottom-4 right-4 z-10 cursor-pointer bg-gray-800 p-2 rounded-full text-white'>
        <FaArrowUp size={20} />
      </div> */}
    </div>
  );
};

export default Navbar;
