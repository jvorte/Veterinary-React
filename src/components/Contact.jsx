//Contact.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Contact = () => {
  return (
    // Main container with full height and centering
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        {/* Form wrapper with max width */}
        <div className='flex flex-col max-w-[600px] w-full'>
            {/* Header section */}
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Send me a message</p>
            </div>
            {/* Form inputs with consistent styling */}
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </div>
    </div>
  )
}
export default Contact
