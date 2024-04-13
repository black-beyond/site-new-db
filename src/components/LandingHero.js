import logo from '../assets/black-beyond.png'
// components
import IntroGraphic from './IntroGraphic'
import VideoBackground from './VideoBackground'
import Subscribe from './Subscribe'
import EventRSVP from './EventRSVP'
import DownButton from './DownButton'

function LandingHero({page}) {
  return (
    <div id="landing-hero">
      <VideoBackground
        position="center"
      />
      {
        logo &&
        <img
          id="corner-logo"
          src={logo}
          alt="Black Beyond Logo"
        />
      }
      <IntroGraphic />
      {
        page === "Default" ? 
        <Subscribe inHero={true} /> : 
        <EventRSVP inHero={true} />
      }
      <DownButton />
    </div>
  )
}

export default LandingHero
