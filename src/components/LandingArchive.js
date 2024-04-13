import React, { useContext } from 'react'
import { PageData } from '../app-data'
import { Link } from 'react-router-dom'
import LandingArchiveItem from './LandingArchiveItem'


function LandingArchive() {
  const { state } = useContext(PageData)
  const NUM_ITEMS = 4 //cap number of archive items shown

  return (
    <div id="landing-archive">
      <h1 className="archive-title">archive</h1>
      <div className="landing-archive-container">
        {
          state.archive &&
          state.archive.slice(0, NUM_ITEMS).map(data =>
            <LandingArchiveItem
              data={data}
              key={data.Artist}
            />
          )
        }
        <Link
          className="archive-btn archive-see-more"
          to="/archive"
        >
          SEE MORE
        </Link>
      </div>
    </div>
  )
}

export default LandingArchive