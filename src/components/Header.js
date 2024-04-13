import React, { useState, useContext } from 'react'
import NavLink from './NavLink'
import { PageData } from '../app-data'
import useScroll from '../hooks/useScroll'

function Header() {
  const { state } = useContext(PageData)
  const { siteNavigation: nav } = state
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const { scrollPosition, scrollDirection } = useScroll()

  function toggleMobileNav() {
    setMobileNavOpen(prev => !prev)
  }

  return (
    <header
      className={
        scrollDirection === "down" &&
          scrollPosition > window.innerHeight / 4 &&
          !mobileNavOpen ?
          "hidden" :
          ""
      }
    >
      <div id="header-content">
        <button
          id="mobile-nav-button"
          className={mobileNavOpen ? "close-button" : ""}
          onClick={toggleMobileNav}
        />
        <div id="mobile-nav" className={mobileNavOpen ? "open" : ""}>
          {
            nav &&
            nav
              .filter(item => item.MobileNav === "TRUE" && item.Highlighted === "FALSE")
              .map(data =>
                <NavLink key={data.LinkName} data={data} />
              )
          }
          <div id="mobile-nav-cta" className="mobile-nav-cta">
            {
              nav &&
              nav
                .filter(item => item.MobileNav === "TRUE" && item.Highlighted === "TRUE")
                .map(data =>
                  <NavLink key={data.LinkName} data={data} />
                )
            }
          </div>
        </div>
        <div id="desktop-nav">
          <section>
            {
              nav &&
              nav
                .filter(item => item.DesktopNav === "TRUE" && item.DesktopPosition === "Left")
                .map(data => <NavLink key={data.LinkName} data={data} />)
            }
          </section>
          <section>
            {
              nav &&
              nav
                .filter(item => item.DesktopNav === "TRUE" && item.DesktopPosition === "Right")
                .map(data => <NavLink key={data.LinkName} data={data} />)
            }
          </section>
        </div>
      </div>
    </header>
  )
}

export default Header