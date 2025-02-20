import React from 'react';


const Servises = () => {
  return (
    <div name='servises' className='w-full min-h-screen bg-[#f0f6ebdb] text-gray-800 flex items-center'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
          <div className='w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-green-500 text-center'>Our Servises</p>
              <p className='py-4 text-xl text-gray-800 text-center'>
              At Furry Friends Vet, we offer a wide range of professional veterinary services to meet the needs of your pets. From preventive care to specialized treatments, 
              we’re here to ensure your furry friends receive the best care possible.
              </p>
          </div> 

          {/* Skills grid - 1 column on mobile, 2 on medium, 4 on large screens */}
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 text-center py-8'>

              <div className='hover:scale-110 duration-500  rounded-lg'>
             <img src="/2.jpg" alt=""  />
             <p className='mt-2 '>Health Check-ups: Regular exams to monitor your pet’s overall health.</p>
              </div>
              <div className='hover:scale-110 duration-500 rounded-lg'>
              <img src="/3.jpg" alt=""  /> 
              <p className='mt-2'>Nutritional Counseling: Personalized diet plans for a happy, healthy lifestyle.</p>
              </div>
              <div className='hover:scale-110 duration-500   rounded-lg'>
              <img src="/5.jpg" alt=""  /> 
              <p className='mt-2'>Emergency Care: Immediate attention for urgent medical needs.</p>
              </div>
              <div className=' hover:scale-110 duration-500 rounded-lg'>
                <img src="/4.jpg" alt=""  />
                  <p className='mt-2'>Vaccinations & Parasite Control: Essential protection to keep your pets safe.</p>
              </div>
           
          </div>
      </div>
    </div>
  );
};

export default Servises;
