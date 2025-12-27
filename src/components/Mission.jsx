import React from 'react'

const Mission = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold text-center mt-5'>Our Mission</h1>
        <p className='text-center mt-2'>To empower individuals to live healthier, more active lives through accessible fitness programs and personalized training.</p>
        <div className='mt-5 px-[10%]'>
            <h2 className='text-2xl font-semibold mb-4 mt-8'>Our Mission Statement</h2>
            <p className='text-gray-700'>At our gym, our mission is to provide a welcoming and inclusive environment where individuals of all fitness levels can achieve their health and wellness goals. We are committed to offering top-quality facilities, expert guidance, and a supportive community that inspires and motivates our members to lead active lifestyles.</p>
        </div>
        <div className='mt-5 px-[10%]'>
            <h2 className='text-2xl font-semibold mb-4 mt-8'>Our Values</h2>
            <ul className='list-disc list-inside text-gray-700'>
                <li className='mb-2'>Inclusivity: We believe fitness is for everyone, regardless of age, ability, or background.</li>
                <li className='mb-2'>Community: We foster a supportive environment where members can connect and motivate each other.</li>
                <li className='mb-2'>Excellence: We are committed to providing high-quality services and continuously improving our offerings.</li>
                <li className='mb-2'>Integrity: We operate with honesty and transparency in all our interactions.</li>
            </ul>
        </div>
    </div>
  )
}

export default Mission
