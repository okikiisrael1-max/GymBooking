import React from 'react'

const Packages = () => {
  return (
    <div className='mt-5 p-10 px-[10%] bg-gray-900 text-white rounded-lg'>
      <h1 className='text-2xl font-bold text-center'>
        Packages
      </h1>
      <h2 className='text-center mb-5'>
        Explore our various membership packages designed to suit your fitness goals.
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-gray-800 p-4 rounded-lg'>
            <h3 className='text-xl font-semibold mb-2'>Basic Package</h3>

            <span className='text-3xl font-bold mb-4'>$20/month</span>
            <p className='mb-4'>Access to gym facilities during staffed hours. Includes basic equipment and locker room access.</p>
            <ul>
                <li>- Access to cardio and strength training equipment</li>
                <li>- Locker room access</li>
                <li>- Free Wi-Fi</li>
            </ul>
            <button className='mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700'>Choose Plan</button>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg'>
            <h3 className='text-xl font-semibold mb-2'>Standard Package</h3>
            <span className='text-3xl font-bold mb-4'>$40/month</span>
            <p className='mb-4'>All Basic Package benefits plus access to group fitness classes and extended hours.</p>
            <ul>

                <li>- All Basic Package benefits</li>
                <li>- Access to group fitness classes</li>
                <li>- Extended gym hours</li>
            </ul>
            <button className='mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700'>Choose Plan</button>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg'>
            <h3 className='text-xl font-semibold mb-2'>Premium Package</h3>
            <span className='text-3xl font-bold mb-4'>$60/month</span>
            <p className='mb-4'>All Basic Package benefits plus access to all gym facilities 24/7, personal training sessions, and nutritional guidance.</p>
            <ul>
                <li>- All Standard Package benefits</li>
                <li>- 24/7 gym access</li>
                <li>- Personal training sessions</li>
                <li>- Nutritional guidance</li>
            </ul>
            <button className='mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700'>Choose Plan</button>   
        </div>
      </div>
    </div>
  )
}

export default Packages
