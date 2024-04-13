import React, { useContext } from 'react'
import closeIcon from '../assets/close-icon.svg'
import { PageData } from '../app-data'

function ShopPopup() {

  const { state, dispatch } = useContext(PageData)

  function closePopup(event, noLink) {
    if (noLink) event.preventDefault()
    dispatch({ type: "close-popup" })
  }

  return (
    <React.Fragment>
      {
        !state.popupClosed &&
        <a id="shop-popup" href="https://blackbeyond.myshopify.com/" target="_blank" rel="noopener noreferrer" onClick={closePopup}>
          <div id="popup-container">
            <button id="close-button" onClick={(e) => closePopup(e, true)}>
              <img src={closeIcon} alt="press this button to close the popup" />
            </button>
            <p>SHOP BLACK BEYOND</p>
          </div>
        </a>
      }
    </React.Fragment>
  )
}

export default ShopPopup
