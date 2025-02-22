import React from 'react';

const Services = () => {
  return (
    // Main container with full height and centering
    <div name='services' className='w-full min-h-screen text-gray-800 flex items-center mt-20'>
      {/* Content wrapper with max width */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        {/* Header section */}
        <div className='w-full flex justify-center items-center flex-col mb-7'>
          <p className='text-3xl font-bold inline border-b-4 border-slate-500 text-center'>Our Services</p>
          <p className='py-4 text-xl text-gray-800 text-center'>
            At Furry Friends Vet, we offer a wide range of professional veterinary services to meet the needs of your pets. From preventive care to specialized treatments, 
            we’re here to ensure your furry friends receive the best care possible.
          </p>
        </div> 

        {/* Services grid - 1 column on mobile, 2 on medium, 4 on large screens */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8'>
          {/* Service card - Health Check-ups */}
          <div className='hover:scale-110 duration-500 rounded-lg shadow-lg bg-white'>
            <img src="/6.jpg" alt="Health Check-ups" className='rounded-t-lg' />
            <div className='p-4'>
              <h3 className='text-xl font-bold mb-2'>Health Check-ups</h3>
              <p>Regular exams to monitor your pet’s overall health.</p>
            </div>
          </div>

          {/* Service card - Nutritional Counseling */}
          <div className='hover:scale-110 duration-500 rounded-lg shadow-lg bg-white'>
            <img src="/8.jpg" alt="Nutritional Counseling" className='rounded-t-lg' />
            <div className='p-4'>
              <h3 className='text-xl font-bold mb-2'>Nutritional Counseling</h3>
              <p>Personalized diet plans for a happy, healthy lifestyle.</p>
            </div>
          </div>

          {/* Service card - Emergency Care */}
          <div className='hover:scale-110 duration-500 rounded-lg shadow-lg bg-white'>
            <img src="/9.jpg" alt="Emergency Care" className='rounded-t-lg' />
            <div className='p-4'>
              <h3 className='text-xl font-bold mb-2'>Emergency Care</h3>
              <p>Immediate attention for urgent medical needs.</p>
            </div>
          </div>

          {/* Service card - Vaccinations & Parasite Control */}
          <div className='hover:scale-110 duration-500 rounded-lg shadow-lg bg-white'>
            <img src="/10.jpg" alt="Vaccinations & Parasite Control" className='rounded-t-lg' />
            <div className='p-4'>
              <h3 className='text-xl font-bold mb-2'>Vaccinations & Parasite Control</h3>
              <p>Essential protection to keep your pets safe.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;