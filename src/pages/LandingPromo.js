import React from 'react'
// components
import Header from '../components/Header'
import LandingHero from '../components/LandingHero'
import EventRSVP from '../components/EventRSVP'
import EventDetails from '../components/EventDetails'
import Subscribe from '../components/Subscribe'
import ShopPopup from '../components/ShopPopup'
import LandingArchive from '../components/LandingArchive'

function LandingPromo() {
  return (
    <div>
      <Header />
      <ShopPopup />
      <LandingHero page="Promo" />
      <EventRSVP />
      <EventDetails />
      <LandingArchive page="Promo" />
      <Subscribe inLivestream={true} />
    </div>
  )
}

export default LandingPromo
