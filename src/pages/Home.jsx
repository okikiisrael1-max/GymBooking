import React from 'react'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Packages from '../components/Packages'
import Trainers from '../components/Trainers'
import Footer from '../components/Footer'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <div>
      <Banner />
      <Gallery />
      <Packages />
      <Trainers/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home
