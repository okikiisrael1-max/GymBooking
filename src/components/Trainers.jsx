import React from 'react'
import { trainers } from '../assets/assets'
import { Link } from 'react-router-dom'

const Trainers = () => {
  return (
    <div>
    <div className='mt-10 px-[10%] text-center'>
      <h1 className='text-3xl font-bold mb-4'>Trainers</h1>
      <p className='text-gray-700'>Our expert trainers are here to guide you on your fitness journey. Meet our team of certified professionals dedicated to helping you achieve your goals.</p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 px-[10%]'>
      <div className='bg-gray-100 p-4 rounded-lg text-center shadow-lg'>
        <img src={trainers[0]} alt="Trainer 1" className='mx-auto w-20 h-20 object-cover rounded-full mb-4' />
        <h2 className='text-xl font-semibold'>John Doe</h2>
        <p className='text-gray-600'>Strength & Conditioning Coach</p>
        <p className='my-1.5'>
            With over 10 years of experience, John specializes in personalized training programs that focus on strength building and overall fitness.
        </p>
        <Link to='/book-session' className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Book Session
        </Link>
      </div>
      <div className='bg-gray-100 p-4 rounded-lg text-center shadow-lg'>
        <img src={trainers[1]} alt="Trainer 2" className='mx-auto w-20 h-20 object-cover rounded-full mb-4' />
        <h2 className='text-xl font-semibold'>Jane Smith</h2>
        <p className='text-gray-600'>Yoga Instructor</p>
        <p className='my-1.5'>
            Jane brings a holistic approach to fitness with her expertise in yoga and mindfulness, helping clients improve flexibility and mental well-being.
        </p>
        <Link to='/book-session' className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Book Session
        </Link>
      </div>
        <div className='bg-gray-100 p-4 rounded-lg text-center shadow-lg'>
          <img src={trainers[2]} alt="Trainer 3" className='mx-auto w-20 h-20 object-cover rounded-full mb-4' />
          <h2 className='text-xl font-semibold'>Mike Johnson</h2>
          <p className='text-gray-600'>Nutrition Specialist</p>
            <p className='my-1.5'>
                Mike focuses on creating tailored nutrition plans that complement fitness routines, ensuring clients achieve optimal health and performance.
            </p>
            <Link to='/book-session' className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Book Session
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Trainers
