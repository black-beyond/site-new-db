import React, { useContext } from 'react'
import { PageData } from '../app-data'

/*** P5 ANIMATION ***/
import { ReactP5Wrapper } from '@p5-wrapper/react'
import P5Animation from '../sketches/sketch'

function AboutBrief() {
  const { state } = useContext(PageData)

  return (
    <div id="about-brief">
      <div id="about-graphic">
        <ReactP5Wrapper sketch={P5Animation} />
      </div>
      <div id="about-content">
        <h4>about black beyond</h4>
        {state.about.copyBrief && state.about.copyBrief.split('  ').map((txt, i) => <p key={`about-brief-${i}`}>{txt}</p>)}
      </div>
    </div>
  )
}

export default AboutBrief
