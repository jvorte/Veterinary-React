import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const navigate = useNavigate();

  const handleLinkClick = (destination) => {
    setNav(false);  // Κλείνει το μενού όταν επιλέγεται κάτι
    navigate(destination);  // Μεταφέρει στην κατάλληλη σελίδα
  };

  return (
    <div className='w-full h-20 flex justify-between items-center bg-gray-800 px-4 text-lg text-white fixed top-0 left-0 z-20'>
      <div className='text-xl font-bold'>
      Furry Friends Vet
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500} onClick={() => handleLinkClick('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} onClick={() => handleLinkClick('/about')}>
            About Us
          </Link>
        </li>
        <li>
          <Link to='services' smooth={true} duration={500} onClick={() => handleLinkClick('/services')}>
            Our Services
          </Link>
        </li>
        <li>
          <Link to='appointments' smooth={true} duration={500} onClick={() => handleLinkClick('/appointments')}>
            Appointments
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500} onClick={() => handleLinkClick('/contact')}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleClick} className='md:hidden z-30 cursor-pointer'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${nav ? 'block' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center z-40`}>
        <ul>
          <li className='py-4 text-3xl'>
            <Link onClick={() => handleLinkClick('/')} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-4 text-3xl'>
            <Link onClick={() => handleLinkClick('/about')} to='about' smooth={true} duration={500}>
              About Us
            </Link>
          </li>
          <li className='py-4 text-3xl'>
            <Link onClick={() => handleLinkClick('/services')} to='services' smooth={true} duration={500}>
              Our Services
            </Link>
          </li>
          <li className='py-4 text-3xl'>
            <Link onClick={() => handleLinkClick('/appointments')} to='appointments' smooth={true} duration={500}>
              Appointments
            </Link>
          </li>
          <li className='py-4 text-3xl'>
            <Link onClick={() => handleLinkClick('/contact')} to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
