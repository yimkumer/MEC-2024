import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import HomePage from './HomePage'
import ContactUs from '../ContactUs'
import Map from '../Map'


const Home = () => {
  return (
    <div>
    <Header/>
    <HomePage/>
    <ContactUs/>
    <Map/>
    <Footer/>
    </div>
    
  )
}

export default Home
