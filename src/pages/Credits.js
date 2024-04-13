import React, { useEffect, useContext } from 'react'
import { PageData } from '../app-data'

/*** COMPONENTS ***/
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'

function Credits() {
  const { state } = useContext(PageData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div id="credits">
      <BackButton />
      <div>
        {
          state.credits.length > 0 && state.credits.map((block) => {
            return (
              <div key={block.title} className="role-block">
                <h4>{block.title}</h4>
                {block.people.map(({name, website}) => (<p><a href={website} target="_blank" rel="noopener noreferrer">{name}</a></p>))}
              </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export default Credits
