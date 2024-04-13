import React from 'react'
import MailchimpForm from './MailchimpForm'
import Footer from './Footer'

function Subscribe({ inHero = false, inLivestream = false }) {

  const setClasses = () => `${inHero ? "in-hero" : ""} ${inLivestream ? "in-livestream" : ""}`

  return (
    <div id="subscribe" className={`${setClasses()}`}>
      <div>
        <h1>get updates</h1>
        <MailchimpForm />
      </div>
      {inLivestream && <Footer />}
    </div>
  )
}

export default Subscribe
