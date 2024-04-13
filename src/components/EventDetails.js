import React, { useContext } from 'react'
import { PageData } from '../app-data'
import ReactMarkdown from 'react-markdown'

import P5Wrapper from 'react-p5-wrapper'
import P5Animation from '../sketches/sketch'
// import sketchVideo from '../sketches/sketch-recording.mp4'

function EventDetails() {

  const { state } = useContext(PageData)

  return (
    <div id="event-details">
      <div id="about-graphic">
        <P5Wrapper sketch={P5Animation} />
      </div>
      {
        state.event &&
        <div id="event-content">
          <h4>event details</h4>
          <ReactMarkdown source={state.event.Description} />
        </div>

      }
    </div>
  )
}

export default EventDetails
