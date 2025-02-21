// Import required components and assets
import React, { useState } from 'react';
import { Link } from 'react-scroll';

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
          <h1 className="mainTitle text-4xl sm:text-7xl font-bold text-gray-100 drop-shadow-xl">
            Furry Friends Vet
          </h1>
          {/* Brief introduction */}
          <p className="text-gray-100 py-4 max-w-md">
          Where your pets are treated like family! At Furry Friends Vet, we provide compassionate care and expert services to keep your furry friends happy, healthy, and thriving
          </p>
          {/* About Me button with hover effect */}
          <div>
  
          </div>
        </div>
        {/* Right side - Profile image */}
        <div className='mb-4 rightImg'>
          {/* <img src={mac} alt="MacBook" className="w-[300px] md:w-[400px] rounded-lg shadow-lg" /> */}
        </div>
      </div>
      <div className='customerMenu'>
        <Link to='appointments' smooth={true} duration={500}>
          <button
            className={`buttonMenu px-4 py-2 rounded-md m-2 ${activeButton === 'appointment' ? 'bg-black text-white' : 'bg-transparent text-black'} hover:bg-black hover:text-white focus:bg-black focus:text-white`}
            onClick={() => handleButtonClick('appointment')}
          >
            Make an appointment
          </button>
        </Link>
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
          My Bonus
        </button>
      </div>
    </div>
  );
};

export default Home;
