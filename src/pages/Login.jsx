import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div>
      <form className='mt-20 mx-auto p-10 bg-gray-100 text-black rounded-lg max-w-[90%] w-96 shadow-lg'>
        <h1 className='text-2xl font-bold'>Welcome Back!</h1>
        <p className='text-gray-600'>Please, Enter your details!</p>
        <div className='mt-5 flex flex-col gap-4'>
          <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <p><input type="checkbox" name="remember" id="" className=' accent-blue-600' /> Remember me</p>
          <p className='text-blue-500 hover:underline cursor-pointer'>Forgot Password?</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
          <span>
            Don't have an account? <Link to="/signup" className='text-blue-500 hover:underline cursor-pointer'>Sign Up</Link>
          </span>
        </div>
      </form>
      <Footer/>
    </div>
  )
}

export default Login
