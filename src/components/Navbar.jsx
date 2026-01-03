import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const linkClass = ({ isActive }) =>
    isActive ? 'text-blue-400' : 'hover:text-gray-300'

  return (
    <nav className="p-5 bg-gray-800 text-white flex justify-between items-center relative">
      <h1 className="text-xl font-bold">Gym Booking</h1>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-8 items-center">
        <li><NavLink className={linkClass} to="/">Home</NavLink></li>
        <li><NavLink className={linkClass} to="/about">About</NavLink></li>
        <li><NavLink className={linkClass} to="/contact">Contact</NavLink></li>

        {/* Only show these links when signed in */}
        <SignedIn>
          <li><NavLink className={linkClass} to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink className={linkClass} to="/booking">Booking</NavLink></li>
          <li><NavLink className={linkClass} to="/profile">Profile</NavLink></li>
        </SignedIn>

        {/* Auth Buttons */}
        <SignedOut>
          <Link
            to="/signin"
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </Link>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </ul>

      {/* Mobile Toggle */}
      <span onClick={() => setMenu(!menu)} className="sm:hidden cursor-pointer">
        Menu
      </span>

      {/* Mobile Menu */}
      <ul className={`${menu ? 'flex' : 'hidden'} sm:hidden flex-col gap-5 absolute top-16 left-0 w-full bg-gray-800 p-5`}>
        <li onClick={() => setMenu(false)}><NavLink className={linkClass} to="/">Home</NavLink></li>
        <li onClick={() => setMenu(false)}><NavLink className={linkClass} to="/about">About</NavLink></li>
        <li onClick={() => setMenu(false)}><NavLink className={linkClass} to="/contact">Contact</NavLink></li>

        <SignedIn>
          <li onClick={() => setMenu(false)}><NavLink className={linkClass} to="/dashboard">Dashboard</NavLink></li>
          <li onClick={() => setMenu(false)}><NavLink className={linkClass} to="/booking">Booking</NavLink></li>
          <li onClick={() => setMenu(false)}><NavLink className={linkClass} to="/profile">Profile</NavLink></li>
        </SignedIn>

        <SignedOut>
          <Link
            onClick={() => setMenu(false)}
            to="/signin"
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </Link>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </ul>
    </nav>
  )
}

export default Navbar
