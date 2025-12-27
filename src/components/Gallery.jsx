import React from 'react'
import images from '../assets/assets'

const Gallery = () => {
  return (
    <div className='mt-5'>
      <h1 className='text-2xl font-bold text-center'>
        Gallery
      </h1>
      <h2 className='text-center mb-5'>
        Explore our collection of images and media showcasing our facilities and events.
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-[10%] '>
        {images.map((img, index) => (
            <div key={index}>
                <div className='overflow-hidden rounded-lg shadow-lg'>
                    <img src={img} alt={`Gallery Image ${index + 1}`} className='flex'/>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
