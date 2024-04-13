import React from 'react'

/* COMPONENTS */
import Header from '../components/Header'
import LandingHero from '../components/LandingHero'
import Subscribe from '../components/Subscribe'
import AboutBrief from '../components/AboutBrief'
import Footer from '../components/Footer'
import ShopPopup from '../components/ShopPopup'

function Landing() {
  return (
    <div id="landing">
      <Header/>
      <ShopPopup />
      <LandingHero page="Default" />
      <Subscribe />
      <AboutBrief />
      <Footer />
    </div>
  )
}

export default Landing
