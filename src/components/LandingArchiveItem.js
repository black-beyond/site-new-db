import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
//assets
import rightArrow from '../assets/forward-arrow.svg'

function LandingArchiveItem({ data }) {
  const drawerRef = useRef()
  const revealPopup = () => {
    drawerRef.current.classList.toggle("open")
  }
  return (
    <div className="landing-archive-item" ref={drawerRef}>
      <div className="landing-archive-item-top" onClick={revealPopup}>
        <h4 className="landing-archive-date">
          {dayjs(data.Date).format("YYYY")}
        </h4>
        <p className="landing-archive-title">{data.Artist}</p>
        <p className="landing-archive-location">{data.Location}</p>
        <img className="archive-arrow" src={rightArrow} alt="press this button to toggle the event details on or off" />
      </div>
      <div className="landing-archive-item-drawer">
        <div className="archive-item-grid">
          <div className="landing-archive-bg">
            <div
              className="landing-archive-img"
              style={data.Image && {
                backgroundImage: `url('${data.Image[0].url}')`
              }}
              alt="Archive Image"></div>
          </div>
          <p className="landing-archive-text">
            {data.EpisodeDescription}
          </p>
        </div>
        <div className="landing-archive-btn">
          <Link
            className="archive-btn"
            to={`/archive/${data.Slug}`}
          >
            WATCH
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingArchiveItem
