import React, { useContext } from 'react'
import { PageData } from '../app-data'
import { Link } from 'react-router-dom'

/* COMPONENTS */
import VideoBackground from './VideoBackground'
import LivestreamVideo from './LivestreamVideo'
import StreamChat from './StreamChat'
// import PaypalDonationButton from './PaypalDonationButton'
import LivestreamDonateButton from './LivestreamDonateButton'

function LivestreamHero() {

  const { state } = useContext(PageData);

  return (
    <div id="livestream-hero">
      <VideoBackground
        position="center"
        className="livestream"
      />
      {
        state.assets.logo && 
        <Link to="/">
          <img 
            id="corner-logo" 
            className="livestream" 
            src={state.assets.logo} 
            alt="Black Beyond Logo" 
          />
        </Link>
      }
      <div id="livestream-grid">
        <LivestreamVideo/>
        <div id="livestream-sidebar">
          <StreamChat />
          <LivestreamDonateButton />
        </div>
        <h3 id="livestream-title">{state.stream.title}</h3>
        <p id="donate-text" className="p-small">{state.stream.donateText}</p>
      </div>
    </div>
  )
}

export default LivestreamHero
