import React from 'react'
import {Link} from 'react-router-dom'

function NavLink({ data }) {
  return (
    <React.Fragment>
      {
        data.URL && data.URL[0] === "/" ?
          <Link
            to={data.URL}
            className={data.Highlighted ? "highlight" : "nav-link"}
          >
            {data.LinkName}
          </Link> :
          <a
            href={data.URL}
            className={data.Highlighted ? "highlight" : "nav-link"}
            target="__blank"
          >
            {data.LinkName}
          </a>
      }
    </React.Fragment>
  )
}

export default NavLink
