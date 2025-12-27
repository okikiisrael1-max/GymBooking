import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Booking = () => {
  return (
    <div>
      <div className='mt-10 px-[10%]'>
        <h1 className='text-3xl font-bold text-center mt-10'>Book Your Session</h1>
        <p className='text-center mt-2'>Choose your preferred date and time for your workout session.</p>
        <div className='mt-10'>
          <h2 className='text-2xl font-semibold mb-4'>Available Sessions</h2>
          <p className='text-gray-700'>Select a session from the options below:</p>
          <div className='mt-4'>
            <div className='border border-gray-300 rounded-lg p-4 mb-4'>
              <h3 className='text-xl font-semibold'>Yoga Class</h3>
              <p className='text-gray-600'>Date: July 15, 2024 | Time: 10:00 AM</p>
              <Link to="/booking-session">
              <button className='mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition duration-300'>Book Session</button>
              </Link>
            </div>
            <div className='border border-gray-300 rounded-lg p-4 mb-4'>
              <h3 className='text-xl font-semibold'>Strength Training</h3>
              <p className='text-gray-600'>Date: July 20, 2024 | Time: 2:00 PM</p>
              <Link to="/booking-session">
              <button className='mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition duration-300'>Book Session</button>
              </Link>
            </div>
            <div className='border border-gray-300 rounded-lg p-4 mb-4'>
              <h3 className='text-xl font-semibold'>Nutrition Consultation</h3>
              <p className='text-gray-600'>Date: July 25, 2024 | Time: 11:00 AM</p>
              <Link to="/booking-session">
              <button className='mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition duration-300'>Book Session</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Additional booking information or features can be added here */}
        <div>
          <h2 className='text-2xl font-semibold mb-4 mt-8 px-[10%]'>How It Works</h2>
          <p className='text-gray-700 px-[10%]'>Booking your session is easy! Simply choose a session that fits your schedule and click the "Book Session" button. You will receive a confirmation email with all the details.</p>
        </div>
        <div>
          <h2 className='text-2xl font-semibold mb-4 mt-8 px-[10%]'>Need Help?</h2>
          <p className='text-gray-700 px-[10%]'>If you have any questions or need assistance with booking, feel free to contact our support team at support@gymbooking.com or call us at (123) 456-7890.</p>
        </div>
        <div>
          <h2 className='text-2xl font-semibold mb-4 mt-8 px-[10%]'>Cancellation Policy</h2>
          <p className='text-gray-700 px-[10%]'>You can cancel your booked session up to 24 hours in advance without any charges. Cancellations made within 24 hours of the session will incur a fee.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Booking
