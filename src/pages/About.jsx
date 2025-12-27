import React from 'react'
import Footer from '../components/Footer'
import Mission from '../components/Mission'
import Story from '../components/Story'

const About = () => {
  return (
    <div>
      <div>
        {/* About page content goes here */}
      </div>
      <div className='mt-10 px-[10%] text-center'>
        <h1 className='text-3xl font-bold text-center mt-10'>About Us</h1>
        <p className='text-center mt-2'>Learn more about our gym and what we offer.</p>

      </div>
      <Story/>
        <Mission />
        <div className='mt-8 px-[10%]'>
          <h2 className='text-2xl font-semibold mb-4 mt-8'>Meet the Team</h2>
          <p className='text-gray-700'>Our team of certified trainers and staff are passionate about fitness and dedicated to helping you succeed. Get to know the people who will support you on your journey.</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
          
            <div className='mt-4 '>
              <div className='border border-gray-300 rounded-lg p-4'>
                <h3 className='text-xl font-semibold'>John Doe</h3>
                <p className='text-gray-600'>Certified Personal Trainer</p>
              </div>
            </div>
            <div className='mt-4'>
              <div className='border border-gray-300 rounded-lg p-4'>
                <h3 className='text-xl font-semibold'>Jane Smith</h3>
                <p className='text-gray-600'>Nutrition Specialist</p>
              </div>
            </div>
            <div className='mt-4'>
              <div className='border border-gray-300 rounded-lg p-4'>
                <h3 className='text-xl font-semibold'>Mike Johnson</h3>
                <p className='text-gray-600'>Fitness Coach</p>
              </div>
            </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
