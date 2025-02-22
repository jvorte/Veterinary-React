import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Appointments() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    ownerName: '',
    petName: '',
    service: '',
    date: '',
    time: '',
  });

  const [error, setError] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8000/api/action.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong with the server!');
      }
      return response.json();
    })
    .then((data) => {
      if (data.success) {
        setShowConfirmationModal(true);  // Show confirmation modal on success
      } else {
        setError(data.error || "An unexpected error occurred.");
      }
    })
    .catch((error) => {
      setError(error.message || "An error occurred while adding the appointment.");
    });
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
    navigate("/");  // Redirect to home or another page after closing the modal
  };

  return (
    <div name='appointments' className='w-full md:h-screen text-gray-300 mt-24 p-4'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
        {/* Section header */}
        <div className='w-full flex justify-center items-center flex-col'>
          <p className='text-3xl font-bold inline border-b-4 text-gray-800 border-slate-500'>Appointments</p>
          <p className='py-6 text-md text-gray-800 text-center'>
            We understand how important your time is, and that's why scheduling an appointment
            at Furry Friends Vet is simple and stress-free. Whether your pet needs a routine check-up, vaccinations, or specialized care, you can easily book your visit through our system.
          </p>
        </div>

        {/* Content Section: Form + Image */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* Form */}
          <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto'>
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
            <button type="submit" className="bg-slate-500 text-white py-2 px-4 rounded w-full">
              Book Appointment
            </button>
          </form>

          {/* Error Message */}
          {error && <div className="text-red-500 mt-4">{error}</div>}

          {/* Image */}
          <div className='dog flex justify-center'>
            <img
              src="/dog.png" // Replace this with your actual image URL
              alt="Pet Care"
              className='rounded-lg'
            />
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Appointment Confirmed!</h2>
            <p className="text-gray-800 mb-4">Your appointment has been successfully booked. We look forward to seeing you and your pet!</p>
            <button 
              onClick={closeConfirmationModal} 
              className="bg-green-500 text-white py-2 px-4 rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointments;
