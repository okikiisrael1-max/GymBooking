import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <div className='mt-10 px-[10%] text-center'>
        <h1 className='text-3xl font-bold text-center mt-10'>Contact Us</h1>
        <p className='text-center mt-2'>We'd love to hear from you!</p>
      </div>
      <div className='mt-10 px-[10%]'>
        <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
        <p className='text-gray-700'>Have questions or feedback? Reach out to us using the form below.</p>
        <form className='mt-4'>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-700 font-medium mb-2'>Name</label>
            <input type='text' id='name' name='name' className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500'/>
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 font-medium mb-2'>Email</label>
            <input type='email' id='email' name='email' className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500'/>
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-gray-700 font-medium mb-2'>Message</label>
            <textarea id='message' name='message' rows={4} className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500'></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Send Message</button>
        </form>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8'>

        <div>
          <h2 className='text-2xl font-semibold mt-10 mb-4'>Business Hours</h2>
          <p className='text-gray-700'>Monday - Friday: 6:00 AM - 10:00 PM</p>
          <p className='text-gray-700'>Saturday: 8:00 AM - 8:00 PM</p>
          <p className='text-gray-700'>Sunday: 8:00 AM - 6:00 PM</p>
        </div>
        <div>
          <h2 className='text-2xl font-semibold mt-10 mb-4'>Our Contact Information</h2>
          <p className='text-gray-700'>Email: contact@gymbooking.com</p>
          <p className='text-gray-700'>Phone: (123) 456-7890</p>
          <p className='text-gray-700'>Address: 123 Fitness Street, Health City, HC 12345</p>
        </div>
        <div>
          <h2 className='text-2xl font-semibold mt-10 mb-4'>Follow Us</h2>
          <p className='text-gray-700'>Stay connected through our social media channels:</p>
          <ul className='list-disc list-inside'>
            <li className='text-gray-700'>Facebook</li>
            <li className='text-gray-700'>Instagram</li>
            <li className='text-gray-700'>Twitter</li>
          </ul>
        </div>           
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
