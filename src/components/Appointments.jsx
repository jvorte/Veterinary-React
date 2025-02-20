import React, { useState } from 'react';

const Appointments = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    petName: '',
    service: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <div name='appointments' className='w-full md:h-screen text-gray-300 bg-gray-100'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* Section header */}
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-800 border-green-500'>Appointments</p>
          <p className='py-6 text-xl text-gray-800 text-center'>
            We understand how important your time is, and that's why scheduling an appointment 
            at Furry Friends Vet is simple and stress-free. Whether your pet needs a routine check-up, vaccinations, or specialized care, you can easily book your visit through our system.
          </p>
        </div>

        {/* Content Section: Form + Image */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Form */}
          <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-md max-w-md mx-auto'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Book an Appointment</h2>
            <input
              type="text"
              name="ownerName"
              placeholder="Owner's Name"
              value={formData.ownerName}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
              required
            />
            <input
              type="text"
              name="petName"
              placeholder="Pet's Name"
              value={formData.petName}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
              required
            >
              <option value="">Select a Service</option>
              <option value="checkup">Health Check-up</option>
              <option value="vaccination">Vaccination</option>
              <option value="nutrition">Nutritional Counseling</option>
              <option value="emergency">Emergency Care</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
              required
            />
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded w-full">
              Book Appointment
            </button>
          </form>

          {/* Image */}
          <div className='flex justify-center'>
            <img
              src="/dog.png" // Αντικατέστησε το με το δικό σου link εικόνας
              alt="Pet Care"
              className='rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
