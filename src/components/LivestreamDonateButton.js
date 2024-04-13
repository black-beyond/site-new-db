import React, { useState } from 'react'

function LivestreamDonateButton() {

  const [popupOpen, setPopupOpen] = useState(false)

  const openDonatePopup = () => {
    setPopupOpen(true)
  }

  const closeDonatePopup = () => {
    setPopupOpen(false)
  }

  return (
    <React.Fragment>
      <button
        id="donate-button"
        onClick={openDonatePopup}
      >
        DONATE
    </button>
      <div
        id="donate-popup"
        className={popupOpen && "open"}
        onClick={closeDonatePopup}
      >
        <div id="donate-popup-modal">
          <button id="popup-close-button" onClick={closeDonatePopup}/>
          <h3>support black beyond</h3>
          <div id="donation-links">
            <a href="https://www.nyfa.org/#button=44904" target="__blank" onClick={closeDonatePopup}>NYFA</a>
            <a href="https://www.nyfa.org/#button=44904" target="__blank" onClick={closeDonatePopup}>PAYPAL</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LivestreamDonateButton
