import React from 'react'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div>
      <div className='mt-10 px-[10%] text-center'>
        <h1 className='text-3xl font-bold text-center mt-10'>Dashboard</h1>
        <p className='text-center mt-2'>Welcome to your dashboard!</p>
      </div>
      <div>
        {/* Dashboard content goes here */}
        <div className='mt-10 px-[10%]'>
          <h2 className='text-2xl font-semibold mb-4'>Your Sessions</h2>
          <p className='text-gray-700'>Here you can view and manage your upcoming sessions.</p>
          <div>
            {/* Example session item */}
            <div className='border border-gray-300 rounded-lg p-4 mb-4'>
              <h3 className='text-xl font-semibold'>Yoga Class</h3>
              <p className='text-gray-600'>Date: July 15, 2024 | Time: 10:00 AM</p>
              <button className='mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300'>Cancel Session</button>
            </div>
            <div className='border border-gray-300 rounded-lg p-4 mb-4'>
              <h3 className='text-xl font-semibold'>Strength Training</h3>
              <p className='text-gray-600'>Date: July 20, 2024 | Time: 2:00 PM</p>
              <button className='mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300'>Cancel Session</button>
            </div>
            <div className='border border-gray-300 rounded-lg p-4 mb-4'>
              <h3 className='text-xl font-semibold'>Nutrition Consultation</h3>
              <p className='text-gray-600'>Date: July 25, 2024 | Time: 11:00 AM</p>
              <button className='mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300'>Cancel Session</button>
            </div>
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-4 mt-10 px-[10%]'>Account Settings</h2>
          <p className='text-gray-700 px-[10%]'>Update your personal information and preferences.</p>
          <div className='mt-4 px-[10%]'>
            <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'>Edit Profile</button>
            <button className='ml-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300'>Change Password</button>
          </div>
          <div className='mt-4 px-[10%]'>
            <button className='bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300'>View Payment History</button>
          </div>
          <div className='mt-4 px-[10%]'>
          <button className='mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300'>Delete Account</button>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-semibold mb-4 mt-10 px-[10%]'>Notifications</h2>
          <p className='text-gray-700 px-[10%]'>Manage your notification settings and preferences.</p>
          <div className='mt-4 px-[10%] flex gap-1.5'>
            <button className='bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300'>Notification Settings</button>
          <button className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300'>Clear All Notifications</button>
          </div>
        </div>
        <div className='mt-5 px-[10%]'>
          <button className='bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300'>Log Out</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard
