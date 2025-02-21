//Contact.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react'
// Import FontAwesome icons
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  return (
    // Main container with full height and centering
    <div name='contact' className='w-full h-screen bg-slate-800 flex flex-col justify-center items-center p-2'>
        {/* Form wrapper with max width */}
        <div className='flex flex-col max-w-[600px] w-full'>
            {/* Header section */}
            <div className='pb-4 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-5xl font-bold inline border-b-4 border-slate-300 text-gray-100'>Contact</p>
                <p className='text-gray-100 py-2'>Send me a message</p>
            </div>
            {/* Form inputs with consistent styling */}
            <input className='bg-[#f4f7ff] p-1 rounded-[1vw]' type="text" placeholder='Name' name='name' />
            <input className='my-2 p-2 bg-[#f4f7ff] rounded-[1vw]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#f4f7ff] p-2 rounded-[1vw]' name="message" rows="6" placeholder='Message'></textarea>
            <button className='bg-neutral-100 w-30 text-black rounded-[1vw] hover:bg-slate-500 hover:border-cyan-500 px-4 py-2 my-4 mx-auto flex items-center'>Send</button>
        </div>
        {/* Social footer */}
        <div className='flex flex-col items-center mt-4'>
            <p className='text-gray-100 text-center'>Follow Us:</p>
            <div className='flex space-x-4 mt-2'>
                <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                    <FaFacebook size={30} />
                </a>
                <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                    <FaTwitter size={30} />
                </a>
                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                    <FaInstagram size={30} />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact
