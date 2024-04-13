import React, { useContext } from 'react'
import { PageData } from '../app-data'
import NavLink from './NavLink'

function Footer({ gradient = false }) {

  const { state } = useContext(PageData)
  const { siteNavigation: nav } = state;

  return (
    <footer
      className={gradient ? "gradient" : ""}
    >
      <nav>
        {
          nav &&
          nav
            .filter(item => item.FooterNav)
            .map(item => ({...item, Highlighted: false}))
            .map(data =>
              <NavLink key={data.LinkName} data={data} />
            )
        }
      </nav>
    </footer>
  )
}

export default Footer

// <footer className={gradient ? "gradient" : ""}>
// <nav>
//   <a href="https://blackbeyond.myshopify.com/" target="_blank" rel="noopener noreferrer">shop</a>
//   <Link to="/about">about</Link>
//   {/* <Link to="/archive">archive</Link> */}
//   <PaypalDonationButton location="footer" />
//   <Link to="/credits">site credits</Link>
//   <a href="https://instagram.com/blackbeyond_/" target="_blank" rel="noopener noreferrer">instagram</a>
//   <a href="https://twitter.com/blackbeyond_/" target="_blank" rel="noopener noreferrer">twitter</a>
// </nav>
// </footer>