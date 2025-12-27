import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
  return (
    <div> 
      <nav className='p-5 bg-gray-800 text-white flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Gym Booking</h1>
        <ul className='hidden gap-10 sm:gap-5 sm:flex'>
          <li className='hover:text-gray-300'><NavLink className={NavLink} to="/">Home</NavLink></li>
          <li className='hover:text-gray-300'><NavLink className={NavLink} to="/booking">Booking</NavLink></li>
          <li className='hover:text-gray-300'><NavLink className={NavLink} to="/dashboard">Dashboard</NavLink></li>
          <li className='hover:text-gray-300'><NavLink className={NavLink} to="/About">About</NavLink></li>
          <li className='hover:text-gray-300'><NavLink className={NavLink} to="/Contact">Contact</NavLink></li>
        </ul>

      <ul className='flex gap-5 justify-center items-center'>
        <Link to="/login" className='bg-blue-600 px-4 py-2 rounded hover:bg-blue-700'>Login</Link>
        <span onClick={()=> !setMenu(showMenu)} className='sm:hidden'>Menu</span>
      </ul>
      <ul className={` ${menu ? 'flex' : 'hidden'} gap-10 sm:gap-5 sm:hidden flex-col absolute top-16 left-0 w-full bg-gray-800 p-5`}>
          <li onClick={()=> !setMenu(false)} className='hover:text-gray-300'><NavLink className={NavLink} to="/">Home</NavLink></li>
          <li onClick={()=> !setMenu(false)} className='hover:text-gray-300'><NavLink className={NavLink} to="/booking">Booking</NavLink></li>
          <li onClick={()=> !setMenu(false)} className='hover:text-gray-300'><NavLink className={NavLink} to="/dashboard">Dashboard</NavLink></li>
          <li onClick={()=> !setMenu(false)} className='hover:text-gray-300'><NavLink className={NavLink} to="/About">About</NavLink></li>
          <li onClick={()=> !setMenu(false)} className='hover:text-gray-300'><NavLink className={NavLink} to="/Contact">Contact</NavLink></li>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar
