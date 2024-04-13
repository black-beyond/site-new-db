import React from 'react'

/* STATIC ASSETS */
import blank from '../assets/blank.png'

function PayPalDonationButton({ location }) {
  return (
    <form
      id="paypal-donation-button"
      className={
        location === "footer" ? "footer-link" : 
        location === "header" ? "header-link" : 
        ""
      } 
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input
        type="hidden"
        name="cmd"
        value="_s-xclick"
      />
      <input
        type="hidden"
        name="hosted_button_id"
        value="AS5NRMLKHD8SC"
      />
      <input
        type="image"
        src={blank}
        id="donate-button"
        className={
          location === "footer" ? "footer-link" : 
          location === "header" ? "header-link" : 
          ""
        } 
        border="0"
        value="donate"
        name="submit"
        title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button"
        formTarget="_blank"
      />
      {location === "footer" && <p>donate</p>}
    </form>
  )
}

export default PayPalDonationButton