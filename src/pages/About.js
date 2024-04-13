import React, {useEffect, useContext} from 'react'
import {PageData} from '../app-data'
import ReactMarkdown from 'react-markdown';

/*** COMPONENTS ***/
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'


function About() {
  const {state} = useContext(PageData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div id="about">
      <BackButton />
      <div>
        <h4>about black beyond</h4>
        <ReactMarkdown children={state.about.copy} />
      </div>
      <Footer />
    </div>
  )
}

export default About
