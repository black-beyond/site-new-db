import React, { useEffect, useContext } from 'react'
import { PageData } from '../app-data'
import ReactMarkdown from "react-markdown";

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
              <div key={block.id} className="role-block">
                <h4>{block.fields.Role}</h4>
                <ReactMarkdown source={block.fields.People} linkTarget={"_blank"} />
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
