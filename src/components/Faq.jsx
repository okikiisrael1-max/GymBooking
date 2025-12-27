import React from 'react'

const Faq = () => {
  return (
    <div className='mt-5 mb-5 px-[10%]'>
      <h2 className='text-2xl font-semibold mb-4 mt-8'>Frequently Asked Questions</h2>
      <div className='mt-4'>
        <div className='border border-gray-300 rounded-lg p-4 mb-4'>
          <h3 className='text-xl font-semibold'>How do I book a session?</h3>
          <p className='text-gray-700'>You can book a session by navigating to the "Book Your Session" page and selecting an available time slot.</p>
        </div>
        <div className='border border-gray-300 rounded-lg p-4 mb-4'>
          <h3 className='text-xl font-semibold'>What is your cancellation policy?</h3>
          <p className='text-gray-700'>You can cancel your booked session up to 24 hours in advance without any charges. Cancellations made within 24 hours of the session will incur a fee.</p>
        </div>
        <div className='border border-gray-300 rounded-lg p-4 mb-4'>
          <h3 className='text-xl font-semibold'>Do you offer personal training sessions?</h3>
          <p className='text-gray-700'>Yes, we offer personalized training sessions with our certified trainers. You can book these sessions through our booking system.</p>
        </div>
      </div>
    </div>
  )
}

export default Faq
