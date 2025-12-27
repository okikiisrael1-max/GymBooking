import React from 'react'

const Story = () => {
  return (
    <div>
      <div className='mt-5 px-[10%] text-center'>
        <h2 className='text-2xl font-semibold mb-4 mt-8'>Our Story</h2>
        <p className='text-gray-700'>Founded in 2020, our gym has been dedicated to helping people achieve their fitness goals. We provide state-of-the-art equipment, experienced trainers, and a supportive community to help you reach your full potential.</p>
      </div>
      <div>
        <div className='mt-5 px-[10%] text-center'>
          <h2 className='text-2xl font-semibold mb-4 mt-8'>Why Choose Us?</h2>
          <p className='text-gray-700'>We believe in a holistic approach to fitness, focusing not just on physical strength but also on mental well-being. Our personalized training programs and nutrition plans are designed to cater to your unique needs.</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 px-[10%] text-center'>

            <div className='mt-4 w-full rounded-lg shadow-lg p-4 border border-gray-300'>
                <h3 className='text-xl font-semibold mb-2 mt-4'>Our Trainers</h3>
                <p className='text-gray-700'>Our team of certified trainers are passionate about fitness and committed to helping you succeed. They bring a wealth of knowledge and experience to guide you on your fitness journey.</p>
            </div>
            <div className='mt-4 w-full rounded-lg shadow-lg p-4 border border-gray-300'>
                <h3 className='text-xl font-semibold mb-2 mt-4'>Our Community</h3>
                <p className='text-gray-700'>We foster a welcoming and inclusive environment where members can connect, motivate each other, and celebrate their achievements together.</p>
            </div>
            <div className='mt-4 w-full rounded-lg shadow-lg p-4 border border-gray-300'>
                <h3 className='text-xl font-semibold mb-2 mt-4'>Our Facilities</h3>
                <p className='text-gray-700'>Our gym features modern equipment, spacious workout areas, and clean amenities to ensure a comfortable and effective workout experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
