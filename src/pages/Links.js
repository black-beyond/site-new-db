import React, { useContext } from 'react'
import { PageData } from '../app-data'

function LinkItem({ data }) {
  return (
    <div className="link-item">
      <a 
      href={data.URL}
      target="_blank"
      rel="noopener noreferrer"
      >
      {data.LinkText}
      </a>
    </div>
  )
}

function Links() {

  const { state } = useContext(PageData)

  return (
    <div id="link-tree">
      {
        state.links &&
        state.links.map(link =>
          <LinkItem key={link.text} data={link.fields} />
        )
      }
    </div>
  )
}

export default Links
