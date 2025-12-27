import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Booking from './pages/Booking.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import BookingPage from './pages/BookingPage.jsx'
import Payment from './pages/Payment.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/booking-session" element={<BookingPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<h1 className='text-center mt-10 text-3xl font-bold'>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
