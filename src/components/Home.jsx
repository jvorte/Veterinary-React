// Import required components and assets
import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; // Arrow icon for button
import me from '../assets/me.png'; // Your profile photo
import mac from '../assets/mac.png'; // Import mac image
import { Link } from "react-scroll"; // For smooth scrolling

const Home = () => {
  const [activeButton, setActiveButton] = useState('appointment');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    // Main container - full screen with white background
    <div name="home" className="h-screen w-full main">
      {/* Content wrapper - centers content and handles responsive layout */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center h-full">
          {/* Main headline */}
          <h2 className="text-4xl sm:text-7xl font-bold text-gray-100 drop-shadow-xl">
            Furry Friends Vet
          </h2>
          {/* Brief introduction */}
          <p className="text-gray-100 py-4 max-w-md">
            I am currently expanding my skills in modern web technologies.
            My main focus is building web applications using React, Tailwind, Next.js, and MongoDB.
          </p>
          {/* About Me button with hover effect */}
          <div>
            {/* <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link> */}
          </div>
        </div>
        {/* Right side - Profile image */}
        <div className='mb-4 rightImg'>
          {/* <img src={mac} alt="MacBook" className="w-[300px] md:w-[400px] rounded-lg shadow-lg" /> */}
        </div>
      </div>
      <div className='customerMenu'>
        <button
          className={`buttonMenu px-4 py-2 rounded-md m-2 ${activeButton === 'appointment' ? 'bg-black text-white' : 'bg-transparent text-black'} hover:bg-black hover:text-white focus:bg-black focus:text-white`}
          onClick={() => handleButtonClick('appointment')}
        >
          Make an appointment
        </button>
        <button
          className={`buttonMenu px-4 py-2 rounded-md m-2 ${activeButton === 'diary' ? 'bg-black text-white' : 'bg-transparent text-black'} hover:bg-black hover:text-white focus:bg-black focus:text-white`}
          onClick={() => handleButtonClick('diary')}
        >
          My Pet Diary
        </button>
        <button
          className={`buttonMenu px-4 py-2 rounded-md m-2 ${activeButton === 'bonus' ? 'bg-black text-white' : 'bg-transparent text-black'} hover:bg-black hover:text-white focus:bg-black focus:text-white`}
          onClick={() => handleButtonClick('bonus')}
        >
          My Bonous
        </button>
      </div>
    </div>
  );
};

export default Home;
