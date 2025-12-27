import React from 'react'

const BookingPage = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your appointment has been booked successfully!');
        
        const bookingDetails = {
            name,
            email,
            date,
            time
        };
        console.log('Booking Details:', bookingDetails);
        
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        
    }
  return (
    <div className='mt-10 px-[10%] mb-10 grid gap-6 grid-cols-1 md:grid-cols-2'>
      <div>
      <h2 className='text-2xl font-bold mb-4'>Book an Appointment</h2>
        <p className='text-gray-600'>Please fill out the form below to book your session.</p>
        <form onSubmit={handleSubmit} className='mt-4'>
          <div className='mb-4'>
            <label className='block mb-2'>Full Name:</label>
            <input onChange={(e) => setName(e.target.value)} type="text" className='w-full border border-gray-300 rounded-lg p-2' placeholder='Enter your full name' value={name} required />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Email Address:</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className='w-full border border-gray-300 rounded-lg p-2' placeholder='Enter your email address' value={email} required />
          </div>
            <div className='mb-4'>
            <label className='block mb-2'>Preferred Date:</label>
            <input onChange={(e) => setDate(e.target.value)} type="date" className='w-full border border-gray-300 rounded-lg p-2' value={date} required />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Preferred Time:</label>
            <input onChange={(e) => setTime(e.target.value)} type="time" className='w-full border border-gray-300 rounded-lg p-2' value={time} required />
          </div>
          <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>Book Now</button>
        </form>
        </div>
        <div className='flex items-center justify-center'>
        <img className='w-full h-auto rounded-lg shadow-md' src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3VsdGF0aW9uJTIwc2Vzc2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Consultation" />
        </div>
    </div>
  )
}

export default BookingPage
