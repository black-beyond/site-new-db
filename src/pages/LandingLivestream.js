import React from 'react'

/** COMPONENTS **/
import LivestreamHero from '../components/LivestreamHero'
import Schedule from '../components/Schedule'
import Subscribe from '../components/Subscribe'
import EventDetails from '../components/EventDetails'
import ShopPopup from '../components/ShopPopup'

function LandingLivestream() {
  return (
    <div id="landing-livestream">
      <ShopPopup />
      <LivestreamHero />
      <Schedule />
      <EventDetails />
      <Subscribe inLivestream={true} />
    </div>
  )
}

export default LandingLivestream
