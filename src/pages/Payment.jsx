import React from 'react'


const Payment = () => {
  return (
    <div className='mt-10 px-[10%] mb-10 grid gap-6 grid-cols-1 md:grid-cols-2'>
        <div>
            <h2 className='text-2xl font-bold mb-4'>Payment Details</h2>
            <p className='text-gray-600'>Please enter your payment information below.</p>
            <form className='mt-4'>
                <div className='mb-4'>
                    <label className='block mb-2'>Card Number:</label>
                    <input type="text" className='w-full border border-gray-300 rounded-lg p-2' placeholder='Enter your card number' />
                </div>
                <div className='mb-4'>
                    <label className='block mb-2'>Expiry Date:</label>
                    <input type="date" className='w-full border border-gray-300 rounded-lg p-2' />
                </div>
                <div className='mb-4'>
                    <label className='block mb-2'>CVV:</label>
                    <input type="text" className='w-full border border-gray-300 rounded-lg p-2' placeholder='Enter CVV' />
                </div>
                <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>Pay Now</button>
            </form>
            <div className='mt-4 flex items-center justify-center gap-2'>
                <span className='bg-gray-500 h-0.5 w-[20%] mx-auto block'></span>
                <p className='text-center '>or</p>
                <span className='bg-gray-500 h-0.5 w-[20%] mx-auto block'></span>
            </div>
            <div className='mt-4'>
                <h3 className='text-lg font-semibold mt-4 mb-2'>Pay with PayPal</h3>
                <p className='text-gray-600'>You will be redirected to PayPal to complete your purchase securely.</p>
                <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full'>Pay with PayPal</button>
            </div>
            <span className='text-gray-500 text-sm mt-2 block'>*This is a demo payment page. No actual transactions will be processed.</span>
            
        </div>
        <div className='flex items-center justify-center'>
            <div>
            <img className='w-full h-auto rounded-lg shadow-md' src={"https://images.unsplash.com/photo-1614289375793-1f4b2f6f3c4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGF5bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"} alt="Payment" />
            </div>

        </div>
    </div>
  )
}

export default Payment
