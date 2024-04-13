import React, { useContext } from 'react'
import { PageData } from '../app-data'

function EventRSVP({ inHero = false }) {

  const { state } = useContext(PageData)
  
  return (
    <React.Fragment>
      {
        state.event &&
        <div id="event-rsvp" className={inHero ? "in-hero" : ""}>
          <h1>{state.event.Title}</h1>
          <h1>{state.event.DateTime}</h1>
          <a href={state.event.SignupURL}>
            <span>{state.event.SignupText}</span>
          </a>
        </div>
      }
    </React.Fragment>
  )
}

export default EventRSVP
