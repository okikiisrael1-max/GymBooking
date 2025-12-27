import React from 'react'
import Footer from '../components/Footer'

const SignUp = () => {
  return (
    <div>
      <div className='max-w-md mx-auto w-[90%] mt-10 p-6 border border-gray-300 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-center mt-10'>Sign Up</h1>
        <p className='text-center mt-2'>Create your account to get started!</p>
        <form className='mt-6 flex flex-col gap-4'>
          <input type="text" placeholder="Full Name" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Confirm Password" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <p><input type="checkbox" name="terms" id="" className=' accent-blue-600' /> I agree to the <a href="/terms" className='text-blue-500 hover:underline'>Terms of Service</a> and <a href="/privacy" className='text-blue-500 hover:underline'>Privacy Policy</a>.</p>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Sign Up</button>
            <span>
                Already have an account? <a href="/login" className='text-blue-500 hover:underline'>Login</a>
            </span>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default SignUp
