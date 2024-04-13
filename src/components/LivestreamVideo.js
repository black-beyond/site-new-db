import React, { useContext } from 'react'
import { PageData } from '../app-data'
import TwitchEmbedVideo from 'react-twitch-embed-video'

function LivestreamVideo() {

  const { state } = useContext(PageData) 


  return (
    <div id="livestream-video">
    {
      state.stream.source === "Twitch" ?
      <TwitchEmbedVideo layout="video" channel="blackbeyond_" height="auto" width="100%" /> :
      state.stream.source === "YouTube" ?
      <iframe title="Black Beyond Stream" src={state.stream.url} frameBorder="0" allow="accelerometer; autoplay; muted; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> :
      <div>STREAM OFFLINE</div>
    }


    </div>
  )
}

export default LivestreamVideo
