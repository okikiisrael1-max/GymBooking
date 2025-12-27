import React from 'react'

const Footer = () => {
  return (
    <div className='mt-5'>
      <footer className='bg-gray-800 text-white py-6'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
              <h2 className='text-xl font-bold'>Gym Booking</h2>
              <p className='text-gray-400'>Your fitness journey starts here.</p>
            </div>
            
            <div>
                <h3 className='text-lg font-semibold mb-2'>Quick Links</h3>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-400 hover:text-white'>About</a>
              <a href='#' className='text-gray-400 hover:text-white'>Contact</a>
              <a href='#' className='text-gray-400 hover:text-white'>Privacy Policy</a>
            </div>
            </div>
          
          <div>
                <h3 className='text-lg font-semibold mb-2'>Follow Us</h3>
                <div className='flex space-x-4'>
                  <a href='#' className='text-gray-400 hover:text-white'>Facebook</a>
                  <a href='#' className='text-gray-400 hover:text-white'>Twitter</a>
                  <a href='#' className='text-gray-400 hover:text-white'>Instagram</a>
                </div>
            </div>
            
            </div>
          <div className='mt-6 text-center text-gray-500'>
            &copy; {new Date().getFullYear()} Gym Booking. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
