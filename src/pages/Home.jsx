import React from 'react'
import Navbar from '../components/Navebar'
import Hero from '../components/Hero'
import Details from '../components/Details'
import DetailsTwo from '../components/DetailsTwo'
import PopularCources from '../components/PopularCources'
import Learning from '../components/Learning'
import Skills from '../components/Skills'
import BecomeInstructor from '../components/BecomeInstructor'
const Home = () => {
  return (
    <div className='bg-black '>
        <Hero />
        <Details />
        <DetailsTwo />
        <PopularCources />
        <Learning />
        <Skills />
        <BecomeInstructor />

    </div>
  )
}

export default Home