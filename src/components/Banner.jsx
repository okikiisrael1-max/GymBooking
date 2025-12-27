import React from 'react'
import Banner_img from '../assets/banner_img.jpg'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div>
      <div className='block sm:flex m-auto w-[80%] mt-3.5 justify-between items-center p-10 bg-gray-200 rounded-lg'>

        <div> 
          <h1 className='text-4xl font-bold'>Welcome to Gym Booking</h1>
          <h2 className='text-2xl font-semibold mt-1'>Your Fitness Journey Starts Here</h2>
          <p className='mt-3 text-lg'>Book your gym sessions easily and stay fit!</p>
          <Link to="/booking">
          <button className='mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Get Started</button>
          </Link>
        </div>
        <img className='flex max-sm:mt-5 h-60 rounded-lg' src={Banner_img} alt="" />
        
      </div>
    </div>
  )
}

export default Banner
